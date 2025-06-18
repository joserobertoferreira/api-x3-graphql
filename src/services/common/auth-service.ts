import { ApolloServerErrorCode } from '@apollo/server/errors';
import { Request, Response } from 'express';
import { GraphQLError } from 'graphql';
import { StatusCodes } from 'http-status-codes';
import prisma from '../database/config';
import { env } from '../database/env';
import { ForgotPasswordInput, LoginInput, RegisterInput, ResetPasswordInput } from '../graphql/inputs/auth-input';
import { AuthPayload, LoginPayload } from '../graphql/types/auth-type';
import { UserLoginType, UserType } from '../graphql/types/user-type';
import { clearRefreshTokenCookie, getRefreshTokenFromCookie, setRefreshTokenCookie } from '../utils/cookie-helper';
import { hashPassword, verifyPassword } from '../utils/password-helper';
import {
  generateAccessToken,
  generatePasswordResetToken,
  generateRefreshToken,
  verifyPasswordResetToken,
  verifyRefreshToken,
} from './token-service';
import { createUser, findUserByEmail, findUserById, findUserByUsername } from './user-service';

interface RegisterInputArgs {
  input: RegisterInput;
}

interface LoginInputArgs {
  input: LoginInput;
}

interface ResetPasswordInputArgs {
  input: ResetPasswordInput;
}

interface ForgotPasswordArgs {
  email: ForgotPasswordInput;
}

export const registerUser = async (args: RegisterInputArgs, res: Response): Promise<AuthPayload> => {
  const { username, password, email } = args.input;

  if (!username || !password) {
    throw new GraphQLError('Username and password are required.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }
  // Adicionar validação de formato de email e força de senha aqui

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new GraphQLError('This email cannot be used.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }

  const existingUserByUsername = await findUserByUsername(username);
  if (existingUserByUsername) {
    throw new GraphQLError('This username cannot be used.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }

  const user = await createUser({ username, password, email });

  const accessToken = generateAccessToken(user);
  const refreshToken = await generateRefreshToken(user); // Já salva no DB
  setRefreshTokenCookie(res, refreshToken);

  const userReturn: UserType = {
    id: String(user.id),
    username: user.username,
    email: user.email ?? '',
    dateJoined: user.dateJoined,
  };

  return { accessToken, user: userReturn };
};

export const loginUser = async (args: LoginInputArgs, res: Response): Promise<LoginPayload> => {
  const { username, password } = args.input;

  const user = await findUserByUsername(username);
  if (!user) {
    throw new GraphQLError('Invalid credentials.', { extensions: { code: StatusCodes.UNAUTHORIZED } });
  }

  const isValidPassword = await verifyPassword(user.password, password);
  if (!isValidPassword) {
    throw new GraphQLError('Invalid credentials.', { extensions: { code: StatusCodes.UNAUTHORIZED } });
  }

  // Atualizar o último login do usuário
  const now = new Date();
  let updateUser: typeof user;

  try {
    updateUser = await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: now },
    });
  } catch (error) {
    console.error('Erro ao atualizar o último login do utilizador:', error);
    updateUser = user; // Fallback para o usuário original
  }

  // Revogar tokens de refresh antigos para este user
  await prisma.refreshToken.updateMany({
    where: { userId: user.id, revoked: false },
    data: { revoked: true },
  });

  const accessToken = generateAccessToken(user);
  const refreshToken = await generateRefreshToken(user); // Cria um novo e salva no DB
  setRefreshTokenCookie(res, refreshToken);

  const userReturn: UserLoginType = {
    username: updateUser.username,
    email: updateUser.email ?? '',
    lastLogin: updateUser.lastLogin ?? now,
  };

  return { accessToken, user: userReturn };
};

export const logoutUser = async (req: Request, res: Response): Promise<boolean> => {
  const refreshTokenFromCookie = getRefreshTokenFromCookie(req);
  if (refreshTokenFromCookie) {
    const payload = verifyRefreshToken(refreshTokenFromCookie);
    if (payload) {
      // Invalidar o token no banco de dados
      await prisma.refreshToken.updateMany({
        where: { userId: BigInt(payload.userId), token: refreshTokenFromCookie, revoked: false },
        data: { revoked: true },
      });
    }
  }
  clearRefreshTokenCookie(res);
  return true;
};

export const refreshUserToken = async (req: Request, res: Response) => {
  const refreshTokenFromCookie = getRefreshTokenFromCookie(req);
  if (!refreshTokenFromCookie) {
    throw new GraphQLError('Refresh token not found.', { extensions: { code: StatusCodes.UNAUTHORIZED } });
  }

  const payload = verifyRefreshToken(refreshTokenFromCookie);
  if (!payload) {
    clearRefreshTokenCookie(res); // Token inválido ou expirado, limpa
    throw new GraphQLError('Invalid or expired refresh token.', { extensions: { code: StatusCodes.UNAUTHORIZED } });
  }

  // Verificar se o token existe no banco de dados e não foi revogado
  const dbToken = await prisma.refreshToken.findUnique({
    where: { token: refreshTokenFromCookie }, // ou por id: payload.tokenId
  });

  if (!dbToken || dbToken.revoked || new Date() > dbToken.expiresAt) {
    clearRefreshTokenCookie(res);
    // Potencial tentativa de reuso de token roubado/revogado.
    // Pode ser interessante invalidar todos os refresh tokens do usuário aqui.
    if (dbToken) {
      await prisma.refreshToken.updateMany({
        where: { userId: dbToken.userId, revoked: false },
        data: { revoked: true },
      });
    }
    throw new GraphQLError('Invalid, expired, or revoked refresh token.', {
      extensions: { code: StatusCodes.UNAUTHORIZED },
    });
  }

  const user = await findUserById(BigInt(payload.userId));
  if (!user) {
    clearRefreshTokenCookie(res);
    throw new GraphQLError('User not found.', { extensions: { code: StatusCodes.NOT_FOUND } });
  }

  // Rotação de Refresh Token (mais seguro)
  // 1. Revogar o token atual
  await prisma.refreshToken.update({
    where: { id: dbToken.id },
    data: { revoked: true },
  });

  // 2. Gerar um novo refresh token
  const newRefreshToken = await generateRefreshToken(user);
  setRefreshTokenCookie(res, newRefreshToken);
  // Fim da rotação opcional

  const newAccessToken = generateAccessToken(user);
  return { accessToken: newAccessToken, user };
};

export const forgotPasswordFlow = async (args: ForgotPasswordArgs): Promise<boolean> => {
  const { email } = args;
  const user = await findUserByEmail(email.email);

  if (!user) {
    // Não revele se o email existe ou não por segurança
    // Apenas retorne true e não faça nada se o email não existir
    console.warn(`Tentativa de reset de password para email não existente: ${email}`);
    return true;
  }

  const resetToken = generatePasswordResetToken(user);
  const expires = new Date(Date.now() + env.PASSWORD_RESET_TOKEN_EXPIRATION * 1000); // ex: 1h

  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordResetToken: resetToken,
      passwordResetExpires: expires,
    },
  });

  console.log(`Password reset token para ${user.email}: ${resetToken}`); // Para debug
  // Em produção, nunca logar o token.

  return true;
};

export const resetPasswordFlow = async (args: ResetPasswordInputArgs): Promise<boolean> => {
  const { token, newPassword } = args.input;

  if (!token || !newPassword) {
    throw new GraphQLError('Token and new password are required.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }

  const payload = verifyPasswordResetToken(token);
  if (!payload) {
    throw new GraphQLError('Reset Token expired or invalid.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      id: BigInt(payload.userId),
      passwordResetToken: token,
      passwordResetExpires: { gt: new Date() }, // gt = greater than (não expirado)
    },
  });

  if (!user) {
    throw new GraphQLError('Reset Token invalid, expired or already used.', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });
  }

  const hashedNewPassword = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedNewPassword,
      passwordResetToken: null, // Invalida o token
      passwordResetExpires: null,
    },
  });

  // Revogar todos os refresh tokens ativos do usuário após reset de senha
  await prisma.refreshToken.updateMany({
    where: { userId: user.id, revoked: false },
    data: { revoked: true },
  });

  return true;
};

import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import prisma from '../database/config';
import { env } from '../database/env';

export interface AccessTokenPayload {
  userId: string;
  email: string;
  // Add other relevant, non-sensitive user details
}

export interface RefreshTokenPayload {
  userId: string;
  tokenId: string; // ID do token no banco de dados
}

export interface PasswordResetTokenPayload {
  userId: string;
  email: string; // Para verificar se o token pertence ao email correto
}

export const generateAccessToken = (user: User): string => {
  const payload: AccessTokenPayload = {
    userId: user.id.toString(),
    email: user.email ?? '',
  };

  return jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
    expiresIn: env.ACCESS_TOKEN_EXPIRATION, // Ensure it's a number
  });
};

export const generateRefreshToken = async (user: User): Promise<string> => {
  // Cria o registro do token no banco primeiro
  const dbRefreshToken = await prisma.refreshToken.create({
    data: {
      userId: user.id,
      // O token JWT será gerado com o ID deste registro
      // ExpiresAt precisa ser configurado aqui também, para consistência.
      // Usaremos o tokenId no payload JWT para buscar este registro.
      expiresAt: new Date(Date.now() + env.REFRESH_TOKEN_EXPIRATION * 1000), // Converte para milissegundos
      token: 'placeholder', // Será atualizado após gerar o JWT
    },
  });

  const payload: RefreshTokenPayload = {
    userId: user.id.toString(),
    tokenId: dbRefreshToken.id.toString(), // ID do token no banco de dados
  };

  const token = jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRATION,
  });

  // Atualiza o registro no DB com o token gerado
  await prisma.refreshToken.update({
    where: { id: dbRefreshToken.id },
    data: { token: token }, // Ou um hash do token se preferir
  });

  return token;
};

export const verifyAccessToken = (token: string): AccessTokenPayload | null => {
  try {
    return jwt.verify(token, env.ACCESS_TOKEN_SECRET) as AccessTokenPayload;
  } catch (error) {
    console.error('Error verifying access token:', error); // Bom para debugging
    return null;
  }
};

export const verifyRefreshToken = (token: string): RefreshTokenPayload | null => {
  try {
    return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as RefreshTokenPayload;
  } catch (error) {
    console.error('Error verifying refresh token:', error);
    return null;
  }
};

export const generatePasswordResetToken = (user: User): string => {
  const payload: PasswordResetTokenPayload = {
    userId: user.id.toString(),
    email: user.email ?? '',
  };

  return jwt.sign(payload, env.PASSWORD_RESET_TOKEN_SECRET, {
    expiresIn: env.PASSWORD_RESET_TOKEN_EXPIRATION,
  });
};

export const verifyPasswordResetToken = (token: string): PasswordResetTokenPayload | null => {
  try {
    return jwt.verify(token, env.PASSWORD_RESET_TOKEN_SECRET) as PasswordResetTokenPayload;
  } catch (error) {
    console.error('Error verifying password reset token:', error);
    return null;
  }
};

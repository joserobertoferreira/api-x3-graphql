import { Prisma, User } from '@prisma/client';
import prisma from '../database/config';
import { hashPassword } from '../utils/password-helper';

export const createUser = async (data: Prisma.UserCreateInput): Promise<User> => {
  const hashedPassword = await hashPassword(data.password);
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } });
};

export const findUserById = async (id: bigint): Promise<User | null> => {
  return prisma.user.findUnique({ where: { id } });
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { username } });
};

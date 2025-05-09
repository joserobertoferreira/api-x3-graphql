import { ExpressContextFunctionArgument } from '@apollo/server/express4';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import prisma from '../database/config';
import { verifyAccessToken } from '../services/token-service';

export interface ApolloContext {
  req: Request;
  res: Response;
  user?: User; // Utilizador autenticado, se houver
  db: typeof prisma; // Para acesso ao Prisma nos resolvers
}

export const getContext = async ({ req, res }: ExpressContextFunctionArgument): Promise<ApolloContext> => {
  const baseContext: Omit<ApolloContext, 'user'> = {
    req: req,
    res: res,
    db: prisma, // Disponibiliza o Prisma no contexto
  };

  let userContext: Partial<ApolloContext> = {};

  const authHeader = req.headers.authorization;

  if (authHeader) {
    const parts = authHeader.split('Bearer ');
    if (parts.length === 2) {
      const token = parts[1];
      if (token) {
        const payload = verifyAccessToken(token); // Supondo que retorne AccessTokenPayload ou null
        if (payload && payload.userId) {
          // Verifique se payload e userId existem
          try {
            const user = await prisma.user.findUnique({
              where: { id: BigInt(payload.userId) },
            });
            if (user) {
              userContext.user = user;
            }
          } catch (error) {
            console.error('Erro ao buscar utilizador no contexto:', error);
            // Não quebre a requisição, apenas o utilizador não será autenticado
          }
        }
      }
    }
  }

  return { ...baseContext, ...userContext } as ApolloContext;
};

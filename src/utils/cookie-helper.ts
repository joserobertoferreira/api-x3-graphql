import { Response } from 'express';
import { env } from '../database/env';

const REFRESH_TOKEN_COOKIE_NAME = 'jid'; // jid = JWT ID

export const setRefreshTokenCookie = (res: Response, token: string) => {
  const expires = new Date(Date.now() + env.REFRESH_TOKEN_EXPIRATION * 1000);

  res.cookie(REFRESH_TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production', // true em produção (HTTPS)
    sameSite: 'lax', // ou 'strict' dependendo da necessidade
    path: '/graphql', // Escopo do cookie para o endpoint de refresh token
    expires,
  });
};

export const clearRefreshTokenCookie = (res: Response) => {
  res.cookie(REFRESH_TOKEN_COOKIE_NAME, '', {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/graphql',
    expires: new Date(0), // Expira imediatamente
  });
};

export const getRefreshTokenFromCookie = (req: any): string | undefined => {
  return req.cookies?.[REFRESH_TOKEN_COOKIE_NAME];
};

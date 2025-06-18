import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cookieParser from 'cookie-parser';
import express from 'express';
import { GraphQLDate, GraphQLDateTime } from 'graphql-scalars';
import http from 'node:http';
import { buildSchema } from 'type-graphql';
import { env } from './database/env';
import { SystemResolvers } from './graphql/resolvers';
import { ApolloContext, getContext } from './middleware/context-middleware';

export async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  // 1. Cria a instância do ApolloServer
  const server = new ApolloServer<ApolloContext>({
    schema: await buildSchema({
      resolvers: SystemResolvers,
      validate: true, // Habilita validação automática com class-validator
      scalarsMap: [
        { type: Date, scalar: GraphQLDate },
        { type: Date, scalar: GraphQLDateTime },
      ],
      // emitSchemaFile: {
      //   path: path.resolve(__dirname, '..', 'schema.gql'),
      // },
    }),
    introspection: env.NODE_ENV !== 'production',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      // Outros plugins podem ser adicionados aqui
    ],
  });

  // 2. Inicie o servidor Apollo (obrigatório antes de aplicar middleware)
  await server.start();

  // 3. Aplique middlewares ao Express *antes* do Apollo middleware
  app.use(cookieParser());

  // 4. Aplique o middleware do Apollo Server ao path desejado
  app.use(
    '/graphql', // endpoint GraphQL
    express.json(), // Necessário para parsear o corpo da requisição como JSON
    expressMiddleware(server, {
      context: getContext,
    }),
  );

  return { app, httpServer, server };
}

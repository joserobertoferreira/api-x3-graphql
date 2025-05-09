import 'dotenv/config';
import 'reflect-metadata';
import prisma from './database/config';
import { env } from './database/env';
import { startApolloServer } from './server';

async function main() {
  try {
    await prisma.$connect();
    console.log('🔌 Connected to database');

    const { httpServer, server } = await startApolloServer(); // 'server' é a instância do ApolloServer
    const PORT = env.PORT;

    await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  } catch (error) {
    console.error('💥 Failed to start server or connect to database:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();

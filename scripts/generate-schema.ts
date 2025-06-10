import path from 'node:path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { SystemResolvers } from '../src/graphql/resolvers';

async function generateSchema() {
  try {
    const schemaPath = path.resolve(__dirname, '..', 'schema.gql');

    console.log(`Gerando schema em: ${schemaPath}`);

    await buildSchema({
      resolvers: SystemResolvers,
      validate: false,
      // Aponte para o local correto a partir de `src/scripts`
      emitSchemaFile: {
        path: schemaPath,
      },
    });

    console.log('✅ Schema gerado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao gerar o schema:', error);
    process.exit(1);
  }
}

generateSchema();

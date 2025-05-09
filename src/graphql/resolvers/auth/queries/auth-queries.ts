import { Ctx, Query, Resolver } from 'type-graphql';
import { ApolloContext } from '../../../../middleware/auth-middleware';
import { UserType } from '../../../types/user-type';

@Resolver()
export class AuthQueries {
  // @Authorized()
  @Query(() => UserType, { nullable: true })
  async me(@Ctx() context: ApolloContext): Promise<UserType | null> {
    // 1. Verificar se o usuário está no contexto
    //    (isso depende de como seu auth-middleware popula o contexto)
    if (!context.user) {
      // Se Authorized() não for usado, você pode lançar um erro aqui ou retornar null
      // throw new Error('Not authenticated');
      return null;
    }

    // 2. O context.user deve conter as informações do usuário
    //    Se ele já tiver o formato de UserType, você pode retorná-lo diretamente.
    //    Se context.user for apenas o ID, você precisará buscar o usuário no banco de dados.
    // Exemplo: se context.user é o objeto completo do usuário:
    // return context.user;

    // Exemplo: se context.user contém apenas o ID e você precisa buscar no DB:
    const userId = context.user.id; // Supondo que context.user tem um 'id'

    // Supondo que você tem o prisma client no contexto ou o importa diretamente
    // const userFromDb = await context.prisma.user.findUnique({ where: { id: userId } });
    // Se você importar o prisma client diretamente:
    // import prisma from '../../../database/config';
    // const userFromDb = await prisma.user.findUnique({ where: { id: userId } });

    // if (!userFromDb) {
    //   // Isso seria estranho se o token JWT é válido mas o usuário não existe mais
    //   return null;
    // }

    // Mapeie os dados do banco para o seu UserType se necessário
    // return {
    //   id: userFromDb.id,
    //   email: userFromDb.email,
    //   name: userFromDb.name,
    //   // ... outros campos
    // };

    // PARA ESTE EXEMPLO, VAMOS ASSUMIR QUE context.user JÁ TEM OS DADOS NECESSÁRIOS
    // E CORRESPONDE À ESTRUTURA DE UserType ou pode ser facilmente adaptado.
    // Se context.user é, por exemplo, { id: '123', email: 'test@example.com', role: 'USER' }
    // e UserType tem id e email, você pode fazer:
    return {
      id: context.user.id,
      email: context.user.email || '',
      username: context.user.username,
      dateJoined: context.user.dateJoined,
    };
  }
}

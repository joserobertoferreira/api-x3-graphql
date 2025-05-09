import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { ApolloContext } from '../../../../middleware/auth-middleware';
import { loginUser, logoutUser, refreshUserToken, registerUser } from '../../../../services/auth-service';
import { LoginInput, RegisterInput } from '../../../inputs/auth-input';
import { AuthPayload, LoginPayload } from '../../../types/auth-type';
import { UserType } from '../../../types/user-type';

@Resolver()
export class AuthMutations {
  @Mutation(() => AuthPayload)
  async register(
    @Arg('input', () => RegisterInput) input: RegisterInput,
    @Ctx() context: ApolloContext,
  ): Promise<AuthPayload> {
    const result = await registerUser({ input }, context.res);
    return result;
  }

  @Mutation(() => LoginPayload)
  async login(@Arg('input', () => LoginInput) input: LoginInput, @Ctx() context: ApolloContext): Promise<LoginPayload> {
    const result = await loginUser({ input }, context.res);
    return result;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: ApolloContext): Promise<boolean> {
    return logoutUser(req, res);
  }

  @Mutation(() => AuthPayload, {
    description: 'Gera um novo access token usando o refresh token (via cookie HTTP-only).',
  })
  async refreshToken(@Ctx() { req, res }: ApolloContext): Promise<AuthPayload> {
    const { accessToken, user: prismaUser } = await refreshUserToken(req, res);

    const userPayload: UserType = {
      id: String(prismaUser.id),
      username: prismaUser.username,
      email: prismaUser.email ?? undefined,
      dateJoined: prismaUser.dateJoined,
    };

    return { accessToken, user: userPayload };
  }
}

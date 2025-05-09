import { NonEmptyArray } from 'type-graphql';
import { AuthMutations } from './mutations/auth-mutations';
import { AuthQueries } from './queries/auth-queries';

export const AuthResolvers: NonEmptyArray<typeof AuthMutations | typeof AuthQueries> = [AuthMutations, AuthQueries];

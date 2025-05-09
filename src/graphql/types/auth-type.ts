import { Field, ObjectType } from 'type-graphql';
import { UserLoginType, UserType } from './user-type';

@ObjectType()
export class AuthPayload {
  @Field()
  accessToken!: string;

  @Field(() => UserType)
  user!: UserType;
}

@ObjectType()
export class LoginPayload {
  @Field()
  accessToken!: string;

  @Field(() => UserLoginType)
  user!: UserLoginType;
}

import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id!: string;

  @Field()
  username!: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  dateJoined!: Date;
}

@ObjectType()
export class UserLoginType {
  @Field()
  username!: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  lastLogin!: Date;
}

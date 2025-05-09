import { IsEmail, IsStrongPassword, Length, MinLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
  @Field()
  @Length(3, 50, { message: 'The username must be between 3 and 50 characters long.' })
  username!: string;

  @Field()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email!: string;

  @Field()
  @Length(8, 50, { message: 'The password must be between 8 and 50 characters long.' })
  password!: string;
}

@InputType()
export class LoginInput {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@InputType()
export class ForgotPasswordInput {
  @Field()
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email!: string;
}

@InputType()
export class ResetPasswordInput {
  @Field()
  token!: string;

  @Field()
  @MinLength(8, { message: 'The password must have at least 8 characters long.' })
  @IsStrongPassword(
    { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 },
    {
      message:
        'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    },
  )
  newPassword!: string;
}

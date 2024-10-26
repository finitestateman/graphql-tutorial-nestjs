import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CreateUserSettingsInput {
    @Field((type) => Int)
    userId: number;

    @Field({ nullable: true, defaultValue: true })
    receiveEmails: boolean;

    @Field({ nullable: true, defaultValue: true })
    receiveNotifications: boolean;

    @Field({ nullable: true, defaultValue: 'en' })
    language: string;

    @Field({ nullable: true, defaultValue: 'UTC' })
    timezone: string;

    @Field({ nullable: true, defaultValue: false })
    darkMode: boolean;

}
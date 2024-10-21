import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class userSetting {
    @Field((type) => Int)
        userId: number;

    @Field({ defaultValue: false })
        receiveNotifications: boolean;

    @Field({ defaultValue: false })
        receiveEmails: boolean;

    @Field({ defaultValue: 'en' })
        language: string;

    @Field({ nullable: true })
        timezone?: string;

    @Field({ defaultValue: false })
        darkMode: boolean;
}

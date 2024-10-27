import { PrimaryColumn, Column, Entity } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {

    @PrimaryColumn()
    @Field((type) => Int)
        userId: number;

    @Column({ default: false })
    @Field({ defaultValue: false })
        receiveNotifications: boolean;

    @Column({ default: false })
    @Field({ defaultValue: false })
        receiveEmails: boolean;

    @Column({ default: 'en' })
    @Field({ defaultValue: 'en' })
        language: string;

    @Column({ nullable: true })
    @Field({ nullable: true })
        timezone?: string;

    @Column({ default: false })
    @Field({ defaultValue: false })
        darkMode: boolean;
}

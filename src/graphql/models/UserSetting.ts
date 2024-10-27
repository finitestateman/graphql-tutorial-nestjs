import { PrimaryColumn, Column, Entity } from 'typeorm'
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {

    @PrimaryColumn()
    @Field((type) => Int)
        userId: number;

    @Column()
    @Field({ defaultValue: false })
        receiveNotifications: boolean;

    @Column()
    @Field({ defaultValue: false })
        receiveEmails: boolean;

    @Column()
    @Field({ defaultValue: 'en' })
        language: string;

    @Field({ nullable: true })
    @Column()
        timezone?: string;

    @Column()
    @Field({ defaultValue: false })
        darkMode: boolean;
}

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UserSetting } from './UserSetting';

@Entity({ name: 'users'})
@ObjectType()
export class User {

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
        id: number;

    @Column()
    @Field()
        username: string;

    @Column()
    @Field({ nullable: true })
        displayName?: string;

    @OneToOne(() => UserSetting)
    @JoinColumn()
    @Field({ nullable: true })
        settings?: UserSetting;
}

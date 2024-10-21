import { Field, Int, ObjectType } from '@nestjs/graphql';
import { userSetting } from './UserSetting';

@ObjectType()
export class User {
    @Field((type) => Int)
        id: number;
    
    @Field()
        username: string;
    
    @Field({ nullable: true })
        displayName?: string;

    @Field({ nullable: true })
        settings?: userSetting;
}

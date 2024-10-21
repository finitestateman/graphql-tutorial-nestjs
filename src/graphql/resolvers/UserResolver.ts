import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';

@Resolver()
export class UserResolvers {

    @Query((returns) => User, { nullable: true, name: 'getUserById' })
    async getUserById(@Args('id', { type: () => Int}) id: number): Promise<User> {
        return mockUsers.find((user) => user.id === id);
    }
}
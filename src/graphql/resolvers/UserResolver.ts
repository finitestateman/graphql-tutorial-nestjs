import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { User } from '../models/User';

@Resolver()
export class UserResolvers {

    @Query((returns) => User)
    async getUser() {
        return {
            id: 1,
            username: 'john_doe',
            displayName: 'John Doe',
        };
    }
}
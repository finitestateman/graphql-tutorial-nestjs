import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { userSetting } from '../models/UserSetting';
import { mockUserSetings } from 'src/__mocks__/mockUserSettings';

@Resolver((of) => User)
export class UserResolvers {

    @Query((returns) => User, { nullable: true, name: 'getUserById' })
    async getUserById(@Args('id', { type: () => Int}) id: number): Promise<User> {
        return mockUsers.find((user) => user.id === id);
    }

    @Query((returns) => [User], { name: 'getAllUsers' })
    async getUsers(): Promise<User[]> {
        return mockUsers;
    }

    @ResolveField((returns) => userSetting, { nullable: true, name: 'settings' })
    async getUserSettings(@Parent() user: User): Promise<userSetting> {
        return mockUserSetings.find((setting) => setting.userId === user.id);
    }
}
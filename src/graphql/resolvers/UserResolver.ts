import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUserSetings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';

@Resolver((of) => User)
export class UserResolver {

    @Query((returns) => User, { nullable: true, name: 'getUserById' })
    async getUserById(@Args('id', { type: () => Int}) id: number): Promise<User> {
        return mockUsers.find((user) => user.id === id);
    }

    @Query((returns) => [User], { name: 'getAllUsers' })
    async getUsers(): Promise<User[]> {
        return mockUsers;
    }

    @ResolveField((returns) => UserSetting, { nullable: true, name: 'settings' })
    async getUserSettings(@Parent() user: User): Promise<UserSetting> {
        return mockUserSetings.find((setting) => setting.userId === user.id);
    }

    @Mutation((returns) => User, { name: 'createUser' })
    createUser(@Args('createUserData') createUserData: CreateUserInput
    ): User {
        const newUser = {
            id: mockUsers.length + 1,
            ...createUserData
        };
        mockUsers.push(newUser);
        return newUser
    }
}
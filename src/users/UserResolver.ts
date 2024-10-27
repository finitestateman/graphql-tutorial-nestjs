import { Resolver, Query, Args, Int, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../graphql/models/UserSetting';
import { mockUserSetings } from 'src/__mocks__/mockUserSettings';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { Inject } from '@nestjs/common';

@Resolver((of) => User)
export class UserResolver {

    constructor(private readonly userService: UserService) {}


    @Query((returns) => User, { nullable: true, name: 'getUserById' })
    async getUserById(@Args('id', { type: () => Int}) id: number): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Query((returns) => [User], { name: 'getAllUsers' })
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @ResolveField((returns) => UserSetting, { nullable: true, name: 'settings' })
    async getUserSettings(@Parent() user: User): Promise<UserSetting> {
        return mockUserSetings.find((setting) => setting.userId === user.id);
    }

    @Mutation((returns) => User, { name: 'createUser' })
    createUser(@Args('createUserData') createUserData: CreateUserInput
    ): Promise<User> {
        return this.userService.createUsers(createUserData);
    }
}
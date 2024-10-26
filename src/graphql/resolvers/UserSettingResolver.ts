import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { userSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSetings } from 'src/__mocks__/mockUserSettings';

@Resolver()
export class UserSettingResolver {
    @Mutation(returns => userSetting)
    createUserSettings(@Args('createUserSetttingsData') createUserSettingsData: CreateUserSettingsInput) {
        console.log(createUserSettingsData);
        mockUserSetings.push(createUserSettingsData);
        return createUserSettingsData
    }
} 
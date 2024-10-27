import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSetings } from 'src/__mocks__/mockUserSettings';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingResolver {

    constructor(
        private readonly userSettingService: UserSettingService
    ) {}

    @Mutation(returns => UserSetting)
    async createUserSettings(
        @Args('createUserSetttingsData') createUserSettingsData: CreateUserSettingsInput
    ) {
        const userSetting = await this.userSettingService.createUserSettings(createUserSettingsData);
        return userSetting;
    }
}

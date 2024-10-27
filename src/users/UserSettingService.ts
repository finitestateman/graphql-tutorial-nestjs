import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { UserSetting } from 'src/graphql/models/UserSetting';
import { CreateUserSettingsInput } from 'src/graphql/utils/CreateUserSettingsInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
    constructor(
        @InjectRepository(UserSetting)
        private readonly userSettingRepository: Repository<UserSetting>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    getUserSettingById(userId: number): Promise<UserSetting> {
        return this.userSettingRepository.findOneBy( { userId });
    }

    async createUserSettings(createUserSettingsData: CreateUserSettingsInput): Promise<UserSetting> {

        const findUser = await this.userRepository.findOneBy({
            id: createUserSettingsData.userId
        });

        if (!findUser) { throw new NotFoundException('User not found'); }

        const newUserSetting = this.userSettingRepository.create(createUserSettingsData);
        const savedSettings = await this.userSettingRepository.save(newUserSetting);
        findUser.settings = savedSettings;
        await this.userRepository.save(findUser);

        return savedSettings;
    }
}
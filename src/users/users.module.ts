import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { User } from 'src/graphql/models/User';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';
import { UserSettingResolver } from 'src/graphql/resolvers/UserSettingResolver';
import { UserSetting } from 'src/graphql/models/UserSetting';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, UserSetting])
    ],
    providers: [UserResolver, UserService, UserSettingResolver, UserSettingService],
})
export class UserModule {}

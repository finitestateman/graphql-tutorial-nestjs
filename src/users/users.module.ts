import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { User } from 'src/graphql/models/User';
import { UserService } from './UserService';

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    providers: [UserResolver, UserService],
})
export class UserModule {}

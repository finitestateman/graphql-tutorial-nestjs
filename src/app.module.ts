import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './users/UserResolver';
import { UserSettingResolver } from './graphql/resolvers/UserSettingResolver';
import { UserSetting } from './graphql/models/UserSetting';
import { UserModule } from './users/users.module';
import { User } from './graphql/models/User';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'graphql',
            entities: [
                User,
                UserSetting
            ],
            synchronize: true,
        }),
        UserModule
    ],
    controllers: [],
    providers: [UserSettingResolver],
})
export class AppModule {}

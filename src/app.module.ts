import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { UserSettingResolver } from './graphql/resolvers/UserSettingResolver';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';

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
        })
    ],
    controllers: [],
    providers: [UserResolver, UserSettingResolver],
})
export class AppModule {}

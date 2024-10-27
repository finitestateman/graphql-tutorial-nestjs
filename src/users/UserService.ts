import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/graphql/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    getUserById(id: number): Promise<User> {
        return this.userRepository.findOneBy( { id });
    }

    getUsers(): Promise<User[]> {
        const users =  this.userRepository.find();
        return users;
    }

    createUsers(createUserData: CreateUserInput): Promise<User> {
        const newUser = this.userRepository.create(createUserData);
        return this.userRepository.save(newUser);
    }
}
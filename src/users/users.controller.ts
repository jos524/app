import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './database/user.entity';
import { UserDto } from './dtos/user.dto';
import { User } from './interfaces/userInterface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() user: UserDto): Promise<UserEntity> {
        return await this.usersService.create(user);
    }

    @Get()
    async index(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }
}
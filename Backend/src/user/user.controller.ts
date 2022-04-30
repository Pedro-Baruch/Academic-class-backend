import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserService } from './shared/user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.create(body);
  }

  @Get(':id')
  async findUser(@Param('id', new ParseUUIDPipe()) id: string): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, body);
  }
}

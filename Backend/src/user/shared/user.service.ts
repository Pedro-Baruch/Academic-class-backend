import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllUsers() : Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({where: {id: id}});
    if(!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({where: {email: email}});
    return user
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.findUserByEmail(data.email)
    if(user) {
      throw new BadRequestException('Email já existe!')
    }
    
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.findUserById(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    const deleted = await this.userRepository.delete(user);

    if(deleted) {
      return true
    }
    
    return false
  }
}

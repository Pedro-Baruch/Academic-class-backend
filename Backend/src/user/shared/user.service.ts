import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findALL() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    try {
      return await this.userRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(data: CreateUserDto) {
    return await this.userRepository.save(this.userRepository.create(data));
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }

  async deleteById(id: string) {
    const dell = await this.findOne(id);

    await this.userRepository.softDelete(dell);
  }
}

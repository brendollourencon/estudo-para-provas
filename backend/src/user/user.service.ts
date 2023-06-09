import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user: User = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    });

    if (user) throw new HttpException('usuário já cadastrado', 400);
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const userCreated: User = await this.usersRepository.save(createUserDto);

    return new CreateUserDto(userCreated.name, userCreated.email);
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({
      email: email,
    });
  }

  async all() {
    return this.usersRepository.find();
  }
}

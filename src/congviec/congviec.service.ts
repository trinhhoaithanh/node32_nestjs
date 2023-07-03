import { Injectable } from '@nestjs/common';
import { CreateCongviecDto } from './dto/create-congviec.dto';
import { UpdateCongviecDto } from './dto/update-congviec.dto';

@Injectable()
export class CongviecService {
  create(createCongviecDto: CreateCongviecDto) {
    return 'This action adds a new congviec';
  }

  findAll() {
    return `This action returns all congviec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} congviec`;
  }

  update(id: number, updateCongviecDto: UpdateCongviecDto) {
    return `This action updates a #${id} congviec`;
  }

  remove(id: number) {
    return `This action removes a #${id} congviec`;
  }
}

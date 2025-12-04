import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocDto } from './types';
import { Doc } from './doc.entity';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';

@Injectable()
export class DocService {
  constructor(
    @InjectRepository(Doc)
    private readonly docsRepository: Repository<Doc>,
  ) {}

  create(docDto: DocDto): Promise<Doc> {
    const doc = new Doc();
    Object.assign(doc, docDto);
    return this.docsRepository.save(doc);
  }

  async findAll(): Promise<Doc[]> {
    return this.docsRepository.find();
  }

  findOne(id: number): Promise<Doc> {
    return this.docsRepository.findOneBy({ id: id });
  }

 async update(id: number,doc: DocDto): Promise<Doc> {
   const result =  await this.docsRepository.update({ id: id },doc);
   if(result.affected === 0) {
     throw new NotFoundException('Doc not found');
   }
    return this.docsRepository.findOneBy({ id: id });
  }

  async remove(id: string): Promise<void> {
    await this.docsRepository.delete(id);
  }
}

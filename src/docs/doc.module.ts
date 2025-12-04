import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doc } from './doc.entity';
import { DocController } from './doc.controller';
import { DocService } from './doc.service';

@Module({
  imports: [TypeOrmModule.forFeature([Doc])],
  providers: [DocService],
  controllers: [DocController],
})
export class DocModule {}

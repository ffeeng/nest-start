import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { DocDto } from './types';
import { Doc } from './doc.entity';
import { DocService } from './doc.service';

@Controller('docs')
export class DocController {
  constructor(private readonly docService: DocService) {}

  @Post()
  create(@Body() docDto: DocDto): Promise<Doc> {
    return this.docService.create(docDto);
  }

  @Get()
  findAll(): Promise<Doc[]> {
    return this.docService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Doc> {
    return this.docService.findOne(id);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number,@Body() doc: DocDto ): Promise<Doc> {
    return this.docService.update(id,doc);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.docService.remove(id);
  }
}

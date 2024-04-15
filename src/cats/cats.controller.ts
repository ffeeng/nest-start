import { Body, Controller, Get, HttpException, Param, Post, UseFilters, UseGuards } from "@nestjs/common";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";
import { HttpExceptionFilter } from "../common/filters/http-exception.filter";

@UseGuards(RolesGuard)
@Controller("cats")
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Post()
  @Roles(["admin"])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    throw new HttpException("未实现", 403);
    // return this.catsService.findAll();
  }

  @Get(":id")
  @UseFilters(new HttpExceptionFilter())
async  findOne(
    @Param("id", new ParseIntPipe())
      id: number
  ) {
    if(id === 1){
      throw new HttpException('参数id必传',403)
    }

    return {
      name:'feng'
    }
  }
}

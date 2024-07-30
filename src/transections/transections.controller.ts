import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransectionsService } from './transections.service';
import { CreateTransectionDto } from './dto/create-transection.dto';
import { UpdateTransectionDto } from './dto/update-transection.dto';

@Controller('transections')
export class TransectionsController {
  constructor(private readonly transectionsService: TransectionsService) {}

  @Post()
  create(@Body() createTransectionDto: CreateTransectionDto) {
    return this.transectionsService.create(createTransectionDto);
  }

  @Get()
  findAll() {
    return this.transectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transectionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransectionDto: UpdateTransectionDto) {
    return this.transectionsService.update(+id, updateTransectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transectionsService.remove(+id);
  }
}

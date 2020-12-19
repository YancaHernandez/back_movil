import { Controller, Get, Post, Body, Delete, Param, Put, UseFilters } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishesDto as CreateDto,UpdateDishesDto as UpdateDto } from './dishes.dto';


@Controller('Dishes')
export class DichesController {
    constructor(private service: DishesService) {}
    
    @Get()
    findAll() {
      // return "asdas";
      return this.service.findAll();
    }

    @Post()
    async create(@Body() create: CreateDto) {
        return this.service.create(create);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() update: UpdateDto) {
      return this.service.update(id, update);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
    return this.service.delete(id);
    }   
}

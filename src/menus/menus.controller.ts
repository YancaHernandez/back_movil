import { Controller, Get, Post, Body, Delete, Param, Put, UseFilters } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateTableDto as CreateDto,UpdateTableDto as UpdateDto } from './menus.dto';


@Controller('Menus')
export class MenusController {
    constructor(private service: MenusService) {}
    
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

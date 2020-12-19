import { Controller, Get, Post, Body, Delete, Param, Put, UseFilters } from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto as CreateDto,UpdateTableDto as UpdateDto } from './table.dto';


@Controller('Tables')
export class TablesController {
    constructor(private service: TablesService) {}
    
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

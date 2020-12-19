import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table } from '../types/table';
import { CreateTableDto as CreateDto,UpdateTableDto as UpdateDto } from './table.dto';

@Injectable()
export class TablesService {
    constructor(@InjectModel('tables') private model: Model<Table>) {}
    
    async create(createDto: CreateDto){
      const createdTable = new this.model(createDto);
      return createdTable.save();
    }
  
    async findAll(): Promise<Table[]> {
      return this.model.find().exec();
    }

    async findOne(id: string): Promise<Table> {
        return this.model.findById(id);
    }

    async update(id, updateDto: UpdateDto): Promise<Table> {
      return this.model.findByIdAndUpdate(id,updateDto);
    }

    async delete(id: string): Promise<Table> {
        return this.model.findByIdAndDelete(id);
    }
}

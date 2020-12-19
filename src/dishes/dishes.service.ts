import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dishes } from '../types/dishes';
import { CreateDishesDto as CreateDto,UpdateDishesDto as UpdateDto } from './dishes.dto';
@Injectable()
export class DishesService {
    constructor(@InjectModel('Dishes') private model: Model<Dishes>) {}
    
    async create(createDto: CreateDto){
      const createdDishes = new this.model(createDto);
      return createdDishes.save();
    }
  
    async findAll(): Promise<Dishes[]> {
      return this.model.find().exec();
    }

    async findOne(id: string): Promise<Dishes> {
        return this.model.findById(id);
    }

    async update(id, updateDto: UpdateDto): Promise<Dishes> {
      return this.model.findByIdAndUpdate(id,updateDto);
    }

    async delete(id: string): Promise<Dishes> {
        return this.model.findByIdAndDelete(id);
    }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DichesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { DishesSchema } from '../models/dishes';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dishes', schema: DishesSchema }])],
  controllers: [DichesController],
  providers: [DishesService]
})
export class DishesModule {}

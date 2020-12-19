import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { MenusSchema } from '../models/menus.shemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Menus', schema: MenusSchema }])],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}

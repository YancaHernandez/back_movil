import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';
import { TableSchema } from '../models/table.shemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'tables', schema: TableSchema }])],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}

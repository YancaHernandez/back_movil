import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { TablesModule } from './table/tables.module';
import { MenusModule } from './menus/menus.module';
import { DishesModule } from './dishes/dishes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yha:281230yha@salesn-qrs3o.gcp.mongodb.net/restaurant?retryWrites=true&w=majority',{ useFindAndModify: false }),
    AuthModule,
    TablesModule,
    MenusModule,
    DishesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
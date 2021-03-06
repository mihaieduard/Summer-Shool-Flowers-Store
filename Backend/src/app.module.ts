import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from 'ormconfig';
import { Flower } from './flower.entity';
import { User } from './user.entity';

@Module({
  imports: [ TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions), TypeOrmModule.forFeature([Flower, User])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

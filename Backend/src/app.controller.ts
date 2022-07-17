import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { AppService } from './app.service';
import { Flower } from './flower.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('flowers')
  postHello() {
    return this.appService.postHello();
  }

  @Get('flowers')
  getHello()
  {
    return this.appService.getHello();
  }

  @Get('flowers/:id')
  getFlowerById(@Param('id')id:number)
  {
    return this.appService.getFlowerById(id);
  }

  // @Post('user')
  // createUser(@Body() {}){
  //   return '';
  // }

  // @Post('user')
  // login(@Body(){}) {
  //   return this.appService.auth();
  // }

  @Post('user')
  auth(@Body() userInfo)
  {
    return this.appService.auth(userInfo);
  }

}

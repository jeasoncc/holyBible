import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(){
    return {me: "21212"}
  }
  @Get("/m")
  get21(): string {
    return this.appService.get21();
  }
}

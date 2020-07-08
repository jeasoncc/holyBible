import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHome(){
    return null
  }
  @Get("/policy")
  @Render('policy')
  getPolicy(){
    return null
  }

  @Get("/login")
  @Render('login')
  getLogin(){
    return null
  }
  @Get("/register")
  @Render('register')
  getRegister(){
    return null
  }
}

import { Controller ,Get, Render } from '@nestjs/common';
import { CatsService } from './cats.service';
const sqlite3 = require('sqlite3').verbose();
import { open } from 'sqlite'
@Controller()
export class CatsController {

  constructor(private readonly  catsService: CatsService) {}
  @Get('home')
  @Render('home/index')
  async getHome(){
        const row = await this.catsService.getIndex()
        return {bookId: row}
  }

  @Get('home1')
  @Render('home/graph')
  async getHome1(){
        const row = await this.catsService.getIndex()
      console.log(row)
        return {bookId: row}
  }

   @Get('home/book')
   async getBible() {
       const row = await this.catsService.getBook()
       console.log(row)
       return {bookId: row}
    }
}

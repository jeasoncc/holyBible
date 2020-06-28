import { Controller ,Get, Render, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import * as R from "ramda"
@Controller()
export class CatsController {

  constructor(private readonly  catsService: CatsService) {}
  @Get('home')
  @Render('home/index')
  async getHome(){
        const row = await this.catsService.getIndex()
        return {bookId: row}
  }


  @Get('roll')
  @Render('home/chapter')
  getChapter(){
      return null
  }

  @Get('chapter/:chapter/:verse')
  async getChapteVerse(@Param('chapter') chapter, @Param('verse') verse){
        let row = await this.catsService.getBook(verse, chapter)
      row  = row.map(cur => {
          cur.Lection = R.trim(cur.Lection)
          return cur
      })
      console.log({chapter: row, verseSN: verse})
        return {chapter: row, verseSN: verse}
  }
  @Get('bookid')
  async getBookId(){
        const row = await this.catsService.getIndex()
        return {bookId: row}
  }
   @Get('home/book')
   async getBible() {
       const row = await this.catsService.getBook(0,0)
       return {bookId: row}
    }
}

import { Controller ,Get, Render, Param } from '@nestjs/common';
import { BookService } from './book.service';
import * as R from "ramda"
@Controller("bible")
export class BookController {

  constructor(private readonly  bookService: BookService) {}

  @Get('allroll/:newOld')
  @Render('home/book')
  async getAllRoll( @Param('newOld') newOld){
        const row = await this.bookService.getRoll(newOld)
        console.log(row)
        return {bookId: row}
  }

  @Render('home/chapter')
  @Get('chapter/:verse/:chapter')
  async getChapteVerse( @Param('verse') verse, @Param('chapter') chapter){
      let row = await this.bookService.getChapterVerse(verse,chapter) 
      const volume = await this.bookService.getVerseName(verse) 
      console.log(volume)
      row  = row.map(cur => {
          cur.Lection = R.trim(cur.Lection)
          return cur
      })
      return {row,verse,chapter, volume} 
  }


}

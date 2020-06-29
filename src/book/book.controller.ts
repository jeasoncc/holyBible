import { Controller ,Get, Render, Param } from '@nestjs/common';
import { BookService } from './book.service';
import * as R from "ramda"
@Controller("bible")
export class BookController {

  constructor(private readonly  bookService: BookService) {}

  @Get('allroll')
  @Render('home/book')
  async getAllRoll( ){
        const row = await this.bookService.getRoll(0)
        console.log(row)
        return {bookId: row}
  }

  @Render('home/chapter')
  @Get('chapter/:verse/:chapter')
  async getChapteVerse( @Param('verse') verse, @Param('chapter') chapter){
      console.log(chapter)
      console.log(verse)
      let row = await this.bookService.getChapterVerse(verse,chapter) 
      row  = row.map(cur => {
          cur.Lection = R.trim(cur.Lection)
          return cur
      })
      return {row,verse,chapter} 
  }


}

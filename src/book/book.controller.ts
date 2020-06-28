import { Controller ,Get, Render, Param } from '@nestjs/common';
import { BookService } from './book.service';
@Controller('book')
export class BookController {

  constructor(private readonly  bookService: BookService) {}

    @Get('/book')
  @Render('home/book')
  async getGraph( ){
      console.log(123)
        const row = await this.bookService.getRoll()
        return {bookId: row}
  }
}

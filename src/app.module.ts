import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [CatsModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

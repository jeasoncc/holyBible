import { Injectable } from '@nestjs/common';
import {getRoll, getChapterVerse } from '../dao/book'
@Injectable()
export class BookService {

    getRoll = getRoll
    getChapterVerse = getChapterVerse 
}

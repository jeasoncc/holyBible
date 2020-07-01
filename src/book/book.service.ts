import { Injectable } from '@nestjs/common';
import {getRoll, getChapterVerse, getVerseName  } from '../dao/book'
@Injectable()
export class BookService {
    getRoll = getRoll
    getChapterVerse = getChapterVerse 
    getVerseName  = getVerseName  
}

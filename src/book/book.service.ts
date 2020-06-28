import { Injectable } from '@nestjs/common';
import {getRoll} from '../dao/book'
@Injectable()
export class BookService {

    getRoll() {
        return getRoll
    }
}

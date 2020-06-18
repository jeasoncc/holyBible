import { Injectable } from '@nestjs/common';
import { openDb } from "../dao/config"
@Injectable()
export class CatsService {
    getIndex() {
        const res =  openDb().then(db => {
              return db.all('SELECT * FROM bibleID')
         })
        return res
    }
    getBook() {
        const res =  openDb().then(db => {
            return db.all('SELECT * FROM bible where ID < 4')
         })
        return res
    }
}

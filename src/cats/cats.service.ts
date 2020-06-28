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
    getBook(ChapterSN: number , verse: number ) {
        const res =  openDb().then(db => {
            const sql = `SELECT * FROM bible where ChapterSN = ${ChapterSN } AND VolumeSN= ${verse}`
            return db.all(sql)
         })
        return res
    }
}

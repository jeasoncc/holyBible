import { openDb } from "./config"
// @查找所有圣经书卷
export const getRoll = (val)  =>{
    const res =  openDb().then(db => {
        return db.all('SELECT * FROM bibleID WHERE NewOrOld = ' + val)
    })
    return res
}

export const getChapterVerse = (verse: number, chapter: number  ) => {
    const res =  openDb().then(db => {
        const sql = `SELECT * FROM bible where VolumeSN= ${verse} AND ChapterSN = ${chapter}`
        return db.all(sql)
    })
    return res
}

import { openDb } from "./config"
// @查找所有圣经书卷
export const getRoll = ()  =>{
    const res =  openDb().then(db => {
          return db.all('SELECT * FROM bibleID')
     })
    return res
}

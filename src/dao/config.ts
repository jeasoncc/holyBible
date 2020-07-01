const sqlite3 = require('sqlite3').verbose();
import { open } from 'sqlite'
import { join } from 'path';
console.log((join(__dirname, '..', '../src/dao/bible/bible.db')))
// you would have to import / invoke this in another file
export async function openDb () {
  return open({
      filename: join(__dirname,'..', '../src/dao/bible/bible.db'),
      driver: sqlite3.Database
  })
}

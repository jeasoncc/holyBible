const sqlite3 = require('sqlite3').verbose();
import { open } from 'sqlite'

// you would have to import / invoke this in another file
export async function openDb () {
  return open({
      filename: '/home/jeason/project/mygitproject/future/project-name/src/dao/bible/bible.db',
      driver: sqlite3.Database
  })
}

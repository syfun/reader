import { SQLite, FileSystem } from 'expo';

const db = SQLite.openDatabase({ name: 'books.db' });

export const initDB = () => {
  db.transaction(tx => {
    // tx.executeSql('drop table books;')
    // tx.executeSql('drop table chapters;')
    tx.executeSql(
      `create table if not exists books (
        id integer primary key not null,
        bookID text,
        title text,
        image text,
        mix int,
        tocName text,
        tocLink text,
        lastChapter text,
        updated text,
        lastRead text
      );`
    );
    tx.executeSql(
      `create table if not exists chapters (
        id integer primary key not null,
        title text,
        bookID text,
        link text
      );`
    )
    console.log('INITDB')
  });
}

// FileSystem.readDirectoryAsync(FileSystem.documentDirectory + '/SQLite').then(
//   resp => {console.log(resp)}
// )
// FileSystem.deleteAsync(FileSystem.documentDirectory + '/SQLite').then(
//   resp => {console.log(resp)}
// )


export default db;

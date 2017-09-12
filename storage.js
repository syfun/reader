import { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'books.db' });

export const initDB = () => {
  db.transaction(tx => {
    // tx.executeSql('drop table books;')
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
        updated: text
      );`
    );
  });
}


export default db;

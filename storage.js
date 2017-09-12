import { SQLite } from 'expo';

const db = SQLite.openDatabase({ name: 'books.db' });

db.transaction(tx => {
  tx.executeSql('create table if not exists books (id integer primary key not null, title text, image text);');
});

export default db;

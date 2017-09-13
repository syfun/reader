import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';

import db from '../storage';

export default class Book extends React.Component {

  delete = () => {
    const { book, refresh } = this.props;
    db.transaction(tx => {
      tx.executeSql('delete from books where id=?', [book.id], () => { refresh() });
    });
  }

  getChapters = () => {
    const { book } = this.props;
    db.transaction(tx => {
      tx.executeSql('select * from chapters where bookID=?;', [book.bookID], (_, { rows }) => {
        console.log(rows);
    })
  })
}

render() {
  const { book, navigation } = this.props;
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => { navigation.navigate('Detail', { bookID: book.bookID }); }}>
        <Image source={{ uri: book.image }}
          style={{ width: 45, height: 60 }} />
        <View style={{ flex: 1 }}>
          <Text>{book.title}</Text>
          <Text>最新章节：{book.lastChapter}</Text>
        </View>
      </TouchableOpacity>
      <Button title="Delete" onPress={this.delete} />
      {/* <Button title="章节列表" onPress={this.getChapters} /> */}
    </View>
  );
}
}

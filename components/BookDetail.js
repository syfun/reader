import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import { HOST } from '../constants';
import db from '../storage';

export default class BookDetail extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'Content'
    title: 'BookDetail'
  };

  read = () => {
    const { book } = this.props.navigation.state.params;
    const { navigate } = this.props.navigation;
    const url = `${HOST}/mix-toc/${book.bookID}`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        const current = { index: 0, ...resp.mixToc.chapters[0] };
        const next = { index: 1, ...resp.mixToc.chapters[1] };
        navigate('Content', { current, next, book });
      })
  }

  addToShelf = () => {
    const { book } = this.props.navigation.state.params;
    let image = book.cover || book.image;
    if (image.startsWith('/agent/')) {
      image = decodeURIComponent(image.slice(7));
    }
    db.transaction(tx => {
      tx.executeSql('insert into books (bookID, title, image, lastChapter) values (?, ?, ?, ?)',
        [book.bookID, book.title, image, book.lastChapter], null, (t, err) => { console.log(err) });
    })
  }

  downChapters = () => {
    const { book } = this.props.navigation.state.params;
    const url = `${HOST}/mix-toc/${book.bookID}`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        db.transaction(tx => {
          resp.mixToc.chapters.forEach((chpt, index) => {
            tx.executeSql('insert into chapters (title, bookID, link, key) values (?, ?, ?, ?)',
              [chpt.title, book.bookID, chpt.link, index])})
          })
        })
  }

  showChapters = () => {
    const { book } = this.props.navigation.state.params;

  }

  render() {
    const { navigation } = this.props;
    const { book } = navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <Text>{book.id}</Text>
        <Text>书名：{book.title}</Text>
        <Text>最新章节: {book.lastChapter}</Text>
        <Text>更新时间： {book.updated}</Text>

        <Button title="添加到书架"
          onPress={this.addToShelf} />
        <Button title="下载目录" onPress={this.downChapters} />
        <Button title="查看目录" onPress={() => {navigation.navigate('Chapter', {book})}} />
        <Button title="阅读"
          onPress={this.read} />
      </View>
    )
  }
}

import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import { HOST } from '../constants';
import db from '../storage';

export default class BookDetail extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'Content'
    title: 'BookDetail'
  };
  state = {
    book: {}
  }

  componentDidMount() {
    const { bookID } = this.props.navigation.state.params;
    fetch(`${HOST}/book/${bookID}`)
      .then((resp) => resp.json())
      .then(resp => { this.setState({ book: resp }) });
  }

  read = () => {
    const book = this.state.book;
    const { navigate } = this.props.navigation;
    const url = `${HOST}/mix-toc/${book._id}`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        const current = {index: 0, ...resp.mixToc.chapters[0]};
        const next = {index: 1, ...resp.mixToc.chapters[1]};
        navigate('Content', {current, next, book});
      })
  }

  addToShelf = () => {
    const book = this.state.book;
    let image = book.cover;
    if (image.startsWith('/agent/')) {
      image = decodeURIComponent(image.slice(7));
    }
    db.transaction(tx => {
      tx.executeSql('insert into books (bookID, title, image, lastChapter) values (?, ?, ?, ?)',
      [book._id, book.title, image, book.lastChapter]);
    })
  }

  render() {
    const book = this.state.book;
    return (
      <View style={{ flex: 1 }}>
        <Text>{book.id}</Text>
        <Text>书名：{book.title}</Text>
        <Text>最新章节: {book.lastChapter}</Text>
        <Text>更新时间： {book.updated}</Text>

        <Button title="添加到书架"
          onPress={this.addToShelf} />
        <Button title="阅读"
          onPress={this.read} />
      </View>
    )
  }
}

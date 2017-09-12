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
        let first = resp.mixToc.chapters[0];
        navigate('Content', {link: first.link, title: first.title});
      })
  }

  addToShelf = () => {
    const book = this.state.book;
    let url = book.cover;
    if (url.startsWith('/agent/')) {
      url = decodeURIComponent(url.slice(7));
    }
    db.transaction(tx => {
      tx.executeSql('insert into books (bookID, title, image, lastChapter) values (?, ?, ?, ?)',
      [book._id, book.title, url, book.lastChapter]);
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

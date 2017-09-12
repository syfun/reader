import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';

import BookList from './BookList';
import db from '../storage';

export default class BookShelf extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'BookShelf'
  };

  state = {
    data: []
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('select * from books;', [], (_, { rows }) => {
        this.setState({ data: rows._array });
      });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <BookList data={this.state.data} />
      </View>
    )
  }
}

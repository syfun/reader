import React from 'react';
import { View, Button } from 'react-native';

import BookList from './BookList';
import db from '../storage';

export default class BookShelf extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'BookShelf'
    title: 'BookShelf'
  };

  state = {
    data: []
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('select * from books;', [], (_, { rows }) => {
        console.log(rows);
        this.setState({ data: rows._array });
      });
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Button title="search" onPress={() => {navigate('Search')}} />
        <BookList data={this.state.data} navigation={this.props.navigation} />
      </View>
    )
  }
}

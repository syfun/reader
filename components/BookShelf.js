import React from 'react';
import { View, Button } from 'react-native';

import BookList from './BookList';
import db from '../storage';

export default class BookShelf extends React.Component {

  state = {
    data: []
  };

  refresh = () => {
    db.transaction(tx => {
      tx.executeSql('select * from books;', [], (_, { rows }) => {
        this.setState({ data: rows._array });
      });
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <Button title="刷新" onPress={this.refresh} />
        <BookList data={this.state.data} navigation={this.props.navigation} refresh={this.refresh}/>
      </View>
    )
  }
}

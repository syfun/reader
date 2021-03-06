import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';

import BookList from './BookList';
import { HOST } from '../constants';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search'
  };

  state = {
    data: [],
    search: ''
  }

  searchBook = () => {
    fetch(`${HOST}/book/fuzzy-search?query=${this.state.search}&limit=5`)
      .then((resp) => resp.json())
      .then((resp) => {
        let data = resp.books.map((book) => {
          let url = book.cover;
          if (url.startsWith('/agent/')) {
            url = decodeURIComponent(url.slice(7));
          }
          return {
            bookID: book._id, title: book.title, image: url, lastChapter: book.lastChapter
          }
        });
        this.setState({data});
      });
  };

  render() {
    const data = this.state.data;
    return (
      <View style={{flex: 1, paddingTop: 100}}>
        <Text>Search</Text>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => this.setState({ search: text })}
          onSubmitEditing={this.searchBook}
          style={{ height: 100 }}
        />

        <BookList data={data} navigation={this.props.navigation} />
      </View>
    )
  }
}

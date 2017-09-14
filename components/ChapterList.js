import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import db from '../storage';
import ChapterLink from './ChapterLink';

export default class ChapterList extends React.Component {

  state = {
    chapters: []
  }

  componentDidMount() {
    const { book } = this.props;
    db.transaction(tx => {
      tx.executeSql('select * from chapters where bookID=?;', [book.bookID], (_, { rows }) => {
        this.setState({ chapters: rows._array })
      });
    })
  }

  render() {
    const { navigation, book } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.chapters}
          renderItem={({item}) => <ChapterLink navigation={navigation} book={book} chapter={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

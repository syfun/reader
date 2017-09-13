import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Book from './Book';

const BookList = ({ data, navigation, refresh }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.bookID}
        renderItem={({ item }) => <Book book={item} navigation={navigation} refresh={refresh}></Book>}
    ></FlatList>
  </View>
);


export default BookList;

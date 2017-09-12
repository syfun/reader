import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Book from './Book';

const BookList = ({ data }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => <Book title={item.title} image={item.image} ></Book>}
    ></FlatList>
  </View>
);


export default BookList;

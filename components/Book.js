import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import db from '../storage';

const Book = ({ book, navigation }) => (
  <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}
    onPress={() => { navigation.navigate('Detail', {bookID: book.bookID}); }}>
    <Image source={{ uri: book.image }}
      style={{ width: 45, height: 60 }} />
    <Text>{book.title}</Text>
  </TouchableOpacity>
);

export default Book;

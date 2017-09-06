import React from 'react';
import { Text, View, Image } from 'react-native';

const Book = ({ title }) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <Image source={{ uri: 'http://img1.write.qq.com/upload/cover/2016-10-12/cb_57fdcffbddd59.jpg' }}
      style={{ width: 45, height: 60 }} />
    <Text>{title}</Text>
  </View>
);

export default Book;

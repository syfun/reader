import React from 'react';
import { Text, View, Image, Button } from 'react-native';

import db from '../storage';

const Book = ({ title, image }) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <Image source={{ uri: image }}
      style={{ width: 45, height: 60 }} />
    <Text>{title}</Text>
  </View>
);

export default Book;

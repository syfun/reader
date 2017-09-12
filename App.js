import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BookShelf from './components/BookShelf';
import Search from './components/Search';
import Content from './components/Content';
import BookDetail from './components/BookDetail'
import db, { initDB } from './storage';

initDB();

const App = StackNavigator({
  BookShelf: { screen: BookShelf },
  Content: { screen: Content },
  Search: { screen: Search },
  Detail: { screen: BookDetail }
});

export default App;

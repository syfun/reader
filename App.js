import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';
import ChapterScreen from './screens/ChapterScreen';
import Search from './components/Search';
import Content from './components/Content';
import BookDetail from './components/BookDetail'
import db, { initDB } from './storage';

initDB();

const App = StackNavigator({
  Main: { screen: MainScreen },
  Chapter: { screen: ChapterScreen },
  Content: { screen: Content },
  Search: { screen: Search },
  Detail: { screen: BookDetail }
});

export default App;

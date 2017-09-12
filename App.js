import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import BookShelf from './components/BookShelf';
import Search from './components/Search';
import db from './storage';

const App = TabNavigator({
  Main: {screen: BookShelf},
  Search: {screen: Search}
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default App;

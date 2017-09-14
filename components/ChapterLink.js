import React from 'react';
import { Text, StyleSheet } from 'react-native';


const ChapterLink = ({ book, chapter, navigation }) => (
  <Text style={styles.text}
    onPress={() => { navigation.navigate('Content', { book, chapter }) }}>
    {chapter.title}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})
export default ChapterLink;

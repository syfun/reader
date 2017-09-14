import React from 'react';
import { Button } from 'react-native';

import ChapterList from '../components/ChapterList';

export default class ChapterScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { book } = navigation.state.params;
    return {
      title: book.title
    }
  };

  render() {
    const { navigation } = this.props;
    const { book } = navigation.state.params;
    return <ChapterList navigation={navigation} book={book} />
  }
}

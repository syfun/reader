import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import ChapterLink from './ChapterLink';

export default class Content extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.current.title
    }
  };

  state = {
    body: ''
  }

  componentDidMount() {
    const { current } = this.props.navigation.state.params;
    const link = encodeURIComponent(current.link);
    const url = `http://chapter2.zhuishushenqi.com/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        this.setState({ body: resp.chapter.body });
      });
  }

  render() {
    const body = this.state.body;
    const { navigation } = this.props;
    const { prefix, next, book } = this.props.navigation.state.params;
    return (
      <View>
        <ChapterLink name="前一章" book={book} chapter={prefix} navigation={navigation} />
        <ChapterLink name="后一章" book={book} chapter={next} navigation={navigation} />
        <ScrollView>
          <Text style={styles.body}>{body}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: 20,
    lineHeight: 35
  }
})

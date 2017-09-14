import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import ChapterLink from './ChapterLink';

export default class Content extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.chapter.title
    }
  };

  state = {
    body: ''
  }

  componentDidMount() {
    const { chapter } = this.props.navigation.state.params;
    const link = encodeURIComponent(chapter.link);
    const url = `http://chapter2.zhuishushenqi.com/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        this.setState({ body: resp.chapter.body });
      });
  }

  gotoPrefix = () => {

  }

  render() {
    const body = this.state.body;
    // const { navigation } = this.props;
    // const { prefix, next, book } = navigation.state.params;
    return (
      <View>
        <Button title="Preifx" />
        <Button title="Next" />
        <ScrollView pagingEnabled={true}>
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

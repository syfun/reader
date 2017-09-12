import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

export default class Content extends React.Component {
  static navigationOptions = {
    // tabBarLabel: 'Content'
    title: 'Content'
  };

  state = {
    link: '',
    title: '',
    body: ''
  }
  componentDidMount() {
    let { link, title } = this.props.navigation.state.params;
    link = encodeURIComponent(link)
    const url = `http://chapter2.zhuishushenqi.com/chapter/${link}?k=2124b73d7e2e1945&t=1468223717`;
    fetch(url).then(resp => resp.json())
      .then(resp => {
        this.setState({ link: url, body: resp.chapter.body, title: title });
      })
  }



  render() {
    const { goBack } = this.props.navigation;
    const title = this.state.title;
    const body = this.state.body;
    return (
      <ScrollView>
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
        <Text style={{ fontSize: 24 }}>{title}</Text>
        <Text style={{ fontSize: 15 }}>{body}</Text>
      </ScrollView>
    )
  }
}

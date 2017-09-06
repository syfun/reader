import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';

import Book from './components/Book';
import TEST from './components/t';

// const Book = ({ title }) => (
//   <View style={{flex: 1, flexDirection: 'row'}}>
//       <Image source={{ uri: 'http://img1.write.qq.com/upload/cover/2016-10-12/cb_57fdcffbddd59.jpg' }}
//           style={{ width: 45, height: 60 }} />
//       <Text>{title}</Text>
//   </View>
// );


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], search: '' };
  }

  // componentDidMount() {
  //   fetch('http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b')
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       alert(resp.ranking.tag);
  //     })
  // }

  searchBook = () => {
    fetch(`http://api.zhuishushenqi.com/book/fuzzy-search?query=${this.state.search}&limit=5`)
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({ data: resp.books });
      })
  };



  render() {
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => this.setState({ search: text })}
          onSubmitEditing={this.searchBook}
        ></TextInput>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item._id}
          renderItem={({ item }) => <Book title={item.title}></Book>}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

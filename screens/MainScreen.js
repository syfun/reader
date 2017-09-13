import React from 'react';
import { Button } from 'react-native';

import BookShelf from '../components/BookShelf';

// export default class MainScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     const { navigate } = navigation;
//     return {
//       title: 'Reader',
//       headerRight: (
//         <Button title="search" onPress={() => { navigate('Search') }} />
//       )
//     }
//   }

//   render() {
//     return (
//       <BookShelf navigation={this.props.navigation} />
//     )
//   }
// }

const MainScreen = (props) => (
  <BookShelf navigation={props.navigation} />
);

MainScreen.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation;
  return {
    title: 'Reader',
    headerRight: (
      <Button title="search" onPress={() => { navigate('Search') }} />
    )
  }
};

export default MainScreen;

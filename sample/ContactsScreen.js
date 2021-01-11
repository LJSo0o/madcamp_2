import React, {Component} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import User from './User';

export default class ContactsScreen extends Component {
  static navigationOptions = ({navigation, route}) => ({
    title: 'Chats',
    backgroundColor: 'white',
    headerLeft: null,
  });

  state = {
    users: [],
  };

  UNSAFE_componentWillMount() {
    let dbRef = firebase.database().ref('users');
    dbRef.on('child_added', val => {
      let person = val.val();
      person.phone = val.key;
      if (person.phone === User.phone) {
        User.name = person.name;
      } else {
        this.setState(prevState => {
          return {
            users: [...prevState.users, person],
          };
        });
      }
    });
  }

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Chat', item)}
        style={{padding: 13, borderBottomColor: '#ccc', borderBottomWidth: 1}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    if (!User.phone) {
      this.props.navigation.navigate('Auth');
    }

    return (
      <SafeAreaView style={backstyle.container}>

        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={item => item.phone}
        />

      </SafeAreaView>
    );
  }
}

const backstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
    },
});


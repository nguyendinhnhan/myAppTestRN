import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import getWeather from '../api/getWeather';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Tokyo' };
  }

  render() {
    console.log(getWeather());

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Enter your city
        </Text>
        <TextInput 
          style={styles.inputCity}
          onChangeText={(text) => this.setState(text)}
          value={this.state.text}
        />
        <TouchableOpacity>
          <Text style={styles.button}>Get weather</Text>
        </TouchableOpacity>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputCity: {
    height: 40,
    width: 250,
    backgroundColor: '#F5FCFF',
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  button: {
    backgroundColor: '#16a085',
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 20
  }
});

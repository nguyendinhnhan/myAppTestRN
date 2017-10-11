import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      numLucky: 999
    }
  }

  click() {
    this.setState({
      numLucky: this.state.numLucky + 1
    });
  }

  render() {
    return (
      <View>
        <Text>Hello Nhan</Text>
        <Text style={{ fontSize: 100, textAlign: 'center' }}>
          {this.state.numLucky}
        </Text>
        <TouchableOpacity onPress={() => {this.click()}}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

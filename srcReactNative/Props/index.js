import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropCom from './propsOtherComponent';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Text>Hello Nhan</Text>
        <PropCom name='Nhan' numOrder='1'/>
        <PropCom name='Nhi' numOrder='2'/>
        <ComInside name='Component Inside' />
      </View>
    );
  }
}

class ComInside extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

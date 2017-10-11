import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types'

export default class PropComponent extends Component<{}> {
  render() {
    return (
      <View>
        <Text>{this.props.name} is {this.props.numOrder}</Text>
      </View>
    );
  }
}

PropComponent.PropTypes = {
  name: PropTypes.string,
  numOrder: PropTypes.number.isRequired
}

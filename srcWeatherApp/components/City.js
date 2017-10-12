import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default class City extends Component {
  render() {
    const {city} = this.props;
    return (
      <View style={styles.container}>
        <Text>{city.name}</Text>
        <Text>{city.temp} oC</Text>
      </View>
    );
  }
}

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
  })
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B2DFDB',
    margin: 10,
    padding: 15,
    borderRadius: 5
  }
});
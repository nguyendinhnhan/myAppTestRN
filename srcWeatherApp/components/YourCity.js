import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import City from './City';

const DEFAULT_CITY = [
  { id: 1850147, name: 'Tokyo', temp:20 },
  { id: 1880252, name: 'Singapore', temp:29 },
  { id: 1609350, name: 'Bangkok', temp:23 },
  { id: 1581130, name: 'Ha Noi', temp:26 },
  { id: 5128581, name: 'New York', temp:18 },
  { id: 2643743, name: 'Lon don', temp:15 },
  { id: 524901, name: 'Moscow', temp:-5 },
  { id: 2988507, name: 'Paris', temp:11 },
  { id: 3117735, name: 'Madrid', temp:10 },
  { id: 6458923, name: 'Lisbon', temp:20 },
  { id: 1835848, name: 'Seoul', temp:20 },
];

class YourCity extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your city
        </Text>
        <FlatList
          data={DEFAULT_CITY}
          renderItem={({item}) => <City city={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#4DB6AC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
});

export default YourCity;

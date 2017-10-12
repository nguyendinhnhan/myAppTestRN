import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { findCityThunk } from '../actions/index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '' 
    };
  }

  getWeatherMessage() {
    console.log(this.props);
    const { error, isLoading, city, temp } = this.props;
    if (isLoading) return 'Loadding...';
    if (error) return 'Error, try again.';
    if (city && temp) return `${city} is ${temp} oC`;

    return '';
  }

  getWeatherByCity() {
    const { city } = this.state;

    this.props.findCityThunk(city);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Enter your city
        </Text>
        <TextInput
          style={styles.inputCity}
          onChangeText={text => this.setState({city: text})}
          value={this.state.city}
        />
        <TouchableOpacity onPress={this.getWeatherByCity.bind(this)}>
          <Text style={styles.button}>Get weather</Text>
        </TouchableOpacity>
        <Text>
          {this.getWeatherMessage()}
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
    backgroundColor: '#4DB6AC',
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
    backgroundColor: '#00897B',
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

const mapStateToProps = (state) => {
  return {
    city: state.city,
    temp: state.temp,
    isLoading: state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps, { findCityThunk })(Main);

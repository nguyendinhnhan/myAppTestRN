
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import { fetchError, fetchSuccess, startFetchData, fetchDataThunk } from '../actions/index';

class Main extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
        city: ''
    };
  }

  getWeatherMessage() {
      const { error, isLoading, city, temp } = this.props;
      if (isLoading) return '...Loading';
      if (error) return 'Error! Try again, please.';
      if (!city) return 'Enter your city';
      return `${city} is ${temp} oC`;
  }

  getTempByCity() {
      const { city } = this.state;
      // this.props.startFetchData();
      // getTemp(city)
      // .then(temp => this.props.fetchSuccess(city, temp))
      // .catch(() => this.props.fetchError());
      this.props.fetchDataThunk(city);
  }

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.message}>{this.getWeatherMessage()}</Text>
              <TextInput 
                  style={styles.textInput}
                  value={this.state.city}
                  onChangeText={text => this.setState({ city: text })}
              />
              <TouchableOpacity style={styles.button} onPress={this.getTempByCity.bind(this)}>
                  <Text style={styles.buttonText}>Get Temp</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: { 
      backgroundColor: '#1abc9c', 
      flex: 1, 
      alignSelf: 'stretch', 
      justifyContent: 'center', 
      alignItems: 'center' 
  },
  message: {
      color: 'white',
      fontSize: 25
  },
  button: {
      backgroundColor: '#2c3e50',
      padding: 10,
      margin: 30
  },
  buttonText: {
      color: 'white'
  },
  textInput: {
      margin: 10,
      backgroundColor: '#ecf0f1',
      height: 40,
      width: 300,
      paddingHorizontal: 10
  }
});

function mapStateToProps(state) {
  return { 
      city: state.city, 
      temp: state.temp, 
      error: state.error, 
      isLoading: state.isLoading
  };
}

export default connect(mapStateToProps, { startFetchData, fetchSuccess, fetchError, fetchDataThunk })(Main);
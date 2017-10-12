import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Main from '../components/Main';
import YourCity from '../components/YourCity';

class RecentChatsScreen extends React.Component {
  render() {
    return <Main />
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <YourCity />
  }
}

const MainScreenNavigator = TabNavigator({
  Home: { screen: RecentChatsScreen },
  'Your City': { screen: AllContactsScreen }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ecf0f1',
    style: {
      backgroundColor: '#00897B',
    }
  },
  
});

export default MainScreenNavigator;

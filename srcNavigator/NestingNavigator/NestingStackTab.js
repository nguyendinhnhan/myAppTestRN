import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//TabNavigator
import { TabNavigator } from 'react-navigation';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Profile', { name: 'abc'})}
          title="Profile Screen"
        />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'my Nhan' })}
          title="Chat with Nhan"
        />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
//End TabNavigator

/*
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'my Lucy' })}
          title='Chat with Lucy'
        />
      </View>
    )
  }
}
*/
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button 
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})} 
        />
      )
    }
  };
  render() {
    const { params } = this.props.navigation.state;
    const content = (params.mode === 'info') ? 'Contact info Screen' : `Chat with ${params.user}`;
    return (
      <View>
        <Text>{content}</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: navigation.state.params.name + "'s Profile!",
      headerRight: <Button color={screenProps.tintColor} title='Test'/>
    }
  }

  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    )
  }

}

class NavigatorWrappingScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainScreenNavigator navigation={this.props.navigation}/>
        <Text>Test NavigatorWrappingScreen</Text>
      </View>
    )
  }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;

const SimpleApp = StackNavigator({
  Home: { 
    // screen: MainScreenNavigator,
    // navigationOptions: {
    //   title: 'My Chats'
    // }
    screen: NavigatorWrappingScreen
  },
  Chat: { screen: ChatScreen },
  Profile: { screen: ProfileScreen }
});

// export default SimpleApp;
export default class NestingNav extends React.Component {
  render() {
    return <SimpleApp screenProps={{tintColor: 'green'}} />
  }
}

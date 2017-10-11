import React from 'react';
import { StyleSheet, View, Button, Image, ScrollView, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

function getCurrentRouteParams(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteParams(route);
  }
  if (route.params) {
    return route.params;
  } else {
    return null;
  }
}

const CustomDrawerContentComponent = (props) => {
  const nav = props.nav;
  params = getCurrentRouteParams(nav); // Route's navigator params...
  const doSomething = () => {
    console.log("doSomething pressed");
  };
  return (
    <View style={styles.container}>
      <Button title="Do Something" onPress={doSomething} />
    </View>
  )
}

const navigatorConfig = {
  drawerWidth: 300,
  contentComponent: CustomDrawerContentComponent
};

class MyHomeScreenOrNavigator extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View><Text>MyHomeScreen content</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreenOrNavigator,
  },
}, navigatorConfig);

export default MyApp;
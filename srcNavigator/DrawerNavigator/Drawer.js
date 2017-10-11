import React from 'react';
import { StyleSheet, View, Button, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

class MyHomeScreen extends React.Component {
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
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          //DrawerOpen, DrawerClose, DrawerToggle
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const navigatorConfig = {
  // drawerWidth: 200,
  drawerPosition: 'right',
  contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
};

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Notifications2: {
    screen: MyNotificationsScreen,
  },
  Notifications3: {
    screen: MyNotificationsScreen,
  },
  Notifications4: {
    screen: MyNotificationsScreen,
  },
  Notifications5: {
    screen: MyNotificationsScreen,
  },
  Notifications6: {
    screen: MyNotificationsScreen,
  },
  Notifications7: {
    screen: MyNotificationsScreen,
  },
  Notifications8: {
    screen: MyNotificationsScreen,
  },
  Notifications9: {
    screen: MyNotificationsScreen,
  },
  Notifications19: {
    screen: MyNotificationsScreen,
  },
  Notifications29: {
    screen: MyNotificationsScreen,
  },
  Notifications39: {
    screen: MyNotificationsScreen,
  },
  Notifications49: {
    screen: MyNotificationsScreen,
  },
  Notifications59: {
    screen: MyNotificationsScreen,
  },
  Notifications69: {
    screen: MyNotificationsScreen,
  },
  Notifications79: {
    screen: MyNotificationsScreen,
  }

}, navigatorConfig);

export default MyApp;
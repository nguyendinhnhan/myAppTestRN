import React from 'react';
import StackExample from './StackNavigator/Stack';
import TabExample from './TabNavigator/Tab';
import Tab2Example from './TabNavigator/Tab2';
import NestingStackTab from './NestingNavigator/NestingStackTab';
import Drawer from './DrawerNavigator/Drawer';
import Drawer2 from './DrawerNavigator/Drawer2';

export default class App extends React.Component {
  render() {
    return <Tab2Example />;
  }
}

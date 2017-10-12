import { AppRegistry } from 'react-native';
import AppRedux from './srcNavigator/AppRedux';
import AppReactNative from './srcReactNative/App';
import AppWeather from './srcWeatherApp/App';

AppRegistry.registerComponent('myApp', () => AppWeather);

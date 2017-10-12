import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import Main from './components/Main';
import TabWeather from './routes/tabWeather';
import reducer from './reducers/index';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <TabWeather />
      </Provider>
    );
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

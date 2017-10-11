import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';
import reducer from './reducers/index';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

const store = createStore(reducer);

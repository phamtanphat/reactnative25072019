import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Provider } from 'react-redux'

import List from './components/List';
import Form from './components/Form';
import MyFlatlist from './components/MyFlatlist';
import Filter from './components/Filter';
import Box from './components/Box';
import Myicon from './components/Myicon';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <List/>
      </Provider>
    );
  }
}

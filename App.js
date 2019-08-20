import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import List from './components/List';
import Form from './components/Form';
import MyFlatlist from './components/MyFlatlist';
import Filter from './components/Filter';
import Box from './components/Box';

let defaultState = {
    count : 2
}

let store = createStore((state = defaultState , action) => {
    if(action.type === "INCREASE") return {...state , count : state.count + 1}
    if(action.type === "DESCREASE") return {...state , count : state.count - 1}
    if(action.type === "RESET") return {...state , count : 0}
    return state
})
// dispatch : thay đổi giá trong store
// store.dispatch({type : "INCREASE"})
//lay dư liệu của store
// alert(JSON.stringify(store.getState()))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Box/>
      </Provider>
    );
  }
}
// Auto close tag (Jun Han)
// Auto Rename tag (Jun Han)
// ES7 React/Redux (dsznajder)
// npm Intellisense (Christian Kohler)
// Path Intellisense(Christian)
// vscode-icons (vscode icons team)
// auto import (steoat)
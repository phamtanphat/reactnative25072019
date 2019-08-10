import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Word from './components/Word';

const word = {en : "One" , vn : "Một" , isMemorized : false}

export default class App extends Component {

  render() {
    return (
        <View style={{flex : 1 }}>
            <Word/>
        </View>
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
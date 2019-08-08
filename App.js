import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello React native</Text>
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
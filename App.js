import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Design from './components/Design';

const word = {en : "One" , vn : "Một" , isMemorized : true}

//set color cho word.vn 
// isMemorized : true = green
// isMemorized : false : red
export default class App extends Component {
  render() {
  
    return (
        <View style={{flex : 1 , flexDirection : "row" , justifyContent : "space-around" ,alignItems : "center"}}>
          <Text style={{color : "green" , fontSize : 20}}>{word.en}</Text>
          <Text style={{color : "red" , fontSize : 20}}>{word.vn}</Text>
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
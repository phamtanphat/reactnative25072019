import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import List from './components/List';
import Form from './components/Form';
import MyFlatlist from './components/MyFlatlist';
import Filter from './components/Filter';
import Box from './components/Box';
import Myicon from './components/Myicon';

let defaultState = {
  words : [
      {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
      {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
      {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
      {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
      {id : "a5" , en : "Five" , vn : "Năm" , isMemorized : true},
      {id : "a6" , en : "Six" , vn : "Sáu" , isMemorized : true},
  ],
  shouldShowForm : false,
  filterPick : 'Show_All'
}

let store = createStore((state = defaultState , action) => {
    switch(action.type){
      case "TOGGLE_WORD" :{ 
        const newWords = state.words.map(item => {
          if(item.id !== action.id) return item
          return {...item , isMemorized : !item.isMemorized}
        })
        return {...state ,words : newWords}
      }
      case "REMOVE_WORD" :{
        const newWords = state.words.filter(item => item.id !== action.id)
        return {...state,words : newWords} 
      } 
      default : return state
    }
    
    
})

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //     <List/>
      // </Provider>
      <Myicon/>
    );
  }
}

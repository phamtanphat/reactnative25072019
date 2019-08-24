import { createStore ,combineReducers } from 'redux'
const defaultWords = [
    {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
    {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
    {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
    {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
    {id : "a5" , en : "Five" , vn : "Năm" , isMemorized : true},
    {id : "a6" , en : "Six" , vn : "Sáu" , isMemorized : true},
  ]
  function wordsReducer(state = defaultWords , action){
    switch(action.type){
      case "TOGGLE_WORD" : {
        const newWords = state.map(item => {
          if(item.id !== action.id) return item
          return {...item , isMemorized : !item.isMemorized}
        })
        return newWords
      }
      case "REMOVE_WORD" :{
        const newWords = state.filter(item => item.id !== action.id)
        return newWords
      }
      case "ADD_WORD" : {
        const newWords = Object.assign([] , state)
        newWords.unshift(action.word)
        return newWords
      }
      default : return state;
    }
  }
  function shouldShowFormReducer(state = false , action){
    switch(action.type){
      case "TOGGLE_FORM" : 
        return !state
      case "ADD_WORD" : 
        return false
      default : 
        return state
    }
    
  }
  function filterPickReducer(state = 'Show_All' , action){
    switch(action.type){
      case "FILTER_MODE" : 
        return action.filterPick
      default : 
        return state
    }
  }
  const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterPick : filterPickReducer
  })
  
let store = createStore(reducer)
  
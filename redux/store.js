import { createStore ,combineReducers } from 'redux'
import {wordsReducer} from './reducer/wordReducer';
import {shouldShowFormReducer} from './reducer/shouldshowformReducer';
import {filterPickReducer} from './reducer/filterpickReducer'

const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterPick : filterPickReducer
  })
  
const store = createStore(reducer)
export default store
  
import {wordsReducer} from './wordReducer';
import {shouldShowFormReducer} from './shouldshowformReducer';
import {filterPickReducer} from './filterpickReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    words : wordsReducer,
    shouldShowForm : shouldShowFormReducer,
    filterPick : filterPickReducer
})
export default reducer
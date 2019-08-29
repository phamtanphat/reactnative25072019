import * as action from './actionType'
import axios from 'axios'
export function toggleWord(id){
    return {type : action.TOGGLE_WORD , id}
}

export function removeWord(id){
    return {type : action.REMOVE_WORD , id}
}

export function toggleForm(id){
    return {type : action.TOGGLE_FORM , id}
}
export function addWord(newWord){
    return {type : action.ADD_WORD , word : newWord}
}
export function setFilterMode(filterPick){
    return {type : action.FILTER_MODE , filterPick}
}

export function getAllWord(){
    return function(dispatch){
        const URL = "https://server2301.herokuapp.com/word"
        axios.get(URL)
        .then(response => dispatch({type : action.GET_ALL_WORD , words : response.data.words}))
        .catch(error => console.log(error.message))
    }
}


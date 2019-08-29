import * as action from './actionType'

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


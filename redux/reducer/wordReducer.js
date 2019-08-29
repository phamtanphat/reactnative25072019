import * as actionType from '../action/actionType'

export function wordsReducer(state = [], action) {
  switch (action.type) {
    case actionType.GET_ALL_WORD : {
        return state.concat(action.words)
    }
    case "TOGGLE_WORD": {
      const newWords = state.map(item => {
        if (item.id !== action.id) return item;
        return { ...item, isMemorized: !item.isMemorized };
      });
      return newWords;
    }
    case "REMOVE_WORD": {
      const newWords = state.filter(item => item.id !== action.id);
      return newWords;
    }
    case "ADD_WORD": {
      const newWords = Object.assign([], state);
      newWords.unshift(action.word);
      return newWords;
    }
    default:
      return state;
  }
}

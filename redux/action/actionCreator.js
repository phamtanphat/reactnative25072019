import * as action from "./actionType";
import axios from "axios";

export function toggleWord(_id, isMemorized) {
  return dispatch => {
    const URL = `https://server2301.herokuapp.com/word/${_id}`;
    axios
      .put(URL, { isMemorized })
      .then(response => {
        if (response.data.success) {
          dispatch({ type: action.TOGGLE_WORD, _id });
        }
      })
      .catch(error => console.log(error.message));
  };
}

export function removeWord(_id) {
  return dispatch => {
    const URL = `https://server2301.herokuapp.com/word/${_id}`;
    axios
      .delete(URL)
      .then(response => {
        if (response.data.success) {
          dispatch({ type: action.REMOVE_WORD, _id });
        }
      })
      .catch(error => console.log(error.message));
  };
}

export function toggleForm(id) {
  return { type: action.TOGGLE_FORM, id };
}
export function addWord(txtEn , txtVn) {
  return dispatch => {
    const URL = `https://server2301.herokuapp.com/word`;
    axios
      .post(URL,{en : txtEn , vn : txtVn})
      .then(response => {
        if (response.data.success) {
          dispatch({ type: action.ADD_WORD, word: response.data.word });
        }
      })
      .catch(error => console.log(error.message));
  };
}
export function setFilterMode(filterPick) {
  return { type: action.FILTER_MODE, filterPick };
}

export function getAllWord() {
  return function(dispatch) {
    const URL = "https://server2301.herokuapp.com/word";
    axios
      .get(URL)
      .then(response =>
        dispatch({ type: action.GET_ALL_WORD, words: response.data.words })
      )
      .catch(error => console.log(error.message));
  };
}

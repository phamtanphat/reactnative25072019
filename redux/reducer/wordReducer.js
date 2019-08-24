const defaultWords = [
  { id: "a1", en: "One", vn: "Một", isMemorized: true },
  { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
  { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
  { id: "a4", en: "Four", vn: "Bốn", isMemorized: true },
  { id: "a5", en: "Five", vn: "Năm", isMemorized: true },
  { id: "a6", en: "Six", vn: "Sáu", isMemorized: true }
];
export function wordsReducer(state = defaultWords, action) {
  switch (action.type) {
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

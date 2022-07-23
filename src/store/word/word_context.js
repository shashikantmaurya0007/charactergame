import { createContext, useContext, useEffect, useReducer } from "react";
import { randomWord } from "../../util";
import { WORD_ACTION } from "./word_action";
import { wordReducer } from "./word_reducer";

const defaultState = {
  word: "",
  wordIndex: 0,
};

const WordContext = createContext(defaultState);
const useWord = () => useContext(WordContext);
const WordProvider = ({ children }) => {
  const [wordState, wordDispatch] = useReducer(wordReducer, defaultState);
  useEffect(() => {
    wordDispatch({ type: WORD_ACTION.ADD_WORD, payload: randomWord() });
  }, []);
  return (
    <WordContext.Provider value={{ wordState, wordDispatch }}>
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, useWord };

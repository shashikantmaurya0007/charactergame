import { WORD_ACTION } from "./word_action";

const wordReducer = (previousState, { type, payload }) => {
  switch (type) {
    case WORD_ACTION.ADD_WORD: {
      return { ...previousState, word: payload };
    }
    case WORD_ACTION.INCREMENT_CHARACTER_INDEX: {
      return { ...previousState, wordIndex: previousState.wordIndex + 1 };
    }

    default: {
      return previousState;
    }
  }
};

export { wordReducer };

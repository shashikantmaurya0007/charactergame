import React from "react";
import { useWord } from "../../store/word/word_context";
import styles from "./WordDisplay.module.css";
const WordDisplay = () => {
  const {
    wordState: { word, wordIndex },
  } = useWord();

  return (
    <div className={`${styles.word_card}`}>
      {word.charAt(wordIndex).toUpperCase()}
    </div>
  );
};

export default WordDisplay;

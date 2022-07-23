import React from "react";
import { useTimer } from "../../store/timer/timer_context";
import { useWord } from "../../store/word/word_context";
import styles from "./WordDisplay.module.css";
const WordDisplay = () => {
  const {
    wordState: { word, wordIndex },
  } = useWord();

  const {
    timerState: { highestScore, timer },
  } = useTimer();
  let success = Boolean(timer < highestScore || highestScore === 0);
  let failure = Boolean(timer > highestScore && highestScore !== 0);
  return (
    <>
      {wordIndex !== 20 && (
        <div className={`${styles.word_card}`}>
          {word.charAt(wordIndex).toUpperCase()}
        </div>
      )}
      {wordIndex === 20 && success && (
        <div className={`${styles.word_card}`}>Success!</div>
      )}
      {wordIndex === 20 && failure && (
        <div className={`${styles.word_card} ${styles.failure}`}>Failure!</div>
      )}
    </>
  );
};

export default WordDisplay;

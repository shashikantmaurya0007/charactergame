import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTimerHook } from "../../customHook/useTimerHook";
import { TIMER_ACTION } from "../../store/timer/timer_action";
import { useTimer } from "../../store/timer/timer_context";
import { WORD_ACTION } from "../../store/word/word_action";
import { useWord } from "../../store/word/word_context";
import styles from "./UserInput.module.css";
const UserInput = () => {
  const { startTheTimer, stopTheTimer } = useTimerHook();
  const [userinput_value, setUserInputValue] = useState("");
  const ref = useRef(null);
  const {
    timerState: { gameStarted, timerId, timer, highestScore },
    timerDispatch,
  } = useTimer();
  const {
    wordState: { wordIndex, word },
    wordDispatch,
  } = useWord();
  let success = Boolean(timer < highestScore || highestScore === 0);
  const increaseWordIndex = () =>
    wordDispatch({ type: WORD_ACTION.INCREMENT_CHARACTER_INDEX });

  const userInputValue = (e) => {
    let value = e.target.value;

    setUserInputValue(e.target.value);

    if (value.slice(-1).toLowerCase() === word.charAt(wordIndex).toLowerCase())
      increaseWordIndex();
    else {
      setUserInputValue(value.slice(0, -1));
      toast.error("wrong iput penalty of 0.5 second");
      timerDispatch({ type: TIMER_ACTION.PENALTY_TIMER });
    }
    if (wordIndex === 19) {
      stopTheTimer();

      if (success) {
        localStorage.setItem("highestScore", timer);
      }
    }
  };
  const reset = () => {
    wordDispatch({ type: WORD_ACTION.RESET });
    timerDispatch({ type: TIMER_ACTION.RESET_TIMER });
    setUserInputValue("");
    if (!Boolean(timerId)) startTheTimer();
  };
  useEffect(() => {
    gameStarted && ref.current.focus();
  }, [gameStarted]);

  return (
    <section>
      {gameStarted && (
        <div className={`${styles.input_container}`}>
          <input
            ref={ref}
            value={userinput_value}
            onChange={(e) => userInputValue(e)}
            type="text"
          />
          <button onClick={() => reset()}>Reset</button>
        </div>
      )}
      {!gameStarted && (
        <div className={`${styles.input_container}`}>
          <input
            onClick={() => startTheTimer()}
            placeholder="Type here"
            type="text"
          />
          <button>Reset</button>
        </div>
      )}
    </section>
  );
};

export default UserInput;

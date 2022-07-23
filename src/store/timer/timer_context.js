import { createContext, useContext, useEffect, useReducer } from "react";
import { TIMER_ACTION } from "./timer_action";
import { timerReducer } from "./timer_reducer";

const timerInitialState = {
  timer: 0,
  timerId: null,
  gameStarted: false,
  highestScore: 0,
};
const TimerContext = createContext(timerInitialState);

const useTimer = () => useContext(TimerContext);
const TimerProvider = ({ children }) => {
  const [timerState, timerDispatch] = useReducer(
    timerReducer,
    timerInitialState
  );

  useEffect(() => {
    timerDispatch({
      type: TIMER_ACTION.INITIAL,
      payload: localStorage.getItem("highestScore") || 0,
    });
  }, []);
  return (
    <TimerContext.Provider value={{ timerState, timerDispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, useTimer };

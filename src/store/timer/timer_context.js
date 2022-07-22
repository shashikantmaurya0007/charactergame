import { createContext, useReducer } from "react";
import { timerReducer } from "./timer_reducer";

const timerInitialState = {
  timer: 0,
  timerId: null,
  gameStarted: false,
};
const TimerContext = createContext(timerInitialState);
const TimerProvider = ({ children }) => {
  const [timerState, timerDispatch] = useReducer(
    timerReducer,
    timerInitialState
  );
  return (
    <TimerContext.Provider value={{ timerState, timerDispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider };

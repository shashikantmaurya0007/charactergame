import { TIMER_ACTION } from "./timer_action";

const timerReducer = (prevState, { type, payload }) => {
  switch (type) {
    case TIMER_ACTION.START_TIMER: {
      return {
        ...prevState,
        gameStarted: true,
        timerId: payload,
      };
    }
    case TIMER_ACTION.INITIAL: {
      return { ...prevState, highestScore: payload };
    }
    case TIMER_ACTION.INCREASE_TIMER: {
      return { ...prevState, timer: prevState.timer + 1 };
    }
    case TIMER_ACTION.PENALTY_TIMER: {
      return { ...prevState, timer: prevState.timer + 500 };
    }
    case TIMER_ACTION.RESET_TIMER: {
      return { ...prevState, timer: 0, gameStarted: false };
    }
    default: {
      return prevState;
    }
  }
};

export { timerReducer };

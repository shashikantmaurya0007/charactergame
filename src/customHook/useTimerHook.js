import { TIMER_ACTION } from "../store/timer/timer_action";
import { useTimer } from "../store/timer/timer_context";
const useTimerHook = () => {
  const {
    timerDispatch,
    timerState: { timer, timerId, highestScore },
  } = useTimer();

  let second = Math.floor(timer / 1000);
  let milisecond = timer % 1000;
  let milisecondUnitPlace = milisecond % 10;
  let milisecondTenthPlace = Math.floor((milisecond % 100) / 10);
  let milisecondHundredPlace = Math.floor((milisecond % 1000) / 100);
  //
  let secondHigh = Math.floor(highestScore / 1000);
  let milisecondHigh = highestScore % 1000;
  let milisecondUnitPlaceHigh = milisecondHigh % 10;
  let milisecondTenthPlaceHigh = Math.floor((milisecondHigh % 100) / 10);
  let milisecondHundredPlaceHigh = Math.floor((milisecondHigh % 1000) / 100);
  const incrementCounter = () =>
    timerDispatch({ type: TIMER_ACTION.INCREASE_TIMER });

  const startTheTimer = () => {
    let intervalId = setInterval(() => incrementCounter(), 1);
    timerDispatch({ type: TIMER_ACTION.START_TIMER, payload: intervalId });
  };

  const stopTheTimer = () => {
    clearInterval(timerId);
  };
  return {
    startTheTimer,
    stopTheTimer,
    second,
    milisecondUnitPlace,
    milisecondTenthPlace,
    milisecondHundredPlace,
    secondHigh,
    milisecondHundredPlaceHigh,
    milisecondTenthPlaceHigh,
    milisecondUnitPlaceHigh,
  };
};

export { useTimerHook };

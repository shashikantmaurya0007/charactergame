import { useEffect, useState } from "react";
import { TIMER_ACTION } from "../store/timer/timer_action";
import { useTimer } from "../store/timer/timer_context";
const useTimerHook = () => {
  const {
    timerDispatch,
    timerState: { timer },
  } = useTimer();

  let second = Math.floor(timer / 1000);
  let milisecond = timer % 1000;
  let milisecondUnitPlace = milisecond % 10;
  let milisecondTenthPlace = Math.floor((milisecond % 100) / 10);
  let milisecondHundredPlace = Math.floor((milisecond % 1000) / 100);

  const incrementCounter = () =>
    timerDispatch({ type: TIMER_ACTION.INCREASE_TIMER });

  const startTheTimer = () => {
    let intervalId = setInterval(() => incrementCounter(), 1);
    timerDispatch({ type: TIMER_ACTION.START_TIMER, payload: intervalId });
  };

  return {
    startTheTimer,
    second,
    milisecondUnitPlace,
    milisecondTenthPlace,
    milisecondHundredPlace,
  };
};

export { useTimerHook };

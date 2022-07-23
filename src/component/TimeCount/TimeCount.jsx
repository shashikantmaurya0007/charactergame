import React from "react";
import { useTimerHook } from "../../customHook/useTimerHook";
import styles from "./TimeCount.module.css";
const TimeCount = () => {
  const {
    second,
    milisecondUnitPlace,
    milisecondTenthPlace,
    milisecondHundredPlace,
    secondHigh,
    milisecondHundredPlaceHigh,
    milisecondTenthPlaceHigh,
    milisecondUnitPlaceHigh,
  } = useTimerHook();
  return (
    <section className={`${styles.timer_container}`}>
      <h3>
        Time:
        <span>
          {second}:{milisecondHundredPlace}
          {milisecondTenthPlace}
          {milisecondUnitPlace}
        </span>
        s
      </h3>
      <h3>
        my best time:{secondHigh}:{milisecondHundredPlaceHigh}
        {milisecondTenthPlaceHigh}
        {milisecondUnitPlaceHigh}s!
      </h3>
    </section>
  );
};

export default TimeCount;

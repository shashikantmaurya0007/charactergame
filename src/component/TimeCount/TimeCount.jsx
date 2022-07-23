import React from "react";
import { useTimerHook } from "../../customHook/useTimerHook";
import styles from "./TimeCount.module.css";
const TimeCount = () => {
  const {
    second,
    milisecondUnitPlace,
    milisecondTenthPlace,
    milisecondHundredPlace,
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
      <h3>my best time:0:00s!</h3>
    </section>
  );
};

export default TimeCount;

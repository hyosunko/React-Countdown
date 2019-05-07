import React from "react";
import TimerItem from "./TimerItem";

const Timer = ({ interval }) => (
  <div className="section">
    <nav className="level">
      <TimerItem count={Math.floor(interval.asDays())} label={"Days"} />
      <TimerItem
        count={Math.floor(interval.hours())
          .toString()
          .padStart(2, "0")}
        label={"Hours"}
      />
      <TimerItem
        count={Math.floor(interval.minutes())
          .toString()
          .padStart(2, "0")}
        label={"Minutes"}
      />
      <TimerItem
        count={Math.floor(interval.seconds())
          .toString()
          .padStart(2, "0")}
        label={"Seconds"}
      />
    </nav>
  </div>
);

export default Timer;

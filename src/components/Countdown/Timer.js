import React from "react";

const Timer = ({ interval }) => (
  <div className="section">
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="title">{Math.floor(interval.asDays())}</p>
          <p className="heading">Days</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="title">
            {Math.floor(interval.hours())
              .toString()
              .padStart(2, "0")}
          </p>
          <p className="heading">Hours</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="title">
            {Math.floor(interval.minutes())
              .toString()
              .padStart(2, "0")}
          </p>
          <p className="heading">Minutes</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="title">
            {Math.floor(interval.seconds())
              .toString()
              .padStart(2, "0")}
          </p>
          <p className="heading">Seconds</p>
        </div>
      </div>
    </nav>
  </div>
);

export default Timer;

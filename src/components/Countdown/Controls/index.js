import React from "react";
import Control from "./Control";

export default ({ pause, onPausedToggle }) => (
  <div className="field is-grouped is-grouped-centered">
    <Control
      disabled={pause}
      onClick={onPausedToggle}
      color={"danger"}
      name={"Pause"}
    />
    <Control
      disabled={!pause}
      onClick={onPausedToggle}
      color={"success"}
      name={"Resume"}
    />
  </div>
);

import React from "react";

const Datepicker = props => (
  <form>
    <div
      className="field is-grouped is-grouped-centered"
      style={{ marginBottom: "50px" }}
    >
      <div className="control">
        <input
          className="input is-medium is-outlined is-rounded"
          type="text"
          placeholder="Type a date"
        />
      </div>
      <div className="control">
        <button className="button is-primary is-medium is-rounded is-outlined">
          Reset
        </button>
      </div>
    </div>
  </form>
);
export default Datepicker;

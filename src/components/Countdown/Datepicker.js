import React from "react";
import moment from "moment";
import { validate } from "@babel/types";

class Datepicker extends React.Component {
  state = {
    date: "",
    valid: true
  };

  handleDateChange = ({ target: { value } }) => {
    const date = moment(value);
    this.setState({
      date: value,
      valid: date.isValid() && date.isAfter(moment())
    });
  };

  handleDateSubmit = e => {
    e.preventDefault();
    const { valid, date } = this.state;
    valid && this.props.onDateReset(moment(date));
  };

  render() {
    const { date } = this.state;
    return (
      <form onSubmit={this.handleDateSubmit}>
        <div
          className="field is-grouped is-grouped-centered"
          style={{ marginBottom: "50px" }}
        >
          <div className="control">
            <input
              className="input is-medium is-outlined is-rounded"
              type="text"
              value={date}
              onChange={this.handleDateChange}
              placeholder="Type a date 2019-10-25"
            />
          </div>
          <div className="control">
            <button
              type="submit"
              className="button is-primary is-medium is-rounded is-outlined"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Datepicker;

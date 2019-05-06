import React from "react";
import moment from "moment";

class Datepicker extends React.Component {
  state = {
    date: "",
    valid: true,
    dirty: false
  };

  handleDateChange = ({ target: { value } }) => {
    const date = moment(value),
      valid = date.isValid() && date.isAfter(moment());
    this.setState({
      valid,
      date: value,
      dirty: true
    });
    valid && this.props.onDateReset(moment(date));
  };

  render() {
    let { date, valid, dirty } = this.state,
      classes = "input is-medium is-outlined is-rounded";

    valid && dirty && (classes += " is-success");
    !valid && dirty && (classes += " is-danger");

    return (
      <div
        className="field is-grouped is-grouped-centered"
        style={{ marginBottom: "50px" }}
      >
        <div className="control has-text-centered">
          <input
            className={classes}
            type="text"
            value={date}
            onChange={this.handleDateChange}
            placeholder="Type a date 2019-10-25"
          />
          {!valid && dirty && (
            <i className="help is-danger">
              Please endter valid (and futre!) date
            </i>
          )}
        </div>
      </div>
    );
  }
}

export default Datepicker;

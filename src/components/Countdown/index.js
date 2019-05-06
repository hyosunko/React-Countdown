import React from "react";
import moment from "moment";
import "moment-holiday";

import Controls from "./Controls";
import Timer from "./Timer";
import Datepicker from "./Datepicker";
import HolidayModal from "./HolidayModal";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      nextDate: moment({ year: moment().year() + 1 }),
      pause: false,
      showHolidays: false
    };
  }

  componentDidMount() {
    this.resume();
  }

  componentWillUnmount() {
    this.pause();
  }

  getRemainingTime() {
    let { currentDate, nextDate } = this.state,
      diff = nextDate.diff(currentDate);

    return moment.duration(diff);
  }

  handleTogglePaused = () => {
    this.setState((prevState, props) => {
      const pause = !prevState.pause;
      if (pause) {
        this.pause();
      } else {
        this.resume();
      }
      return { pause };
    });
  };

  pause() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({ currentDate: moment() });
    }, 1000);
  }

  handleDateReset = nextDate => {
    this.setState({ nextDate });
  };

  handleHolidayToggle = () => {
    this.setState({ showHolidays: !this.state.showHolidays });
  };

  getHolidays() {
    const { currentDate, nextDate } = this.state;
    return currentDate.holidaysBetween(nextDate);
  }

  render() {
    const { pause, nextDate, showHolidays } = this.state,
      interval = this.getRemainingTime(),
      holidays = this.getHolidays();

    return (
      <section className="hero is-info is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {nextDate.format("MMM Do YYYY")} is Coming Up!
              <button
                className="button is-small is-rounded is-light"
                style={{ margin: "5px 0 0 10px" }}
                onClick={this.handleHolidayToggle}
              >
                Holidays
              </button>
            </h1>
            <Timer interval={interval} />
            <Datepicker onDateReset={this.handleDateReset} />
            <Controls pause={pause} onPausedToggle={this.handleTogglePaused} />
            <HolidayModal
              holidays={holidays}
              active={showHolidays}
              onToggle={this.handleHolidayToggle}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

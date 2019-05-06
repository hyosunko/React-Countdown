import React from "react";
import Controls from "./Controls";
import Timer from "./Timer";
import moment from "moment";
import Datepicker from "./Datepicker";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      nextDate: moment({ year: moment().year() + 1 }),
      pause: false
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

  render() {
    const { pause, nextDate } = this.state,
      interval = this.getRemainingTime();

    return (
      <section className="hero is-info is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {nextDate.format("MMM Do YYYY")} is Coming Up!
            </h1>
            <Timer interval={interval} />
            <Datepicker onDateReset={this.handleDateReset} />
            <Controls pause={pause} onPausedToggle={this.handleTogglePaused} />
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

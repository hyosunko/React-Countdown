import React from "react";
import Controls from "./Controls";
import Timer from "./Timer";
import moment from "moment";
import Datepicker from "./Datepicker";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: this.getRemainingTime(),
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
    let now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);
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
      this.setState({ interval: this.getRemainingTime() });
    }, 1000);
  }
  render() {
    const { interval, pause } = this.state;
    return (
      <section className="hero is-info is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Year is comming up</h1>
            <Timer interval={interval} />
            <Datepicker />
            <Controls pause={pause} onPausedToggle={this.handleTogglePaused} />
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

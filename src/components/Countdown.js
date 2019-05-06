import React from "react";
import moment from "moment";
import Controls from "./Controls";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: this.getRemainingTime(),
      pause: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ interval: this.getRemainingTime() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRemainingTime() {
    let now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);
    return moment.duration(diff);
  }

  togglePaused = () => {
    this.setState((prevState, props) => {
      const pause = !prevState.pause;
      if (pause) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => {
          this.setState({ interval: this.getRemainingTime() });
        }, 1000);
      }
      return { pause };
    });
  };

  render() {
    const { interval, pause } = this.state;
    return (
      <section className="hero is-dark is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Year is comming up</h1>
            <div className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Days</p>
                    <p className="title">{Math.floor(interval.asDays())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Hours</p>
                    <p className="title">{Math.floor(interval.hours())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Mintues</p>
                    <p className="title">{Math.floor(interval.minutes())}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Seconds</p>
                    <p className="title">{Math.floor(interval.seconds())}</p>
                  </div>
                </div>
              </nav>
            </div>
            <Controls pause={pause} onPausedToggle={this.togglePaused} />
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

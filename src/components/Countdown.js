import React from "react";
import moment from "moment";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: this.getRemainingTime()
    };
  }

  getRemainingTime() {
    let now = moment(),
      newYear = moment({ year: now.year() + 1 }),
      diff = newYear.diff(now);
    return moment.duration(diff);
  }

  render() {
    const { interval } = this.state;
    return (
      <section className="hero is-info is-bold is-fullheight has-text-centered">
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
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown;

import React, { Component } from "react";
import ms from "pretty-ms";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
  }
  handleStart = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
    console.log("start");
  };
  handleStop = () => {
    clearInterval(this.timer);
    this.setState({
      isOn: false
    });
  };

  handleReset = () => {
    this.setState({
      time: 0
    });
  };

  handlePause = () => {
    this.setState({
      isOn: false
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>{ms(this.state.time)}</h3>
        </div>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
export default Timer;

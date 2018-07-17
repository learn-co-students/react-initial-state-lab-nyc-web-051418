// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount
    };
  }
  render() {
    const message =
      this.props.initialCount > 0
        ? `${this.props.initialCount} seconds left before I go boom!`
        : 'Boom!';
    return <div>{message}</div>;
  }
}

import React, { Component } from 'react';
import './Clock.styled';
import { ClockFace } from './Clock.styled';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  // як тільки компонент розмонтувався знімаємо цей інтервал и відповидно функція вище визиватися не буде
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <ClockFace>{this.state.time}</ClockFace>;
  }
}

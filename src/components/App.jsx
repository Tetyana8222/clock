import Clock from '../components/Clock';

import React, { Component } from 'react';
import { Container, Button } from './App.styled';

export class App extends Component {
  state = {
    showClock: false,
  };
  toggleClock = () => {
    this.setState(({ showClock }) => ({
      showClock: !showClock,
    }));
  };

  // toggleClock = ({ showClock }) => {
  //   console.log(showClock);
  //   this.setState(state => ({
  //     showClock: !showClock,
  //   }));
  // };

  render() {
    const { showClock } = this.state;
    return (
      <Container>
        {showClock && <Clock />}
        <Button type="button" onClick={this.toggleClock}>
          Відкрити/Закрити
        </Button>
      </Container>
    );
  }
}

export default App;

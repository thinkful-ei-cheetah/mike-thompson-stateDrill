import React, { Component } from 'react';
// import soo from './HelloWorld.css';

class Bomb extends Component {
  state = {
    time : new Date(),
    count: 0,
    show : ''
  };

  addCount() {
    return this.state.count + 1;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.addCount);
      this.setState({
        count : this.addCount()
        // (this.count%2 === 0) ? (this.show = 'tick') : null
        // (this.count>=8) ? (this.count%2 === 0) ? (this.show = 'tick') : (this.show = 'tick') : null
      })
    }, 1000)
  }

  displayResult() {
    if (this.state.count >= 8) {
      clearInterval(this.interval)
      return 'BOOM!!!!!!!!!!!'
    } else if (this.state.count % 2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>{this.displayResult()}</p>
      </div>
    )
  }
}

export default Bomb;
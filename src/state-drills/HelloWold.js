import React, { Component } from 'react';
// import soo from './HelloWorld.css';

class HelloWorld extends Component {
  state = {
    who: ''
  };
  
  handleClick = (e) => {
    console.log(e);
    this.setState({
      who: e
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleClick('World')}>World</button>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
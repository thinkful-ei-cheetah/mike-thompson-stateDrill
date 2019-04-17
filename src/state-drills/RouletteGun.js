import React, { Component } from 'react';

class RouletteGun extends Component {
  constructor(props) {
    super(props)
    this.bulletInChamber = 8
    this.state = {
      chamber : null,
      spinningTheChamber : false
    };
  }

  spinChamber = () => {
    this.setState({
      spinningTheChamber:  true
    }, () => {
      setTimeout(() => {
        this.setState({
          spinningTheChamber: false,
          chamber : Math.floor(Math.random() * 9)
        })
      } , 3000 )
    });
  };

  render() {
    let fate = ''; 
    if(this.state.spinningTheChamber) {
      fate = 'spinning the chamber and pulling the trigger!'
    } else if(this.bulletInChamber === this.state.chamber) {
      fate = 'BANG!'
    } else {
      fate = 'SAFE!'
    }

    return (
      <div>
        <p>{fate}</p>
        <button onClick={() => this.spinChamber(fate)}>Pull the Trigger!</button>
        {this.state.spinningTheChamber && <span>...</span>}
      </div>
    )
  }
}

export default RouletteGun;

import React, { Component } from 'react';

export class Button extends Component {
  fnc = () => {
    console.log('I was clicked!');
  };
  render() {
    return <button onClick={this.fnc}>Click me!</button>;
  }
}

export default Button;

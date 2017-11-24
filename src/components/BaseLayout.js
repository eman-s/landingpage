import React, { Component } from 'react';
import '../App.css';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
        <img src="./images/jameson-logo.jpg" alt='jameson' />
        <h1>You are without fear!</h1>
        </div>
        <section>
        {this.props.children}
        </section>
      </div>
    );
  }
}

import React, { Component } from 'react';
import '../App.css';

export default class BaseLayout extends Component {
  render() {
    let style = {
      'backgroundColor':'#092E20',
      'backgroundSize':'cover'
    }
    return (
      <div style={style} className="Nav">
        <div>
        <img src="./images/jameson-logo.jpg" alt='jameson' />
        <h1>You are without fear!</h1>
        <span>Follow Us Here:</span>
        <a href='https://www.instagram.com/jameson_us/'>
          <img src="./images/instagram.png" alt='instagram' height='30px'/>
        </a>
        <a href='https://www.facebook.com/JamesonWhiskeyUS/'>
          <img src="./images/facebook.png" alt='instagram' height='30px'/>
        </a>
        </div>
        <section>
        {this.props.children}
        </section>
      </div>
    );
  }
}

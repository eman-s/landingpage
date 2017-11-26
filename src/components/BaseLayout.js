import React, { Component } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    let style = {
      'backgroundColor':'#004027',
      'backgroundSize':'cover',
      'font-family': 'Spectral SC',
      'text-align': 'center'
    }
    return (
      <div style={style} className="header">
        <div>
        <section>
        <img style={{'height':'10rem'}} src="./images/bartendersballlogo.jpg" alt='jameson' />
        </section>
        <section>
        <a href='https://www.instagram.com/jameson_us/'>
          <img src="./images/instagram.png" alt='instagram' height='30px'/>
        </a>
        <a href='https://www.facebook.com/JamesonWhiskeyUS/'>
          <img src="./images/facebook.png" alt='instagram' height='30px'/>
        </a>
        </section>
        <h1>You are without fear!</h1>
        <h3>Thank you for attending the jameson bartenders ball</h3>

        </div>
        <section>
        {this.props.children}
        </section>
        <div className='footer'>
          <a href='https://www.jamesonwhiskey.com/us/terms-conditions'>Terms & Conditions</a>
          <a href='https://www.jamesonwhiskey.com/us/privacy-policy'>Privacy Policy</a>
          <a href='https://www.jamesonwhiskey.com/us/enjoy-responsibly'>Enjoy Responsibly</a>
          <a href='https://www.responsibility.org/'>responsibility.org</a>
        </div>
        <p style={{'font-size':'10px'}}> © 2017 IRISH DISTILLERS LIMITED </p>
      </div>
    );
  }
}

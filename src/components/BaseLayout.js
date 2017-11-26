import React, { Component } from 'react';
import '../App.css';


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
        <div style={{'position':'fixed', 'width':'100%'}}>
          <section style={{'background-color':'#fff0c3', 'padding':'30px', 'max-height':'100%','border-bottom': '1px solid rgba(0,0,0,0.1)'}}>
          </section>
          <section>
            <img style={{'height':'4rem','padding-top':'10px','margin-top':'-60px'}} src="./images/logojameson.svg" alt='jameson' />
          </section>
        </div>
        <section className='content'>
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

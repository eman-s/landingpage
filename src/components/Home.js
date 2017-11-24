import React, {Component} from 'react';

export default class Home extends Component{
  render(){
    let style = {
      'backgroundColor':'#092E20',
      'backgroundSize':'cover'
    }
    return(
      <div style={style}>
      <section>
        <img src='./images/userimage.jpg' alt='user' />
      </section>
      </div>
    )
  }
}

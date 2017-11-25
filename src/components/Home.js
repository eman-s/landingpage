import React, {Component} from 'react';

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userimg:'./images/userimage.jpg'
    }
  }

  postToFacebook(){

  }
  render(){
    let style = {
      'backgroundColor':'#092E20',
      'backgroundSize':'cover'
    }
    let imgHeight = {
      'height':'25rem'
    }
    return(
      <div style={style}>
      <section>
        <img style={imgHeight} src={this.state.userimg} alt='user' />
      </section>
      <section>
        <a href={this.state.userimg} download='userimg'>Download!</a>
      </section>

      </div>
    )
  }
}

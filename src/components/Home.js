import React, {Component} from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;


const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userimg:'./images/userimage.jpg'
    }
  }

  render(){
    let contentStyle = {
      'text-align':'center'
    }
    let imgHeight = {
      'height':'25rem'
    }
    return(

      <div style={contentStyle}>
        <section style={{'padding-top':'100px'}}>
          <a href='https://www.instagram.com/jameson_us/'>
          <img src="./images/instagram.png" alt='instagram' height='30px'/></a>
          <a href='https://www.facebook.com/JamesonWhiskeyUS/'>
          <img src="./images/facebook.png" alt='instagram' height='30px'/></a>
        </section>
        <h1>You are without fear!</h1>
        <h3>Thank you for attending the jameson bartenders ball</h3>
      <section style={{'backgroundColor':'#fff0c3', 'margin-right': '80px','margin-left': '80px','padding-top': '34px', 'padding-bottom':'15px'}}>
          <img style={imgHeight} src={this.state.userimg} alt='user' />
          <p>Be a part of the big picture using <span style={{'color':'#004027'}}>#BartendersBall</span> in your post.</p>
          <p>Share with your friends on facebok, twitter, or download and post to instagram</p>
        <div className='shareButtons'>
          <FacebookShareButton
            url={`localhost:3000${this.props.match.url}`} quote='Jameson Ball' className="share_button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={`localhost:3000${this.props.match.url}`} title='Jameson Ball' className="share_button">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <a href={this.state.userimg} download='userimg'>
          <img src="./images/download.png" alt='download!' height='30px'/></a>
        </div>
      </section>
      </div>
    )
  }
}

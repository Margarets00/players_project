import React, {Component} from 'react';

import '../App.css';
import qrcord from '../img/qrcord.png';
import back_button from '../img/back-button.png';
import next_button from '../img/next-button.png';
import pause_button from '../img/pause-button.png';
import play_button from '../img/play-button.png';
import cd from '../img/cd.png';
import { Link } from 'react-router-dom';

function PlayState_music(props){
  if(props.playing){
    return <img src={pause_button}/>
  } else if(!props.playing){
    return <img src={play_button}/>
  }
}

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state={
      playing: true,
      name:"minju's",
      singer:"Adele",
      songTitle:"Rolling in the Deep"
    }
  } 
  
  render(){
    return(
      <div className="Page3">
        <h1 className="hhh1">PLAYuS</h1>
        <h2 className="code2">#{this.props.match.params.data}</h2>
        <h3 className="playlist">PLAYLIST</h3>
        <div className="bg2">
          <p className="playing">NOW PLAYING {this.state.name} SONG</p>
          <img src={cd} className="cd"/>
          <p className="songTitle">{this.state.singer} - {this.state.songTitle}</p>
          <iframe 
              className="video"
              src="https://www.youtube.com/embed/UBHLeN52zRo" 
              frameborder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          <div className="button">
            <button className="back_button"><img src={back_button}/></button>
            <button className="pause_button" onClick={()=>this.setState({playing:!this.state.playing})}><PlayState_music playing={this.state.playing}/></button>
            <button className="next_button"><img src={next_button}/></button>
          </div>
        </div>
        <div className="down">
          <h4 className="download">DOWNLOAD</h4>
          <h5 className="download2">PLAYuS APP</h5>
          <img className="qr" src={qrcord}/>
        </div>
      </div>
    );
  }
}

export default Page2;
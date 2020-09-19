import React, {Component, useEffect} from 'react';
import record from '../img/recordboard.png';
import {Animated} from "react-animated-css";
import arrow from '../img/arrow.png';

import '../App.css';

import { Link } from 'react-router-dom';

const axios = require('axios');


class RightScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      isCode:false,
      code:null,
    }
  }

  submitClick = async e => {
    axios.post('/main/make', {
    })
    .then(res => {
      this.setState({isCode : res.data.isCode, code: res.data.code})
    })
  }

  P1_re(){
    return(
          <div>
            <button type = "submit" onClick={this.submitClick} className="record">
              <Animated animationIn="bounceInDown" animationOut="fadeOut" > 
                <img src={record} className="recordSpin"/>
              </Animated>
            </button>
            <button type = "submit" onClick={this.submitClick} className="startBtn">
              <p><span className="startBtn2">CLICK</span> TO START</p>
            </button>
          </div>
    );
  }

  P1_code(){
    return(
      <div className="page2">
        <p className="hh1">YOUR PARTY CODE IS</p>
        <p className="code">{this.state.code}</p>
        <Link to={"/playList/"+this.state.code}>
          <p className="enter">ENTER</p>
          <img src={arrow} className="arrow"/>
        </Link>
      </div>
    );
  }

  Change(){
    if(this.state.isCode){
      return this.P1_code()
    } else if(!this.state.isCode){
      return this.P1_re()
    }
  }

  render(){
    return(
      this.Change()
    );
  }
}

export default RightScreen;
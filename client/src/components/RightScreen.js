import React, {Component, useEffect} from 'react';
import record from '../img/recordboard.png';
import {Animated} from "react-animated-css";
import arrow from '../img/arrow.png';
import arrow_h from '../img/arrow_hover.png';

import '../App.css';

//import 'animate.css/animate.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

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
      <div className="record">
        <Animated animationIn="bounceInDown" animationOut="fadeOut" > 
          <img src={record} className="recordSpin"/>
        </Animated>
        <div className="startBtn">
         <p><button type = "submit" onClick={this.submitClick} className="startBtn2">CLICK</button> TO START</p>
        </div>
      </div>
  );
  }

  P1_code(){
    return(
      <div className="page2">
        <p className="hh1">YOUR PARTY CODE IS</p>
        <p className="code">{this.state.code}</p>
        <Link to="/page2/123 456/page3">
          <p className="enter">ENTER</p>
          <img src={arrow} onMouseOver={this.arrow_h} className="arrow"/>
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
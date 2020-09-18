import React, {Component, useEffect} from 'react';
import record from '../img/recordboard.png';
import {Animated} from "react-animated-css";

import '../App.css';

//import 'animate.css/animate.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

const axios = require('axios');

async function printAllText(){
  await printText("hi");
  await printText("everyone");
}

function printText(text){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(text);
      resolve();
    },1000);
  });
}


class P1_re extends Component {
  constructor(props){
    super(props);
    this.state={
      isCode : false,
      code : null,
      codeClick:false,
    }
  }

 /*  getCo(props){
    fetch('http://localhost:8080/main/make')
    .then(res => res.json())
    .then(data => props.setState({isCode : data.isCode, code: data.code}));
  } */

  submitClick = async e => {
    axios.post('/main/make', {
    })
    .then(res => {
      this.setState({isCode : res.data.isCode, code: res.data.code})
    })
  }

  render(){
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
}

export default P1_re;
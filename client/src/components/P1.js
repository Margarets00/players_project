import React, {Component, useEffect} from 'react';
import {Animated} from "react-animated-css";

import '../App.css';

//import 'animate.css/animate.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';




class P1 extends Component {
  render(){
    return(
      <div className="Page1">
        <div className="bg1">
          
          <div className="first">
            <div className="p1">
              <p>ANYONE</p>
              <p>CAN</p>
              <p>BE A DJ</p>
            </div>
            <div className="pn1">
              <p>ANYONE</p>
              <p>CAN</p>
              <p>BE A DJ</p>
            </div>
          </div>
          <div className="second">
            <div className="p2">
              <p>NOW, STOP</p>
              <p>FIGHTING FOR</p>
              <p>SELECTION</p>
            </div>
            <div className="pn2">
              <p>NOW, STOP</p>
              <p>FIGHTING FOR</p>
              <p>SELECTION</p>
            </div>
          </div>
          <div className="p3">
            <p>PLAYuS</p>
          </div>
          <div className="pn3">
            <p>PLAYuS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default P1;
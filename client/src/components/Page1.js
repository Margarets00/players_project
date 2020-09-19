import React, {Component, useEffect} from 'react';
import P1 from './P1';
import axios from 'axios';
import arrow from '../img/arrow.png';
import arrow_h from '../img/arrow_hover.png';
import record from '../img/recordboard.png';
import RightScreen from './RightScreen';

import '../App.css';

//import 'animate.css/animate.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';



class Page1 extends Component {
  constructor(props){
    super(props);
    this.state={
    } ;
  }


  render(){
    return(
      <div className="Page1">
        <RightScreen/>
        <P1/>
      </div>
    );
  }
}

export default Page1;
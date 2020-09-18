import React, {Component, useEffect} from 'react';
import P1 from './P1';
import P1_re from './P1_re'
import P1_code from './P1_code';
import axios from 'axios';

import '../App.css';

//import 'animate.css/animate.css'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';



function CodeHave(){
  return(
    <P1_code/>
  );
}

function CodeHaveNot(){
  return(
      <P1_re/>
    );
}

function RightScreen(props){
  if(props.isCode){
    return <CodeHave/>
  } else if(!props.isCode){
    return <CodeHaveNot/>
  }
}


class Page1 extends Component {
  constructor(props){
    super(props);
    this.state={
      isCode : false,
      code : null
    } ;
  }


  componentDidMount() {
    
  }

  render(){
    return(
      <div className="Page1">
        <RightScreen
        ></RightScreen>
        <P1></P1>
      </div>
    );
  }
}

export default Page1;
import React, {Component} from 'react';
import '../App.css';
import arrow from '../img/arrow.png';
import arrow_h from '../img/arrow_hover.png';

import { Link } from 'react-router-dom';

class P1_code extends Component {
  render(){
    return(
          <div className="page2">
            <p className="hh1">YOUR PARTY CODE IS</p>
            <p className="code">ddd</p>
            <Link to="/page2/123 456/page3">
              <p className="enter">ENTER</p>
              <img src={arrow} onMouseOver={this.arrow_h} className="arrow"/>
            </Link>
          </div>
    );
  }
}

export default P1_code;
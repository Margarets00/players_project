import React, {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      id:null,
    };
  }

  render(){
    return(
      <div className="APP">
        <Route path="/" component={Page1} exact/>
        <Switch>
        <Route path="/playList/:data" component={Page2}/>
        <Route path="/playList" component={Page2}/>
        </Switch>
      </div>
    );
  }
}

export default App;
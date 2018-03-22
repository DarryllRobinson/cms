import React, { Component } from 'react';
//import { Link, HashRouter as Router, Route, browserHistory } from 'react-router-dom';

import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';

//import Menu from './Menu';
import Landing from './Landing';
//import Employee from './Employee';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link to="/" className="logo">
              <img src='../img/fcm_logo.jpg' alt="logo" />
            </Link>
          </header>
          <Route exact path="/" component={Landing} />
          {/*<Route path="/menus/:id" component={Menu} />
          <Route path="/employees/:id" component={Employee} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import { Link, HashRouter as Router, Route, browserHistory } from 'react-router-dom';

import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';

import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      images: [
        {
          id: '0',
          uri: './Components/Images/coca-cola.jpg',
          title: 'coca-cola'
        }
      ]
    }

    this.getUsers = this.getUsers.bind(this);*/

  }





    /*  const images = [
        './Components/Images/coca-cola.jpg',
        './Components/Images/nandos.png',
        './Components/Images/nike.jpg',
        './Components/Images/tesla.jpg'
      ];

      const Slideshow = () => {
        return (
            <Fade
              images={images}
              duration={5000}
              transitionDuration={1000}
            />
          )
        }*/



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link to="/" className="logo">
              <img src='../img/fcm_logo.jpg' alt="logo" />
            </Link>
          </header>
          <Route exact path="/" component={Display} />
          {/*this.Slideshow}
          {<Route path="/menus/:id" component={Menu} />
          <Route path="/employees/:id" component={Employee} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

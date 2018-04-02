import React, { Component } from 'react';
//import { Link, HashRouter as Router, Route, browserHistory } from 'react-router-dom';

import { Switch, Redirect, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';

import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          id: '0',
          uri: './Components/Images/coca-cola.jpg',
          title: 'coca-cola'
        }
      ],
      videos: [
        {
          autoPlay: true,
          type: "video/mp4",
          src: "../img/17AW_Social_IG_RT_PUMA_Phenom_1080x1080px_Content-Calendar_23November.mp4",
          title: "Test-1"
        }
      ]
    }

    /*this.getUsers = this.getUsers.bind(this);*/

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/*}<header>
            <Link to="/" className="logo">
              <img src='../img/fcm_logo.jpg' alt="logo" />
            </Link>
          </header>*/}
          {console.log('this.state.videos.src: ', this.state.videos[0].src)}
          <Route exact path="/" render={(props) => {
            <Display source={this.state.videos[0].src} />
          }} />
          {/*this.Slideshow}
          <User user={this.state.users[0].username} fname={this.state.users[0].firstname}/>
          {<Route path="/menus/:id" component={Menu} />
          <Route path="/employees/:id" component={Employee} />

          <Route exact path="/details/:id" render={(props)=>{
    <DetailsPage id={props.match.params.id}/>
}} />

          */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

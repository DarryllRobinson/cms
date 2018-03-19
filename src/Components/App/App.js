import React, { Component } from 'react';
import './App.css';
import User from '../User/User';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {name: 'Darryll'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Flying Crow Media Content Management System</h1>
        </header>

          {console.log('this.state.user[0].name: ', this.state.user[0].name)}
          <User user={this.state.user[0].name} />
          
      </div>
    );
  }
}

export default App;

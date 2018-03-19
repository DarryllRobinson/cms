import React, { Component } from 'react';
import './App.css';
import User from '../User/User';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: '',
          username: '',
          f_irstname: '',
          s_urname: '',
          e_mail: '',
          is_current_user: 0
        }
      ]
    }

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    //console.log('this.getUsers(): ', this.getUsers());/*
    console.log("componentDidMount 1");
    this.getUsers();
    console.log("componentDidMount 2");/*
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));*/
  }

  async getUsers(){
    console.log('In getUsers');
    try{
      //console.log('Trying');
      let response = await fetch('http://localhost:3000/api/users');
      //console.log('response: ', response);
      if (response.ok) {
        //console.log('response is ok');
        let jsonResponse = await response.json();
        console.log('jsonResponse.users[0].username: ', jsonResponse.users[0].username);

        console.log('Checking state 1: ', this.state.users);
        this.setState({ users: { username: jsonResponse.users[0].username }} );
        console.log('Checking state 2: ', this.state.users);

        //this.setState((prevState, response) => { return });
        //this.setState((prevState, props) => { return { count: prevState.count + 1 } });
        //return jsonResponse;
        return;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  // ************** Stuff deleted from render()
  /*

    {console.log('this.state.user[0].name: ', this.state.user[0].name)}

    <User user={this.state.users[0].username} />

  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Flying Crow Media Content Management System</h1>
        </header>
        {console.log('this.state.users[0].username: ', this.state.users[0].username)}

      </div>
    );
  }
}

export default App;

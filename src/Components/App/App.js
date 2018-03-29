import React, { Component } from 'react';
import './App.css';
import User from '../User/User';
import Content from '../Content/Content';
//import Image from '../Image/Image';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: '0',
          username: 'username_0',
          firstname: 'firstname_0',
          surname: 'surname_0',
          email: 'email_0',
          is_current_user: 0
        },
        {
          id: '1',
          username: 'username_1',
          firstname: 'firstname_1',
          surname: 'surname_1',
          email: 'email_1',
          is_current_user: 0
        }
      ],
      contents: [
        {
          id: '0',
          category: 'd_cat_0',
          subcategory: 'd_sub_0',
          placeholder: 'd_place_0',
          user_id: 0
        },
        {
          id: '1',
          category: 'd_cat_1',
          subcategory: 'd_sub_1',
          placeholder: 'd_place_1',
          user_id: 0
        }
      ]
    }

        this.getUsers = this.getUsers.bind(this);
        this.getContents = this.getContents.bind(this);
  }

  componentDidMount() {
    console.log('Mounting');
    this.getUsers();
    this.getContents();
  }

  async getUsers(){
    try{
      console.log('About to try');
      let response = await fetch('http://localhost:3000/api/users');
      if (response.ok) {
        let jsonResponse = await response.json();

        let a = this.state.users.slice(); //creates the clone of the state
        // Need to update to iterate instead of stupid code the thing
        a[0].username = jsonResponse.users[0].username;
        a[0].firstname = jsonResponse.users[0].firstname;
        a[0].surname = jsonResponse.users[0].surname;
        a[0].email = jsonResponse.users[0].email;
        this.setState((prevState, props) => {
          return {
            // Need to update to .push() into the array
            users: a
          }
        });
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  async getContents(){
    try{
      let response = await fetch('http://localhost:3000/api/contents');
      if (response.ok) {
        let jsonResponse = await response.json();

        let a = this.state.contents.slice(); //creates the clone of the state
        // Need to update to iterate instead of stupid code the thing
        a[0].category = jsonResponse.contents[0].category;
        a[0].subcategory = jsonResponse.contents[0].subcategory;
        a[0].placeholder = jsonResponse.contents[0].placeholder;
        a[0].user_id = jsonResponse.contents[0].user_id;

        a[1].category = jsonResponse.contents[1].category;
        a[1].subcategory = jsonResponse.contents[1].subcategory;
        a[1].placeholder = jsonResponse.contents[1].placeholder;
        a[1].user_id = jsonResponse.contents[1].user_id;

        this.setState((prevState, props) => {
          return {
            // Need to update to .push() into the array
            contents: a
          }
        });
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Flying Crow Media Content Management System</h1>
        </header>
        <User user={this.state.users[0].username} fname={this.state.users[0].firstname}/>
        <Content category={this.state.contents[0].category} ptext={this.state.contents[0].placeholder}/>
        <Content category={this.state.contents[1].category} ptext={this.state.contents[1].placeholder}/>
      </div>
    );
  }
}

export default App;

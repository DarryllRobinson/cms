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
          f_irstname: 'f_irstname_0',
          s_urname: 's_urname_0',
          e_mail: 'e_mail_0',
          is_current_user: 0
        },
        {
          id: '1',
          username: 'username_1',
          f_irstname: 'f_irstname_1',
          s_urname: 's_urname_1',
          e_mail: 'e_mail_1',
          is_current_user: 0
        }
      ],
      contents: [
        {
          id: '0',
          c_ategory: 'd_cat_0',
          s_ubcategory: 'd_sub_0',
          p_laceholder: 'd_place_0',
          u_ser_id: 0
        },
        {
          id: '1',
          c_ategory: 'd_cat_1',
          s_ubcategory: 'd_sub_1',
          p_laceholder: 'd_place_1',
          u_ser_id: 0
        }
      ]
    }

        this.getUsers = this.getUsers.bind(this);
        this.getContents = this.getContents.bind(this);
  }

  componentDidMount() {
    this.getUsers();
    this.getContents();
  }

  async getUsers(){
    try{
      let response = await fetch('http://localhost:3000/api/users');
      if (response.ok) {
        let jsonResponse = await response.json();

        let a = this.state.users.slice(); //creates the clone of the state
        // Need to update to iterate instead of stupid code the thing
        a[0].username = jsonResponse.users[0].username;
        a[0].f_irstname = jsonResponse.users[0].f_irstname;
        a[0].s_urname = jsonResponse.users[0].s_urname;
        a[0].e_mail = jsonResponse.users[0].e_mail;
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
        a[0].c_ategory = jsonResponse.contents[0].c_ategory;
        a[0].s_ubcategory = jsonResponse.contents[0].s_ubcategory;
        a[0].p_laceholder = jsonResponse.contents[0].p_laceholder;
        a[0].u_ser_id = jsonResponse.contents[0].u_ser_id;

        a[1].c_ategory = jsonResponse.contents[1].c_ategory;
        a[1].s_ubcategory = jsonResponse.contents[1].s_ubcategory;
        a[1].p_laceholder = jsonResponse.contents[1].p_laceholder;
        a[1].u_ser_id = jsonResponse.contents[1].u_ser_id;

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
        <User user={this.state.users[0].username} fname={this.state.users[0].f_irstname}/>
        <Content category={this.state.contents[0].c_ategory} ptext={this.state.contents[0].p_laceholder}/>
        <Content category={this.state.contents[1].c_ategory} ptext={this.state.contents[1].p_laceholder}/>
      </div>
    );
  }
}

export default App;

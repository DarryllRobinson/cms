import React from 'react';
//import './User.css';

class User extends React.Component {
  render() {
    return (
      <div className="User">
        <p>The user name is: {this.props.user}</p>
        <p>The first name is: {this.props.fname}</p>
      </div>
    );
  }
}

export default User;

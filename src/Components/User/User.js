import React from 'react';
//import './User.css';

class User extends React.Component {
  render() {
    return (
      <div className="User">
        {console.log('this.props.user: ', this.props.user)}
        <p>The user name is: {this.props.user}</p>
      </div>
    );
  }
}

export default User;

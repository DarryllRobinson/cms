import React from 'react';
//import './User.css';

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <p>The category is: {this.props.category}</p>
        <p>The placeholder text is: {this.props.ptext}</p>
      </div>
    );
  }
}

export default Content;

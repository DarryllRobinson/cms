import React from 'react';
import pic from '../images/tesla-model-3-980x620.jpg';
//import './User.css';

class Image extends React.Component {
  render() {
    return (
      <div className="Image">
        <p>{pic}}</p>
      </div>
    );
  }
}

export default Image;

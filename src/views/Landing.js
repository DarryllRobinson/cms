import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Fcm from '../utils/Fcm';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    Fcm.getContents().then(contents => {
      if (contents.length) {
        const sortedContents = this.sortItemNames(contents, 'title');
        //console.log('sortedContents: ', sortedContents);
        this.setState((prevState, props) => {
          return {
            // Need to update to .push() into the array
            contents: sortedContents
          }
        });
      }
    });
  }

  sortItemNames(items, field) {
    return items.sort((item1, item2) => {
      if (item2[field].toLowerCase() < item1[field].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  renderContents() {
    //console.log('this.state.contents: ', this.state.contents);
    return this.state.contents.map(content => {
      return (
        <Link to={`/contents/${content.id}`}
           className="item"
           key={content.id}>
           <h3>{content.title}</h3>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="Landing">
        {/*}<h2>Welcome to the Flying Crow Media Content Management System</h2>*/}
        <h2>CONTENTS</h2>
        <div className="content item-list">
          {this.renderContents()}
        </div>
        <Link to="/contents/new" className="button">ADD</Link>
      </div>
    );
  }

}

export default Landing;

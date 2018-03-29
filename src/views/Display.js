import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import Fcm from '../utils/Fcm';
import Slideshow from '../utils/Slideshow';

class Display extends Component {
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
      <div className="Display">
        <div className="content item-list">
          {/*<img src='../img/coca-cola.jpg' alt="logo" />*/}
          <Slideshow />
          <Fade images="../img/coca-cola.jpg"/>
        </div>
      </div>
    );
  }

}

export default Display;

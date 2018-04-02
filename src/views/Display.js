import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import Fcm from '../utils/Fcm';
import Slideshow from '../utils/Slideshow';
import Player from '../Components/Player/Player.js';
//import "../../node_modules/video-react/dist/video-react.css";

class Display extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      images: [
        {
          id: 0,
          uri: "../img/coca-cola.jpg",
          title: 'coca-cola'
        }
      ]
    };*/
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
        {/*<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />
          <img src={this.props.uri} alt="coca-cola"/>
          {console.log('this.props.uri: ', this.props.uri)}
          <img src='../img/tesla.jpg' alt="logo" />
          <video className="video-container video-container-overlay" autoplay="" loop="" muted="" data-reactid=".0.1.0.0">
            <source type="video/mp4" data-reactid=".0.1.0.0.0" src="../img/FCM-BB-Low.mp4" />
          </video>*/}
          <Player>
            {/*<source  src="../img/FCM-BB-Low.mp4" autoPlay />*/}
          </Player>
          {/*<Slideshow />
          <Fade images="../img/coca-cola.jpg"/>*/}
        </div>
      </div>
    );
  }

}

export default Display;

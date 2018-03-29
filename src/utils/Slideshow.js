import React from 'react';
import { Fade } from 'react-slideshow-image';

const images = [
  '../img/coca-cola.jpg',
  '../img/nandos.png',
  '../img/nike.jpg',
  '../img/tesla.jpg'
];

const Slideshow = () => {
    return (
        <Fade
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
    )
}

export default Slideshow;

// components/ImageCarousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <section id='home'>
    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
      <div>
        <img src='./images/img1.jpg' alt='Image1' />
      </div>
      <div>
        <img src='./images/img2.jpg' alt='Image2' />
      </div>
      <div>
        <img src='./images/img3.jpg' alt='Image3' />
      </div>
      <div>
        <img src='./images/img4.jpg' alt='Image4' />
      </div>
      <div>
        <img src='./images/img5.jpg' alt='Image5' />
      </div>
    </Carousel>
    </section>
  );
}

export default ImageCarousel;

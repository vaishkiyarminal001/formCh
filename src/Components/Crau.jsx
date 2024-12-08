import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Crau.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import c1 from './Assets/c1.png';
import c2 from './Assets/c2.png';
import c3 from './Assets/c3.png';
import c4 from './Assets/c4.png';

const Crau = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={3000} pause="hover">
        <Carousel.Item>
          <img className="carousel-image" src={c1} alt="SEO" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c2} alt="Social Media" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c3} alt="Code Example" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c4} alt="Programming" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crau;

import React from 'react';
import './home2.css';
import Carousel from 'react-bootstrap/Carousel';

const HomeTwo = () => {
    return (
      <React.Fragment >
      <div className='ourServices'><h2>My Skills</h2><p>Move through the slider to read about my skills</p></div>
      <div>
 <Carousel>
  <Carousel.Item>
    <img
      className='carousel-item'
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="First slide"
    />
    <Carousel.Caption className='aA'>
      <h1>Eat</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='carousel-item'
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption className='aA'>
      <h1>Sleep</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='carousel-item'
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption className='aA'>
      <h1>Rave</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='carousel-item'
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption className='aA'>
      <h1>Repeat</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className='carousel-item'
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption className='aA'>
      <h1>∞</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div>
  
</div>
</React.Fragment>

    )
}

export default HomeTwo;
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Image from '../resources/p2.jpg';

const slideImages = [
  {
    url: '../src/resources/Clicks/1.jpeg',
    caption: 'Slide 1'
  },
  {
    url: 'https://atifmoin19.github.io/PORTFOLIO//resources/Clicks/images/1.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://atifmoin19.github.io/PORTFOLIO//resources/images/Screenshot%202022-01-31%20174707.png',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='Imgheight' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;
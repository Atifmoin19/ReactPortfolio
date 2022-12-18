import React from 'react';
import slideImages from './Photodata';



const Slideshow = () => {
    return (
        <div className='pgd'>
        <h1>Photography</h1>
      <div className="slide-container">
      
        <div className='slideshow'>
         {slideImages.map((slideImage, index)=> (
            <div className="Maincard">
            <div className='Card2' key={index}>
                <div className='image2'>
            <img src={slideImage.url}/>
            <h2>{slideImage.caption}</h2>
                </div>
               
                </div>
                </div>
          
          ))} 
        </div>
      </div>
      </div>
    )
}
export default Slideshow;
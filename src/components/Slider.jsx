import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slider.css"
import img1 from "../resources/Clicks/1.jpeg"
import img2 from "../resources/Clicks/2.jpeg"
import img3 from "../resources/Clicks/3.jpeg"
import img4 from "../resources/Clicks/4.jpeg"
import img5 from "../resources/Clicks/5.jpeg"
import img6 from "../resources/Clicks/6.jpeg"
import img7 from "../resources/Clicks/7.jpeg"
import img8 from "../resources/Clicks/8.jpeg"
import img9 from "../resources/Clicks/9.jpeg"
import img10 from "../resources/Clicks/10.jpeg"
import img11 from "../resources/Clicks/11.jpeg"
import img12 from "../resources/Clicks/6.jpeg"
import img13 from "../resources/Clicks/13.jpeg"
import img14 from "../resources/Clicks/14.jpeg"
import img15 from "../resources/Clicks/15.jpeg"
import img16 from "../resources/Clicks/16.jpeg"
import img17 from "../resources/Clicks/17.jpeg"
import img18 from "../resources/Clicks/18.jpeg"
import img19 from "../resources/Clicks/19.jpeg"
import img20 from "../resources/Clicks/20.jpeg"
import img21 from "../resources/Clicks/21.jpeg"


export default class SimpleSlider extends Component {
  render() {
    var settings = {
      className:"box",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
        speed:1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        useTransform:true,
        responsive: [
            {
              breakpoint: 1032,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
      
      };
    return (
        <>
           <div className='HeadingForm'>
            <h1>Image Galery</h1>
        </div>
        
      <div className="slidershadow">
    
        <Slider {...settings}>
          <div>
            <div className="Services_card">
                <img src={img1} alt="" />
            </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img2} alt="" />
          </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img3} alt="" />
          </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img4} alt="" />
          </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img5} alt="" />
          </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img7} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img8} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img9} alt="" />
          </div>
          </div>
          <div>
          <div className="Services_card">
          <img src={img10} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img11} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img12} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img13} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img14} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img15} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img16} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img17} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img18} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img19} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img20} alt="" />
          </div>
          </div>

          <div>
          <div className="Services_card">
          <img src={img21} alt="" />
          </div>
          </div>
        </Slider>
      </div>
      </>
    );
  }
}
import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'
import contentimage1 from './divitheme-rebel-1-480x299.png'
import contentimage2 from './coral-divi-child-theme.png'
import contentimage3 from './divi-theme-collaborate-01-480x299.png'
import contentimage4 from './divi-theme-engage-480x299.png'

export default class SlideChangeHooks extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
            <img src={contentimage1} alt="image" className=""/>
            </h3>
          </div>
          <div>
            <h3>
            <img src={contentimage2} alt="image" className=""/>
            </h3>
          </div>
          <div>
            <h3>
            <img src={contentimage3} alt="image" className=""/>
            </h3>
          </div>
          <div>
            <h3>
            <img src={contentimage4} alt="image" className=""/>
            </h3>
          </div>
         
        </Slider>
      </div>
    );
  }
}
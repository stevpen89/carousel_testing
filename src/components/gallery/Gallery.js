import React, { Component } from 'react'
import './Gallery.css';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'https://s3-us-west-1.amazonaws.com/parchmentgoods/home-page/carousel/Front_Photo_3.jpg',
  'https://s3-us-west-1.amazonaws.com/parchmentgoods/home-page/print_banner.jpg',
  'https://s3-us-west-1.amazonaws.com/parchmentgoods/home-page/holiday_blanket_banner.jpg',
  'https://s3-us-west-1.amazonaws.com/parchmentgoods/home-page/carousel/Flat_Missionary_Journals.jpg',
  'https://s3-us-west-1.amazonaws.com/parchmentgoods/home-page/carousel/Standing-Everyday_Journals.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
          <h2>Fourth Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
          <h2>Fifth Slide</h2>
        </div>
      </Fade>
    </div>
  )
}


export default class Gallery extends Component {
	render() {
		return (
			<div>
				<p>Hello There!</p>
        {slideshow()}
			</div>
		)
	}
}

import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";


const Menu = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What they are saying</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed architecto adipisci quia illum. Excepturi, facilis sunt? Vero libero voluptates sequi.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus reiciendis, nemo voluptatibus voluptatem exercitationem eos perferendis possimus recusandae aliquid cumque.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
            </div>
            <h2>kwame</h2>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus reiciendis, nemo voluptatibus voluptatem exercitationem eos perferendis possimus recusandae aliquid cumque.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
            </div>
            <h2>kwame</h2>
        </div>
        
    </div>
  )
}


export default Menu;

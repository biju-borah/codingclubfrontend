import React from 'react'
import AngleBottomDivider from '../utils/AngleBottomDivider'
import AngleTopDivider from '../utils/AngleTopDivider'
import './style.css'

function About() {
  return (

    <div className='about_shape_bg'>
      <AngleBottomDivider />
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
          <div className="title_default_dark title_border text-center">
            <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>About Coding Club</h4>
            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Almost everything today runs on code. Coding is one of the most essential skills for an engineer. With the same outlook in mind, the coding club strives to teach the students to code. It trains students in the commonest languages from beginner to advanced levels. NIT Silchar proudly flaunts some of the best coders in the nation.
            </p>
            <button className="button animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>Read More</button>
          </div>
        </div>
      </div>
      <AngleTopDivider />
    </div>
  )
}

export default About
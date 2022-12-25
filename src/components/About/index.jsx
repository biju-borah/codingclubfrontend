import React from 'react'
import './style.css'

function About() {
  return (
    <div className='about_shape_bg'>
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
          <div className="title_default_dark title_border text-center">
            <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>About The Cryptocash</h4>
            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Cryptocash is one of the most transformative
              technologies since the invention of the Internet. Cryptocash stands firmly in support of
              financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily
              participate in a permissionless and decentralized network.</p>
            <a href="https://bestwebcreator.com/cryptocash/demo/about.html" className="btn btn-info box_shadow animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
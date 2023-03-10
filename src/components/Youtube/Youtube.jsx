import React from 'react'
import YoutubeCard from '../utils/YoutubeCard'
import './style.css'

function Youtube() {
    return (
        <div className='youtube_bg'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="title_default_dark title_border text-center">
                            <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Our Youtube</h4>
                            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Almost everything today runs on code. Coding is one of the most essential skills for an engineer. With the same outlook in mind, the coding club strives to teach the students to code. It trains students in the commonest languages from beginner to advanced levels. NIT Silchar proudly flaunts some of the best coders in the nation.
                            </p>

                            {/* <button className="button animation animated fadeInUp mt-3" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>Explore More</button> */}

                        </div>
                    </div>
                    <div className="row align-items-center justify-content-around g-0">
                        <div className="col-lg-4 col-md-8 col-sm-8 yt-card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dZbU19tD0qA" allowFullScreen></iframe>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-8 col-sm-8 yt-card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dZbU19tD0qA" allowFullScreen></iframe>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube
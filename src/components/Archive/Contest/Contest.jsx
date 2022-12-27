import React from 'react'
import WaveDivider from '../../utils/WaveDivider'
import './style.css'

function Contest() {
    return (
        <div className='contest_bg section_gradiant3'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="title_default_light title_border text-center">
                            <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Coding Archive</h4>
                            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Almost everything today runs on code. Coding is one of the most essential skills for an engineer. With the same outlook in mind, the coding club strives to teach the students to code. It trains students in the commonest languages from beginner to advanced levels. NIT Silchar proudly flaunts some of the best coders in the nation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="big_card text-center animation animated fadeIn" data-animation="fadeIn" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid p-5" alt="card" />
                        </div>
                    </div>
                </div>
            </div>
            <WaveDivider />
        </div>
    )
}

export default Contest
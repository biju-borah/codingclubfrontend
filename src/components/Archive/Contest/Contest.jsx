import React from 'react'
import WaveDivider from '../../utils/WaveDivider'
import './style.css'
import codejutsu from '../../../assets/contest/codejutsu.jpg'

function Contest() {
    return (
        <div className='contest_bg section_gradiant3'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                        <div className="title_default_light title_border text-center">
                            <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Coding Archive</h4>
                            <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Welcome to our Contest Archive section, where we showcase past coding contests and challenges that our club has organized or participated in. These contests provide a great opportunity for our members to test their coding skills, compete with others, and win exciting prizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center contest_card">
                    <div className="col-lg-3">
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <img src={codejutsu} className="card-img-top img-fluid" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <img src="/src/assets/contest/nibble.jpg" className="card-img-top img-fluid" alt="card" />
                        </div>
                        {/* <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid" alt="card" />
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="big_card text-center animation animated fadeIn" data-animation="fadeIn" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/src/assets/logo-full.png" className="card-img-top img-fluid" alt="card" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>
                            <img src="/src/assets/contest/nitshack.jpg" className="card-img-top img-fluid" alt="card" />
                        </div>
                        <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>
                            <img src="/src/assets/contest/zeroth.jpg" className="card-img-top img-fluid" alt="card" />
                        </div>
                        {/* <div className="card text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: "0.6s", opacity: "1" }}>
                            <img src="/vite.svg" className="card-img-top img-fluid" alt="card" />
                        </div> */}
                    </div>
                </div>
            </div>
            <WaveDivider />
        </div>
    )
}

export default Contest
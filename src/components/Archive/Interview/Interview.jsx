import React from 'react'
import InterviewCard from '../../utils/InterviewCard'
import './style.css'

function Interview() {
    return (
        <div className='interview_body section_gradiant'>
            <div className="row align-items-center">
                <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                    <div className="title_default_light title_border text-center">
                        <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: "0.2s", opacity: "1" }}>Interview Archive</h4>
                        <p className="animation animated fadeInUp px-2" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Welcome to our Interview Experience section, where we feature experiences and tips from our club members who have been placed in top MNCs. These interviews provide valuable insights for our members who are preparing for job interviews and seeking to improve their coding skills.
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="card" style={{ width: "18rem", height: '20rem', backgroundColor: "rgba(255,255,255,0.10)" }}>
                                <a href='https://www.youtube.com/watch?v=UGAiA11gaW0&t=10s'><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" className="card-img-top img-fluid p-5" alt="card" /></a>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card" style={{ width: "18rem", height: '20rem', backgroundColor: "rgba(255,255,255,0.10)" }}>
                                <a href='https://docs.google.com/presentation/d/1xPniJW9W9-LlB-RwZ_b_EC33cO1P16vL8dDmFFE2T9g/edit?fbclid=IwAR2uZFcg4pbTCgPI0B7o89NzXfMvolt0J24LHRseCj8x_IUJXTR7hHvaIaE#slide=id.g13ea21ce5be_0_3572'><img src="https://cdn.freebiesupply.com/logos/large/2x/samsung-4-logo-png-transparent.png" className="card-img-top img-fluid p-5" alt="card" /></a>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card" style={{ width: "18rem", height: '20rem', backgroundColor: "rgba(255,255,255,0.10)" }}>
                                <a href='https://docs.google.com/presentation/d/1gD1QfYIoLifqxUIX4N3yNnIkRQ1ZCREs_lrqWzVahZs/edit?fbclid=IwAR0-IMgS004fFWxZL6xraBLa6i_Sfn9plwk77ENzzbX0kdWBELuk7YeyeXo#slide=id.g13ea21ce5be_0_3412'><img src="https://img.freepik.com/free-icon/windows_318-674257.jpg" className="card-img-top img-fluid p-5" alt="card" /></a>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interview
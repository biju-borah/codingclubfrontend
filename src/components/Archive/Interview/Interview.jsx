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
                        <p className="animation animated fadeInUp px-2" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: "0.4s", opacity: "1" }}>Almost everything today runs on code. Coding is one of the most essential skills for an engineer. With the same outlook in mind, the coding club strives to teach the students to code. It trains students in the commonest languages from beginner to advanced levels. NIT Silchar proudly flaunts some of the best coders in the nation.
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <InterviewCard />
                        </div>
                        <div className='col-md-4'>
                            <InterviewCard />
                        </div>
                        <div className='col-md-4'>
                            <InterviewCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interview
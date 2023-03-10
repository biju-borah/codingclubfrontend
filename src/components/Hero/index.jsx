import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import './style.css'

export default function Hero() {

    return (
        <section className="section_banner section_gradiant3 overflow_hide" style={{ height: 'calc(100vh + 100px)' }}>
            <canvas id="banner_canvas" className="transparent_effect" width="1233" height="601"></canvas>
            <div id="hero" className="landing-main">
                <h1 data-aos="fade-up" className="name aos-init aos-animate" style={{ zIndex: '10' }}>Coding Club</h1>
                <div data-aos="fade-up" className="name-2 aos-init aos-animate" style={{ zIndex: '10' }}>
                    {/* <div className=" Typewriter" data-testid="typewriter-wrapper" style={{ fontFamily: 'monospace' }}>Coding is <span
                        className="Typewriter__wrapper"></span><span className="Typewriter__cursor cursor"> </span></div> */}
                    <TypeAnimation sequence={[
                        'Coding is Love',
                        2500,
                        'Coding is Fun',
                        2500,
                        'Coding is a journey',
                        2500,
                        'Coding is Life',
                        2500,
                    ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontFamily: 'monospace' }} />
                </div>

                <div className='socialHandle'>
                    <div className='socialIcon'>
                        <a href="#" target="_blank"><img src="/logos/linkedin.svg" alt="linkedin" /></a>
                    </div>
                    <div className='socialIcon'>
                        <a href="#" target="_blank"><img src="/logos/facebook.svg" alt="facebook" /></a>
                    </div>
                    <div className='socialIcon'>
                        <a href="#" target="_blank"><img src="/logos/instagram.svg" alt="instagram" /></a>
                    </div>
                    <div className='verticalLine'></div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { useEffect } from 'react'
import './style.css'

export default function Hero() {
    return (
        <section className="section_banner section_gradiant3 overflow_hide" style={{ height: '100vh' }}>
            <div id="hero" className="landing-main">
                <h1 data-aos="fade-up" className="name aos-init aos-animate" style={{ zIndex: '10' }}>Coding Club</h1>
                <div data-aos="fade-up" className="name-2 aos-init aos-animate" style={{ zIndex: '10' }}>
                    <div className=" Typewriter" data-testid="typewriter-wrapper" style={{ fontFamily: 'monospace' }}>Coding is <span
                        className="Typewriter__wrapper"></span><span className="Typewriter__cursor cursor"> </span></div>
                </div>
            </div>
            <canvas id="banner_canvas" className="transparent_effect" width="1233" height="601"></canvas>

        </section>
    )
}
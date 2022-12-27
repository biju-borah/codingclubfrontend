import React from 'react'
import './style.css'

function Footer() {
    return (
        <footer className='section_gradiant3'>
            <div className="top_header">
                <section>
                    <span><i className="fa fa-map-marker"></i></span>
                    <span>QQ5R+3WM, Fakiratilla, Silchar, Assam, 788010</span>
                </section>
                <section>
                    <span><i className="fa fa-phone"></i></span>
                    <span>(+91) 0000 0000</span>
                </section>
                <section>
                    <span><i className="fa fa-envelope"></i></span>
                    <span>codingclub@nits.ac.in</span>
                </section>
            </div>
            <span className="border-shape"></span>
            <div className="bottom_content">
                <section>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-telegram"></i></a>
                </section>
                <section>
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Article</a>
                    <a href="#">Hall of fame</a>
                    <a href="#">Alumni</a>
                    <a href="#">Our team</a>
                </section>
            </div>
            <div className="copyright">
                Copyright © CodingClub 2022 - All rights reserved
            </div>
        </footer>
    )
}

export default Footer
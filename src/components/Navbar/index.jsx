import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

function Navbar() {

    const [active, setactive] = useState(false)
    useEffect(() => {
        window.onscroll = function () {
            "use strict";
            if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
                setactive(true)
            }
            else {
                setactive(false)
            }
        };
    }, [])

    return (
        <nav className={active ? "navbar navbar-expand-lg navbar-dark bg-dark nav-color" : "navbar navbar-expand-lg navbar-dark bg-dark nav-tran"} id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="../../assets/logo.png" alt="Bootstrap" width="30" style={{ marginLeft: '1rem' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Article</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Hall of Fame</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Alumni</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#team">Our Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
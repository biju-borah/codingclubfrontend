import React from 'react'
import './style.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light nav-tran" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="/src/assets/react.svg" alt="Bootstrap" width="30" style={{ marginLeft: '1rem' }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Article</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Hall of Fame</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Alumni</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Our Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
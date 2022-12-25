import React from 'react'
import About from '../../components/About'
import Interview from '../../components/Archive/Interview/Interview'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Youtube from '../../components/Youtube/Youtube'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Interview />
            <Youtube />
        </>
    )
}

export default Home
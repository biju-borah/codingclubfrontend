import React from 'react'
import About from '../../components/About'
import Interview from '../../components/Archive/Interview/Interview'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Interview />
        </>
    )
}

export default Home
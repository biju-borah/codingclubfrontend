import React from 'react'
import About from '../../components/About'
import Contest from '../../components/Archive/Contest/Contest'
import Interview from '../../components/Archive/Interview/Interview'
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'
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
            <Contest />
            <Faq />
            <Footer />
        </>
    )
}

export default Home
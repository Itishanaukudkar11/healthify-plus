import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import About from "../components/About";

function Home() {
    return (
        <div className='App'>
            <Navbar />
            <HeroSection />
            <Service />
            <About />
        </div>
    );
}

export default Home;
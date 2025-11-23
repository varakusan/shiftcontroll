import React, { useState, useEffect } from 'react';
import Preloader from './components/Layout/Preloader';
import Navbar from './components/Layout/Navbar';
import SmoothScroll from './components/Layout/SmoothScroll';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import WhyChooseUs from './components/Sections/WhyChooseUs';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import './styles/global.scss';

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            {/* Preloader removed for debugging */}
            <Navbar />
            <SmoothScroll>
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <WhyChooseUs />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </SmoothScroll>
        </>
    );
}

export default App;

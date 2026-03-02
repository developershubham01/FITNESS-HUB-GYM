import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Membership from './components/Membership';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import { Contact, Footer } from './components/Contact';
import FloatingActions from './components/FloatingActions';

function App() {
    return (
        <main className="relative min-h-screen bg-gym-dark text-white selection:bg-gym-accent scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <Facilities />
            <Membership />
            <Reviews />
            <Gallery />
            <Contact />
            <Footer />
            <FloatingActions />
        </main>
    );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Collection from './components/Collection';
import Technology from './components/Technology';
import Materials from './components/Materials';
import DesignProcess from './components/DesignProcess';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="editorial-app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Introduction />
        <Collection />
        <Technology />
        <Materials />
        <DesignProcess />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

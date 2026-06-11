import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Projects from '../components/Projects';
import Services from '../components/Services';
import About from '../components/About';
import Studio from '../components/Studio';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Values from '../components/Values';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ContactDrawer from '../components/ContactDrawer';

export default function Home() {
  return (
    <div className="bg-bg text-text-primary min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Slider />
        <Projects />
        <Services />
        <Slider items={[
          'Brand Strategy',
          'Visual Identity',
          'Identity Systems',
          'Digital Presence',
          'Product Interfaces'
        ]} />
        <About />
        <Studio />
        <Process />
        <Pricing />
        <Values />
        <CTA />
      </main>
      <Footer />
      <ContactDrawer />
    </div>
  );
}



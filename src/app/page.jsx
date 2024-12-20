'use client'
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

const LandingPage = () => {
  return (
    <div>
      <div className='main'>
        <div className='gradient' />
      </div>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='landing_page'>
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;

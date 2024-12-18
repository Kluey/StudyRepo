import React from 'react';
import Navbar from './components/navbar';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';

const LandingPage = () => {
  return (
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>
        <div className='navbar'>
          <Navbar />
        </div>

        <div className='landing-page'>
          {/* Landing Page Content*/}
        </div>
      </main> 
    
  );
};

export default LandingPage;

import React from 'react';
import Navbar from './components/navbar';

const LandingPage = () => {
  return (
    <main>
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

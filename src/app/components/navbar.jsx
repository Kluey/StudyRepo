'use client'
import React from 'react'
import './navbar';

const Navbar = () => {
    return (
        <header>
            <nav className='w-full flex justify-center items-center flex-col'>
                {/* <img src={logo} alt="lusby_logo" className="w-40 object-contain" /> */}

                <div className='flex items-center space-x-4'>
                    <button type="button" onClick={() => window.open('https://github.com/Kluey')} className="black_btn">
                        GitHub
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
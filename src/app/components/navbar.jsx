'use client';
import React, { useState } from 'react';

const Navbar = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <header className='w-full'>
            <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
                <div className='flex items-center space-x-8'>
                    <img src="/assets/logo.svg" alt="lusby_logo" className="w-20 object-contain" />
                </div>

                <div className='flex font-serif items-center space-x-4'>
                    <button type="button" className='rounded-full border border-black py-1.5 px-5 text-sm text-black transition-all hover:bg-black hover:text-white'>Tools</button>
                    <button
                        type="button"
                        className="black_btn flex items-center space-x-2"
                        onClick={() => window.open('https://github.com/Kluey/lusbywebsite')}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img
                            src={hovered ? "/assets/github-mark.svg" : "/assets/github-mark-white.svg"}
                            alt="github_logo"
                            className="w-6 h-6 object-contain"
                        />
                        <span>GitHub</span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

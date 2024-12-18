'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
                {/* Logo and Navigation Links */}
                <div className='flex items-center space-x-8'>
                    <img src="/assets/logo.svg" alt="lusby_logo" className="w-20 object-contain" />
                    <div className='hidden md:flex items-center space-x-6'>
                        <Link href="/pricing" className='text-gray-800 hover:text-gray-600'>
                            Pricing
                        </Link>
                        <Link href="/tools" className='text-gray-800 hover:text-gray-600'>
                            Tools
                        </Link>
                        <Link href="/contact" className='text-gray-800 hover:text-gray-600'>
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Login and Sign Up Buttons */}
                <div className='flex items-center space-x-4'>
                    <button type="button" className="rounded-full border border-black py-1.5 px-5 text-sm text-black transition-all hover:bg-black hover:text-white"  
                    onClick={() => window.open('/login')}>
                        Login
                    </button>
                    <button type="button" className="black_btn" onClick={() => window.open('/signup')}>
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

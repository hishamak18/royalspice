"use client"
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
            {/* Left side logo */}
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="text-gray-900 text-lg font-semibold">Royal Spice</span>
            </div>

            {/* Hamburger menu icon for mobile */}
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-black focus:outline-none">
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Right side nav links */}
            <ul className={`flex items-center hidden sm:inline-block z-50 lg:flex ${isMenuOpen ? 'hidden' : 'lg:block'}`}>
                <li className="mx-2">
                    <Link className=" hover:text-gray-300" href="/">
                        Home
                    </Link>
                </li>
                <li className="mx-2">
                    <Link className=" hover:text-gray-300" href="/about">
                        About
                    </Link>
                </li>
                <li className="mx-2">
                    <Link className=" hover:text-gray-300" href="/services">
                        Services
                    </Link>
                </li>
                <li className="mx-2">
                    <Link className=" hover:text-gray-300" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Overlay for small screens */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Sidebar for small screens */}
            {/* <div
                className={`fixed inset-y-0 right-0 w-64 bg-gray-900 text-white z-500 transform w-200  transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`} style={{ height: 'max-content' }}>
                <ul className="py-4">
                    <li className="px-6 py-2">
                        <Link href="/">   </Link>
                    </li>
                    <li className="px-6 py-2">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-6 py-2">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="px-6 py-2">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="px-6 py-2">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
};

export default NavBar;

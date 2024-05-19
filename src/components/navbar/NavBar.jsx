"use client"
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white p-4 flex justify-between items-center sticky top-0 z-50  border-b border-gray-200">
            {/* Left side logo */}
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
                <span className="text-gray-900 text-lg font-semibold">Royal Spice</span>
            </div>

            {/* Hamburger menu icon for mobile */}


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
                    <Link className=" hover:text-gray-300" href="/menu">
                        Menu
                    </Link>
                </li>
                <li className="mx-2">
                    <Link className=" hover:text-gray-300" href="/blog">
                        Blogs
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


        </nav>
    );
};

export default NavBar;

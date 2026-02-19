"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from './NavBar.module.css'
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='relative'>

            <nav className=" bg-amber-400  flex justify-between items-center sticky top-0 z-50  border-b border-gray-200" style={{ padding: '0,30px' }}>
                {/* Left side logo */}
                <div className="flex items-center">
                    <img src="/logo.png" alt="Logo" className={`h-8 mr-2 ${styles.imglogo}`} />
                    <span className="text-1xl text-left md:text-xl font-playfair font-bold mt-2 pr-2" style={{ color: 'black' }}>Royal Spice Restaurant</span>
                </div>

                {/* Hamburger menu icon for mobile */}


                {/* Right side nav links */}
                <ul style={{ marginRight: "50px" }} className={`flex items-center hidden sm:inline-block z-50 lg:flex font-outfit font-medium ${isMenuOpen ? 'hidden' : 'lg:block'}`}>
                    <li className="mx-2">
                        <Link className=" hover:text-amber-600 transition-colors" href="/">
                            Home
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link className=" hover:text-amber-600 transition-colors" href="/about">
                            About
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link className=" hover:text-amber-600 transition-colors" href="/blog">
                            Blogs
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link className=" hover:text-amber-600 transition-colors" href="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link className=" hover:text-amber-600 transition-colors" href="https://g.page/r/CZwbU8KB55P8EB0/review">
                            Review Us
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
            <div className='bg-red-500 w-full relative z-40 text-center text-white p-3 flex flex-wrap justify-center gap-x-4 items-center font-outfit text-sm shadow-md'>
                <span className="font-semibold">Table Booking & Home Delivery:</span>
                <Link href="tel:+918086624365" className="hover:underline flex items-center gap-1 italic">
                    <span className="opacity-80">Thonichal:</span> +91 80866 24365
                </Link>
                <span className="hidden md:inline opacity-30">|</span>
                <Link href="tel:+919656227262" className="hover:underline flex items-center gap-1 italic">
                    <span className="opacity-80">Payyampally:</span> +91 96562 27262
                </Link>
            </div>
        </div>
    );
};

export default NavBar;

// components/ContactSection.js

'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css'
import Contact from '../../../components/contact/Contact'

const ContactPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Section for Contact Page */}
            <div className="bg-amber-500 py-20 text-white text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-playfair font-black mb-4">Contact Us</h1>
                <p className="text-xl font-outfit opacity-90 max-w-2xl mx-auto px-4">Find us at our two prime locations in Wayanad. We're ready to serve you the best flavors.</p>
            </div>

            <Contact />
        </div>
    );
};

export default ContactPage;

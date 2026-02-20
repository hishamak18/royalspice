'use client';

import styles from './footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-gray-900 text-white py-16`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-amber-500 mb-2">Our Locations</h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Branch 1 - Thonichal */}
                    <motion.div
                        className="flex flex-col bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-amber-500/50 transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-amber-500">Thonichal Branch</h3>
                        </div>

                        <div className="space-y-4 mb-8 font-outfit text-gray-300">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p>Calicut Rd, Thonichal, Mananthavady, Wayanad, Kerala 670645</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div>
                                    <a href="tel:+918086624365" className="hover:text-amber-500 block">+91 80866 24365</a>
                                    <a href="tel:04935208365" className="hover:text-amber-500 block">04935 208 365</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="rounded-2xl overflow-hidden h-48 border border-gray-700 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124989.66357934265!2d75.9196786226428!3d11.770191766998085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba5df4cb9700545%3A0xfc93e781c2531b9c!2sroyal%20spice%20restaurant%20the%20spice%20of%20life!3m2!1d11.7702036!2d76.00208049999999!5e0!3m2!1sen!2sin!4v1716121463920!5m2!1sen!2sin"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <a href="tel:+918086624365" className="mt-6 block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                Book a Table
                            </a>
                        </div>
                    </motion.div>

                    {/* Branch 2 - Payyampally */}
                    <motion.div
                        className="flex flex-col bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-amber-500/50 transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-amber-500">Payyampally Branch</h3>
                        </div>

                        <div className="space-y-4 mb-8 font-outfit text-gray-300">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <p>Post, Thannikkal, Payyampally, Mananthavady, Kerala 670646</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-amber-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div>
                                    <a href="tel:+919656227262" className="hover:text-amber-500 block">+91 96562 27262</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="rounded-2xl overflow-hidden h-48 border border-gray-700 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.6308028180447!2d76.04287680000002!3d11.791024700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5dfb1ebd2dcb3%3A0x7a8b247524f1f0a5!2sRoyal%20Spice%20Restaurant!5e0!3m2!1sen!2sin!4v1771501309648!5m2!1sen!2sin"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <a href="tel:+919656227262" className="mt-6 block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                Book a Table
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Royal Spice Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

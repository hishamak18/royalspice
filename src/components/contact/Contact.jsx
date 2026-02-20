// components/ContactSection.js

'use client';

import { motion } from 'framer-motion';
import styles from './contact.module.css'
const ContactSection = () => {
    return (
        <div style={{ paddingBottom: "150px", paddingTop: "150px" }} className={`${styles.cntctContainer} py-12 bg-white`}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-playfair font-black text-center mb-12 text-gray-900 section-title">Our Locations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Thonichal Branch */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 border-b-2 border-amber-500/20 pb-1">Thonichal Branch (Main)</h3>
                        </div>

                        <div className="space-y-6 font-outfit">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-amber-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-gray-700 leading-relaxed text-lg">Calicut Rd, Thonichal, Mananthavady, Kerala 670645</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-amber-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:8086624365" className="text-amber-700 font-bold text-xl hover:text-amber-800 transition-colors">8086624365</a>
                                        <a href="tel:04935208365" className="text-amber-700 font-bold text-xl hover:text-amber-800 transition-colors">04935 208 365</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Payyampally Branch */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100 hover:shadow-2xl transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 border-b-2 border-amber-500/20 pb-1">Koyileri Branch (New)</h3>
                        </div>

                        <div className="space-y-6 font-outfit">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-amber-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                                    <p className="text-gray-700 leading-relaxed text-lg">Post, Thannikkal, Koyileri, Mananthavady, Kerala 670646</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 text-amber-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:9656227262" className="text-amber-700 font-bold text-xl hover:text-amber-800 transition-colors">9656227262</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

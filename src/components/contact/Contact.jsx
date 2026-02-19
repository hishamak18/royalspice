// components/ContactSection.js

'use client';

import { motion } from 'framer-motion';
import styles from './contact.module.css'
const ContactSection = () => {
    return (
        <div style={{ paddingBottom: "150px", paddingTop: "150px" }} className={`${styles.cntctContainer} py-12 bg-white`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className={`bg-white rounded-lg shadow-lg p-8  ${styles.contactone}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300"
                                    type="submit"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-playfair font-bold mb-8 text-gray-900 border-b pb-4">Our Locations</h3>

                        <div className="mb-10 group hover:bg-amber-50 p-4 rounded-xl transition-all duration-300">
                            <h4 className="text-xl font-outfit font-bold text-amber-600 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                Thonichal Branch (Main)
                            </h4>
                            <div className="space-y-2 font-outfit text-gray-600">
                                <p className="flex items-start gap-2">
                                    <strong className="text-gray-900 min-w-[80px]">Address:</strong>
                                    <span>Calicut Rd, Thonichal, Mananthavady, Kerala 670645</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <strong className="text-gray-900 min-w-[80px]">Phone:</strong>
                                    <span className="text-amber-700 font-semibold italic">8086624365, 04935 208 365</span>
                                </p>
                            </div>
                        </div>

                        <div className="group hover:bg-amber-50 p-4 rounded-xl transition-all duration-300">
                            <h4 className="text-xl font-outfit font-bold text-amber-600 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                                Payyampally Branch (New)
                            </h4>
                            <div className="space-y-2 font-outfit text-gray-600">
                                <p className="flex items-start gap-2">
                                    <strong className="text-gray-900 min-w-[80px]">Address:</strong>
                                    <span>Post, Thannikkal, Payyampally, Mananthavady, Kerala 670646</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <strong className="text-gray-900 min-w-[80px]">Phone:</strong>
                                    <span className="text-amber-700 font-semibold italic">9656227262</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

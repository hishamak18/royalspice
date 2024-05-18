// components/ContactSection.js

'use client';

import { motion } from 'framer-motion';
import styles from './contact.module.css'
const ContactSection = () => {
    return (
        <div className={`${styles.cntctContainer} py-12 bg-white`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8"
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
                        className="bg-white rounded-lg shadow-lg p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Address:</strong> Calicut Rd, Thonichal, Mananthavady, Kerala 670645
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Phone:</strong> 04935 208 365
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Email:</strong> contact@restaurant.com
                        </p>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-primary hover:text-primary-dark">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.9 3.6 9 8.3 9.7.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 2.2-.6 2.7-.9.1-.7.4-1.3.8-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4 1 0 2 .1 3 .4 2.3-1.5 3.4-1.3 3.4-1.3.6 1.8.2 3.2.1 3.5.7.8 1.2 2 1.2 3.3 0 4.7-2.9 5.6-5.4 5.9.4.4.8 1.1.8 2.3v3.4c0 .4.2.8.8.6 4.7-.7 8.3-4.8 8.3-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
                                </svg>
                            </a>
                            <a href="#" className="text-primary hover:text-primary-dark">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.9 3.6 9 8.3 9.7.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 2.2-.6 2.7-.9.1-.7.4-1.3.8-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4 1 0 2 .1 3 .4 2.3-1.5 3.4-1.3 3.4-1.3.6 1.8.2 3.2.1 3.5.7.8 1.2 2 1.2 3.3 0 4.7-2.9 5.6-5.4 5.9.4.4.8 1.1.8 2.3v3.4c0 .4.2.8.8.6 4.7-.7 8.3-4.8 8.3-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
                                </svg>
                            </a>
                            <a href="#" className="text-primary hover:text-primary-dark">
                                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.9 3.6 9 8.3 9.7.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 2.2-.6 2.7-.9.1-.7.4-1.3.8-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4 1 0 2 .1 3 .4 2.3-1.5 3.4-1.3 3.4-1.3.6 1.8.2 3.2.1 3.5.7.8 1.2 2 1.2 3.3 0 4.7-2.9 5.6-5.4 5.9.4.4.8 1.1.8 2.3v3.4c0 .4.2.8.8.6 4.7-.7 8.3-4.8 8.3-9.7 0-5.4-4.4-9.8-9.8-9.8z" />
                                </svg>
                            </a>
                        </div>
                        <iframe
                            className="w-full h-64 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095774!2d144.9537363153167!3d-37.81627974203106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ed9bcd92b1a!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1629131030179!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

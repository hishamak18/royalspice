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
                            <strong>Phone:</strong> 8086624365
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Email:</strong> rsrwyd@gmail.com
                        </p>

                        <iframe className="w-full h-64 rounded-lg shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124989.66357934265!2d75.9196786226428!3d11.770191766998085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba5df4cb9700545%3A0xfc93e781c2531b9c!2sroyal%20spice%20restaurant%20the%20spice%20of%20life!3m2!1d11.7702036!2d76.00208049999999!5e0!3m2!1sen!2sin!4v1716121463920!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

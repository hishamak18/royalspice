"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css'

const About = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden bg-white">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <span className="text-amber-600 font-outfit font-bold uppercase tracking-widest text-sm mb-4 block">
                            Our Heritage
                        </span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-black text-gray-900 mb-8 leading-tight">
                            A Tradition of <br />
                            <span className="text-amber-500 italic">Excellence</span> Since Day One
                        </h2>

                        <div className="space-y-6 text-gray-600 font-outfit text-lg leading-relaxed">
                            <p>
                                Welcome to <span className="font-bold text-gray-900">Royal Spice Restaurant</span>, where we bring you an exquisite dining experience infused with the rich flavors and spices of Indian, Arabic, and Chinese cuisine.
                            </p>
                            <p>
                                Nestled in the heart of Wayanad, our restaurant offers a luxurious ambiance and impeccable service, making every visit a memorable one. Our chefs use tradition-honored recipes and the freshest local ingredients to craft dishes that tell a story of heritage and passion.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-8 items-center border-t border-gray-100 pt-8">
                            <div>
                                <p className="text-3xl font-playfair font-black text-amber-500">10+</p>
                                <p className="text-sm font-outfit text-gray-500 uppercase tracking-wider">Years of Flavor</p>
                            </div>
                            <div className="w-px h-12 bg-gray-100"></div>
                            <div>
                                <p className="text-3xl font-playfair font-black text-amber-500">25+</p>
                                <p className="text-sm font-outfit text-gray-500 uppercase tracking-wider">Expert Chefs</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Visuals */}
                    <div className="relative">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative z-10 grid grid-cols-12 gap-4">
                            {/* Main Larger Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="col-span-8 pt-12"
                            >
                                <div className="relative group">
                                    <img
                                        className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                                        src="https://live.staticflickr.com/65535/55105647094_7d136a14cc_b.jpg"
                                        alt="Royal Spice Restaurant Front"
                                    />
                                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
                                </div>
                            </motion.div>

                            {/* Smaller Overlapping Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="col-span-6 -ml-16 -mt-32 relative z-20"
                            >
                                <div className="relative group p-2 bg-white rounded-3xl shadow-2xl">
                                    <img
                                        className="w-full h-[300px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                                        src="https://live.staticflickr.com/65535/55105647104_1c399cca72_b.jpg"
                                        alt="Restaurant Entrance"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Since Tag */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -10 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute bottom-10 right-0 bg-amber-500 text-white p-6 rounded-2xl shadow-xl z-30 hidden md:block"
                        >
                            <p className="font-playfair font-black text-2xl">Serving</p>
                            <p className="font-outfit text-sm uppercase tracking-widest opacity-90">Excellence Since 2014</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

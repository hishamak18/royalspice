"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faTruck, faUsers, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './features.module.css'
const Features = () => {
    const features = [
        {
            icon: faTruck,
            title: "Home Delivery",
            description: "Thonichal: 8086624365\nKoyileri: 9656227262",
            color: "amber"
        },
        {
            icon: faUsers,
            title: "Family Friendly",
            description: "A warm, welcoming atmosphere perfect for family gatherings and celebrations.",
            color: "amber"
        },
        {
            icon: faParking,
            title: "Parking Facility",
            description: "Spacious and secure parking available for all our guests at both branches.",
            color: "amber"
        },
        {
            icon: faUtensils,
            title: "Tasty Cuisine",
            description: "Authentic flavors crafted with the finest ingredients and culinary expertise.",
            color: "amber"
        }
    ];

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-gray-50">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "url('/herobg.png')", backgroundSize: '400px' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-amber-600 font-outfit font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-playfair font-black text-gray-900"
                    >
                        Experience the <span className="text-amber-500">Royal</span> Difference
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 transition-colors duration-300">
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">{feature.title}</h3>
                            <p className="text-gray-600 font-outfit leading-relaxed whitespace-pre-line">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faTruck, faUsers, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './features.module.css'
const Features = () => {
    return (
        <section className="relative  px-10" >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/herobg.png')", opacity: 0.10 }}></div>
            <h1 className="mb-2 text-2xl text-red-500 font-bold text-black text-center pt-20" > We Provide.</h1>

            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative z-10 ">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    <motion.div
                        key="jf"
                        className='bg-red-300 p-5 rounded'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`bg-red-300 p-5 rounded ${styles.featureContainer} `}>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FontAwesomeIcon icon={faTruck} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                            </div>
                            <h3 className="mb-2 text-1xl font-bold text-white"> Home Delivery <br />+918086624365 ,04935 208 365</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        key="jfs"
                        className='bg-yellow-300 p-5 rounded '
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`bg-yellow-300 p-5 rounded ${styles.featureContainer} `}>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FontAwesomeIcon icon={faUsers} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                            </div>
                            <h3 className="mb-2 text-1xl font-bold text-white text-center">Family-Friendly Atmosphere</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        key="jfs"
                        className='bg-green-300 p-5 rounded '
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`bg-green-300 p-5 rounded ${styles.featureContainer} `}>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FontAwesomeIcon icon={faParking} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                            </div>
                            <h3 className="mb-2 text-1xl font-bold text-white">Parking facility</h3>
                        </div>
                    </motion.div>
                    <motion.div
                        key="jsf"
                        className='bg-orange-300 p-5 rounded'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`bg-orange-300 p-5 rounded ${styles.featureContainer} `}>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FontAwesomeIcon icon={faUtensils} className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-yellow-500" />
                            </div>
                            <h3 className="mb-2 text-1xl font-bold text-white"> Tasty Cuisine</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Features;

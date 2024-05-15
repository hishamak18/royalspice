"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.texts}>
                        <div className={styles.title}>About Royal Spice Restaurant</div>
                        <p className={styles.description}>
                            Welcome to Royal Spice Restaurant, where we bring you an exquisite dining experience infused with the rich flavors and spices of Indian cuisine. Nestled in the heart of Wayanad, our restaurant offers a luxurious ambiance and impeccable service, making every visit a memorable one.
                        </p>
                    </div>
                    <div className={styles.imgContent}>
                        <div className={styles.imageContainer}>
                            <Image src='/heronew.png' width={200} height={200} className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;

"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['/foodone.png', '/foodthree.png', '/foodfour.png', '/foodfive.png', '/foodseven.png', '/foodeight.png', '/foodten.png'];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden" style={{ width: '500px', height: '500px' }}>
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Food"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '150%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    style={{ width: '100%', height: '100%' }}
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;

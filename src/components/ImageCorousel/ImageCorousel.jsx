"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = ['/foodone.png', '/foodthree.png', '/foodfour.png', '/foodfive.png', '/foodseven.png', '/foodseven.png', '/foodeight.png', '/foodnine.png', '/foodten.png'];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Food"
                className="w-full h-full"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default ImageCarousel;

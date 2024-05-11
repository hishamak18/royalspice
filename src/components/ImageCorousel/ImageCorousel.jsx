"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = ['/foodone.png', '/foodthree.png', '/foodfour.png', '/foodfive.png', '/foodseven.png', '/foodeight.png', '/foodten.png'];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" overflow-hidden">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Food"
                // className="w-full h-full"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '150%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                width={500}
                height={500}
            />
        </div>
    );
};

export default ImageCarousel;

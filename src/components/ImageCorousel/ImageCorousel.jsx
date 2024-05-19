"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const images = ['/foodone.png', '/foodthree.png', '/foodfive.png', '/foodseven.png', '/foodeight.png', '/foodten.png'];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        // Preload images to prevent lag
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const translateX = useTransform(scrollYProgress, [0, 1], [0, 850]);

    return (
        <div className="overflow-hidden" style={{ height: '500px' }}>


            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Food"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    width={500}
                    height={500}
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;

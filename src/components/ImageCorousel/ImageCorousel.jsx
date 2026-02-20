"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const images = ['/foodone.PNG', '/foodthree.PNG', '/foodfive.png', '/foodseven.png', '/foodeight.png', '/foodten.png'];

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
        <div className="overflow-hidden h-[300px] md:h-[500px] w-full max-w-[500px] mx-auto">


            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Food"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;

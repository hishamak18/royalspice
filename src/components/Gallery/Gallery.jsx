"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Modal from './Modal';

const images = [
    '/foodone.png',
    '/foodthree.png',
    '/foodfive.png',
    '/foodseven.png',
    '/foodeight.png',
    '/foodten.png',
];

const Gallery = () => {
    const [width, setWidth] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const carouselRef = useRef();
    const controls = useAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({ x: -currentIndex * carouselRef.current.offsetWidth });
    }, [currentIndex, controls]);

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="md:hidden">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab overflow-hidden relative"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        className="flex"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        animate={controls}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        {images.map((src, index) => (
                            <motion.div
                                key={index}
                                className="min-w-full"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="object-cover w-full h-64"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center pointer-events-none">
                        <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded">Swipe</span>
                        <span className="text-white bg-black bg-opacity-50 px-2 py-1 rounded">→</span>
                    </div>
                </motion.div>
            </div>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="w-full h-64 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(src)}
                    >
                        <motion.img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="object-cover w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                ))}
            </div>
            {selectedImage && (
                <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            )}
        </section>
    );
};

export default Gallery;

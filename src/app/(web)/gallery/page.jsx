"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { fetchGallery } from '../../../../sanity/lib/gallery';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        const getGalleryImages = async () => {
            const data = await fetchGallery();
            setGalleryImages(data[0].images);
            console.log(galleryImages);
            console.log(data);
        };
        getGalleryImages();
    }, []);

    return (
        <section className="container mx-auto px-4 py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="w-full h-64 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedImage(image.imageUrl)}
                    >
                        <motion.img
                            src={image.imageUrl}
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

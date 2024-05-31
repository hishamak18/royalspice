"use client";

import { motion } from 'framer-motion';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
};

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            onClick={handleClose}
        >
            <motion.div
                className="relative bg-white p-4 rounded-lg max-w-lg mx-auto"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-800 bg-gray-200 hover:bg-gray-300 p-1 rounded-full focus:outline-none"
                >
                    &times;
                </button>
                <img
                    src={selectedImage}
                    alt="Selected"
                    className="object-contain w-full h-full rounded-lg"
                />
            </motion.div>
        </motion.div>
    );
};

export default Modal;

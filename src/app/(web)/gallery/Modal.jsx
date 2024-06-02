"use client"
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
    const handleClose = () => setSelectedImage(null);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
                <motion.img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full max-h-full rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-white text-2xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Modal;

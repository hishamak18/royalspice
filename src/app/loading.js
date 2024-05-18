"use client"
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export default Loader;

// components/Menu.js
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    { id: 1, imageSrc: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Dish 1' },
    { id: 2, imageSrc: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Dish 2' },
    { id: 3, imageSrc: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Dish 3' },
];

const Menu = () => {
    return (
        <div className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src={item.imageSrc} alt={item.alt} width={600} height={400} className="object-cover w-full h-64" />
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link href="/menu">
                        <button type="button" class="text-white bg-amber-300 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Explore menu
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;

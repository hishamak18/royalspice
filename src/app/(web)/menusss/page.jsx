'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchMenuImages } from '../../../../sanity/lib/menu';
import Image from 'next/image';

const MenuPage = () => {
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMenuData = async () => {
            try {
                const data = await fetchMenuImages();
                setBranches(data);

                // Default to Thonichal if available
                const thonichal = data.find(b => b.slug === 'thonichal-menu');
                if (thonichal) {
                    setSelectedBranch(thonichal);
                } else if (data.length > 0) {
                    setSelectedBranch(data[0]);
                }
            } catch (error) {
                console.error("Error fetching menu data:", error);
            } finally {
                setLoading(false);
            }
        };
        getMenuData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header section */}
            <div className="bg-amber-500 py-16 text-white text-center">
                <h1 className="text-5xl md:text-7xl font-playfair font-black mb-4">Our Menu</h1>
                <p className="text-xl font-outfit opacity-90 max-w-2xl mx-auto px-4">
                    Experience the finest flavors crafted with passion and tradition.
                </p>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Branch Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {branches.map((branch) => (
                        <button
                            key={branch.slug}
                            onClick={() => setSelectedBranch(branch)}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg ${selectedBranch?.slug === branch.slug
                                    ? 'bg-amber-500 text-white transform -translate-y-1'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {branch.name}
                        </button>
                    ))}
                </div>

                {/* Menu Display */}
                <AnimatePresence mode="wait">
                    {selectedBranch && (
                        <motion.div
                            key={selectedBranch.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-12"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4 tracking-tight">
                                    {selectedBranch.name} Menu
                                </h2>
                                <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                {selectedBranch.images && selectedBranch.images.length > 0 ? (
                                    selectedBranch.images.map((img, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group"
                                        >
                                            <div className="relative aspect-[3/4] md:aspect-[2/3]">
                                                <Image
                                                    src={img.url}
                                                    alt={img.alt || `${selectedBranch.name} Menu Page ${idx + 1}`}
                                                    fill
                                                    className="object-contain p-2 md:p-4 group-hover:scale-[1.02] transition-transform duration-700"
                                                    priority={idx < 2}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                                        <p className="text-gray-500 font-outfit text-xl italic">
                                            Menu images are being updated for this branch.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom spacer */}
            <div className="h-20"></div>
        </div>
    );
};

export default MenuPage;

"use client";
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './fixedicon.module.css'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

const FixedIcon = () => {
    const [showCallMenu, setShowCallMenu] = useState(false);

    return (
        <div className={`${styles.fxbtn} fixed bottom-20 md:bottom-24 right-4 z-[9999] flex flex-col gap-4 items-end`} >

            {/* Call Menu Overlay */}
            <AnimatePresence>
                {showCallMenu && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="flex flex-col gap-2 mb-2 mr-1"
                    >
                        <Link
                            href="tel:+918086624365"
                            className="bg-white text-gray-900 px-4 py-2 rounded-xl shadow-2xl border border-amber-100 flex flex-col items-center min-w-[150px] hover:bg-amber-50 transition-colors"
                        >
                            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-tighter">Thonichal</span>
                            <span className="text-sm font-bold">+91 80866 24365</span>
                        </Link>
                        <Link
                            href="tel:+919656227262"
                            className="bg-white text-gray-900 px-4 py-2 rounded-xl shadow-2xl border border-amber-100 flex flex-col items-center min-w-[150px] hover:bg-amber-50 transition-colors"
                        >
                            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-tighter">Koyileri</span>
                            <span className="text-sm font-bold">+91 96562 27262</span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Primary Action Buttons */}
            <div className="flex flex-col gap-3 items-center">
                {/* Phone Toggle */}
                <button
                    onClick={() => setShowCallMenu(!showCallMenu)}
                    className={`${styles.fxbtn} bg-amber-500 text-white rounded-full p-4 shadow-xl z-50 flex items-center justify-center hover:bg-amber-600 transition-all transform hover:scale-110`}
                >
                    <FontAwesomeIcon icon={showCallMenu ? faTimes : faPhone} className={`${styles.icon} w-5 h-5`} />
                </button >

                <Link href="https://wa.me/+918086624365" className={`${styles.fxbtn} bg-[#25D366] text-white rounded-full p-4 shadow-xl z-50 flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110`}>
                    <FontAwesomeIcon icon={faWhatsapp} className={`${styles.icon} w-5 h-5`} />
                </Link >

                <Link href="https://www.instagram.com/royalspicerestaurant_?igsh=eGdzcWtlb3pmNTEx&utm_source=qr" className={`${styles.fxbtn} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full p-4 shadow-xl z-50 flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110`}>
                    <FontAwesomeIcon icon={faInstagram} className={`${styles.icon} w-5 h-5`} />
                </Link >

                <Link href="https://www.facebook.com/profile.php?id=61556708704666&mibextid=LQQJ4d" className={`${styles.fxbtn} bg-[#1877F2] text-white rounded-full p-4 shadow-xl z-50 flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110`}>
                    <FontAwesomeIcon icon={faFacebook} className={`${styles.icon} w-5 h-5`} />
                </Link >
            </div>
        </div >
    )
}

export default FixedIcon;
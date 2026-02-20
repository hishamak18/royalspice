"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "./navbar/NavBar";
import FixedIcon from "./fixedIcon/FixedIcon";
import BottomNav from "./bottomnav/BottomNav";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname();

    return (
        <div className="relative min-h-screen">
            {/* Professional Top Progress Bar */}
            <motion.div
                key={`progress-${pathName}`}
                className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-[9999] origin-left"
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    opacity: { delay: 0.6, duration: 0.2 }
                }}
            />

            <NavBar />
            <FixedIcon />

            <AnimatePresence mode="wait">
                <motion.main
                    key={pathName}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="min-h-[calc(100vh-120px)]" // Ensuring min height without breaking scroll
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            <BottomNav />
        </div>
    );
};

export default TransitionProvider;

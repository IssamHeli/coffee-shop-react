// src/components/AnimatedRoute.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AnimatedRoute = ({ children }) => {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0, scale: 0.8, y: 30 }, // Start slightly scaled down, invisible, and below
        in: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1, // Slightly faster
                ease: "easeIn", // Smoother entry
            },
        },
        out: {
            opacity: 0,
            scale: 0.5, // Scale down on exit
            y: -20, // Move above
            transition: {
                duration: 1, // Match entry duration
                ease: "easeOut", // Smoother exit
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
        <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="page-transition-container"
        >
            {children}
        </motion.div>
    </AnimatePresence>
    );
};

export default AnimatedRoute;


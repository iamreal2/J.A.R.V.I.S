'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingAnimation() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Arc Reactor Loading */}
            <div className="relative w-24 h-24">
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-4 rounded-full border-4 border-transparent border-t-cyan-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Glow */}
                <motion.div
                    className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-cyan-400"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        boxShadow: '0 0 20px rgba(0, 243, 255, 0.8)'
                    }}
                />
            </div>

            {/* Loading Text */}
            <motion.p
                className="text-cyan-400 font-orbitron text-sm tracking-wider"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                JARVIS ANALYZING...
            </motion.p>
        </div>
    );
}

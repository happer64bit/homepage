"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ({ children } : { children: React.ReactNode }) {
    return (
        <motion.div
            className='w-[90dvh] px-4'
            initial={{
                opacity: 0,
                marginTop: '20px',
            }}
            animate={{
                opacity: 1,
                marginTop: '0',
            }}
            transition={{
                type: 'keyframes',
            }}
        >
            {children}
        </motion.div>
    )
}
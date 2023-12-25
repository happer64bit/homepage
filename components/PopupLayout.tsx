"use client"
import React from "react";
import { m } from "framer-motion";

export default function PopuLayout({ children } : { children: React.ReactNode }) {
    return (
        <m.div
            className='px-4'
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
        </m.div>
    )
}
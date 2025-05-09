"use client"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import Link from 'next/link'

gsap.registerPlugin(ScrambleTextPlugin)

export default function HomeContactMeSection() {
    useGSAP(() => {
        gsap.to("#contact-email", {
            scrambleText: {
                text: "wintkhantlin@gmail.com",
                chars: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:',.<>?/~`",
            },
            duration: 2,
            scrollTrigger: {
                trigger: "#contact-email",
            }
        })
    })

    return (
        <section className='text-center'>
            <p className='mb-3 text-xl'>Contact Me</p>
            <div className="w-full px-4 py-3 bg-gray-200 rounded-full">
                <Link prefetch={false} href={"mailto:wintkhantlin@gmail.com"} id='contact-email' className='text-5xl'></Link>
            </div>
        </section>
    )
}
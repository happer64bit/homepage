"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

export default function HomeSkillsShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)
    const blocksRef = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            once: true,
            onEnter: () => {
                blocksRef.current.reverse().forEach((block, index) => {
                    gsap.fromTo(
                        block,
                        { y: -100, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: index * 0.3,
                            ease: "power2.inOut"
                        }
                    )
                })
            },
        })
    }, {
        scope: containerRef
    })
    const skills = [
        { name: "HTML/CSS/JS/TS", color: "bg-orange-500 border-orange-900" },
        { name: "React/Next.JS", color: "bg-blue-500 border-blue-900" },
        { name: "Express.JS & Hono", color: "bg-gray-500 border-gray-900" },
        { name: "PostgreSQL & MySQL", color: "bg-indigo-500 border-indigo-900" },
        { name: "GoLang", color: "bg-cyan-500 border-cyan-900" },
        { name: "Java", color: "bg-red-500 border-red-900" },
        { name: "MongoDB", color: "bg-green-500 border-green-900 rounded-b-3xl" }
    ]

    return (
        <section ref={containerRef} className="grid lg:grid-cols-2 gap-4 my-24">
            <div className="space-y-4">
                <h1 className="text-5xl">My Skills</h1>
                <p className="text-lg leading-8">I am currently okay with web technologies like HTML, CSS, JavaScript, TypeScript, Node.JS, React, Next.JS, Svelte Kit, Express.JS, GoLang, MongoDB, and PostgreSQL. I am currently focusing on Data Structure and Algorithms, Clean Code and Design Patterns.</p>
            </div>
            <div>
                <div className="border-4 border-t-0 border-dashed h-full rounded-b-4xl p-2 pt-6 space-y-2 flex flex-col justify-end">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) blocksRef.current[index] = el;
                            }}
                            className={`border-2 p-2 rounded-lg text-white text-3xl ${skill.color}`}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"
import Link from 'next/link'

export default function HomeContactMeSection() {
    return (
        <section className='min-h-[70vh] flex items-center justify-center flex-col gap-10'>
            <Link href={"mailto:wintkhantlin@gmail.com"}>
                <div className="w-[450px] h-32 bg-[#2d2d2d] text-white text-4xl font-semibold rounded-full 
                    shadow-[0_4px_0_#000,0_10px_20px_rgba(0,0,0,0.5)] 
                    border-[2px] border-[#3a3a3a]
                    flex justify-center items-center 
                    transform rotate-[-2deg] 
                    transition-all duration-200 hover:brightness-110 active:translate-y-1">
                    Contact Me
                </div>
            </Link>
            <p className='text-gray-700'>Alternatively <Link href={"https://www.facebook.com/wintkhantlin/"} className='underline font-bold' target='_blank'>Facebook</Link>, <Link href={"https://www.facebook.com/profile.php?id=61558294022750"} className='underline font-bold' target='_blank'>Facebook (Work)</Link></p>
        </section>
    )
}

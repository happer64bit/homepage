<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

useSeoMeta({
    title: 'Wint Khant Lin Portfolio'
})

onMounted(() => {
    gsap.registerPlugin(SplitText)

    
    const split = new SplitText('#dev-name', { type: 'chars' })
    const chars = split.chars

    gsap.set(chars, { transformOrigin: 'center bottom' })

    gsap.from(chars, {
        y: -100,
        scaleY: 2,
        opacity: 0,
        ease: 'elastic(0.25, 0.15)',
        duration: 1.4,
        stagger: {
            each: 0.05,
            from: 'random'
        }
    })
})
</script>

<template>
    <main class="flex flex-col justify-center px-4 py-14 sm:py-16 h-screen">
        <p class="max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-foreground-muted">
            A college student, a programmer, and—at heart—a human being who loves to code, design, and keep learning.
            Always
        </p>
        <h1 id="dev-name"
            class="uppercase font-bold tracking-tight leading-tight text-[44px] sm:text-[64px] md:text-[96px] lg:text-[140px] mt-3 sm:mt-5 mb-8 sm:mb-10">
            Wint Khant Lin</h1>
    </main>

    <TechMarquee />
    <div class="max-w-340 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <ProjectsGrid />
        
        <HomeAboutMeSection />
    </div>
</template>

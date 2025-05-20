<script setup lang="ts">
    import { gsap } from 'gsap';
    import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import SplitText from 'gsap/SplitText';
    
    onMounted(() => {
        gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger);

        // ScrollSmoother.create({
        //     wrapper: ".__nuxt",
        //     content: "#__nuxt",
        //     smooth: 1,
        //     effects: true,
        //     normalizeScroll: true
        // });

        SplitText.create("#heroHeadingText", {
            type: "words",
            autoSplit: true,
            onSplit(splitText) {
                gsap.fromTo(
                    splitText.words,
                    {
                        y: "100%",
                        opacity: 0,
                    },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        stagger: {
                            amount: 0.2,
                        },
                        delay: 0.2,
                    }
                );
            },
            
        });
    });

    useSeoMeta({
        title: "Wint Khant Lin - Portfolio",
        description: "Hi, I am Wint Khant Lin. I am Computer Science Student, Who love creating and designing things.",
        ogTitle: "Wint Khant Lin - Portfolio",
        ogDescription: "Hi, I am Wint Khant Lin. I am Computer Science Student, Who love creating and designing things.",
    })

</script>

<template>
    <main class="container">
        <div id="heroSection" class="flex flex-col justify-center min-h-[90vh]">
            <div class="space-y-4 text-center">
                <NuxtImg
                    id="hero-thumbnail"
                    src="/images/snap-hero.jpg"
                    alt="Shoot From Bottom Angle"
                    height="300px"
                    class="mx-auto rounded-full"
                />
                <h1 id="heroHeadingText" class="text-2xl lg:text-4xl mx-auto leading-[1.4] max-w-5xl">Hello, I am Wint
                    Khant Lin. I am Computer Science Student, Who love creating and designing things.</h1>
                <div class="mx-auto flex items-center justify-center gap-4">
                    <NuxtLink
                        href="mailto:wintkhantlin@gmail.com"
                        class="bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 group">Connect
                        <Icon
                            name="solar:arrow-right-up-linear"
                            class="relative bottom-0 left-0 transform duration-100 group-hover:bottom-[2px] group-hover:left-[2px]"
                        />
                    </NuxtLink>
                    <NuxtLink
                        href="https://facebook.com/wintkhantlin" target="_blank" class="decoration-dotted text-[#252525]">FaceBook
                    </NuxtLink>
                </div>
            </div>
        </div>

        <SectionDivider />

        <HomeAboutMeSection />

        <SectionDivider />
        
        <HomeBlogSection />

        <SectionDivider />
    </main>
</template>
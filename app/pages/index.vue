<script setup lang="ts">
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

onMounted(() => {
    gsap.registerPlugin(SplitText);

    const splitText = SplitText.create("#kara-name", {
        type: "chars",

    });

    const chars = splitText.chars;

    gsap.from(chars, {
        duration: 0.5,
        opacity: 0,
        y: "100%",
        stagger: 0.05,
        ease: "back.out(1.7)",
    }   );
})
</script>

<template>
    <main class="px-4">
        <section class="min-h-[45vh] flex items-center justify-center text-center">
            <div class="space-y-4 text-center">
                <p class="text-sm font-medium tracking-widest text-neutral-500">HAPPER is not just a name<br />it's a
                    presence.</p>
                <h1 class="text-[6vw] font-semibold leading-tight text-neutral-800" id="kara-name">ハッパー</h1>
            </div>
        </section>
        <FooterBar />
    </main>
</template>

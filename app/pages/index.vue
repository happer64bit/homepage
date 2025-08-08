<script setup lang="ts">
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ArrowUpRight } from 'lucide-vue-next';

onMounted(() => {
    gsap.registerPlugin(SplitText);
    const splitText = SplitText.create("#kara-name", { type: "chars" });
    const chars = splitText.chars;
    gsap.from(chars, {
        duration: 0.5,
        opacity: 0,
        y: "100%",
        stagger: 0.05,
        ease: "back.out(1.7)",
    });
});

useSeoMeta({
    title: "Happer - Homepage",
    ogType: "website",
    author: "Wint Khant Lin",
})

const { data: projects } = await useAsyncData('projects', () =>
    queryCollection('projects').order("publishedDate", "DESC").limit(3).all());
</script>

<template>
    <main class="px-4">
        <section class="min-h-[70vh] flex items-center justify-center text-center">
            <div class="space-y-4 text-center">
                <p class="text-sm font-medium tracking-widest text-neutral-500">
                    HAPPER is not just a name<br />it's a presence.
                </p>
                <h1 class="text-6xl lg:text-[6vw] font-semibold leading-tight text-neutral-800" id="kara-name">
                    ハッパー
                </h1>
            </div>
        </section>

        <section class="text-neutral-600 text-3xl lg:text-5xl leading-relaxed text-justify">
            <p>
                I'm Wint Khant Lin, also known as Happer. I'm passionate about coding and system design. Right now, I'm
                focused on writing clean code, sharpening my soft skills, and learning a new language.
            </p>
        </section>

        <section class="py-10 my-10 grid md:grid-cols-2 grid-rows-2">
            <NuxtLink v-for="(project, index) in projects" :key="index" :to="project.source" target="_blank"
                class="group p-6 space-y-4 hover:bg-neutral-50 transition-all border-neutral-300" :class="[
                    index === 0 ? 'row-span-2 lg:border-r lg:border-b-0 border-b flex justify-center flex-col' : '',
                    index === 1 ? 'border-b' : '',
                    index === 2 ? '' : '',
                ]">
                <h2 class="text-2xl font-semibold text-neutral-800">
                    {{ project.title }}
                    <ArrowUpRight
                        class="inline-block ml-1 group-hover:text-black text-neutral-400 transform duration-200" />
                </h2>
                <p class="text-neutral-600 text-base">{{ project.description }}</p>
                <div class="flex gap-2 flex-wrap mt-2">
                    <span v-for="tag in project.tags" :key="tag"
                        class="text-sm border rounded px-2 py-0.5 text-neutral-500 border-neutral-400">
                        {{ tag }}
                    </span>
                </div>
            </NuxtLink>
        </section>

        <FooterBar />
    </main>
</template>

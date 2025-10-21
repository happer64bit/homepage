<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { GitHubIcon } from 'vue3-simple-icons'
import { AtSignIcon, BriefcaseIcon, HomeIcon, PenIcon } from 'lucide-vue-next'

const active = ref('home')
const buttons = [{
  id: "home",
  icon: HomeIcon,
}, {
  id: "works",
  icon: BriefcaseIcon
}, {
  id: "blogs",
  icon: PenIcon
}]

useSeoMeta({
  title: "Happer - Homepage",
  ogType: "website",
  author: "Wint Khant Lin",
  description: "Hello, I am Wint Khant Lin, also known as Happer."
})

const { data } = useAsyncData('posts', async () => await queryCollection("posts").all())
const { data: projectData } = useAsyncData('projects', async () => await queryCollection("projects").all())

let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick()
  const sections = document.querySelectorAll('main section[id]')
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { threshold: 0.3 }
  )
  sections.forEach(section => observer!.observe(section))
})

onUnmounted(() => observer?.disconnect())

const scrollToSection = (btn: string) => {
  active.value = btn
  if (btn === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
  else document.getElementById(btn)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="container mt-20 mb-30">
    <section id="home">
      <h1 lang="ja" class="font-noto-serif-japanese text-heading mb-10">ハッパーと申します。</h1>
  
      <p class="text-body">Hello, my real name is Wint Khant Lin, but Happer is my nickname. I live in Yangon. I grew
        up with the internet, and I enjoy programming and learning new things.</p>
      <br />
      <p class="text-body">I’ve been learning how to code since 2021. Currently, I actively study Japanese (日本語) and
        programming every day. I have worked on a moderate number of side projects for learning.</p>
      <div class="my-5 flex flex-wrap items-center gap-5">
        <NuxtLink to="mailto:wintkhantlin@gmail.com" target="_blank" class="flex items-center gap-2">
          <AtSignIcon class="size-6" />
          <span class="font-mono decoration-dotted underline">wintkhantlin@gmail.com</span>
        </NuxtLink>
        <NuxtLink to="https://github.com/happer64bit" target="_blank" class="flex items-center gap-2">
          <GitHubIcon class="size-6" />
          <span class="font-mono decoration-dotted underline">happer64bit</span>
        </NuxtLink>
      </div>
    </section>

    <hr class="border-white/5 my-10">

    <section id="works" class="my-10">
      <h1 class="font-serif text-subheading mb-4">My Works</h1>
      <NuxtLink :to="project.source" target="_blank" v-for="project in projectData" :key="project.id">
        <div class="group relative overflow-hidden rounded-lg">
          <NuxtImg :src="project.img" alt="ToolyDooly"
            v-if="project.img"
            format="webp"
            loading="lazy"
            class="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h2 class="mt-3 text-2xl mb-2">{{ project.name }}</h2>
        <p class="text-sm text-white/70">{{ project.description }}</p>
      </NuxtLink>
    </section>

    <hr class="border-white/5 my-10">

    <section id="blogs">
      <h1 class="font-serif text-subheading mb-4">Blogs</h1>
      <NuxtLink v-for="post in data" :key="post.path" :href="post.path" class="block my-2 hover:bg-white/5 p-3 py-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-sm line-clamp-2 text-white/80">{{ post.description }}</p>
      </NuxtLink>
    </section>
  </main>

  <nav class="fixed bottom-5 w-full flex items-center justify-center">
    <div
      class="relative rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex justify-between">
      <div
        class="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-1/3 rounded-full bg-white/20 blur-xl transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]"
        :style="{
          transform: active === 'home' ? 'translateX(0%)' : active === 'works' ? 'translateX(100%)' : 'translateX(200%)',
          scale: active === 'home' ? '1.1' : '1'
        }"></div>

      <button v-for="btn in buttons" :key="btn.id" @click="scrollToSection(btn.id)"
        class="relative z-10 px-5 py-2 text-white font-medium transition-colors duration-300 capitalize flex items-center gap-1"
        :class="active === btn.id ? 'text-white' : 'text-white/50'">
        <component :is="btn.icon"/>
      </button>
    </div>
  </nav>
</template>

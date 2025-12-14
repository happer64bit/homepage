<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { GitHubIcon } from 'vue3-simple-icons'
import { AtSignIcon, BriefcaseIcon, HomeIcon, PenIcon } from 'lucide-vue-next'

const active = ref<'home' | 'works' | 'blogs'>('home')

const buttons = [
  { id: 'home', icon: HomeIcon },
  { id: 'works', icon: BriefcaseIcon },
  { id: 'blogs', icon: PenIcon }
]

useSeoMeta({
  title: 'Happer aka Wint Khant Lin - Homepage',
  ogType: 'website',
  author: 'Wint Khant Lin',
  description: 'Hello, I am Wint Khant Lin, also known as Happer. I am a college student from Myanmar. I love coding, listening to music, anime and learning Japanese.'
})

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('publishedDate', 'DESC').all()
)

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('publishedDate', 'DESC').all()
)

let observer: IntersectionObserver | undefined

const indicatorStyle = computed(() => {
  const index = buttons.findIndex(b => b.id === active.value)
  return {
    transform: `translateX(${index * 100}%) scale(${index === 0 ? 1.1 : 1})`
  }
})

onMounted(async () => {
  await nextTick()
  const sections = document.querySelectorAll<HTMLElement>('main section[id]')
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id as typeof active.value
      }
    },
    { rootMargin: '-20% 0px -40% 0px', threshold: 0.2 }
  )
  sections.forEach(section => observer?.observe(section))
})

onUnmounted(() => observer?.disconnect())

const scrollToSection = (id: typeof active.value) => {
  active.value = id
  if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
  else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="container mt-20 mb-30">
    <section id="home" class="scroll-mt-24">
      <h1 lang="ja" class="font-noto-serif-japanese text-heading mb-10 font-bold">ハッパーと申します。</h1>

      <p class="text-body">Hello, my real name is Wint Khant Lin, but Happer is my nickname. I live in Yangon. I grew up
        with the internet, and I enjoy programming and learning new things.</p>
      <br />
      <p class="text-body">I’ve been learning how to code since 2021. Currently, I actively study Japanese (日本語) and
        programming every day. I have worked on a moderate number of side projects for learning.</p>

      <div class="my-5 flex flex-wrap items-center gap-5">
        <NuxtLink to="mailto:wintkhantlin@gmail.com" class="flex items-center gap-2">
          <AtSignIcon class="size-6" />
          <span class="font-mono underline decoration-dotted">wintkhantlin@gmail.com</span>
        </NuxtLink>
        <NuxtLink to="https://github.com/happer64bit" target="_blank" class="flex items-center gap-2">
          <GitHubIcon class="size-6" />
          <span class="font-mono underline decoration-dotted">happer64bit</span>
        </NuxtLink>
      </div>
    </section>

    <hr class="border-white/5 my-10" />

    <section id="works" class="my-14 scroll-mt-24">
      <h2 class="font-serif text-subheading mb-10">My Works</h2>

      <div class="grid gap-10 sm:grid-cols-2">
        <NuxtLink v-for="project in projects" :key="project.id" :to="project.source" target="_blank"
          class="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]">
          <div class="relative overflow-hidden">
            <NuxtImg v-if="project.img" :src="project.img" :alt="project.name"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" format="webp" loading="lazy"
              class="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div class="p-5">
            <h3 class="text-xl font-semibold tracking-tight mb-2 group-hover:text-white transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-sm text-white/70 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <div
            class="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/5 group-hover:ring-white/15 transition duration-500" />
        </NuxtLink>
      </div>
    </section>

    <hr class="border-white/5 my-10" />

    <section id="blogs" class="scroll-mt-24 my-14">
      <h2 class="font-serif text-subheading mb-8">Blogs</h2>

      <div class="space-y-4">
        <NuxtLink v-for="post in posts" :key="post.path" :href="post.path"
          class="group block rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold leading-snug mb-2 group-hover:text-white transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-sm text-white/70 line-clamp-2 leading-relaxed">
                {{ post.description }}
              </p>
            </div>
          </div>

          <div class="mt-4 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </NuxtLink>
      </div>
    </section>
  </main>

  <nav class="fixed bottom-5 w-full flex items-center justify-center">
    <div
      class="relative rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex">
      <div
        class="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-1/3 rounded-full bg-white/20 blur-xl transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]"
        :style="indicatorStyle" />

      <button v-for="btn in buttons" :key="btn.id" :aria-label="btn.id" @click="scrollToSection(btn.id as any)"
        class="relative z-10 px-5 py-2 font-medium transition-transform duration-300 capitalize flex items-center gap-1 active:scale-80"
        :class="active === btn.id ? 'text-white' : 'text-white/50'">
        <component :is="btn.icon" />
      </button>
    </div>
  </nav>
</template>

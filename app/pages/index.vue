<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

const active = ref<'home' | 'works' | 'blogs'>('home')

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

onMounted(async () => {
  await nextTick()

  const sections = document.querySelectorAll<HTMLElement>('main section[id]')
  observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          active.value = entry.target.id as typeof active.value
        }
      }
    },
    { rootMargin: '-20% 0px -40% 0px', threshold: 0.2 }
  )
  sections.forEach(section => observer?.observe(section))

  const nav = document.querySelector('nav.nav-container')
  if (nav) {
    gsap.fromTo(
      nav,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
    )
  }

  const heroSection = document.querySelector('#home')
  if (heroSection) {
    gsap.fromTo(
      heroSection,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    )
  }
})

onUnmounted(() => observer?.disconnect())

const scrollToSection = (id: typeof active.value) => {
  active.value = id
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<template>
  <div
    class="relative min-h-screen bg-black text-white antialiased overflow-x-hidden"
  >
    <NuxtRouteAnnouncer />

    <div
      class="fixed inset-0 pointer-events-none
             bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
             bg-size-[50px_50px]
             mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]"
    />

    <div
      class="fixed top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-4xl
             bg-linear-to-b from-blue-500/10 via-purple-500/5 to-transparent
             blur-3xl pointer-events-none"
    />

    <main
      class="relative z-10 mx-auto max-w-6xl px-4 pt-20 pb-32
             sm:px-6 lg:px-8"
    >
      <HeroSection />

      <div
        class="my-16 h-px w-full
               bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <WorksSection :projects="projects" />

      <div
        class="my-16 h-px w-full
               bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <BlogsSection :posts="posts" />
    </main>

    <FloatingNav :active="active" @navigate="scrollToSection" />
  </div>
</template>

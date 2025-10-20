<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { GitHubIcon } from 'vue3-simple-icons'
import { AtSignIcon } from 'lucide-vue-next'

const active = ref('Home')
const buttons = ['Home', 'Works', 'Blogs']

useSeoMeta({
  title: "Happer - Homepage",
  ogType: "website",
  author: "Wint Khant Lin",
  description: "Hello, I am Wint Khant Lin, also known as Happer."
})

const { data } = useAsyncData(async () => await queryCollection("posts").all())

onMounted(async () => {
  await nextTick()
  const sections = document.querySelectorAll('main section')
  const handleScroll = () => {
    let current = 'Home'
    sections.forEach(section => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
        current = section.querySelector('h1')?.textContent?.replace('My ', '') || current
      }
    })
    active.value = current
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const scrollToSection = (btn: string) => {
  active.value = btn
  if (btn === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
  else {
    const section = [...document.querySelectorAll('main section')].find(s =>
      s.querySelector('h1')?.textContent?.includes(btn)
    )
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>



<template>
  <main class="container mt-20 mb-30">
    <h1 lang="jp" class="font-noto-serif-japanese text-heading mb-10">ハッパー です。</h1>

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
    
    <hr class="border-white/5 my-10">

    <section class="my-10">
      <h1 class="font-serif text-subheading mb-4">My Works</h1>
      <NuxtLink to="https://github.com/happer64bit/toolydooly" target="_blank">
        <div class="group relative overflow-hidden rounded-lg">
          <NuxtImg src="/img/toolydooly.png" alt="ToolyDooly"
            class="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h2 class="mt-3 text-2xl mb-2">ToolyDooly</h2>
        <p class="text-sm text-white/70">A Todo application built with NestJS, Express, Vue, Postgres, and MongoDB,
          running in a Dockerized microservice architecture.</p>
      </NuxtLink>
    </section>

    <hr class="border-white/5 my-10">

    <section>
      <h1 class="font-serif text-subheading mb-4">Blogs</h1>
      <NuxtLink v-for="post in data" :href="post.path" class="block my-2 hover:bg-white/5 p-3 py-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-sm line-clamp-2 text-white/80">{{ post.description }}</p>
      </NuxtLink>
    </section>
  </main>

  <nav class="fixed bottom-5 w-full flex items-center justify-center">
    <div
      class="relative rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] flex justify-between w-80">
      <div
        class="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-1/3 rounded-full bg-white/20 blur-xl transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)]"
        :style="{
          transform: active === 'Home' ? 'translateX(0%)' : active === 'Works' ? 'translateX(100%)' : 'translateX(200%)',
          scale: active === 'Home' ? '1.1' : '1'
        }"></div>

      <button v-for="btn in buttons" :key="btn" @click="scrollToSection(btn)"
        class="relative z-10 px-5 py-2 text-white font-medium transition-colors duration-300"
        :class="active === btn ? 'text-white' : 'text-white/50'">
        {{ btn }}
      </button>
    </div>
  </nav>
</template>

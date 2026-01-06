<template>
  <div class="relative group opacity-0" ref="cardRef">
    <NuxtLink class="block" :href="project.source" target="_blank">
      <article class="relative">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-7 h-7 rounded-full bg-linear-to-b from-red-900 to-red-800 border-[3px] border-white shadow-sm"></div>

        <div
          class="p-1 bg-white rounded-2xl transition-transform duration-500 shadow-[-2px_3px_3px_0px_rgba(0,0,0,0.12)] origin-top group-hover:rotate-0"
          :class="rotateClass"
        >
          <div class="aspect-video">
            <NuxtImg
              :src="project.img"
              :alt="project.name"
              class="w-full h-full object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              :fetchpriority="isLcp ? 'high' : undefined"
              :loading="isLcp ? 'eager' : 'lazy'"
            />
          </div>
        </div>

        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mt-3 md:mt-4">{{ project.name }}</h3>
        <p class="text-foreground-muted text-sm md:text-base mt-2 line-clamp-2">{{ project.description }}</p>
      </article>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const cardRef = ref(null)
let animation

onMounted(() => {
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  animation = gsap.fromTo(
    cardRef.value,
    { opacity: 0, y: 18, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.value,
        start: 'top 85%',
        once: true
      }
    }
  )
})

onBeforeUnmount(() => {
  if (animation?.scrollTrigger) animation.scrollTrigger.kill()
  if (animation) animation.kill()
})

defineProps({
  project: {
    type: Object,
    required: true
  },
  rotateClass: {
    type: String,
    default: ''
  },
  isLcp: {
    type: Boolean,
    default: false
  }
})
</script>

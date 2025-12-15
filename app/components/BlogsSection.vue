<script setup lang="ts">
import { CalendarIcon, ArrowRightIcon } from 'lucide-vue-next'

interface Post {
  path: string
  title: string
  description: string
  publishedDate: string
}

defineProps<{
  posts?: Post[]
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })
}
</script>

<template>
  <section
    id="blogs"
    class="scroll-mt-24 py-16"
  >
    <div class="mb-12 space-y-2">
      <h2 class="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
        Latest Blogs
      </h2>
      <p class="text-lg text-white/60">
        Thoughts, tutorials, and learnings
      </p>
    </div>

    <div class="space-y-4">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :href="post.path"
        class="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300
               hover:border-white/20 hover:bg-white/[0.07] hover:scale-[1.01] hover:shadow-xl hover:shadow-white/5
               active:scale-[0.99]"
      >
        <div class="p-6 space-y-4">
          <div class="flex items-start justify-between gap-4">
            <h3 class="flex-1 text-xl font-semibold leading-snug text-white/90 transition-colors duration-300 group-hover:text-white">
              {{ post.title }}
            </h3>
            <ArrowRightIcon
              class="w-5 h-5 shrink-0 text-white/40 transition-all duration-300
                     group-hover:text-white group-hover:translate-x-1"
            />
          </div>

          <p class="text-sm leading-relaxed text-white/60 line-clamp-2 transition-colors duration-300 group-hover:text-white/70">
            {{ post.description }}
          </p>

          <div class="pt-4 border-t border-white/10">
            <div class="flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 group-hover:text-white/60">
              <CalendarIcon class="w-4 h-4" />
              <time :datetime="post.publishedDate">
                {{ formatDate(post.publishedDate) }}
              </time>
            </div>
          </div>
        </div>

        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 transition-all duration-300 group-hover:ring-white/15"
        />
      </NuxtLink>
    </div>
  </section>
</template>

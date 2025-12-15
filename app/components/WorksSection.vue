<script setup lang="ts">
import { ExternalLinkIcon } from 'lucide-vue-next'

interface Project {
  id: string
  name: string
  description: string
  img?: string
  source: string
}

defineProps<{
  projects?: Project[]
}>()
</script>

<template>
  <section
    id="works"
    class="scroll-mt-24 py-16"
  >
    <div class="mb-12 space-y-2">
      <h2 class="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
        My Works
      </h2>
      <p class="text-lg text-white/60">
        Projects I've built and contributed to
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2">
      <NuxtLink
        v-for="project in projects"
        :key="project.id"
        :to="project.source"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
               transition-all duration-500
               hover:border-white/20 hover:bg-white/[0.07]
               hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5
               active:scale-[0.98]"
      >
        <div
          class="relative aspect-video overflow-hidden
                 bg-linear-to-br from-white/5 to-white/2"
        >
          <NuxtImg
            v-if="project.img"
            :src="project.img"
            :alt="project.name"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            format="webp"
            loading="lazy"
            class="h-full w-full object-cover transition-all duration-700
                   group-hover:scale-110 group-hover:brightness-75"
          />

          <div
            v-else
            class="flex h-full w-full items-center justify-center
                   bg-linear-to-br from-white/10 to-white/5"
          >
            <ExternalLinkIcon class="h-12 w-12 text-white/30" />
          </div>

          <div
            class="absolute inset-0 flex items-center justify-center
                   bg-black/60 text-white backdrop-blur-sm
                   opacity-0 transition-all duration-500
                   group-hover:opacity-100"
          >
            <ExternalLinkIcon class="h-6 w-6" />
          </div>
        </div>

        <div class="space-y-2 p-6">
          <h3
            class="text-xl font-semibold tracking-tight text-white/90
                   transition-colors duration-300
                   group-hover:text-white"
          >
            {{ project.name }}
          </h3>

          <p
            class="line-clamp-2 text-sm leading-relaxed text-white/60
                   transition-colors duration-300
                   group-hover:text-white/70"
          >
            {{ project.description }}
          </p>
        </div>

        <div
          class="pointer-events-none absolute inset-0
                 -translate-x-full
                 bg-linear-to-tr from-transparent via-white/0 to-transparent
                 opacity-0 transition-all duration-1000
                 group-hover:translate-x-full group-hover:opacity-100"
        />
      </NuxtLink>
    </div>
  </section>
</template>


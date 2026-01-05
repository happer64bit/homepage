<template>
  <div class="relative group">
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

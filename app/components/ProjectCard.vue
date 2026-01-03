<template>
  <article class="relative">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
    <div class="p-1 bg-white rounded-2xl transition-transform duration-500 group hover:rotate-0 shadow-[-2px_3px_3px_0px_rgba(0,0,0,0.12)]" :class="rotateClass">
      <div class="aspect-video">
        <NuxtImg :src="project.img" :alt="project.name" class="w-full h-full object-cover rounded-xl" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" :fetchpriority="isLcp ? 'high' : undefined" :loading="isLcp ? 'eager' : 'lazy'" />
      </div>
    </div>
    <h3 class="text-2xl font-bold mt-4">{{ project.name }}</h3>
    <p class="text-foreground-muted text-sm mt-2">{{ project.description }}</p>
  </article>
</template>

<script setup>
const props = defineProps({
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

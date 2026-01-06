<template>
  <NuxtMarquee :duration="16" :pause-on-hover="true" class="bg-blue-500 w-full py-4 overflow-hidden -rotate-3" :auto-fill="true">
    <div v-for="(icon, i) in items" :key="i" class="flex items-center justify-center w-24">
      <i :class="icon" class="text-white text-5xl" />
    </div>
  </NuxtMarquee>
</template>


<script setup>
const items = [
  'devicon-typescript-plain',
  'devicon-javascript-plain',
  'devicon-bun-plain',
  'devicon-docker-plain',
  'devicon-figma-plain',
  'devicon-python-plain',
  'devicon-vuejs-plain',
  'devicon-react-original',
  'devicon-svelte-plain',
  'devicon-nextjs-plain',
  'devicon-nuxtjs-plain',
  'devicon-tailwindcss-plain',
  'devicon-express-original',
  'devicon-fastify-plain',
  'devicon-svelte-plain'
]
</script>

<script setup>
import { Linkedin } from 'lucide-vue-next';
import { GitHubIcon, GmailIcon } from 'vue3-simple-icons'

const socials = [
  {
    name: 'GitHub',
    icon: GitHubIcon,
    href: 'https://github.com/happer64bit',
    color: '#181717',
    gradient: 'radial-gradient(64px circle at 30% 30%, rgba(24,23,23,0.35), transparent 60%)'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/wintkhantlin',
    color: '#0A66C2',
    gradient: 'radial-gradient(64px circle at 30% 30%, rgba(10,102,194,0.35), transparent 60%)'
  },
  {
    name: 'Email',
    icon: GmailIcon,
    href: 'mailto:wintkhantlin@gmail.com',
    color: '#EA4335',
    gradient: 'radial-gradient(64px circle at 30% 30%, rgba(234,67,53,0.35), transparent 60%)'
  }
]
</script>

<template>
  <div class="flex items-center gap-3">
    <a
      v-for="item in socials"
      :key="item.name"
      :href="item.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="item.name"
      class="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full grid place-items-center overflow-hidden ring-1 ring-white/20 hover:ring-white/40 transition-all"
    >
      <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-sm" :style="{ background: item.gradient }"></span>
      <component :is="item.icon" class="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" :style="{ color: item.color }" />
      <span class="sr-only">{{ item.name }}</span>
    </a>
  </div>
  </template>

<script setup lang="ts">
import { computed } from 'vue'
import { HomeIcon, BriefcaseIcon, PenIcon } from 'lucide-vue-next'

interface NavButton {
    id: 'home' | 'works' | 'blogs'
    icon: any
    label: string
}

const props = defineProps<{
    active: 'home' | 'works' | 'blogs'
}>()

const emit = defineEmits<{
    navigate: [id: 'home' | 'works' | 'blogs']
}>()

const buttons: NavButton[] = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'works', icon: BriefcaseIcon, label: 'Works' },
    { id: 'blogs', icon: PenIcon, label: 'Blogs' }
]

const indicatorStyle = computed(() => {
    const index = buttons.findIndex(b => b.id === props.active)
    return {
        transform: `translateX(${index * 100}%)`
    }
})
</script>

<template>
    <nav class="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 max-sm:max-w-xs">
        <div class="relative flex items-center rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-2xl
             shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div class="absolute top-1.5 left-1.5 h-[calc(100%-0.75rem)] w-[calc(33.333%-0.375rem)]
               rounded-full bg-white/15 backdrop-blur-sm
               shadow-[0_4px_16px_rgba(255,255,255,0.1)]
               transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" :style="indicatorStyle" />

            <button v-for="btn in buttons" :key="btn.id" :aria-label="`Navigate to ${btn.label}`"
                @click="emit('navigate', btn.id)" class="relative z-10 flex flex-1 items-center justify-center gap-2 px-4 py-3
               font-medium text-white/50 transition-all duration-300
               hover:text-white/70 active:scale-90
               max-sm:px-3 max-sm:py-2.5" :class="{ 'text-white': active === btn.id }">
                <component :is="btn.icon" class="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span class="hidden text-sm sm:inline">
                    {{ btn.label }}
                </span>
            </button>
        </div>
    </nav>
</template>

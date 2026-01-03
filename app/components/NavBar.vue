<template>
    <nav class="sticky top-0 z-50 p-4">
        <div class="flex items-center justify-between">
            <div
                class="flex items-center bg-[#1a1a1a] rounded-full p-1.5 shadow-2xl border border-white/5 w-full max-w-240 mx-auto">
                <div class="flex items-center justify-center w-10 h-10 bg-white rounded-full ml-1">
                    <span class="text-black font-bold text-lg select-none">W</span>
                </div>
                <div class="hidden md:flex items-center gap-6 px-4">
                    <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id"
                        class="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                        <component :is="link.icon"
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                        <span>{{ link.label }}</span>
                    </a>
                </div>
                <div class="ml-auto hidden md:block">
                    <a href="mailto:wintkhantlin@gmail.com"
                        class="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        wintkhantlin@gmail.com
                    </a>
                </div>
                <button type="button"
                    class="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu" :aria-expanded="open ? 'true' : 'false'" @click="toggle">
                    <component :is="open ? X : Menu" class="w-5 h-5 transition-transform duration-300"
                        :class="open ? 'rotate-90 scale-110' : 'rotate-0 scale-100'" />
                </button>
            </div>
        </div>
        <Transition name="dropdown">
            <div v-show="open" class="md:hidden mt-3 absolute left-0 right-0 px-4" ref="panel">
                <div class="max-w-240 mx-auto rounded-2xl bg-[#1a1a1a] border border-white/5 shadow-2xl p-4">
                    <div class="flex flex-col gap-3">
                        <a v-for="link in navLinks" :key="link.id" :href="'#' + link.id"
                            class="link-item group flex items-center gap-3 px-3 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                            <component :is="link.icon"
                                class="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                            <span>{{ link.label }}</span>
                        </a>
                        <a href="mailto:wintkhantlin@gmail.com"
                            class="mt-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors text-center">
                            wintkhantlin@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
import { Menu, X, LayoutGrid, User2 } from 'lucide-vue-next'
import gsap from 'gsap'
const open = ref(false)
const navLinks = [
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'about', label: 'About', icon: User2 }
]
const toggle = async () => {
    open.value = !open.value
}
watch(open, async (val) => {
    if (!val || typeof window === 'undefined') return
    await nextTick()
    const links = document.querySelectorAll('.link-item')
    gsap.from(links, {
        opacity: 0,
        y: -8,
        stagger: 0.06,
        duration: 0.25,
        ease: 'power2.out'
    })
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
}
</style>

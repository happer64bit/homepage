<script setup lang="ts">
import { FacebookIcon, GitHubIcon } from 'vue3-simple-icons'
import { AtSignIcon, SparklesIcon } from 'lucide-vue-next'

const socialLinks = [
    {
        href: 'mailto:wintkhantlin@gmail.com',
        icon: AtSignIcon,
        label: 'wintkhantlin@gmail.com',
        color: 'hover:text-blue-400'
    },
    {
        href: 'https://github.com/happer64bit',
        icon: GitHubIcon,
        label: 'happer64bit',
        color: 'hover:text-gray-300',
        external: true
    },
    {
        href: 'https://www.facebook.com/wintkhantlin',
        icon: FacebookIcon,
        label: 'wintkhantlin',
        color: 'hover:text-blue-500',
        external: true
    }
]
</script>

<template>
    <section id="home" class="relative scroll-mt-24 flex min-h-[80vh] items-center">
        <div class="relative z-10 space-y-8">
            <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2
               text-sm text-white/70 backdrop-blur-sm animate-fade-in">
                <SparklesIcon class="h-4 w-4" />
                <span>Welcome to my portfolio</span>
            </div>

            <h1 lang="ja" class="font-serif text-5xl font-bold leading-tight tracking-tight text-white
               sm:text-6xl md:text-7xl lg:text-8xl animate-slide-up delay-100">
                ハッパーと申します。
            </h1>

            <div class="max-w-2xl space-y-4 animate-slide-up delay-200">
                <p class="text-lg leading-relaxed text-white/70">
                    Hello, my real name is
                    <span class="relative font-semibold text-white highlight">
                        Wint Khant Lin
                    </span>,
                    but Happer is my nickname.
                    I live in Yangon. I grew up with the internet, and I enjoy programming and learning new things.
                </p>

                <p class="text-lg leading-relaxed text-white/70">
                    I've been learning how to code since
                    <span class="relative font-semibold text-white highlight">
                        2021
                    </span>.
                    Currently, I actively study Statistics and programming every day.
                    I have worked on a moderate number of side projects for learning.
                </p>
            </div>

            <div class="flex flex-wrap items-center gap-4 animate-slide-up delay-300">
                <NuxtLink v-for="link in socialLinks" :key="link.href" :to="link.href"
                    :target="link.external ? '_blank' : undefined"
                    :rel="link.external ? 'noopener noreferrer' : undefined" class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2
                 text-white/70 backdrop-blur-sm transition-all duration-300
                 hover:border-white/20 hover:bg-white/10 hover:text-white
                 hover:scale-105 active:scale-95" :class="link.color">
                    <component :is="link.icon" class="h-5 w-5" />
                    <span class="font-mono text-sm underline decoration-dotted decoration-white/30">
                        {{ link.label }}
                    </span>
                </NuxtLink>
            </div>
        </div>

        <div class="pointer-events-none absolute left-1/2 top-0 h-200 w-200 -translate-x-1/2
             rounded-full bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent
             blur-3xl animate-pulse-slow" />
    </section>
</template>

<style scoped>
.highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #60a5fa, #a78bfa);
    opacity: 0.5;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out both;
}

.animate-slide-up {
    animation: slide-up 0.6s ease-out both;
}

.delay-100 {
    animation-delay: 0.1s;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}
</style>

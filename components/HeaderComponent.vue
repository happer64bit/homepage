<template>
    <header class="py-3 sticky top-0 left-0 backdrop-blur-lg">
        <nav class="grid grid-cols-3 container z-50">
            <div class="flex items-center gap-4">
                <NuxtLink href="/posts" class="text-[#4a4a4a]">Blog</NuxtLink>
            </div>
            <div class="flex items-center justify-center">
                <NuxtLink href="/">
                    <NuxtImg src="/icons/WINT.svg" />
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>
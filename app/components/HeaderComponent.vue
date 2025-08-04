<template>
    <header class="px-6 py-4 text-[#383838]">
        <nav class="flex items-center justify-between">
            <NuxtLink to="/" class="text-2xl">HAPPER DESU</NuxtLink>
            <NuxtLink to="/posts" class="text-2xl">BORUKU</NuxtLink>
        </nav>
    </header>
</template>

<style>
a[aria-current=page] {
    @apply underline;
}
</style>
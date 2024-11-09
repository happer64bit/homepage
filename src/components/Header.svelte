<script lang="ts">
	import { ChevronRight } from "lucide-svelte";
	import { onMount } from "svelte";

    let path = $state("")

    onMount(() => {
        path = window.location.pathname
    })
</script>

<header class="sticky top-0 left-0 w-full backdrop-blur-sm">
    <nav class="container flex justify-between items-center py-2">
        <a href="/" class="text-lg font-bold">Wint</a>
        <div class="flex items-center gap-6">
            <a href="/posts" class="text-sm font-semibold data-[active=true]:text-white text-white/60" data-active={path.startsWith("/posts")}>Posts</a>
            <button class="px-4 py-1.5 text-sm bg-white text-black rounded-full group flex items-center gap-1">Donate <ChevronRight size={16} class="transition-transform group-hover:translate-x-1" /></button>
        </div>
    </nav>
</header>
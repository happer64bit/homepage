<script>
	import Search from "./search/Search.svelte";

</script>
<header class="sticky top-0 left-0 w-full backdrop-blur-sm z-50 border-b border-b-white/5">
    <nav class="container flex justify-between items-center py-2">
        <a href="/" class="text-lg font-bold">Wint</a>
        <div class="flex items-center gap-6">
            <a href="/posts" class="font-semibold">Posts</a>
            <Search />
        </div>
    </nav>
</header>

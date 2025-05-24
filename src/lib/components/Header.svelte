<script>
	import Icon from '@iconify/svelte';
</script>

<header class="py-3 sticky top-0 left-0 backdrop-blur-lg z-50">
	<nav class="grid grid-cols-3 container">
		<div class="flex items-center gap-4">
			<a href="/posts" class="text-[#4a4a4a]">Blog</a>
		</div>
		<div class="flex items-center justify-center">
			<a href="/">
				<img src="/images/WINT.svg" alt="Wint Khant Lin Portfolio Icon" class="w-32" />
			</a>
		</div>
		<div class="flex justify-end">
			<a
				href="/cv.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 group"
				>Resume
			</a>
		</div>
	</nav>
</header>

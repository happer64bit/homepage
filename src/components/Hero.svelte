<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
</script>

<section
	class="container inset-0 mx-auto flex h-[60vh] w-full items-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-4"
>
	<div class="w-full space-y-8">
		<div class="flex justify-end gap-6 text-gray-400 motion-preset-slide-up-lg motion-preset-fade-lg">
			<a href="https://github.com/happer64bit" class="transition-colors hover:text-white" target="_blank">
				<img src="/assets/github.svg" alt="GitHub" class="w-[24px] h-[24px]"/>
			</a>
		</div>
		<h1 class="text-6xl font-bold leading-tight motion-preset-slide-up-lg motion-preset-fade-lg">
			I am
            Wint Khant Lin.
        </h1>
		<div class="flex justify-end motion-preset-slide-up-lg motion-preset-fade-lg delay-100">
			<a
				href="https://www.facebook.com/profile.php?id=61558294022750"
				target="_blank"
				class="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-all hover:bg-opacity-90"
			>
				Available for Work
				<ChevronRight size={16} class="transition-transform group-hover:translate-x-1" />
			</a>
		</div>
	</div>
</section>

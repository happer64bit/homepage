<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import GitHubIcon from './../icons/github.svg'
</script>

<section
	class="container inset-0 mx-auto flex h-[60vh] w-full items-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-4"
>
	<div class="w-full space-y-8">
		<div class="flex justify-end gap-6 text-gray-400 motion-preset-slide-up-lg motion-preset-fade-lg">
			<a href="https://github.com/happer64bit" class="transition-colors hover:text-white" target="_blank">
				<img src={GitHubIcon} alt="GitHub" class="w-[24px] h-[24px]"/>
			</a>
		</div>
		<div class="leading-tight motion-preset-slide-up-lg motion-preset-fade-lg">
			<h1 style="font-size: 60px; line-height: 1; font-weight: bold;">
				I am
			</h1>
			<h1 style="font-size: 60px; line-height: 1; font-weight: bold;">
				Wint Khant Lin.
			</h1>
		</div>
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

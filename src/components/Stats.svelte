<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import nextjsLogo from '../icons/nextjs-original.svg';
	import svelteLogo from '../icons/svelte.svg';
	import flutterLogo from '../icons/flutter.svg';
	import typescriptLogo from '../icons/typescript.svg';
	import nodejsLogo from '../icons/nodejs.svg';
	import nestLogo from '../icons/nest.svg';
	import pythonLogo from '../icons/python.svg';

	const frameworks = [
		{ name: 'Next.js', logo: nextjsLogo },
		{ name: 'Svelte', logo: svelteLogo },
		{ name: 'Flutter', logo: flutterLogo },
		{ name: 'TypeScript', logo: typescriptLogo },
		{ name: 'Node.js', logo: nodejsLogo },
		{ name: 'Nest', logo: nestLogo },
		{ name: 'Python', logo: pythonLogo }
	];

	let currentFramework = 0;
	let hoveredFramework: string | null = null;
	let displayFramework = frameworks[currentFramework].name;

	let delayTimeout: ReturnType<typeof setTimeout>;

	// Simple throttle function
	const throttle = (func: Function, wait: number) => {
		let timeout: ReturnType<typeof setTimeout> | null = null;
		return function (this: any, ...args: any[]) {
			if (!timeout) {
				timeout = setTimeout(() => {
					func.apply(this, args);
					timeout = null;
				}, wait);
			}
		};
	};

	// Throttle the hover interaction
	const handleMouseEnter = throttle((frameworkName: string) => {
		hoveredFramework = frameworkName;
	}, 200); // Throttle to only trigger once every 200ms

	const handleMouseLeave = throttle(() => {
		hoveredFramework = null;
	}, 200); // Throttle to only trigger once every 200ms

	// Updated updateFramework with throttle
	const updateFramework = throttle(() => {
		if (!hoveredFramework) {
			clearTimeout(delayTimeout);

			delayTimeout = setTimeout(() => {
				currentFramework = (currentFramework + 1) % frameworks.length;
				displayFramework = frameworks[currentFramework].name;
			}, 1500);
		}
	}, 1000); // Throttle to only trigger once every 1000ms

	setInterval(updateFramework, 2500);
</script>

<section class="container mx-auto px-4 py-8 md:py-12">
	<div
		class="motion-preset-fade-lg motion-preset-slide-up-lg mt-6 grid grid-cols-2 gap-2 overflow-hidden rounded-lg motion-delay-200 md:grid-cols-5 md:gap-[1px]"
	>
		<div class="col-span-2 bg-zinc-900 p-6 transition-colors hover:bg-zinc-800 md:p-8">
			<div class="mb-4 text-2xl font-bold md:mb-6 md:text-3xl">
				I love{' '}
				<span class="relative inline-block">
					<span class="invisible">{hoveredFramework || displayFramework}</span>
					{#key hoveredFramework || displayFramework}
						<span
							in:fly={{ y: 20, duration: 400, easing: quintOut }}
							out:fly={{ y: -20, duration: 400, easing: quintOut }}
							class="absolute left-0 top-0 text-purple-400"
						>
							{hoveredFramework || displayFramework}
						</span>
					{/key}
				</span>
			</div>
			<div class="flex flex-wrap gap-2 md:gap-4">
				{#each frameworks as framework}
					<div
						role="button"
						tabindex="-1"
						class="h-8 w-8 transform cursor-pointer rounded-lg bg-zinc-800 p-1 transition-all hover:scale-110 hover:bg-zinc-700 md:h-10 md:w-10 md:p-2"
						on:mouseenter={() => handleMouseEnter(framework.name)}
						on:mouseleave={handleMouseLeave}
					>
						<img
							src={framework.logo}
							alt={framework.name}
							loading="lazy"
							class="h-full w-full object-contain"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div
			class="group flex flex-col justify-evenly bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:p-6"
		>
			<p class="text-sm font-medium md:text-base">Experience</p>
			<div class="relative">
				<span class="invisible">4+ Years</span>
				{#key '5+ Years'}
					<p
						in:fly={{ y: 20, duration: 400, easing: quintOut }}
						class="absolute left-0 top-0 text-xl font-bold transition-colors group-hover:text-purple-400 md:text-2xl"
					>
						5+ Years
					</p>
				{/key}
			</div>
		</div>
		<div
			class="group flex flex-col justify-evenly bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:p-6"
		>
			<p class="text-sm font-medium md:text-base">Projects</p>
			<div class="relative">
				<span class="invisible">12+</span>
				{#key '12+'}
					<p
						in:fly={{ y: 20, duration: 400, easing: quintOut }}
						class="absolute left-0 top-0 text-xl font-bold transition-colors group-hover:text-purple-400 md:text-2xl"
					>
						12+
					</p>
				{/key}
			</div>
		</div>
		<div
			class="group col-span-2 flex flex-col justify-evenly bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:col-span-1 md:p-6"
		>
			<p class="text-sm font-medium md:text-base">Success Rate</p>
			<div class="relative">
				<span class="invisible">100%</span>
				{#key '85%'}
					<p
						in:fly={{ y: 20, duration: 400, easing: quintOut }}
						class="absolute left-0 top-0 text-xl font-bold transition-colors group-hover:text-purple-400 md:text-2xl"
					>
						85%
					</p>
				{/key}
			</div>
		</div>
	</div>
</section>

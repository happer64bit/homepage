<script lang="ts">
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import patternicon from './../assets/pattern.png';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	import CSSIcon from './../assets/devicons/css3.svg';
	import GitIcon from './../assets/devicons/git.svg';
	import GoIcon from './../assets/devicons/golang.svg';
	import HTMLIcon from './../assets/devicons/html5.svg';
	import JSIcon from './../assets/devicons/javascript.svg';
	import NextJSIcon from './../assets/devicons/nextjs.svg';
	import PostgresIcon from './../assets/devicons/postgresql.svg';
	import ReactIcon from './../assets/devicons/react.svg';
	import SolidIcon from './../assets/devicons/solidjs.svg';
	import SvelteIcon from './../assets/devicons/svelte.svg';
	import TailwindIcon from './../assets/devicons/tailwindcss.svg';
	import TSIcon from './../assets/devicons/typescript.svg';
	import ExpressIcon from './../assets/devicons/express-original.svg';
	import FastapiIcon from './../assets/devicons/fastapi-original.svg';
	import FigmaIcon from './../assets/devicons/figma-original.svg';
	import NestJSIcon from './../assets/devicons/nestjs-original.svg'
	import PrismaIcon from './../assets/devicons/prisma-original.svg';

	gsap.registerPlugin(ScrollTrigger);

	let flower: HTMLDivElement;

	const { data } = $props();

	onMount(() => {
		gsap.to(flower, {
			rotate: 360,
			scrollTrigger: {
				trigger: flower,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		});

		gsap.to(".box", {
			y: -50,
			duration: 1,
			yoyo: true,
			repeat: -1,
			ease: "power1.inOut"
		})
	});

	const skills = [
		{ label: 'HTML5', icon: HTMLIcon },
		{ label: 'CSS3', icon: CSSIcon },
		{ label: 'JavaScript', icon: JSIcon },
		{ label: 'TypeScript', icon: TSIcon },
		{ label: 'Go', icon: GoIcon },
		{ label: 'Next.js', icon: NextJSIcon },
		{ label: 'PostgreSQL', icon: PostgresIcon },
		{ label: 'React', icon: ReactIcon },
		{ label: 'SolidJS', icon: SolidIcon },
		{ label: 'Svelte', icon: SvelteIcon },
		{ label: 'Tailwind CSS', icon: TailwindIcon },
		{ label: 'Git', icon: GitIcon },
		{ label: 'Express.JS', icon: ExpressIcon },
		{ label: 'FastAPI', icon: FastapiIcon },
		{ label: "Figma", icon: FigmaIcon },
		{ label: "Nest.JS", icon: NestJSIcon },
		{ label: "Prisma", icon: PrismaIcon }
	];
</script>

<svelte:head>
	<title>Wint Khant Lin</title>
</svelte:head>

<main class="bg-[#F5F294] px-4 text-[#4B3339] sm:px-6 md:px-12">
	<div
		class="container mx-auto flex min-h-[70vh] flex-col-reverse items-center justify-between gap-8 py-8 md:flex-row md:py-12"
	>
		<div class="w-full text-center md:w-2/3 md:text-left">
			<h1 class="text-4xl leading-tight font-black sm:text-5xl md:text-7xl">
				Hi 👋<br />I am Wint Khant Lin
			</h1>
			<p class="mt-4 text-base font-semibold sm:text-lg md:mt-6 md:text-2xl">
				Hey, I am a Computer Science student based in Myanmar. <br class="hidden md:inline" />
				I am currently a Tech Content Writer and Full Stack Developer.
			</p>
			<a href="/posts">
				<button
					class="relative mt-6 w-48 cursor-pointer border-2 border-[#3F2723] bg-white py-2.5 text-lg font-bold text-[#3F2723] shadow-[4px_4px_0px_#3F2723] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none md:mt-8"
				>
					Read All Blogs
				</button>
			</a>
		</div>
		<div class="flex w-full justify-center md:w-1/3 md:justify-end">
			<img
				src={patternicon}
				width="260"
				height="260"
				alt="Random Pattern"
				class="w-56 object-contain md:w-64 box"
			/>
		</div>
	</div>
</main>

<section
	class="border-y border-y-[#4B3339] bg-[#eee] px-4 py-8 text-[#4B3339] sm:px-6 sm:py-10 md:px-12"
>
	<div class="container mx-auto">
		<h1 class="mb-6 text-center text-2xl font-black sm:mb-8 sm:text-3xl md:text-left md:text-4xl">
			Latest Posts
		</h1>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
			{#each data.posts as post, i}
				<article class="transform transition-transform duration-200 hover:scale-[1.02]">
					<a href="/posts/{post.slug}" class="block">
						<div class="w-full rounded-3xl border border-[#4B3339] p-3 sm:rounded-4xl sm:p-4">
							<img
								src={i === 0
									? 'https://lh3.googleusercontent.com/c7g7xi3GZwg6WaJAAG6zmGKgE5jH_dW0G_xCbgvKZvVeEc5i_Iv9QySokyDgZDnrvyYODZAj7viABV4JcPHnMON_dP-VrlzgO0sgy651xqG6o2lsTU35=w960'
									: i === 1
										? 'https://lh3.googleusercontent.com/fU4H9RSXzfK5SAc_dqpotTXweuGg36AtYDqq7GcR2KKBhnnmMZbqyjt1pBUdlt5ITs_qaMm87S9Krm9M4_3x7ZGZmdLYaTAXrhgmfv5ptajWHAmuuw=w960'
										: 'https://lh3.googleusercontent.com/Me4zB1hdTazU2j_f3C7jnjIi0unol19lVVN33OKTK7994iRQSINQMny-lyU_qCuhBkgS4FjEmgMud6vEkM9kEoUXNDgUuyxmnw2UjbVZYXI_1dZ7Lw=w960'}
								alt="Thumbnail"
								class="h-48 w-full rounded-2xl object-cover sm:h-56 sm:rounded-3xl"
							/>
							<h2 class="mt-3 line-clamp-1 text-lg font-medium sm:text-xl md:text-2xl">
								{post.title}
							</h2>
							<p class="mt-1 text-xs opacity-80 sm:text-sm md:text-base">
								{new Date(post.publishedDate).toLocaleDateString()}
							</p>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<section
	class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#fff] text-[#4B3339]"
>
	<div class="relative text-center">
		<enhanced:img
			src="./../assets/flower-shape.svg"
			alt="Flower Shape"
			width="200"
			height="200"
			class="z-0 mx-auto"
			bind:this={flower}
		/>
		<h2
			class="relative z-10 mt-[-40px] inline-block rounded-xl bg-white/50 px-4 py-2 pb-4 text-5xl font-black backdrop-blur-sm"
		>
			My Tech Stack
		</h2>
		<div class="mt-6 flex max-w-[140dvh] flex-wrap items-center justify-center gap-4">
			{#each skills as skill}
				<div
					class="flex items-center gap-2 rounded-xl border border-[#4B3339]/50 bg-[#4B3339]/10 px-2 py-2 transition hover:scale-110"
				>
					<img src={skill.icon} alt={skill.label} width="30" class="rounded-lg" loading="lazy" />
					<b class="text-lg">{skill.label}</b>
				</div>
			{/each}
		</div>
	</div>
</section>

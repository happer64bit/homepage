<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import SplitText from 'gsap/SplitText';
	import { gsap } from 'gsap';
	import snapHeroImg from '$lib/assets/snap-hero.jpg?enhanced';
	import SectionDivider from '$lib/components/SectionDivider.svelte';
	import HomeAboutMeSection from '$lib/components/HomeAboutMeSection.svelte';
	import HomeBlogSection from '$lib/components/HomeBlogSection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		gsap.registerPlugin(SplitText);

		const tl = gsap.timeline();

		tl.to('#snapHeroImg', {
			scale: 1,
			duration: 1.5,
			delay: 0.5
		});

		// Animate all buttons with same class
		tl.to(
			'.hero-button-animate',
			{
				scale: 1,
				ease: 'power4.out',
				stagger: 0.2
			},
			'-=1.5'
		);

		const split = new SplitText('#heroHeadingText', {
			type: 'words'
		});

		tl.from(
			split.words,
			{
				y: '100%',
				opacity: 0,
				duration: 0.5,
				ease: 'power4.out',
				stagger: 0.1
			},
			'-=1.2'
		);
	});
</script>

<svelte:head>
	<title>Wint Khant Lin | Portfolio</title>
	<meta
		name="description"
		content="I am Wint Khant Lin. Hey, I am a Computer Science student based in Myanmar. I am currently a Tech Content Writer and Full Stack Developer"
	/>
	<meta name="keywords" content="wint khant, wint khant lin, happer64bit, portfolio" />
</svelte:head>

<main class="container">
	<div id="heroSection" class="flex flex-col justify-center min-h-[90vh]">
		<div class="space-y-4 text-center">
			<enhanced:img
				id="snapHeroImg"
				src={snapHeroImg}
				loading="lazy"
				alt="Shoot From Bottom Angle"
				class="mx-auto rounded-full lg:w-[500px] w-[350px] scale-0 mb-4"
			/>
			<h1 id="heroHeadingText" class="text-3xl lg:text-4xl mx-auto leading-[1.4] max-w-5xl">
				Hello, I am Wint Khant Lin. I am Computer Science Student, Who love creating and designing
				things.
			</h1>
			<div class="mx-auto flex items-center justify-center gap-4">
				<a
					href="mailto:wintkhantlin@gmail.com"
					class="hero-button-animate bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:opacity-80 group scale-0"
					>Connect
					<Icon
						icon="solar:arrow-right-up-linear"
						class="relative bottom-0 left-0 transform duration-100 group-hover:bottom-[2px] group-hover:left-[2px]"
					/>
				</a>
				<a
					href="https://facebook.com/wintkhantlin"
					target="_blank"
					class="hero-button-animate decoration-dotted text-[#252525] scale-0"
					>FaceBook
				</a>
			</div>
		</div>
	</div>

	<SectionDivider />

	<HomeAboutMeSection />

	<SectionDivider />

	<HomeBlogSection />

	<hr class="border-[#ddd]" />

	<Footer />
</main>

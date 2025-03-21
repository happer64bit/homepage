<script lang="ts">
	import gsap from 'gsap';
	import projects from '../assets/projects.json';
	import { onMount } from 'svelte';
	import profileImage from './../assets/myself.webp?enhanced';

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long'
		});
	}

	onMount(() => {
		const tl = gsap.timeline({
			defaults: {
				ease: 'power2.out'
			}
		});

		tl.fromTo(
			'#profileImage',
			{
				scale: 0.8,
				opacity: 0
			},
			{
				scale: 1,
				opacity: 1,
				duration: 0.6
			}
		)
			.fromTo(
				'#name',
				{
					x: -20,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 0.5
				},
				'-=0.3'
			)
			.fromTo(
				'#description',
				{
					y: 30,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.4
				},
				'-=0.2'
			);

		gsap.fromTo(
			'.tag',
			{
				y: 20,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.4,
				stagger: 0.1,
				ease: 'back.out(1.2)'
			}
		);

		gsap.fromTo(
			'.project-card',
			{
				y: 50,
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				stagger: 0.2,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.projects-section',
					start: 'top center+=100',
					toggleActions: 'play none none reverse'
				}
			}
		);
	});
</script>

<svelte:head>
	<title>Wint Khant Lin | A Developer</title>
	<meta
		name="description"
		content="Wint Khant Lin - A Developer crafting innovative web solutions"
	/>
	<meta
		name="keywords"
		content="Wint Khant Lin, Developer, Software Engineer, Web Development, Tech Enthusiast, Happer, Happer64Bit"
	/>
	<meta name="author" content="Wint Khant Lin" />
</svelte:head>

<main class="min-h-screen">
	<section class="hero-section container mx-auto mt-10 px-4">
		<div class="flex items-center gap-4">
			<enhanced:img
				id="profileImage"
				class="min-h-20 min-w-20 max-w-20 max-h-20 rounded-full"
				src={profileImage}
				alt="Wint Khant Lin at Taung Gyi View Point"
			/>

			<div>
				<h1 id="name" class="text-xl font-bold">Hey, I am Win Khant Lin</h1>
				<p id="name">Student, Full Stack Engineer, Content Writer</p>
			</div>
		</div>
		<div>
			<p id="description" class="mt-4 text-3xl leading-10 tracking-wide text-[#ddd]">
				I am a Computer Engineering student from Yangon. I am a Web Developer, looking forward to
				become a Software Engineer. You can find me on
				<a
					class="relative font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-blue-400 hover:after:scale-x-100"
					href="http://github.com/happer64bit"
					target="_blank">GitHub</a
				>,
				<a
					class="relative font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-blue-400 hover:after:scale-x-100"
					href="https://facebook.com/wintkhantlin"
					target="_blank">Facebook</a
				>, and
				<a
					class="relative font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-blue-400 hover:after:scale-x-100"
					href="https://app.daily.dev/wintkhantlin"
					target="_blank">DailyDotDev</a
				>. I am also a
				<a
					class="relative font-bold text-white after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:text-blue-400 hover:after:scale-x-100"
					href="https://www.facebook.com/profile.php?id=61558294022750"
					target="_blank"
					>Content Writer.
				</a>
			</p>
			<div class="mt-6 flex flex-wrap items-center gap-2 xl:gap-4">
				{#each ['💻 Coding', '📖 Learning', '🎮 Gaming', '🌐 Blogging'] as tag}
					<div class="tag flex rounded-lg bg-white/5 px-4 py-2 hover:bg-white/10">
						<p>{tag}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="container mx-auto my-20 mt-24 px-4">
		<h2 class="mb-8 text-2xl font-bold">Featured Projects</h2>
		<div class="grid gap-6 lg:grid-cols-3">
			{#each projects as project}
				<article
					class="project-card group rounded-xl bg-white/5 p-6 transition-all hover:bg-white/10 lg:min-h-72"
				>
					<h3 class="text-xl font-semibold text-white">
						<a href={project.source} target="_blank" class="transition-colors hover:text-teal-400">
							{project.name}
						</a>
					</h3>
					<p class="mt-2 text-sm text-gray-400">{formatDate(project.createdAt)}</p>
					<p class="mt-4 text-gray-300">{project.description}</p>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="rounded-full bg-white/10 px-3 py-1 text-sm text-teal-400">
								{tag}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>
</main>

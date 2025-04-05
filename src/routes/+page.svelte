<script>
	import patternicon from './../assets/pattern.png';

	const { data } = $props();
</script>

<svelte:head>
	<title>Wint Khant Lin</title>
</svelte:head>

<main class="bg-[#F5F294] text-[#4B3339] px-4 sm:px-6 md:px-12">
	<div class="container mx-auto flex flex-col-reverse md:flex-row min-h-[70vh] items-center justify-between py-8 md:py-12 gap-8">
		<div class="text-center md:text-left w-full md:w-2/3">
			<h1 class="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">Hi 👋<br />I am Wint Khant Lin</h1>
			<p class="text-base sm:text-lg md:text-2xl font-semibold mt-4 md:mt-6">
				Hey, I am a Computer Science student based in Myanmar. <br class="hidden md:inline" />
				I am currently a Tech Content Writer and Full Stack Developer.
			</p>
			<a href="/posts">
				<button
					class="relative mt-6 md:mt-8 w-48 cursor-pointer border-2 border-[#3F2723] bg-white py-2.5 text-lg font-bold text-[#3F2723] shadow-[4px_4px_0px_#3F2723] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
				>
					Read All Blogs
				</button>
			</a>
		</div>
		<div class="flex justify-center md:justify-end w-full md:w-1/3">
			<img 
				src={patternicon} 
				width="260" 
				height="260" 
				alt="Random Pattern" 
				class="w-56 md:w-64 object-contain"
			/>
		</div>
	</div>
</main>

<section class="border-y border-y-[#4B3339] py-8 sm:py-10 text-[#4B3339] px-4 sm:px-6 md:px-12">
	<div class="container mx-auto">
		<h1 class="text-2xl sm:text-3xl md:text-4xl font-black text-center md:text-left mb-6 sm:mb-8">Latest Posts</h1>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
			{#each data.posts as post}
				<article class="transform transition-transform duration-200 hover:scale-[1.02]">
					<a href="/posts/{post.slug}" class="block">
						<div class="w-full rounded-3xl sm:rounded-4xl border border-[#4B3339] p-3 sm:p-4">
							<img
								src="https://lh3.googleusercontent.com/c7g7xi3GZwg6WaJAAG6zmGKgE5jH_dW0G_xCbgvKZvVeEc5i_Iv9QySokyDgZDnrvyYODZAj7viABV4JcPHnMON_dP-VrlzgO0sgy651xqG6o2lsTU35=w960"
								alt="M3"
								class="rounded-2xl sm:rounded-3xl w-full h-48 sm:h-56 object-cover"
							/>
							<h2 class="text-lg sm:text-xl md:text-2xl font-medium mt-3 line-clamp-1">{post.title}</h2>
							<p class="text-xs sm:text-sm md:text-base mt-1 opacity-80">
								{new Date(post.publishedDate).toLocaleDateString()}
							</p>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
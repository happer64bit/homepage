<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Wint Khant Lin | Posts Collection</title>
</svelte:head>

<div>
	<div class="max-w-[1200px] mx-auto my-10 grid lg:gap-5 space-y-4 px-6 lg:grid-cols-3">
		{#each data.posts as post}
			<div class="transition-all hover:scale-105">
				<a href={`/posts/${post.slug}`}>
					<article class="flex min-h-60 flex-col bg-black/10 justify-between space-y-2 p-4 rounded-2xl border-4 border-transparent hover:border-[#4B3339]">
						<div class="space-y-2">
							<h2 class="text-2xl font-bold">{post.title}</h2>
							<div class="flex items-center gap-2">
								<div class="rounded-lg bg-black/10 px-4 py-0.5 font-bold">{post.tag}</div>
								<time>{new Date(post.publishedDate).toLocaleDateString()}</time>
							</div>
						</div>
						<p class="line-clamp-3 text-gray-600">{post.summary}</p>
					</article>
				</a>
			</div>
		{/each}
	</div>
</div>
<script lang="ts">
	import Footer from "../../components/Footer.svelte";

	export let data;
</script>

<svelte:head>
	<title>Wint Khant Lin | Posts Collection</title>
</svelte:head>

<div>
	<div class="max-w-[1200px] mx-auto my-10 grid gap-5 space-y-4 px-6 lg:grid-cols-3">
		{#each data.posts as post}
			<div class="transition-all hover:scale-105">
				<a href={`/posts/${post.slug}`}>
					<article class="flex min-h-60 flex-col justify-between space-y-2 bg-[#2f2f2f] p-4 rounded-2xl border-4 border-transparent hover:border-teal-500">
						<div class="space-y-2">
							<h2 class="text-2xl font-bold">{post.title}</h2>
							<div class="flex items-center gap-2">
								<div class="rounded-lg bg-white/5 px-4 py-0.5 font-bold">{post.tag}</div>
								<time>{new Date(post.publishedDate).toLocaleDateString()}</time>
							</div>
						</div>
						<p class="line-clamp-3 text-gray-300">{post.summary}</p>
					</article>
				</a>
			</div>
		{/each}
	</div>
</div>
<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>Wint Khant Lin</title>
</svelte:head>

<section>
	<div class="grid grid-cols-3 container gap-5 my-10">
		{#each data.posts as post}
            <a href={`/posts/${post.slug}`}>
                <div class="bg-white/10 p-4 rounded-xl border-4 border-white/5 hover:border-blue-600 hover:scale-105 transform duration-200 h-60 flex justify-between flex-col">
                    <h1 title={post.title} class="text-2xl font-bold line-clamp-3">{post.title}</h1>
                    <p class="line-clamp-2 text-white/80">{post.summery}</p>
                </div>
            </a>
		{/each}
	</div>
</section>

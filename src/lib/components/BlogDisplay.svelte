<script lang="ts">
	import type { Post } from 'content-collections';

	let { posts }: { posts: Array<Post> } = $props();
</script>

<div class="divide-y divide-[#818181] peer-hover:divide-black">
	{#each posts as post, index}
		<div class="py-4 group peer">
			<a href={"/posts/" + post._meta.path}>
				<div class="py-3 flex items-top">
					<div class="px-2 py-1 h-fit border rounded-full mr-4 text-lg text-[#818181]">
						{index + 1}
					</div>
					<p
						class="title text-3xl lg:text-4xl text-[#818181] group-hover:text-black transform duration-200"
					>
						{post.title}
					</p>
				</div>
			</a>
		</div>
	{/each}
</div>

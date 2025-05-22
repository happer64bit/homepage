<script lang="ts">
	import type { Post } from "content-collections";
	import type { PageProps } from "../$types";

	let { data }: { data: { post: Post } } = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.summary} />
	<meta name="keywords" content={data.post.keywords.join(",")} />
	<meta name="author" content="Wint Khant Lin" />
	<meta property="og:title" content={`${data.post.title} | Wint Khant Lin`} />
	<meta property="og:description" content={data.post.summary} />
</svelte:head>

<article
	class="prose prose-lg prose-pre:bg-[#fff] prose-pre:border mx-auto max-w-[800px] my-20 px-4"
>
	{@html data.post.html}
</article>

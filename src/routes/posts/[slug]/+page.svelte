<script lang="ts">
	import 'highlight.js/styles/github.min.css'
	import type { PageProps } from "./$types";
	import GiscusScript from '$lib/components/GiscusScript.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content={data.post.summary} />
	<meta name="keywords" content={data.post.keywords.join(",")} />
	<meta name="author" content="Wint Khant Lin" />
	<meta property="og:title" content={`${data.post.title} | Wint Khant Lin`} />
	<meta property="og:description" content={data.post.summary} />
</svelte:head>

<main class="max-w-[800px] mx-auto my-20 px-4">
	<article
		class="prose prose-lg prose-pre:bg-[#fff] prose-pre:border mx-auto max-w-[800px]"
	>
		{@html data.post.html}
	</article>
	<div class="mt-10">
		<GiscusScript />
	</div>
</main>

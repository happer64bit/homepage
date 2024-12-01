<script lang="ts">
	import Comments from '../../../components/Comments.svelte';

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="keywords" content="{data.meta.keywords}">
</svelte:head>

<article class="my-10">
	<div class="container max-w-[800px]">
		<div class="prose prose-lg prose-invert">
			<svelte:component this={data.content} />
		</div>
		<div class="mt-10">
			<Comments />
		</div>
	</div>
</article>

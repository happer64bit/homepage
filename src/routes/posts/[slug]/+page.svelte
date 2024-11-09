<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="my-10">
	<div class="prose prose-lg prose-invert container max-w-[800px]">
		<svelte:component this={data.content} />
	</div>
</article>

<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content="{data.meta.summary}">
	<meta name="keywords" content="{data.meta.keywords.join(" ")}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div>
	<div class="prose prose-lg prose-invert container my-20 px-4">
		<data.content />
	</div>
</div>

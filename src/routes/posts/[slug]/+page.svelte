<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div>
	<div class="prose prose-lg prose-invert container my-20">
		<data.content />
	</div>
</div>

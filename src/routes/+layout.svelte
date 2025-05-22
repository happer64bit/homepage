<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import '@fontsource-variable/dm-sans';
	import { partytownSnippet } from '@qwik.dev/partytown/integration';

	let { children, data } = $props();
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>

	{@html '<script>' + partytownSnippet() + '</script>'}

	<script
		type="text/partytown"
		src="https://www.googletagmanager.com/gtag/js?id=G-QJ7KVTTN9F"
	></script>

	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', 'G-QJ7KVTTN9F');
	</script>
</svelte:head>

<Header />
{#key data.pathname}
	<div in:fade>
		{@render children()}
	</div>
{/key}

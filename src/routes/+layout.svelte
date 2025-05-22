<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import '@fontsource-variable/dm-sans';

	let { children } = $props();
</script>

<Header />
{@render children()}

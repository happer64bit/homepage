<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/raleway';
	import Header from '../components/Header.svelte';

	let { children } = $props();
</script>

<Header />
{@render children()}

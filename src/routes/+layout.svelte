<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/raleway';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import { fly } from 'svelte/transition'
	import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
	import Search from '../components/search/Search.svelte';

	let { children, data } = $props();
</script>

<Header />
{#key data.url}
	<div
		in:fly={{ y: 200, duration: 300, delay: 300 }}
    	out:fly={{ y: 200, duration: 300 }}>
		{@render children()}
	</div>
{/key}
<Footer />
<GoogleAnalytics />
<Search />
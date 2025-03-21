<script lang="ts">
    import "@fontsource-variable/raleway";
	import { partytownSnippet } from '@qwik.dev/partytown/integration'

	import '../app.css';
	import Header from "../components/Header.svelte";
	import Transition from "../components/Transition.svelte";
	let { children, data } = $props();
</script>
 
<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push', 'gtag']
		};
	</script>
 
	{@html '<script>' + partytownSnippet() + '</script>'}
 
	<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-QJ7KVTTN9F"></script>
	<script type="text/partytown">
		window.dataLayer = window.dataLayer || [];
		window.gtag = function(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-QJ7KVTTN9F');
	</script>
</svelte:head>

<Header />
<Transition url={data.url}>
	{@render children()}
</Transition>

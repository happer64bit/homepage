<script lang="ts">
    import "@fontsource-variable/raleway";

	import '../app.css';
	import Header from "../components/Header.svelte";
	let { children } = $props();
</script>

<Header />
{@render children()}

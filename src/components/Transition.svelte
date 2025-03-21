<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		children: Snippet;
		url: string;
	};

	let { children, url }: Props = $props();
</script>

{#key url}
	<div in:fly={{ y: 200, duration: 300, delay: 300 }} out:fly={{ y: 200, duration: 300 }}>
		{@render children?.()}
	</div>
{/key}

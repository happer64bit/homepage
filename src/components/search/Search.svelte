<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, scale } from 'svelte/transition';
	import SearchIcon from 'lucide-svelte/icons/search';
	import { onMount } from 'svelte';
	import SearchWorker from './search-worker?worker';

	const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();

	let search: 'idle' | 'load' | 'ready' = $state('idle');
	let searchTerm = $state('');
	let results: any[] = $state([]);
	let worker: Worker;

	onMount(() => {
		worker = new SearchWorker();

		// Send initial load message to the worker
		worker.postMessage({ type: 'load' });
		search = 'load';

		// Listen for messages from the worker
		worker.onmessage = (e) => {
			const { type, payload } = e.data;
			if (type === 'ready') {
				search = 'ready';
			} else if (type === 'results') {
				results = payload.results;
			}
		};
	});

	$effect(() => {
		if (search === 'ready' && searchTerm) {
			worker.postMessage({ type: 'search', payload: { searchTerm } });
		}
	})
</script>


<svelte:window
	onkeydown={(e) => {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === 'k' || e.key === 'K') {
				e.preventDefault();
				// if (search === 'idle') initialize()
				$open = !$open;
			}
		}
	}}
/>

<div use:melt={$portalled}>
	{#if $open}
		<div
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 100 }}
			use:melt={$overlay}
			class="fixed inset-0 h-screen w-screen bg-black/50"
		></div>
		<div
			use:melt={$content}
			in:scale={{ start: 0.9, duration: 200 }}
			out:scale={{ duration: 100, start: 0.95 }}
			class="fixed left-1/2 top-[20%] w-[90dvh] -translate-x-1/2 -translate-y-0 transform rounded-2xl border border-[hsl(0,_0%,_20.5%)] bg-[hsl(0,_0%,_11%)] p-2 px-3"
		>
			<!-- svelte-ignore a11y_autofocus -->
			<div class="flex items-center gap-4 border-b border-[hsl(0,_0%,_20.5%)] pb-2">
				<SearchIcon color="hsl(0, 0%, 50%)" />
				<input
					bind:value={searchTerm}
					placeholder="Search"
					autocomplete="off"
					spellcheck="false"
					class="bg-transparent py-1.5 outline-none placeholder:text-[hsl(0,0%,62%)] w-full"
					type="text"
					autofocus
				/>
			</div>
			<div class="results mt-3">
				{#if search === 'load'}
					<p>Loading...</p>
				{/if}

				{#if results}
					<ul>
						{#each results.slice(0, 4) as result}
							{#if result.content.length > 0}
								<li class="mb-2">
									<a onclick={() => $open = false} class="text-2xl font-bold" href="/posts/{result.slug}">{@html result.title}</a>
									<ol class="mt-2">
										{#each result.content as content}
											<li>{@html content}</li>
										{/each}
									</ol>
								</li>
							{/if}
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
</div>

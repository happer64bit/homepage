<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, scale } from 'svelte/transition';
	import SearchIcon from 'lucide-svelte/icons/search';
	import { onMount } from 'svelte';
	import SearchWorker from './search-worker?worker';
	import { CommandIcon } from 'lucide-svelte';

	const {
		elements: { trigger, portalled, overlay, content },
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
	});

	// Exported function to toggle the dialog from parent
	export function openDialog() {
		$open = true;
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === 'k' || e.key === 'K') {
				e.preventDefault();
				$open = !$open;
			}
		}
	}}
/>

<button class="px-5 py-1 flex items-center border gap-3 border-white/5 hover:bg-white/10 transition-all rounded bg-[#0b0b0b] text-sm outline-none" use:melt={$trigger} aria-label="Search">
	<SearchIcon />
	<p class="hidden lg:block">
		Search Blogs
	</p>
	<kbd class="py-0.5 bg-white/10 rounded hidden lg:flex lg:items-center gap-2 px-2 text-white/50"><CommandIcon size={13} />K</kbd>
</button>

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
			class="fixed left-1/2 top-[20%] max-w-[90dvh] w-full -translate-x-1/2 -translate-y-0 transform rounded-lg border border-[hsl(0,_0%,_20.5%)] bg-[#0c0c0c] p-2 px-3"
		>
			<!-- svelte-ignore a11y_autofocus -->
			<div class="flex items-center gap-4 border-[hsl(0,_0%,_20.5%)] ${results.length ? "border-b pb-2" : ""}">
				<SearchIcon color="hsl(0, 0%, 50%)" />
				<input
					bind:value={searchTerm}
					placeholder="Search"
					autocomplete="off"
					spellcheck="false"
					class="bg-transparent py-1.5 outline-none placeholder:text-[hsl(0,0%,62%)] w-full text-sm font-medium"
					type="text"
					autofocus
				/>
			</div>
			<hr class="-mx-2 border-[#2f2f2f] mt-2" />
			<div class="mt-3">
				{#if search === 'load'}
					<p>Loading...</p>
				{/if}

				{#if results.length > 0}
					<ul class="space-y-3">
						{#each results.slice(0, 4) as result}
							{#if result.content.length > 0}
								<li>
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
				{:else}
					<div class="text-center my-4">
						<p>Type <b>Anything</b> to get started.</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

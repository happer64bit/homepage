<script lang="ts">
	import { page } from '$app/state';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-QJ7KVTTN9F', {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-QJ7KVTTN9F">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-QJ7KVTTN9F');
	</script>
</svelte:head>

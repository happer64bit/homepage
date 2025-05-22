<script>
	import { postsSortedByDate } from '$lib/sorted';
	import BlogDisplay from './BlogDisplay.svelte';
</script>

<section class="my-14">
	<h1 class="text-xl mb-2">My Latest Blogs</h1>
	<BlogDisplay posts={postsSortedByDate.slice(0,5)} />
</section>

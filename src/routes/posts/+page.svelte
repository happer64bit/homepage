<script>
	import BlogDisplay from "$lib/components/BlogDisplay.svelte";
	import { postsSortedByDate } from "$lib/sorted";

</script>
<div class="container my-14">
	<BlogDisplay posts={postsSortedByDate} />
</div>

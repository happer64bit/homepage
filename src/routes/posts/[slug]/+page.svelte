<script lang="ts">
	import type { Post } from "content-collections";
	import type { PageProps } from "../$types";

	let { data }: { data: { post: Post } } = $props();
</script>

<article
	class="prose prose-lg prose-pre:bg-[#fff] prose-pre:border mx-auto max-w-[800px] my-20 px-4"
>
	{@html data.post.html}
</article>

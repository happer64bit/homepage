<script setup>
const { params } = useRoute()

const { data: { value: post }, error } = await useAsyncData(`/posts/${params.slug}`, () =>
  queryCollection("posts").path("/posts/" + params.slug).first()
)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useSeoMeta({
    title: post.title,
    description: post.summary,
    author: "Wint Khant Lin",
    articleTag: post.categories
})

</script>

<template>
    <section class="px-6 max-w-[800px] mx-auto mb-20">
        <div class="min-h-[30vh] flex items-center">
            <div>
                <h1 class="text-4xl">{{ post.title }}</h1>
                <p class="mt-2 text-neutral-600">Posted At {{ new Date(post.publishedDate).toLocaleDateString().replaceAll("/", "-") }}</p>
            </div>
        </div>
        <ContentRenderer :value="post.body" class="prose prose-lg max-w-full prose-pre:bg-transparent prose-code:bg-transparent prose-pre:border prose-pre:shadow-sm" />
    </section>
</template>

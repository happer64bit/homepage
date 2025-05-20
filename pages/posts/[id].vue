<script lang="ts" setup>
    const { path } = useRoute()

    const { data: page } = await useAsyncData('page-' + path, () => {
        return queryCollection('posts').path(path).order("publishedDate", "ASC").first()
    })

    if (!page.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
    }

    useSeoMeta({
        title: page.value.title,
        description: page.value.summary,
        ogTitle: page.value.title,
        ogDescription: page.value.summary,
        author: "Wint Khant Lin",
    })
</script>

<template>
    <article class="prose prose-lg prose-pre:bg-[#fff] prose-pre:border mx-auto max-w-[800px] my-20 px-4">
        <ContentRenderer v-if="page" :value="page" />
    </article>
</template>
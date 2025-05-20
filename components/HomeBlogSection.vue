<script lang="ts" setup>
const { data } = await useAsyncData('posts', () =>
    queryCollection("posts")
        .select("title", "path", "publishedDate")
        .order("publishedDate", "DESC")
        .limit(5)
        .all()
)
</script>

<template>
    <section class="my-14">
        <h1 class="text-xl mb-2">My Latest Blogs</h1>
        <BlogDisplay :posts="data"/>
    </section>
</template>
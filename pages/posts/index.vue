<script lang="ts" setup>
const { data } = await useAsyncData('posts', () =>
    queryCollection("posts")
        .select("title", "path", "publishedDate")
        .order("publishedDate", "DESC")
        .all()
)
</script>

<template>
    <div class="container mt-10">
        <BlogDisplay :posts="data" />
    </div>
</template>

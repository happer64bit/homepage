<script lang="ts" setup>

interface Post {
    title: string
    path: string
    publishedDate: Date
}

const props = defineProps<{ posts: Post[] | null }>()
</script>

<template>
    <div class="divide-y divide-[#818181] peer-hover:divide-black">
        <div v-for="(post, index) in props.posts" :key="post.path" class="py-4 group peer">
            <NuxtLink :to="post.path">
                <div class="py-3 flex items-top">
                    <div class="px-2 py-1 h-fit border rounded-full mr-4 text-lg text-[#818181]">{{ index + 1 }}</div>
                    <p class="title text-3xl lg:text-4xl text-[#818181] group-hover:text-black transform duration-100">{{ post.title }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
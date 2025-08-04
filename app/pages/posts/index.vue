<script setup>

const allPosts = await queryCollection('posts', {
    sort: 'publishedDate',
    order: 'desc',
}).all();

</script>

<template>
  <main class="px-4 py-6">
    <section class="divide-y divide-neutral-300">
      <NuxtLink
        :to="post.path"
        v-for="post in allPosts"
        :key="post.id"
        class="block py-4 hover:bg-neutral-50 transition"
      >
        <div class="grid lg:grid-cols-3 gap-6 py-2">
          <div>
            <h3 class="font-bold">{{ post.title }}</h3>
            <span class="text-sm text-neutral-500">{{ new Date(post.publishedDate).toLocaleDateString().replaceAll("/", "-") }}</span>
          </div>
          <div>
            <p class="text-sm text-neutral-600">{{ post.summary }}</p>
          </div>
          <div class="text-sm">
            <p class="font-semibold mb-1">Category</p>
            <p class="text-neutral-500">{{ post.categories.join(", ").toUpperCase() }}</p>
          </div>
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

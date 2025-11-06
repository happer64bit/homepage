<script setup>
import { onMounted } from 'vue'
import { useRoute, useAsyncData, createError, useSeoMeta } from '#imports'
import { ArrowLeft } from 'lucide-vue-next'

const { params } = useRoute()

const { data: post } = await useAsyncData(`post-${params.slug}`, () =>
  queryCollection('posts').path('/posts/' + params.slug).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.summary,
  author: 'Wint Khant Lin',
  articleTag: post.value.categories,
})

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('data-repo', 'happer64bit/homepage')
  script.setAttribute('data-repo-id', 'R_kgDOI1qB4w')
  script.setAttribute('data-category', 'Blog Posts')
  script.setAttribute('data-category-id', 'DIC_kwDOI1qB484Ce_ri')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'dark')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')

  document.getElementById('giscus-container').appendChild(script)
})
</script>

<template>
  <main class="px-6 max-w-[800px] mx-auto mb-20">
    <div>
      <div class="mt-10">
        <NuxtLink href="/" class="px-4 py-1 mb-4 flex items-center gap-2 hover:bg-white/5 w-fit rounded text-sm"><ArrowLeft /> Back To Home</NuxtLink>
        <h1 class="text-4xl mb-2">{{ post.title }}</h1>
        <p class="mb-10 text-neutral-600">
          Posted At
          {{
            new Date(post.publishedDate)
              .toLocaleDateString()
              .replaceAll('/', '-')
          }}
        </p>
      </div>
    </div>
    <article>
      <ContentRenderer
        :value="post.body"
        class="prose prose-lg max-w-full prose-code:bg-transparent prose-pre:border prose-invert prose-pre:border-white/5"
      />
    </article>

    <div id="giscus-container" class="mt-10" />
  </main>
</template>

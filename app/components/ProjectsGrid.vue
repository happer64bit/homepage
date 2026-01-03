<template>
  <section id="projects">
    <h2 class="text-4xl font-bold mb-10 text-center">MY Projects</h2>
    <div class="md:hidden space-y-10">
      <ProjectCard v-for="(project, i) in sorted" :key="project.id" :project="project" :rotate-class="i % 2 === 0 ? 'rotate-1' : '-rotate-1'" :is-lcp="i === 0" />
    </div>
    <div class="hidden md:flex md:flex-row gap-12">
      <div class="flex-1 space-y-12 md:space-y-20">
        <ProjectCard v-for="(project, i) in leftProjects" :key="project.id" :project="project" rotate-class="lg:rotate-2" :is-lcp="i === 0" />
      </div>
      <div class="flex-1 space-y-12 md:space-y-20 mt-12 md:mt-60">
        <ProjectCard v-for="project in rightProjects" :key="project.id" :project="project" rotate-class="lg:-rotate-2" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = useAsyncData(() => queryCollection('projects').all())

const sorted = computed(() => {
  const arr = [...(data.value || [])]
  return arr.sort((a, b) => {
    const ad = a.publishedDate ? new Date(a.publishedDate).getTime() : 0
    const bd = b.publishedDate ? new Date(b.publishedDate).getTime() : 0
    return bd - ad
  })
})

const leftProjects = computed(() => sorted.value.filter((_, i) => i % 2 === 0))
const rightProjects = computed(() => sorted.value.filter((_, i) => i % 2 !== 0))

</script>

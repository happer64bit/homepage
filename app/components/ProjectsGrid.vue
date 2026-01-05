<template>
  <h2 class="text-3xl sm:text-4xl md:text-5xl sm:mb-12 text-center my-12 uppercase font-black">My Projects</h2>

  <div class="mt-25">
    <div class="md:hidden space-y-12">
      <ProjectCard v-for="(project, i) in sorted" :key="project.id" :project="project"
        :rotate-class="i % 2 === 0 ? 'rotate-1' : '-rotate-1'" :is-lcp="i === 0" class="px-4" />
    </div>

    <div class="hidden md:flex md:flex-row gap-12 lg:gap-20">
      <div class="flex-1 space-y-12 md:space-y-16 lg:space-y-20">
        <ProjectCard v-for="(project, i) in leftProjects" :key="project.id" :project="project"
          rotate-class="lg:rotate-2" :is-lcp="i === 0" class="px-2" />
      </div>
      <div class="flex-1 space-y-12 md:space-y-16 lg:space-y-20 mt-16 md:mt-56">
        <ProjectCard v-for="project in rightProjects" :key="project.id" :project="project" rotate-class="lg:-rotate-2"
          class="px-2" />
      </div>
    </div>
  </div>
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

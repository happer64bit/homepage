<script setup>
const { proxy } = useScriptGoogleAnalytics({ scriptOptions: { trigger: "client" } })
const router = useRouter()
onMounted(() => {
  proxy.gtag("config", "G-P4LM3B1RV1", { send_page_view: false })
  router.afterEach((to) => {
    proxy.gtag("event", "page_view", { page_path: to.fullPath })
  })
})
</script>

<template>
  <NuxtLoadingIndicator color="white" />
  <NavBar />
  <div class="max-w-300 p-6 mx-auto">
    <NuxtPage />
  </div>
</template>

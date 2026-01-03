<script setup>
const { proxy } = useScriptGoogleAnalytics({
  scriptOptions: {
    trigger: "client"
  }
})

proxy.gtag("config", "default", {
  send_page_view: true
})

</script>

<template>
  <NuxtLoadingIndicator color="white" />
  <div class="max-w-5xl p-6 mx-auto">
    <NuxtPage />
  </div>
</template>

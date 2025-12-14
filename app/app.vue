<script setup>
  const { proxy } = useScriptGoogleAnalytics({
    scriptOptions: {
      trigger: useScriptTriggerInteraction({
        events: [""]
      })
    }
  })

  proxy.gtag("config", "default", {
    send_page_view: true
  })

</script>

<template>
  <NuxtLoadingIndicator color="white"/>
  <NuxtPage />
</template>

<style>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>

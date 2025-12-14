<script setup>
  useScriptGoogleAnalytics({
    scriptOptions: {
      trigger: "client"
    }
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

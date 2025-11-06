<template>
  <NuxtLoadingIndicator color="white"/>
  <NuxtPage />
</template>

<script setup>
useHead({
  script: [
    { type: 'text/partytown', src: 'https://www.googletagmanager.com/gtag/js?id=G-QJ7KVTTN9F' },
    {
      type: 'text/partytown',
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QJ7KVTTN9F');
      `
    }
  ]
})
</script>

<style>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>

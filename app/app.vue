<template>
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script setup>
useHead({
  script: [
    { type: 'text/partytown', src: 'https://www.googletagmanager.com/gtag/js?id=G-VJHX1C00BZ' },
    {
      type: 'text/partytown',
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VJHX1C00BZ');
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

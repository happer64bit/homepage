<script setup>
import 'assets/global.css';

</script>

<template>
  <HeaderComponent />
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
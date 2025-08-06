<script setup>
import { ref, watchEffect } from 'vue'
import { ComputerIcon, SunIcon, MoonIcon } from 'lucide-vue-next'

const themes = [
  { value: 'system', icon: ComputerIcon, label: 'System' },
  { value: 'light', icon: SunIcon, label: 'Light' },
  { value: 'dark', icon: MoonIcon, label: 'Dark' },
]

const selectedTheme = ref('dark')

watchEffect(() => {
//   document.documentElement.setAttribute('data-theme', selectedTheme.value)
})
</script>

<template>
  <fieldset class="flex gap-1 border border-neutral-200 rounded-lg w-fit" aria-label="Select a display theme">
    <legend class="sr-only">Select a display theme:</legend>
    <template v-for="theme in themes" :key="theme.value">
      <input
        type="radio"
        :id="`theme-switch-${theme.value}`"
        name="theme-switch"
        :value="theme.value"
        v-model="selectedTheme"
        class="sr-only"
      />
      <label
        :for="`theme-switch-${theme.value}`"
        class="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 transform duration-200"
        :class="selectedTheme === theme.value ? 'bg-gray-200' : ''"
      >
        <component :is="theme.icon" class="w-4 h-4" />
        <span class="sr-only">{{ theme.label }}</span>
      </label>
    </template>
  </fieldset>
</template>

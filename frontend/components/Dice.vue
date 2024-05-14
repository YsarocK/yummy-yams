<template>
  <div class="border border-2 border-black rounded-md w-12 h-12 flex flex-col items-center justify-center">{{ number }}</div>
</template>

<script setup lang="ts">
const { number } = defineProps<{
  number: number
}>()
</script>
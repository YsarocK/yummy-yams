<template>
  <div>
    <h2 class="text-2xl mb-12 font-bold max-w-xs tracking-tighter">Patisseries restantes</h2>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-4" v-for="pastrie in pastries">
        <img :src="'/images/' + pastrie.image" :alt="pastrie.name" class="w-20 h-20 mb-2 object-cover rounded-lg">
        <p class="text-sm">{{ pastrie.name }}</p>
        <p class="text-xs">{{ pastrie.quantityLeft }} restants sur {{ pastrie.stock }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: pastries } = await useApi().listPastries()
</script>
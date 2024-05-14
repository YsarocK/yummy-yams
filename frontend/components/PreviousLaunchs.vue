<template>
  <div class="flex flex-col gap-6">
    <p  class="text-2xl font-bold max-w-xs tracking-tighter">Vos lancés</p>
    <div class="flex flex-col gap-4">
      <p v-if="customer?.launchs.length === 0">Vous n'avez encore aucun lancé</p>
      <PreviousLaunch v-else v-for="launch, index in customer.launchs" :launch="launch" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useCustomerStore()
const { customer } = storeToRefs(store)
</script>
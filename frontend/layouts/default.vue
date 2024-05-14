<template>
  <div>
    <RegisterForm v-if="!customer" />
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useCustomerStore()
const { customer } = storeToRefs(store)
</script>
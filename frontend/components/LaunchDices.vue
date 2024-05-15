<template>
  <div class="flex flex-col gap-4" v-if="customer">
    <div v-if="currentDices">
      <div class="flex gap-4">
        <Dice :number="dice" v-for="dice in currentDices.dices" />
      </div>
    </div>
    <button
      :disabled="customer.launchs.length > 2"
      :class="{ 'opacity-50 pointer-events-none': customer.launchs.length > 2,  }"
      class="bg-blue-200 text-blue-500 font-semibold cursor-pointer px-5 py-3 rounded-md outline-none" @click="handleLaunchDices">
      Lancer les dés !
    </button>
    <p class="text-red-400" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import type { DicesLaunch } from '~/types';

const errorMessage: Ref<string | undefined> = ref(undefined)

const store = useCustomerStore()
const { customer } = storeToRefs(store)

const currentDices: Ref<DicesLaunch | undefined > = ref(undefined)

const handleLaunchDices = async (e: Event) => {
  e.preventDefault();
  const { data, error } = await useApi().launchDices()
  if(error.value || !data.value) {
    errorMessage.value = error.value?.data.message as string
    return
  }
  currentDices.value = data.value
}
</script>
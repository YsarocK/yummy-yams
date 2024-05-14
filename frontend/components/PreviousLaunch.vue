<template>
  <div class="flex flex-col gap-8 p-6 rounded-md" :class="isWin ? 'bg-green-100' : 'bg-red-100'">
    <div class="flex flex-col gap-1">
      <p class="text-sm" :class="isWin ? 'text-green-600' : 'text-red-600'">Lancé {{ index + 1 }} : <span class="font-semibold">{{ isWin ? 'Gagné' : 'Perdu' }}</span></p>
      <div class="flex gap-4">
        <Dice :number="dice" v-for="dice in launch.dices" />
      </div>
      <div v-if="launch.gain.length" class="mt-5">
        <p :class="isWin ? 'text-green-600' : 'text-red-600'" class="text-sm">Vos gains</p>
        <p class="text-xs" v-for="gain in launch.gain">{{ gain }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { launch, index } = defineProps<{
  index: number,
  launch: {
    dices: number[]
    pastries: number
    gain: Array<string>
  }
}>()

const isWin = ref(launch.pastries > 0 ? true : false)
</script>
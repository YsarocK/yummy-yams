<template>
  <div class="min-h-screen flex flex-col pt-48 pb-12 items-center">
    <main class="h-full grid grid-cols-12 gap-12 justify-center max-w-4xl">
      <div class="col-span-6 flex flex-col items-baseline">
        <h1 class="text-3xl mb-12 font-bold max-w-xs tracking-tighter">Gagnez des patisseries</h1>
        <LaunchDices />
      </div>
      <PreviousLaunchs class="col-span-6" />
      <PastriesList class="col-span-12"/>
    </main>
  </div>
</template>

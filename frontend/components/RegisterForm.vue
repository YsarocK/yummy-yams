<template>
  <div class="w-full h-full fixed inset-0 flex flex-col items-center justify-center p-3">
    <div>
      <div class="z-10 relative flex flex-col items-center gap-10 bg-white p-8 rounded-md">
        <h2 class="text-2xl font-bold">Inscrivez-vous</h2>
        <form id="register" name="register" @submit="handleRegister" class="max-w-lg grid grid-cols-12 gap-4 items-center justify-center">
          <input class="col-span-12" type="email" v-model="form.email" name="email" placeholder="Email" />
          <input class="col-span-6" type="text" v-model="form.firstName" name="firstName" placeholder="Prénom" />
          <input class="col-span-6" type="text" v-model="form.lastName" name="lastName" placeholder="Nom" />
          <input class="col-span-12" type="submit" value="Commencer" />
          <p class="col-span-12 text-red-400 text-center" v-if="errorMessage">{{ errorMessage }}</p>
        </form>
      </div>
      <div class="z-0 w-full h-full bg-black opacity-70 absolute inset-0"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const errorMessage: Ref<string | undefined> = ref(undefined)
const form = ref({
  email: '',
  firstName: '',
  lastName: '',
})
const handleRegister = async (e: Event) => {
  e.preventDefault();
  const { data, error } = await useApi().register(form.value)
  if(error.value) {
    errorMessage.value = error.value?.data.message as string
  }
  
  if(data.value) {
    useCookie('token').value = data.value?.token
  }
};
</script>

<style scoped lang="pcss">
input {
  @apply px-5 py-3 rounded-md outline-none bg-slate-100;

  &[type="submit"] {
    @apply bg-blue-200 text-blue-500 font-semibold cursor-pointer;
  }
}
</style>
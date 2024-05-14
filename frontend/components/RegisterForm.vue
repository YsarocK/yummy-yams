<template>
  <form id="register" name="register" @submit="handleRegister">
    <input type="email" v-model="form.email" name="email" placeholder="Email" />
    <input type="text" v-model="form.firstName" name="firstName" placeholder="Prénom" />
    <input type="text" v-model="form.lastName" name="lastName" placeholder="Nom" />
    <input type="submit" value="Commencer" />
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
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
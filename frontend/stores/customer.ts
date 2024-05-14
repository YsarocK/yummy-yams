import { defineStore } from 'pinia'
import type { ICustomer } from '~/types/customer'

export const useCustomerStore = defineStore('customer', () => {
  const customer: Ref<ICustomer | undefined> = ref(undefined)

  const token = useCookie('token')

  const retrieveCustomer = async () => {
    if(token.value) {
      const { data } = await useApi().me()

      if(data.value) {
        customer.value = data.value
      }
    }
  }

  onMounted(async () => {
    setTimeout(async () => {
      await retrieveCustomer()
    }, 50)
  })

  watchEffect(async (token) => {
    await retrieveCustomer()
  })

  return {
    customer,
    retrieveCustomer
  }
})
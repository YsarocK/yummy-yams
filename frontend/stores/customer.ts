import { defineStore } from 'pinia'
import type { ICustomer } from '~/types/customer'

export const useCustomerStore = defineStore('customer', () => {
  const customer: Ref<ICustomer | undefined> = ref(undefined)

  const retrieveCustomer = async (token: string | undefined | null) => {
    if(token) {
      const { data } = await useApi().me()

      if(data.value) {
        customer.value = data.value
      }
    }
  }

  if(process.server) return {
    customer,
    retrieveCustomer
  }

  const token = window.localStorage.getItem('token')

  onMounted(async () => {
    setTimeout(async () => {
      await retrieveCustomer(token)
    }, 50)
  })

  return {
    customer,
    retrieveCustomer
  }
})
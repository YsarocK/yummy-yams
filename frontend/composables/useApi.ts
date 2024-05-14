import type { ICustomer } from "~/types";

const useApi = () => {
  const { apiUrl } = useRuntimeConfig().public;

  const register = async (payload: ICustomer) => {
    const response = await useFetch(`${apiUrl}/api/customers/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return response;
  };

  const me = async () => {
    const response = await useFetch(`${apiUrl}/api/customers/me`);
    return response;
  };

  return { register, me };
}

export default useApi;
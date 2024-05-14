import type { ICustomer, IPastry } from "~/types";

const useApi = () => {
  const token = useCookie("token").value;
  const { retrieveCustomer } = useCustomerStore();
  const { apiUrl } = useRuntimeConfig().public;

  const register = async (payload: ICustomer) => {
    const response = await useFetch(`${apiUrl}/api/customers/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return response;
  };

  const me = async () => {
    const response = await useFetch<ICustomer>(`${apiUrl}/api/customers/me`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };

  const launchDices = async () => {
    const response = await useFetch<ICustomer>(`${apiUrl}/api/dices`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await retrieveCustomer();
    return response;
  }

  const listPastries = async () => {
    const response = await useFetch<Array<IPastry>>(`${apiUrl}/api/pastries/list`);
    return response;
  };

  return { register, me, launchDices, listPastries };
}

export default useApi;
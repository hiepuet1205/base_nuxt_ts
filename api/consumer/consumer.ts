import { API_CONSUMER } from "~/constants/api";
import { apiFactory } from "../apiFactory";

const apiUrl = `${API_CONSUMER}`

const consumerFactory = apiFactory(`${apiUrl}consumer-addresses/info`)
const consumerServiceFactory = apiFactory(`${apiUrl}consumers/get-services`)

// export const getConsumerAddressInfo = async (token: string) => {
//   return await consumerFactory.getApi(token)
// }

// export const getServices = async (token: string, maxDistance: number) => {
//   return await consumerServiceFactory.postApi(maxDistance, token);
// }

// Test:
export const getConsumerAddressInfo = async (token: string) => {
  try {
    const response = await fetch(`${apiUrl}addresses/1`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const getServices = async (token: string, maxDistance: number) => {
  try {
    console.log(`${apiUrl}services${maxDistance}km`)
    const response = await fetch(`${apiUrl}services${maxDistance}km`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

import { API_CONSUMER } from "~/constants/api";

const apiUrl = `${API_CONSUMER}`

// export const getConsumerAddressInfo = async (token) => {
//   try {
//     const response = await fetch(`${apiUrl}consumer-addresses/info`, {
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       method: "GET"
//     });

//     return await response.json();
//   } catch (error) {
//     console.log(error)
//     return null;
//   }
// }

// export const getServices = async (token, maxDistance) => {
//   try {
//     const response = await fetch(`${apiUrl}consumers/get-services`, {
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(maxDistance),
//       method: "POST"
//     });

//     return await response.json();
//   } catch (error) {
//     console.log(error)
//     return null;
//   }
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

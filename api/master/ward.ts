import { API_MASTER } from "~/constants/api";
import type { Ward } from "~/types/master";

const apiUrl = `${API_MASTER}wards/`;

export const getAllWards: (token: string) => Promise<any> = async (token: string) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "GET"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getWard: (token: string, id: number) => Promise<any> = async (token, id) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
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

export const createWard: (token: string, ward: Ward) => Promise<any> = async (token, ward) => {
  try {
    const response = await fetch(`${apiUrl}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(ward),
      method: "POST"
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateWard: (token: string, id: number, ward: Ward) => Promise<any> = async (token, id, ward) => {
  try {
    const response = await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(ward),
      method: "PUT"
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const deleteWard: (token: string, id: number) => Promise<any> = async (token, id) => {
  try {
    await fetch(`${apiUrl}${id}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "DELETE"
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
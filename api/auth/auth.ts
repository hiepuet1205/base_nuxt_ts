import { API_AUTH } from "~/constants/api"

interface AUTH {
  username: string;
  password: string;
}

export const login: (auth: AUTH) => Promise<any> = async (auth: AUTH) => {
  const res = await fetch(`${API_AUTH}auth/login`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(auth)
  });
  return await res.json();
}

export const register: (auth: AUTH) => Promise<any> = async (auth: AUTH) => {
  const res = await fetch(`${API_AUTH}auth/register`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(auth)
  });
  return await res.json();
}
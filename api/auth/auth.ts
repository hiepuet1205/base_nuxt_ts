import { API_AUTH } from "~/constants/api"
import { apiFactory } from "../apiFactory";

interface AUTH {
  username: string;
  password: string;
}

const loginFactory = apiFactory(`${API_AUTH}api/authenticate`)
const registerFactory = apiFactory(`${API_AUTH}api/register`)

export const login: (auth: AUTH) => Promise<any> = async (auth: AUTH) => {
  return await loginFactory.postApi(auth);
}

export const register: (auth: AUTH) => Promise<any> = async (auth: AUTH) => {
  return await registerFactory.postApi(auth);
}
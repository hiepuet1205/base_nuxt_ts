import { API_MASTER } from "~/constants/api";
import type { Ward } from "~/types/master";
import { apiFactory } from "../apiFactory";

const apiUrl = `${API_MASTER}services/master/wards`;
const wardFactory = apiFactory(apiUrl)

export const getAllWards: (token: string) => Promise<any> = async (token: string) => {
  return await wardFactory.getApi(token);
}

export const getWard: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await apiFactory(`${apiUrl}/${id}`).getApi(token);
}

export const createWard: (token: string, ward: Ward) => Promise<any> = async (token: string, ward: Ward) => {
  return await wardFactory.postApi(ward, token);
}

export const updateWard: (token: string, id: number, ward: Ward) => Promise<any> = async (token: string, id: number, ward: Ward) => {
  return await wardFactory.putApi(id, ward, token);
}

export const deleteWard: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await wardFactory.deleteApi(id, token);
}
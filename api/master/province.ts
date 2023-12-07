import { API_MASTER } from "~/constants/api";
import type { Province } from "~/types/master";
import { apiFactory } from "../apiFactory";

const apiUrl = `${API_MASTER}services/master/provinces`;

const provinceFactory = apiFactory(apiUrl)

export const getAllProvinces: (token: string) => Promise<any> = async (token: string) => {
  return await provinceFactory.getApi(token);
}

export const getProvince: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await apiFactory(`${apiUrl}/${id}`).getApi(token);
}

export const createProvince: (token: string, province: Province) => Promise<any> = async (token: string, province: Province) => {
  return await provinceFactory.postApi(province, token);
}

export const updateProvince: (token: string, id: number, province: Province) => Promise<any> = async (token: string, id: number, province: Province) => {
  return await provinceFactory.putApi(id, province, token);
}

export const deleteProvince: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await provinceFactory.deleteApi(id, token);
}
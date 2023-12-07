import { API_MASTER } from "~/constants/api";
import type { District } from "~/types/master";
import { apiFactory } from "../apiFactory";

const apiUrl = `${API_MASTER}services/master/districts`;
const districtFactory = apiFactory(apiUrl)

export const getAllDistricts: (token: string) => Promise<any> = async (token: string) => {
  return await districtFactory.getApi(token);
}

export const getDistrict: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await apiFactory(`${apiUrl}/${id}`).getApi(token);
}

export const createDistrict: (token: string, district: District) => Promise<any> = async (token: string, district: District) => {
  return await districtFactory.postApi(district, token);
}

export const updateDistrict: (token: string, id: number, district: District) => Promise<any> = async (token: string, id: number, district: District) => {
  return await districtFactory.putApi(id, district, token);
}

export const deleteDistrict: (token: string, id: number) => Promise<any> = async (token: string, id: number) => {
  return await districtFactory.deleteApi(id, token);
}
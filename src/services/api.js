import { create } from 'apisauce'
import endpoints from './endpoints'
const api = create({
  baseURL: endpoints.baseurl,
})
const api1 = create({
  baseURL: "http://solidappmaker.ml:5065/api/v1/",
})
export const getPosts = async () => api.get(endpoints.getPosts)
export const login = async (data) => api1.post(endpoints.login, data)

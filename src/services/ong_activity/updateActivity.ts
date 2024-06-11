import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function updateActivity (
  id: any,
  body : any) {
  const token = window?.localStorage?.getItem("token") || "";
  const API_BASE_URL = environments.API_BASE_URL
  return axios.put(`${API_BASE_URL}/activity_ong/${id}`, body, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
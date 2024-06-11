import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function createVolExp (
  body : any) {
  const token = window?.localStorage?.getItem("token") || "";
  const API_BASE_URL = environments.API_BASE_URL
  return axios.post(`${API_BASE_URL}/volunteer_experience/`, body, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
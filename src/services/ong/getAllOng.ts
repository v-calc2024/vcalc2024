import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getAllOng () {
  const token = window?.localStorage?.getItem("token") || "";
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/ong/`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}

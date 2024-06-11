import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOngInfo (token: string) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/ong/ong-info`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
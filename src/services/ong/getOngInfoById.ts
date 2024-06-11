import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOngInfoById (id: string) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/ong/ong-info-by-id/${id}`, {headers: {
    'Content-Type': 'application/json',
  }})
}
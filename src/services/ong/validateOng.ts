import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function validateOng (token: any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/ong/validate`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
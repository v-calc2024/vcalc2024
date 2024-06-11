import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getUserInfoById (id: string) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/volunteer/user-info-by-id/${id}`, {headers: {
    'Content-Type': 'application/json',
  }})
}
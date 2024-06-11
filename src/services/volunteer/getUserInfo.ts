import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getUserInfo (token: string) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/volunteer/user-info`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
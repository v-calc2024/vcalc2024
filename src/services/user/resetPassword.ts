import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function resetPassword (
  body : any,
  token : string) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.post(`${API_BASE_URL}/user/resetPassword`, body, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
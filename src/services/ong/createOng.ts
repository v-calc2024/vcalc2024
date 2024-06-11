import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function createOng (
  body : any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.post(`${API_BASE_URL}/ong/`, body, {headers: {
    'Content-Type': 'application/json'
  }})
}

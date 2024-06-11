import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getAllReport (body: any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.post(`${API_BASE_URL}/report/`, body, {headers: {
    'Content-Type': 'application/json',
  }})
}

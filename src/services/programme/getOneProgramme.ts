import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOneProgramme (
  token: any, id : any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/programme/${id}`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
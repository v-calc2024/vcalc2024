import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOneActivity (
  token: any, id : any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/activity_ong/${id}`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
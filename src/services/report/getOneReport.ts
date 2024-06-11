import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOneReport () {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/report/2`, {headers: {
    'Content-Type': 'application/json',
  }})
}

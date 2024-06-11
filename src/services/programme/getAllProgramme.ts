import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getAllProgramme () {
  const token = window?.localStorage?.getItem("token") || "";
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/programme/`, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}

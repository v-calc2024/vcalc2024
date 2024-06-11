import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function validateEmailWithCred (
  body : any) {
  const API_BASE_URL = environments.API_BASE_URL
  const token = window?.localStorage?.getItem("token") || "";
  return axios.post(`${API_BASE_URL}/volunteer/emailExistById`, body, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
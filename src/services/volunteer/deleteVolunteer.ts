import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function deleteVolunteer (
  body : any) {
  const API_BASE_URL = environments.API_BASE_URL
  const token = window?.localStorage?.getItem("token") || "";
  return axios.put(`${API_BASE_URL}/volunteer/delete`, body, {headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }})
}
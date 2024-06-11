import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function uploadFile (
  body : any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.post(`${API_BASE_URL}/cloudinary/`, body, {headers: {
    'Content-Type': 'multipart/form-data',
  }})
}

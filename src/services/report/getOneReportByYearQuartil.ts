import { environments } from '../../utils/constants/enviroments'
import axios from 'axios'

export function getOneReportByYearQuartil ({ year, quartil }: any) {
  const API_BASE_URL = environments.API_BASE_URL
  return axios.get(`${API_BASE_URL}/report/${year}/${quartil}`, {headers: {
    'Content-Type': 'application/json',
  }})
}

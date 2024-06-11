import nookies from 'nookies'
import { getObjectHash } from './getObjectHash'
import { validateJWTFormat } from './validateJWTFormat'

export async function validateJwt (context: any) {
  const { token } = nookies.get(context)
  const isValid = token?.length? validateJWTFormat(token) : false
  const decoded = await getObjectHash({ tokenValue: token })
  return { isValid, token, decoded }
}

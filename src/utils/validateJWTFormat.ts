export function validateJWTFormat(token: string) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false
    }
    const header = JSON.parse(atob(parts[0]))
    const payload = JSON.parse(atob(parts[1]))
    return Boolean(header && payload)
  } catch (error) {
    return false
  }
}

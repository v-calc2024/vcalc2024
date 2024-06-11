function returnVar (lang: any) {
  let invalid_email = "Invalid email address"
  switch (lang) {
    case "es":
      invalid_email = "Email inválido"
      break;
    case "fr":
      invalid_email = "Adresse e-mail invalide"
      break;
    case "hr":
      invalid_email = "Nevažeća adresa e-pošte"
      break;
    case "sq":
      invalid_email = "Adresë e pavlefshme emaili"
      break;
    default:
      invalid_email = "Invalid email address"
      break;
  }

  return { invalid_email }
}

export function emailValidator (email: string, lang?: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (emailRegex.test(email)) {
    return null
  } else {
    const { invalid_email } = returnVar(lang)
    return invalid_email
  }
}

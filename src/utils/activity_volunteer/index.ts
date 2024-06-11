function returnVar (lang: any) {
  let invalid_session = "Invalid Name of Session"
  switch (lang) {
    case "es":
      invalid_session = "Nombre de sesión inválido"
      break;
    case "fr":
      invalid_session = "Nom de session invalide"
      break;
    case "hr":
      invalid_session = "Nevažeći naziv sesije"
      break;
    case "sq":
      invalid_session = "Emri i pavlefshëm i sesionit"
      break;
    default:
      invalid_session = "Invalid Name of Session"
      break;
  }

  return { invalid_session }
}

export function validateSession (session: string, lang?: any) {
  if (session?.length > 0) {
    return null
  } else {
    const { invalid_session } = returnVar(lang)
    return invalid_session
  }
}

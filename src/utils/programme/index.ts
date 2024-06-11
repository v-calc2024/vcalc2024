function returnVar (lang: any) {
  let invalid_name = 'Invalid Name'
  switch (lang) {
    case "es":
      invalid_name = "Nombre inválido"
      break;
    case "fr":
      invalid_name = "Nom incorrect"
      break;
    case "hr":
      invalid_name = "Nevažeći naziv"
      break;
    case "sq":
      invalid_name = "Emër i pavlefshëm"
      break;
    default:
      invalid_name = 'Invalid Name'
      break;
  }

  return { invalid_name }
}

export function validateName (name: string, lang?: any) {
  if (name?.length > 0) {
    return null
  } else {
    const { invalid_name } = returnVar(lang)
    return invalid_name
  }
}

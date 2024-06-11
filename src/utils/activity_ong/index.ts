function returnVar (lang: any) {
  let invalid_activity = "Invalid Activity"
  switch (lang) {
    case "es":
      invalid_activity = "Actividad inválida"
      break;
    case "fr":
      invalid_activity = "Activité invalide"
      break;
    case "hr":
      invalid_activity = "Nevažeća aktivnost"
      break;
    case "sq":
      invalid_activity = "Aktivitet i pavlefshëm"
      break;
    default:
      invalid_activity = "Invalid Activity"
      break;
  }

  return { invalid_activity }
}

export function validateActivity (activity: string, lang?: any) {
  if (!activity?.length) {
    const { invalid_activity } = returnVar(lang)
    return invalid_activity
  } else {
    return null
  }
}

export function validateLocation (location: string, lang?: any) {
  if (!location?.length) {
    const { invalid_activity } = returnVar(lang)
    return invalid_activity
  } else {
    return null
  }
}
function returnVar (lang: any) {
  let invalid_password = 'Invalid Password'
  let password_not_match = "Passwords don't match"
  switch (lang) {
    case "es":
      invalid_password = "Password inválido"
      password_not_match = "Los passwords no coinciden"
      break;
    case "fr":
      invalid_password = "Mot de passe incorrect"
      password_not_match = "Les mots de passe ne correspondent pas"
      break;
    case "hr":
      invalid_password = "Netočna zaporka"
      password_not_match = "Lozinke se ne podudaraju"
      break;
    case "sq":
      invalid_password = "Fjalëkalim i pavlefshëm"
      password_not_match = "Fjalëkalimet nuk përputhen"
      break;
    default:
      invalid_password = 'Invalid Password'
      password_not_match = "Passwords don't match"
      break;
  }

  return { invalid_password, password_not_match }
}

export function passwordValidator (password: string, lang?: any) {
  if (password?.length < 6) {
    const { invalid_password } = returnVar(lang)
    return invalid_password
  } else {
    return null
  }
}

export function repeatPasswordValidator (password: string, repeatPassword: string, lang?: any) {
  const { invalid_password, password_not_match } = returnVar(lang)
  if (repeatPassword?.length < 6) {
    return invalid_password
  } else if (password !== repeatPassword) {
    return password_not_match
  }
  else {
    return null
  }
}
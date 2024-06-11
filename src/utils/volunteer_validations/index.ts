import { validateEmail } from "@/services/volunteer/validateEmail";
import { emailValidator } from "../emailValidator"
import { validateEmailWithCred } from "@/services/volunteer/validateEmailWithCred";

function returnVar (lang: any) {
  let name_error = "Invalid Name";
  let surname_error = "Invalid surname";
  let invalid_email = "Volunteer Email is in use"
  switch (lang) {
    case "es":
      name_error = "Nombre incorrecto";
      surname_error = "Apellido incorrecto";
      invalid_email = "Email en uso"
      break;
    case "fr":
      name_error = "Nom incorrect";
      surname_error = "Nom de famille invalide";
      invalid_email = "L'e-mail des bénévoles est utilisé"
      break;
    case "hr":
      name_error = "Nevažeći naziv";
      surname_error = "Nevažeće prezime";
      invalid_email = "E-pošta volontera je u upotrebi"
      break;
    case "sq":
      name_error = "Emër i pavlefshëm";
      surname_error = "Mbiemër i pavlefshëm";
      invalid_email = "Email-i vullnetar është në përdorim"
      break;
    default:
      name_error = "Invalid Name";
      surname_error = "Invalid surname";
      invalid_email = "Volunteer Email is in use"
      break;
  }

  return { name_error, surname_error, invalid_email }
}

export async function validateVolunteerEmail (email: string, lang?: any) {
  const emailError = emailValidator(email, lang)
  if (emailError === null) {
    const resp = await validateEmail({ email })
    if (resp?.data?.exist) {
      const { invalid_email } = returnVar(lang)
      return invalid_email
    }
    return null
  } else {
    return emailError
  }
}

export async function validateUpdateVolunteerEmail (email: string, lang?: any) {
  const emailError = emailValidator(email, lang)
  if (emailError === null) {
    const resp = await validateEmailWithCred({ email })
    if (resp?.data?.exist) {
      const { invalid_email } = returnVar(lang)
      return invalid_email
    }
    return null
  } else {
    return emailError
  }
}

export function validateName (name: string, lang: any) {
  if (name?.length > 0) {
    return null
  } else {
    const { name_error } = returnVar(lang)
    return name_error
  }
}

export function validateSurname (surname: string, lang: any) {
  if (surname?.length > 0) {
    return null
  } else {
    const { surname_error } = returnVar(lang)
    return surname_error
  }
}
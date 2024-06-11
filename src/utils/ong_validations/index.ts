import { validateName } from "@/services/ong/validateName"
import { validateEmail } from "@/services/ong/validateEmail"
import { emailValidator } from "../emailValidator";
import { validateEmailWithCred } from "@/services/ong/validateEmailWithCred";
import { validateNameWithCred } from "@/services/ong/validateNameWithCred";

function returnVar (lang: any) {
  let name_error = "Invalid Name";
  let org_name_error = "Organization Name is in use";
  let invalid_email = "Organization Email is in use"
  switch (lang) {
    case "es":
      name_error = "Nombre incorrecto";
      org_name_error = "Email en uso";
      invalid_email = "Email en uso"
      break;
    case "fr":
      name_error = "Nom incorrect";
      org_name_error = "Le nom de l'organisation est en cours d'utilisation";
      invalid_email = "L'adresse e-mail de l'organisation est utilisée"
      break;
    case "hr":
      name_error = "Nevažeći naziv";
      org_name_error = "Naziv organizacije je u upotrebi";
      invalid_email = "Organization Email is in use"
      break;
    case "sq":
      name_error = "Emër i pavlefshëm";
      org_name_error = "Emri i organizatës është në përdorim";
      invalid_email = "Email-i i organizatës është në përdorim"
      break;
    default:
      name_error = "Invalid Name";
      org_name_error = "Organization Name is in use";
      invalid_email = "Organization Email is in use"
      break;
  }

  return { name_error, org_name_error, invalid_email }
}

export async function validateOngName (name: string, lang?: any) {
  const { name_error, org_name_error } = returnVar(lang)
  if (name?.length < 3) {
    return name_error
  } else {
    const resp = await validateName({ name })
    if (resp?.data?.exist) {
      return org_name_error
    }
    return null
  }
}

export async function validateOngNameById (name: string, lang?: any) {
  const { name_error, org_name_error } = returnVar(lang)
  if (name?.length < 3) {
    return name_error
  } else {
    const resp = await validateNameWithCred({ name })
    if (resp?.data?.exist) {
      return org_name_error
    }
    return null
  }
}

export async function validateOngEmail (email: string, lang?: any) {
  const emailError = emailValidator(email)
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

export async function validateUpdateONGEmail (email: string, lang?: any) {
  const emailError = emailValidator(email)
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
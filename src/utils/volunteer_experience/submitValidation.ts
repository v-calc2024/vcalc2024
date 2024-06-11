export function submitValidation ({ 
  ngo,
  programme,
  activity,
  ratingBen,
  ratingDif,
  ratingExp,
  lang,
  hours  } : any) {
  function returnVar (lang: any) {
    let invalid_ong = 'Invalid ONG'
    let invalid_prog = 'Invalid Programme'
    let invalid_act = 'Invalid Activity'
    let invalid_rat_ben = 'Invalid Rating Benefit'
    let invalid_rat_dif = 'Invalid Rating Diference'
    let invalid_rat_exp = 'Invalid Rating Experience'
    let invalid_hours = "Invalid Hours"

    switch (lang) {
      case "es":
        invalid_ong = "ONG ínvalida"
        invalid_prog = 'Programa Inválido'
        invalid_act = 'Actividad Inválida'
        invalid_rat_ben = 'Beneficio de calificación no válida'	
        invalid_rat_dif = 'Diferencia de calificación no válida'
        invalid_rat_exp = 'Experiencia de calificación no válida'
        invalid_hours = "Horas Inválidas"
        break;
      case "fr":
        invalid_ong = "ONG invalide"
        invalid_prog = 'Programme invalide'
        invalid_act = 'Activité invalide'
        invalid_rat_ben = 'Avantage de notation invalide'
        invalid_rat_dif = 'Différence de note invalide'
        invalid_rat_exp = 'Expérience de notation invalide'
        invalid_hours = "Heures invalides"
        break;
      case "hr":
        invalid_ong = "Nevažeći ONG"
        invalid_prog = 'Nevažeći program'
        invalid_act = 'Nevažeća aktivnost'
        invalid_rat_ben = 'Prednost nevažeće ocjene'
        invalid_rat_dif = 'Nevažeća razlika u ocjeni'
        invalid_rat_exp = 'Nevažeće iskustvo ocjenjivanja'
        invalid_hours = "Nevažeće radno vrijeme"
        break;
      case "sq":
        invalid_ong = "ONG e pavlefshme"
        invalid_prog = 'Program i pavlefshëm'
        invalid_act = 'Aktivitet i pavlefshëm'
        invalid_rat_ben = 'Përfitimi i vlerësimit të pavlefshëm'
        invalid_rat_dif = 'Diferencë e pavlefshme e vlerësimit'
        invalid_rat_exp = 'Përvojë e pavlefshme e vlerësimit'
        invalid_hours = "Orari i pavlefshëm"
        break;
      default:
        invalid_ong = 'Invalid ONG'
        invalid_prog = 'Invalid Programme'
        invalid_act = 'Invalid Activity'
        invalid_rat_ben = 'Invalid Rating Benefit'
        invalid_rat_dif = 'Invalid Rating Diference'
        invalid_rat_exp = 'Invalid Rating Experience'
        invalid_hours = "Invalid Hours"
        break;
    }
  
    return { 
      invalid_ong, invalid_prog, invalid_act, invalid_rat_ben, invalid_rat_dif, invalid_rat_exp, invalid_hours
    }
  }

  const { invalid_ong, invalid_prog, invalid_act, invalid_rat_ben, invalid_rat_dif, invalid_rat_exp, invalid_hours } = returnVar(lang)
  let errorsArr = []

  if (typeof (parseInt(hours)) !== 'number' || hours.length < 1 || hours < 0) {
    errorsArr.push(invalid_hours)
  }

  if (typeof (parseInt(ngo)) !== 'number' || ngo.length < 1 || ngo < 0) {
    errorsArr.push(invalid_ong)
  }

  if (typeof (parseInt(programme)) !== 'number' || programme.length < 1 || programme < 0) {
    errorsArr.push(invalid_prog)
  }

  if (typeof (parseInt(activity)) !== 'number' || activity.length < 1 || activity < 0) {
    errorsArr.push(invalid_act)
  }

  if (typeof (parseInt(ratingBen)) !== 'number' || ratingBen.length < 1 || ratingBen < 0) {
    errorsArr.push(invalid_rat_ben)
  }

  if (typeof (parseInt(ratingDif)) !== 'number' || ratingDif.length < 1 || ratingDif < 0) {
    errorsArr.push(invalid_rat_dif)
  }

  if (typeof (parseInt(ratingExp)) !== 'number' || ratingExp.length < 1 || ratingExp < 0) {
    errorsArr.push(invalid_rat_exp)
  }

  return errorsArr
}
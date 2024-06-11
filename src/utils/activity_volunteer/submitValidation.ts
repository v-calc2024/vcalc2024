export function submitValidation ({ ong, programme, activity, sessionName, firstDate, lang } : any) {
  function returnVar (lang: any) {
    let invalid_ong = 'Invalid ONG'
    let invalid_prog = 'Invalid Programme'
    let invalid_act = 'Invalid Activity'
    let invalid_session = 'Invalid Session Name'
    let invalid_first_date = 'Invalid First Date'

    switch (lang) {
      case "es":
        invalid_ong = "ONG ínvalida"
        invalid_prog = 'Programa Inválido'
        invalid_act = 'Actividad Inválida'
        invalid_session = 'Nombre de sesión Inválido'	
        invalid_first_date = 'Fecha de inicio inválida'
        break;
      case "fr":
        invalid_ong = "ONG invalide"
        invalid_prog = 'Programme invalide'
        invalid_act = 'Activité invalide'
        invalid_session = 'Nom de session invalide'
        invalid_first_date = 'Premier rendez-vous invalide'
        break;
      case "hr":
        invalid_ong = "Nevažeći ONG"
        invalid_prog = 'Nevažeći program'
        invalid_act = 'Nevažeća aktivnost'
        invalid_session = 'Nevažeći naziv sesije'
        invalid_first_date = 'Nevažeći prvi datum'
        break;
      case "sq":
        invalid_ong = "ONG e pavlefshme"
        invalid_prog = 'Program i pavlefshëm'
        invalid_act = 'Aktivitet i pavlefshëm'
        invalid_session = 'Emri i sesionit i pavlefshëm'
        invalid_first_date = 'Data e parë e pavlefshme'
        break;
      default:
        invalid_ong = 'Invalid ONG'
        invalid_prog = 'Invalid Programme'
        invalid_act = 'Invalid Activity'
        invalid_session = 'Invalid Session Name'
        invalid_first_date = 'Invalid First Date'
        break;
    }
  
    return { 
      invalid_ong, invalid_prog, invalid_act, invalid_session, invalid_first_date
    }
  }

  const { invalid_ong, invalid_prog, invalid_act, invalid_session, invalid_first_date } = returnVar(lang)

  let errorsArr = []

  if (typeof (parseInt(ong)) !== 'number' || ong.length < 1 || ong < 0) {
    errorsArr.push(invalid_ong)
  }

  if (typeof (parseInt(programme)) !== 'number' || programme.length < 1 || programme < 0) {
    errorsArr.push(invalid_prog)
  }

  if (typeof (parseInt(activity)) !== 'number' || activity.length < 1 || activity < 0) {
    errorsArr.push(invalid_act)
  }

  if (!sessionName?.length) {
    errorsArr.push(invalid_session)
  }

  if (!firstDate?.length) {
    errorsArr.push(invalid_first_date)
  }

  return errorsArr
}
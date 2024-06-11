function returnVar (lang: any) {
  let invalid_name = 'Invalid Name'
  let invalid_surname = 'Invalid Surname'
  let invalid_email = 'Invalid Email'
  let invalid_pass_match = "Passwords don't match"
  let invalid_pass = 'Invalid Password'
  let invalid_year = 'Invalid Year of Birth'
  let invalid_gender = 'Invalid Gender'
  let invalid_org = 'Invalid Organisation'
  let invalid_dis = 'Invalid Disability'
  let invalid_emp = 'Invalid Employment'
  let invalid_car_res = 'Invalid Caring Responsibility'
  let invalid_vol_bef = 'Invalid Volunteered Before'
  let invalid_country = 'Invalid Country'
  let invalid_region = 'Invalid Region'
  let invalid_race = 'You must select at least one Race/Ethnicity'
  let invalid_age = 'You must confirm over 18 years old'
  let invalid_pol = 'You must accept our privacy policy'
  let invalid_employeeVolunteer = 'select an option for Employee Volunteer'

  switch (lang) {
    case "es":
      invalid_name = "Nombre incorrecto"
      invalid_surname = 'Apellido inválido'
      invalid_email = 'Email Invalido'
      invalid_pass = 'Contraseña inválida'
      invalid_pass_match = "Las contraseñas no coinciden"
      invalid_year = 'Fecha de nacimiento inválida'
      invalid_gender = 'Género inválido'
      invalid_org = 'Organización inválida'
      invalid_dis = 'Discapacidad no válida'
      invalid_emp = 'Empleo no válido'
      invalid_car_res = 'Responsabilidad de cuidado inválida'
      invalid_vol_bef = 'Inválido voluntario antes'
      invalid_country = 'País inválido'
      invalid_region = 'Región inválida'
      invalid_race = 'Debes seleccionar al menos una Raza/Etnia'
      invalid_age = 'Debes confirmar ser mayor de 18 años.'
      invalid_pol = 'Debes aceptar nuestra política de privacidad'
      invalid_employeeVolunteer = 'seleccione una opción para Employee Volunteer'
      break;
    case "fr":
      invalid_name = "Nom incorrect"
      invalid_surname = 'Nom de famille invalide'
      invalid_email = 'Email invalide'
      invalid_pass = 'Mot de passe incorrect'
      invalid_pass_match = "Les mots de passe ne correspondent pas"
      invalid_year = 'Année de naissance invalide'
      invalid_gender = 'Genre incompatible'
      invalid_org = 'Organisation invalide'
      invalid_dis = 'Invalidité invalide'
      invalid_emp = 'Emploi invalide'
      invalid_car_res = 'Responsabilité de soins invalide'
      invalid_vol_bef = 'Bénévole invalide avant'
      invalid_country = 'Pays invalide'
      invalid_region = 'Région invalide'
      invalid_race = 'Vous devez sélectionner au moins une race/origine ethnique'
      invalid_age = 'Vous devez confirmer avoir plus de 18 ans'
      invalid_pol = 'Vous devez accepter notre politique de confidentialité'
      invalid_employeeVolunteer = 'sélectionnez une option pour le bénévolat des employés'
      break;
    case "hr":
      invalid_name = "Nevažeći naziv"
      invalid_surname = 'Nevažeće prezime'
      invalid_email = 'Nevažeći email'
      invalid_pass = 'Netočna zaporka'
      invalid_pass_match = "Lozinke se ne podudaraju"
      invalid_year = 'Nevažeća godina rođenja'
      invalid_gender = 'Nevažeći spol'
      invalid_org = 'Nevažeća organizacija'
      invalid_dis = 'Nevažeći invaliditet'
      invalid_emp = 'Nevažeći radni odnos'
      invalid_car_res = 'Nevažeća odgovornost za skrb'
      invalid_vol_bef = 'Invalid Volontirao prije'
      invalid_country = 'Nevažeća država'
      invalid_region = 'Nevažeća regija'
      invalid_race = 'Morate odabrati barem jednu rasu/nacionalnost'
      invalid_age = 'Morate potvrditi da ste stariji od 18 godina'
      invalid_pol = 'Morate prihvatiti našu politiku privatnosti'
      invalid_employeeVolunteer = 'odaberite opciju za zaposlenika volontera'
      break;
    case "sq":
      invalid_name = 'Emër i pavlefshëm'
      invalid_surname = 'Mbiemër i pavlefshëm'
      invalid_email = 'Email i pavlefshem'
      invalid_pass = 'Fjalëkalim i pavlefshëm'
      invalid_pass_match = "Fjalëkalimet nuk përputhen"
      invalid_year = 'Viti i lindjes i pavlefshëm'
      invalid_gender = 'Gjinia e pavlefshme'
      invalid_org = 'Organizatë e pavlefshme'
      invalid_dis = 'Aftësia e kufizuar e pavlefshme'
      invalid_emp = 'Punësimi i pavlefshëm'
      invalid_car_res = 'Përgjegjësia e kujdesit të pavlefshëm'
      invalid_vol_bef = 'I pavlefshëm vullnetar më parë'
      invalid_country = 'Vend i pavlefshëm'
      invalid_region = 'Rajon i pavlefshëm'
      invalid_race = 'Ju duhet të zgjidhni të paktën një Racë/Etni'
      invalid_age = 'Ju duhet të konfirmoni mbi 18 vjeç'
      invalid_pol = 'Ju duhet të pranoni politikën tonë të privatësisë'
      invalid_employeeVolunteer = 'zgjidhni një opsion për Punonjës Vullnetar'
      break;
    default: 
      invalid_name = "Invalid Name"
      invalid_surname = 'Invalid Surname'
      invalid_email = 'Invalid Email'
      invalid_pass = 'Invalid Password'
      invalid_pass_match = "Passwords don't match"
      invalid_year = 'Invalid Year of Birth'
      invalid_gender = 'Invalid Gender'
      invalid_org = 'Invalid Organisation'
      invalid_dis = 'Invalid Disability'
      invalid_emp = 'Invalid Employment'
      invalid_car_res = 'Invalid Caring Responsibility'
      invalid_vol_bef = 'Invalid Volunteered Before'
      invalid_country = 'Invalid Country'
      invalid_region = 'Invalid Region'
      invalid_race = 'You must select at least one Race/Ethnicity'
      invalid_age = 'You must confirm over 18 years old'
      invalid_pol = 'You must accept our privacy policy'
      invalid_employeeVolunteer = 'select an option for Employee Volunteer'
      break;
  }

  return { 
    invalid_name, invalid_surname, invalid_email, invalid_pass, invalid_pass_match, invalid_year, invalid_gender, invalid_org, invalid_dis,
    invalid_emp, invalid_car_res, invalid_vol_bef, invalid_country, invalid_region, invalid_race, invalid_age, invalid_pol, invalid_employeeVolunteer
  }
}

export function submitValidation ({ name, surname, email, password, repeatpassword, age, gender, organisation, disability, employment,
  caringresponsibility, volunteeredbefore, employeeVolunteer, country, region, raceSel, checked18, checkedPolicy, other, lang } : any) {

  const { invalid_name, invalid_surname, invalid_email, invalid_pass, invalid_pass_match, invalid_year, invalid_gender, invalid_org, invalid_dis,
    invalid_emp, invalid_car_res, invalid_vol_bef, invalid_country, invalid_region, invalid_race, invalid_age, invalid_pol, invalid_employeeVolunteer } = returnVar(lang)

  let errorsArr = []
    if (!name?.length) {
      errorsArr.push(invalid_name)
    }

    if (!surname?.length) {
      errorsArr.push(invalid_surname)
    }

    if (!email?.length) {
      errorsArr.push(invalid_email)
    }

    if (!password?.length) {
      errorsArr.push(invalid_pass)
    }

    if (password !== repeatpassword) {
      errorsArr.push(invalid_pass_match)
    }

    if (typeof (parseInt(age)) !== 'number' || age.length < 1 || age < 0) {
      errorsArr.push(invalid_year)
    }
    
    if (!gender?.length) {
      errorsArr.push(invalid_gender)
    }

    if (typeof (parseInt(organisation)) !== 'number' || organisation < 0) {
      errorsArr.push(invalid_org)
    }

    if (!disability?.length) {
      errorsArr.push(invalid_dis)
    }

    if (!employment?.length) {
      errorsArr.push(invalid_emp)
    }

    if (!caringresponsibility?.length) {
      errorsArr.push(invalid_car_res)
    }

    if (!volunteeredbefore?.length) {
      errorsArr.push(invalid_vol_bef)
    }

    if (!employeeVolunteer?.length) {
      errorsArr.push(invalid_employeeVolunteer)
    }

    if (!(country?.length > 0)) {
      errorsArr.push(invalid_country)
    }

    if (!(region?.length > 0)) {
      errorsArr.push(invalid_region)
    }

    if (!(raceSel?.length > 0)) {
      errorsArr.push(invalid_race)
    }

    if (!checked18) {
      errorsArr.push(invalid_age)
    }

    if (!(checkedPolicy)) {
      errorsArr.push(invalid_pol)
    }

    return errorsArr
}

export function updateSubmitValidation ({ name, surname, email, password, repeatpassword, age, gender, organisation, disability, employment,
  caringresponsibility, volunteeredbefore, employeeVolunteer, country, region, raceSel, lang } : any) {

    const { invalid_name, invalid_surname, invalid_email, invalid_pass_match, invalid_year, invalid_gender, invalid_org, invalid_dis,
      invalid_emp, invalid_car_res, invalid_vol_bef, invalid_country, invalid_region, invalid_race, invalid_employeeVolunteer } = returnVar(lang)

  let errorsArr = []
    if (!name?.length) {
      errorsArr.push(invalid_name)
    }

    if (!surname?.length) {
      errorsArr.push(invalid_surname)
    }

    if (!email?.length) {
      errorsArr.push(invalid_email)
    }

    if (password !== repeatpassword) {
      errorsArr.push(invalid_pass_match)
    }

    if (typeof (parseInt(age)) !== 'number' || age.length < 1 || age < 0) {
      errorsArr.push(invalid_year)
    }
    
    if (!gender?.length) {
      errorsArr.push(invalid_gender)
    }

    if (typeof (parseInt(organisation)) !== 'number' || organisation < 0) {
      errorsArr.push(invalid_org)
    }

    if (!disability?.length) {
      errorsArr.push(invalid_dis)
    }

    if (!employment?.length) {
      errorsArr.push(invalid_emp)
    }

    if (!caringresponsibility?.length) {
      errorsArr.push(invalid_car_res)
    }

    if (!volunteeredbefore?.length) {
      errorsArr.push(invalid_vol_bef)
    }

    if (!employeeVolunteer?.length) {
      errorsArr.push(invalid_employeeVolunteer)
    }

    if (!(country?.length > 0)) {
      errorsArr.push(invalid_country)
    }

    if (!(region?.length > 0)) {
      errorsArr.push(invalid_region)
    }

    if (!(raceSel?.length > 0)) {
      errorsArr.push(invalid_race)
    }

    return errorsArr
}
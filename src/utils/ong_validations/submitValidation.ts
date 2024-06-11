function returnVar (lang: any) {
  let invalid_name = 'Invalid Name'
  let invalid_email = 'Invalid Email'
  let invalid_password = 'Invalid Password'
  let invalid_pass_not_match = "Passwords don't match"
  let invalid_emp = 'Invalid Employees'
  let invalid_vol = 'Invalid Volunteers'
  let invalid_mem_op_tot_am = 'Invalid Membership Open total amount'
  let invalid_mem_op_num_mem = 'Invalid Membership Open number of members'
  let invalid_fund_open_num_don = 'Invalid Fundraising Open Number of Donors'
  let invalid_fund_open_tot_am = 'Invalid Fundraising Open total amount'
  let invalid_select_org_obj = 'You must select at least one Organisation Objective'
  let invalid_anual_inc = 'Invalid Annual Income'
  let invalid_country = 'Invalid Country'
  let invalid_region = 'Invalid Region'
  let invalid_sel_fund_mem = 'You must select Fundraising or Membership option'
  let invalid_pol = 'You must accept our privacy policy'

  switch (lang) {
    case "es":
      invalid_name = "Nombre inválido"
      invalid_email = 'Email Inválido'
      invalid_password = 'Contraseña inválida'
      invalid_pass_not_match = "Las contraseñas no coinciden"
      invalid_emp = 'Empleados inválidos'
      invalid_vol = 'Voluntarios Inválidos'
      invalid_mem_op_tot_am = 'Membresía no válida Monto total abierto'
      invalid_mem_op_num_mem = 'Membresía no válida Número abierto de miembros'
      invalid_fund_open_num_don = 'Número abierto de donantes para recaudación de fondos no válido'
      invalid_fund_open_tot_am = 'Monto total abierto de recaudación de fondos no válido'
      invalid_select_org_obj = 'Debes seleccionar al menos un Objetivo de la Organización'
      invalid_anual_inc = 'Ingreso anual no válido'
      invalid_country = 'País inválido'
      invalid_region = 'Región Inválida'
      invalid_sel_fund_mem = 'Debes seleccionar la opción Recaudación de fondos o Membresía'
      invalid_pol = 'Debes aceptar nuestra política de privacidad'
      break;
    case "fr":
      invalid_name = "Nom incorrect"
      invalid_email = 'Email invalide'
      invalid_password = 'Mot de passe incorrect'
      invalid_pass_not_match = "Les mots de passe ne correspondent pas"
      invalid_emp = 'Employés invalides'
      invalid_vol = 'Bénévoles invalides'
      invalid_mem_op_tot_am = "Montant total ouvert d'adhésion invalide"
      invalid_mem_op_num_mem = 'Adhésion invalide Nombre ouvert de membres'
      invalid_fund_open_num_don = 'Nombre de donateurs ouvert pour une collecte de fonds invalide'
      invalid_fund_open_tot_am = 'Montant total ouvert de collecte de fonds invalide'
      invalid_select_org_obj = "Vous devez sélectionner au moins un objectif de l'organisation"
      invalid_anual_inc = 'Revenu annuel invalide'
      invalid_country = 'Pays invalide'
      invalid_region = 'Région invalide'
      invalid_sel_fund_mem = 'Vous devez sélectionner l’option Collecte de fonds ou Adhésion'
      invalid_pol = 'Vous devez accepter notre politique de confidentialité'
      break;
    case "hr":
      invalid_name = "Nevažeći naziv"
      invalid_email = 'Nevažeći email'
      invalid_password = 'Netočna zaporka'
      invalid_pass_not_match = "Lozinke se ne podudaraju"
      invalid_emp = 'Nevažeći zaposlenici'
      invalid_vol = 'Nevažeći volonteri'
      invalid_mem_op_tot_am = 'Ukupni iznos nevažećeg otvaranja članstva'
      invalid_mem_op_num_mem = 'Nevažeće članstvo Otvoreni broj članova'
      invalid_fund_open_num_don = 'Nevažeći otvoreni broj donatora prikupljanja sredstava'
      invalid_fund_open_tot_am = 'Ukupni iznos nevažećeg otvaranja prikupljanja sredstava'
      invalid_select_org_obj = 'Morate odabrati barem jedan cilj organizacije'
      invalid_anual_inc = 'Nevažeći godišnji prihod'
      invalid_country = 'Nevažeća država'
      invalid_region = 'Nevažeća regija'
      invalid_sel_fund_mem = 'Morate odabrati opciju prikupljanja sredstava ili članstva'
      invalid_pol = 'Morate prihvatiti našu politiku privatnosti'
      break;
    case "sq":
      invalid_name = "Emër i pavlefshëm"
      invalid_email = 'Email i pavlefshem'
      invalid_password = 'Fjalëkalim i pavlefshëm'
      invalid_pass_not_match = "Fjalëkalimet nuk përputhen"
      invalid_emp = 'Punonjës të pavlefshëm'
      invalid_vol = 'Vullnetarët e pavlefshëm'
      invalid_mem_op_tot_am = 'Anëtarësimi i pavlefshëm Shuma totale e hapur'
      invalid_mem_op_num_mem = 'Anëtarësimi i pavlefshëm Hapni numrin e anëtarëve'
      invalid_fund_open_num_don = 'Numri i hapur i donatorëve i pavlefshëm për mbledhjen e fondeve'
      invalid_fund_open_tot_am = 'Shuma totale e hapur e mbledhjes së fondeve është e pavlefshme'
      invalid_select_org_obj = 'Ju duhet të zgjidhni të paktën një objektiv të organizatës'
      invalid_anual_inc = 'Të ardhura vjetore të pavlefshme'
      invalid_country = 'Vend i pavlefshëm'
      invalid_region = 'Rajon i pavlefshëm'
      invalid_sel_fund_mem = 'Ju duhet të zgjidhni opsionin Mbledhja e fondeve ose Anëtarësimi'
      invalid_pol = 'Ju duhet të pranoni politikën tonë të privatësisë'
      break;
    default:
      invalid_name = 'Invalid Name'
      invalid_email = 'Invalid Email'
      invalid_password = 'Invalid Password'
      invalid_pass_not_match = "Passwords don't match"
      invalid_emp = 'Invalid Employees'
      invalid_vol = 'Invalid Volunteers'
      invalid_mem_op_tot_am = 'Invalid Membership Open total amount'
      invalid_mem_op_num_mem = 'Invalid Membership Open number of members'
      invalid_fund_open_num_don = 'Invalid Fundraising Open Number of Donors'
      invalid_fund_open_tot_am = 'Invalid Fundraising Open total amount'
      invalid_select_org_obj = 'You must select at least one Organisation Objective'
      invalid_anual_inc = 'Invalid Annual Income'
      invalid_country = 'Invalid Country'
      invalid_region = 'Invalid Region'
      invalid_sel_fund_mem = 'You must select Fundraising or Membership option'
      invalid_pol = 'You must accept our privacy policy'
      break;
  }

  return { 
    invalid_name, invalid_email, invalid_password, invalid_pass_not_match, invalid_emp, invalid_vol, invalid_mem_op_tot_am,
    invalid_mem_op_num_mem, invalid_fund_open_num_don, invalid_fund_open_tot_am, invalid_select_org_obj, invalid_anual_inc,
    invalid_country, invalid_region, invalid_sel_fund_mem, invalid_pol
  }
}

export function submitValidation ({ name, email, password, employees, repeatpassword, volunteers, annualincome, 
  opentotalamountmembership, opennumberofmembers, opennumberofdonors, opentotalamountfundraising, orgObjetives, 
  country, region, checkedFundraising, checkedMembership, checkedPolicy, lang } : any) {

  const { 
    invalid_name, invalid_email, invalid_password, invalid_pass_not_match, invalid_emp, invalid_vol, invalid_mem_op_tot_am,
    invalid_mem_op_num_mem, invalid_fund_open_num_don, invalid_fund_open_tot_am, invalid_select_org_obj, invalid_anual_inc,
    invalid_country, invalid_region, invalid_sel_fund_mem, invalid_pol
  } = returnVar(lang)

  let errorsArr = []
    if (!name?.length) {
      errorsArr.push(invalid_name)
    }

    if (!email?.length) {
      errorsArr.push(invalid_email)
    }

    if (!password?.length) {
      errorsArr.push(invalid_password)
    }

    if (password !== repeatpassword) {
      errorsArr.push(invalid_pass_not_match)
    }

    if (typeof (parseInt(employees)) !== 'number' || employees.length < 1 || employees < 0) {
      errorsArr.push(invalid_emp)
    }

    if (typeof (parseInt(volunteers)) !== 'number' || volunteers.length < 1 || volunteers < 0) {
      errorsArr.push(invalid_vol)
    }

    if (typeof (parseInt(opentotalamountmembership)) !== 'number' || opentotalamountmembership.length < 1 || opentotalamountmembership < 0) {
      errorsArr.push(invalid_mem_op_tot_am)
    }

    if (typeof (parseInt(opennumberofmembers)) !== 'number' || opennumberofmembers.length < 1 || opennumberofmembers < 0) {
      errorsArr.push(invalid_mem_op_num_mem)
    }

    if (typeof (parseInt(opennumberofdonors)) !== 'number' || opennumberofdonors.length < 1 || opennumberofdonors < 0) {
      errorsArr.push(invalid_fund_open_num_don)
    }

    if (typeof (parseInt(opentotalamountfundraising)) !== 'number' || opentotalamountfundraising.length < 1 || opentotalamountfundraising < 0) {
      errorsArr.push(invalid_fund_open_tot_am)
    }

    if (!(orgObjetives?.length > 0)) {
      errorsArr.push(invalid_select_org_obj)
    }

    if (!(annualincome?.length > 0)) {
      errorsArr.push(invalid_anual_inc)
    }

    if (!(country?.length > 0)) {
      errorsArr.push(invalid_country)
    }

    if (!(region?.length > 0)) {
      errorsArr.push(invalid_region)
    }

    if (!checkedFundraising && !checkedMembership) {
      errorsArr.push(invalid_sel_fund_mem)
    }

    if (!(checkedPolicy)) {
      errorsArr.push(invalid_pol)
    }

    return errorsArr
}

export function updateSubmitValidation ({ name, email, password, employees, repeatpassword, volunteers, annualincome, 
  opentotalamountmembership, opennumberofmembers, opennumberofdonors, opentotalamountfundraising, orgObjetives, 
  country, region, checkedFundraising, checkedMembership, lang } : any) {

  const { 
    invalid_name, invalid_email, invalid_pass_not_match, invalid_emp, invalid_vol, invalid_mem_op_tot_am,
    invalid_mem_op_num_mem, invalid_fund_open_num_don, invalid_fund_open_tot_am, invalid_select_org_obj, invalid_anual_inc,
    invalid_country, invalid_region, invalid_sel_fund_mem
  } = returnVar(lang)

  let errorsArr = []
    if (!name?.length) {
      errorsArr.push(invalid_name)
    }

    if (!email?.length) {
      errorsArr.push(invalid_email)
    }

    if (password !== repeatpassword) {
      errorsArr.push(invalid_pass_not_match)
    }

    if (typeof (parseInt(employees)) !== 'number' || employees.length < 1 || employees < 0) {
      errorsArr.push(invalid_emp)
    }

    if (typeof (parseInt(volunteers)) !== 'number' || volunteers.length < 1 || volunteers < 0) {
      errorsArr.push(invalid_vol)
    }

    if (typeof (parseInt(opentotalamountmembership)) !== 'number' || opentotalamountmembership.length < 1 || opentotalamountmembership < 0) {
      errorsArr.push(invalid_mem_op_tot_am)
    }

    if (typeof (parseInt(opennumberofmembers)) !== 'number' || opennumberofmembers.length < 1 || opennumberofmembers < 0) {
      errorsArr.push(invalid_mem_op_num_mem)
    }

    if (typeof (parseInt(opennumberofdonors)) !== 'number' || opennumberofdonors.length < 1 || opennumberofdonors < 0) {
      errorsArr.push(invalid_fund_open_num_don)
    }

    if (typeof (parseInt(opentotalamountfundraising)) !== 'number' || opentotalamountfundraising.length < 1 || opentotalamountfundraising < 0) {
      errorsArr.push(invalid_fund_open_tot_am)
    }

    if (!(orgObjetives?.length > 0)) {
      errorsArr.push(invalid_select_org_obj)
    }

    if (!(annualincome?.length > 0)) {
      errorsArr.push(invalid_anual_inc)
    }

    if (!(country?.length > 0)) {
      errorsArr.push(invalid_country)
    }

    if (!(region?.length > 0)) {
      errorsArr.push(invalid_region)
    }

    if (!checkedFundraising && !checkedMembership) {
      errorsArr.push(invalid_sel_fund_mem)
    }

    return errorsArr
}
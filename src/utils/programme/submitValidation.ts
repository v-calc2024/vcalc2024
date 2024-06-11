function returnVar (lang: any) {
  let invalid_name = 'Invalid Name'
  let invalid_op = 'Invalid Level Operation'
  let invalid_main_fund_org = 'Invalid Main Funding Entity'
  let invalid_prog = 'Invalid Programme Type'
  let invalid_av_cost = 'Invalid Average Cost'
  let invalid_prog_sec = 'Invalid Programme Sector'
  let invalid_start_date = 'Invalid Start Date'
  let invalid_end_date = 'Invalid End Date'
  let invalid_date = 'The start date cannot be greater than the end date'
  let invalid_costProgDelivery = 'Invalid Cost of Programme Delivery'

  switch (lang) {
    case "es":
      invalid_name = "Nombre inválido"
      invalid_op = 'Operación de nivel no válido'
      invalid_main_fund_org = 'Entidad principal de financiación no válida'
      invalid_prog = 'Tipo de programa no válido'
      invalid_av_cost = 'Costo promedio no válido'
      invalid_costProgDelivery = 'Costo de la entrega del programa inválido'
      invalid_prog_sec = 'Sector de programa no válido'
      invalid_start_date = 'Fecha de inicio no válida'
      invalid_end_date = 'Fecha de finalización no válida'
      invalid_date = 'La fecha de inicio no puede ser mayor que la fecha de finalización.'
      break;
    case "fr":
      invalid_name = "Nom incorrect"
      invalid_op = 'Opération de niveau invalide'
      invalid_main_fund_org = 'Entité de financement principale non valide'
      invalid_prog = 'Type de programme invalide'
      invalid_av_cost = 'Coût moyen non valide'
      invalid_costProgDelivery = 'Coût invalide de la prestation du programme'
      invalid_prog_sec = 'Secteur de programme invalide'
      invalid_start_date = 'Date de début invalide'
      invalid_end_date = 'Date de fin invalide'
      invalid_date = 'La date de début ne peut pas être supérieure à la date de fin'
      break;
    case "hr":
      invalid_name = "Nevažeći naziv"
      invalid_op = 'Nevažeća operacija razine'
      invalid_main_fund_org = 'Nevažeći glavni subjekt financiranja'
      invalid_prog = 'Nevažeća vrsta programa'
      invalid_av_cost = 'Nevažeći prosječni trošak'
      invalid_costProgDelivery = 'Nevažeći trošak isporuke programa'
      invalid_prog_sec = 'Nevažeći programski sektor'
      invalid_start_date = 'Nevažeći početni datum'
      invalid_end_date = 'Nevažeći datum završetka'
      invalid_date = 'Datum početka ne može biti duži od datuma završetka'
      break;
    case "sq":
      invalid_name = "Emër i pavlefshëm"
      invalid_op = 'Operacioni i nivelit të pavlefshëm'
      invalid_main_fund_org = 'Subjekti kryesor financues i pavlefshëm'
      invalid_prog = 'Lloji i pavlefshëm i programit'
      invalid_av_cost = 'Kosto mesatare e pavlefshme'
      invalid_costProgDelivery = 'Kosto e pavlefshme e dorëzimit të programit'
      invalid_prog_sec = 'Sektori i programit të pavlefshëm'
      invalid_start_date = 'Data e pavlefshme e fillimit'
      invalid_end_date = 'Data e pavlefshme e përfundimit'
      invalid_date = 'Data e fillimit nuk mund të jetë më e madhe se data e përfundimit'
      break;
    default:
      invalid_name = 'Invalid Name'
      invalid_op = 'Invalid Level Operation'
      invalid_main_fund_org = 'Invalid Main Funding Entity'
      invalid_prog = 'Invalid Programme Type'
      invalid_av_cost = 'Invalid Average Cost'
      invalid_costProgDelivery = 'Invalid Cost of Programme Delivery'
      invalid_prog_sec = 'Invalid Programme Sector'
      invalid_start_date = 'Invalid Start Date'
      invalid_end_date = 'Invalid End Date'
      invalid_date = 'The start date cannot be greater than the end date'
      break;
  }

  return { 
    invalid_name, invalid_op, invalid_main_fund_org, invalid_prog, invalid_av_cost, invalid_prog_sec, invalid_start_date, invalid_end_date, invalid_date, invalid_costProgDelivery
  }
}

export function submitValidation ({ name, levelOperation, mainFundingOrganism, programmeType, averageCost, costProgDelivery, programmeSector, startDate, endDate, lang } : any) {
  const { invalid_name, invalid_op, invalid_main_fund_org, invalid_prog, invalid_av_cost, invalid_prog_sec, invalid_start_date, invalid_end_date, invalid_date, invalid_costProgDelivery } = returnVar(lang)
  let errorsArr = []

  if (!name?.length) {
    errorsArr.push(invalid_name)
  }

  if (!levelOperation?.length) {
    errorsArr.push(invalid_op)
  }

  if (!mainFundingOrganism?.length) {
    errorsArr.push(invalid_main_fund_org)
  }

  if (!programmeType?.length) {
    errorsArr.push(invalid_prog)
  }

  if (typeof (parseInt(averageCost)) !== 'number' || averageCost.length < 1 || averageCost < 0) {
    errorsArr.push(invalid_av_cost)
  }

  if (typeof (parseInt(costProgDelivery)) !== 'number' || costProgDelivery.length < 1 || costProgDelivery < 0) {
    errorsArr.push(invalid_costProgDelivery)
  }

  if (!programmeSector?.length) {
    errorsArr.push(invalid_prog_sec)
  }

  if (!startDate?.length) {
    errorsArr.push(invalid_start_date)
  }

  if (startDate?.length > 0 && endDate?.length > 0) {
    const startDateConv = new Date(startDate);
    const endDateConv = new Date(endDate);
    
    if (endDateConv < startDateConv) {
      errorsArr.push(invalid_date)
    }
  }

  return errorsArr
}
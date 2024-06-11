export const organisationsList = [
  { value: "1", label: "Organisation A" },
  { value: "2", label: "Organisation B" },
  { value: "3", label: "Organisation C" },
  { value: "4", label: "Organisation D" },
  { value: "5", label: "Organisation E" },
  { value: "6", label: "Organisation F" },
];

export const genderList = [
  { value: "01", label: "Male" },
  { value: "02", label: "Female" },
  { value: "03", label: "Non Binary" },
  { value: "04", label: "Prefer Not to Say" },
  { value: "05", label: "Other"}
];

export const genderList_es = [
  { value: "01", label: "Hombre" },
  { value: "02", label: "Mujer" },
  { value: "03", label: "No binario" },
  { value: "04", label: "Prefiero no decirlo" },
  { value: "05", label: "Otro"}
];

export const genderList_fr = [
  { value: "01", label: "Homme" },
  { value: "02", label: "Femme" },
  { value: "03", label: "Non binaire" },
  { value: "04", label : "Je préfère ne pas le dire" },
  { value: "05", label: "Autre"}
];

export const genderList_hr = [
  { value: "01", label: "Muški" },
  { value: "02", label: "Female" },
  { value: "03", label: "Non Binary" },
  { value: "04", label: "Radije ne bih rekao" },
  { value: "05", label: "Ostalo"}
];

export const genderList_sq = [
  { value: "01", label: "Mashkull" },
  { value: "02", label: "Femër" },
  { value: "03", label: "Jo binare" },
  { value: "04", label: "Preferoj të mos thuash" },
  { value: "05", label: "Të tjera"}
];

export function getYears (): any {
  const currentYear = new Date().getFullYear();

  const years = [];
  for (let year = currentYear; year >= currentYear - 130; year--) {
    years.push({ value: year.toString(), label: year.toString() });
  }

  return years
}


export const raceList = [
  { value: "01", label: "Black" },
  { value: "02", label: "North African" },
  { value: "03", label: "Central African" },
  { value: "04", label: "South African" },
  { value: "05", label: "East African" },
  { value: "06", label: "West African" },
  { value: "07", label: "Latin American" },
  { value: "08", label: "Hispanic" },
  { value: "09", label: "White" },
  { value: "10", label: "North European" },
  { value: "11", label: "South European" },
  { value: "12", label: "East European" },
  { value: "13", label: "West European" },
  { value: "14", label: "East Asian" },
  { value: "15", label: "South Asian" },
  { value: "16", label: "Southeast Asian" },
  { value: "17", label: "Middle Eastern" },
  { value: "18", label: "Arab" },
  { value: "19", label: "Native American" },
  { value: "20", label: "Prefer not to say" },
];

export const raceList_es = [
  { value: "01", label: "Negro" },
  { value: "02", label: "norteafricano" },
  { value: "03", label: "centroafricano" },
  { value: "04", label: "Sudafricano" },
  { value: "05", label: "África Oriental" },
  { value: "06", label: "África occidental" },
  { value: "07", label: "Latinoamericano" },
  { value: "08", label: "Hispano" },
  { value: "09", label: "Blanco" },
  { value: "10", label: "Norte de Europa" },
  { value: "11", label: "Sur de Europa" },
  { value: "12", label: "Europa del Este" },
  { value: "13", label: "Europa occidental" },
  { value: "14", label: "Asiático oriental" },
  { value: "15", label: "sur de Asia" },
  { value: "16", label: "Sudeste asiático" },
  { value: "17", label: "Medio Oriente" },
  { value: "18", label: "árabe" },
  { value: "19", label: "nativo americano" },
  { value: "20", label: "Prefiero no decirlo" },
];

export const raceList_fr = [
  { value: "01", label: "Noir" },
  { value: "02", label : "Afrique du Nord" },
  { value : "03", label : "Central Africain" },
  { value: "04", label : "Sud-Africain" },
  { value: "05", label : "Afrique de l'Est" },
  { value: "06", label : "Afrique de l'Ouest" },
  { value: "07", label : "Amérique latine" },
  { value: "08", label: "Hispanique" },
  { value: "09", label: "Blanc" },
  { value: "10", label : "Europe du Nord" },
  { value: "11", label : "Europe du Sud" },
  { value: "12", label : "Europe de l'Est" },
  { value: "13", label : "Europe de l'Ouest" },
  { value: "14", label: "Asie de l'Est" },
  { value: "15", label : "Asie du Sud" },
  { value: "16", label : "Asie du Sud-Est" },
  { value: "17", label : "Moyen-Orient" },
  { value: "18", label : "Arabe" },
  { value: "19", label : "Amérindien" },
  { value : "20", label : "Je préfère ne pas le dire" },
];

export const raceList_hr = [
  { value: "01", label: "Crno" },
  { value: "02", label: "Sjevernoafrička" },
  { value: "03", label: "Central African" },
  { value: "04", label: "Južnoafrička" },
  { value: "05", label: "East African" },
  { value: "06", label: "West African" },
  { value: "07", label: "Latin American" },
  { value: "08", label: "Hispanic" },
  { value: "09", label: "White" },
  { value: "10", label: "North European" },
  { value: "11", label: "South European" },
  { value: "12", label: "East European" },
  { value: "13", label: "West European" },
  { value: "14", label: "East Asian" },
  { value: "15", label: "Južnoazijski" },
  { value: "16", label: "Jugoistočna Azija" },
  { value: "17", label: "Bliski istok" },
  { value: "18", label: "Arap" },
  { value: "19", label: "Indijanac" },
  { value: "20", label: "Radije ne bih rekao" },
];

export const raceList_sq = [
  { value: "01", label: "E zezë" },
  { value: "02", label: "Afrika e Veriut" },
  { value: "03", label: "Afrika Qendrore" },
  { value: "04", label: "Afrika e Jugut" },
  { value: "05", label: "Afrika Lindore" },
  { value: "06", label: "Afrika Perëndimore" },
  { value: "07", label: "Amerikan Latine" },
  { value: "08", label: "hispanike" },
  { value: "09", label: "E bardhë" },
  { value: "10", label: "Evropia e Veriut" },
  { value: "11", label: "Evropia e Jugut" },
  { value: "12", label: "Evropa Lindore" },
  { value: "13", label: "Evropiane Perëndimore" },
  { value: "14", label: "Azia Lindore" },
  { value: "15", label: "Azia e Jugut" },
  { value: "16", label: "Azia Juglindore" },
  { value: "17", label: "Lindja e Mesme" },
  { value: "18", label: "Arab" },
  { value: "19", label: "Amerikan vendas" },
  { value: "20", label: "Prefero të mos thuash" },
];

export const disabilityList = [
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const disabilityList_es = [
  { value: "YES", label: "Sí" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefiero no decirlo" },
];

export const disabilityList_fr = [
  { value: "YES", label: "Oui" },
  { value: "NO", label: "Non" },
  { value: "PNS", label : "Je préfère ne pas le dire" },
];

export const disabilityList_hr = [
  { value: "YES", label: "Da" },
  { value: "NO", label: "Ne" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const disabilityList_sq = [
  { value: "YES", label: "Po" },
  { value: "NO", label: "Jo" },
  { value: "PNS", label: "Preferoj të mos thuash" },
];

export const employmentList = [
  { value: "PNS", label: "Prefer not to say"},
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
];

export const employmentList_es = [
  { value: "PNS", label: "Prefiero no decirlo"},
  { value: "YES", label: "Sí" },
  { value: "NO", label: "No" },
];

export const employmentList_fr = [
  { value: "PNS", label: "Je préfère ne pas le dire"},
  { value: "YES", label: "Oui" },
  { value: "NO", label: "Non" },
];

export const employmentList_hr = [
  { value: "PNS", label: "Radije ne bih rekao"},
  { value: "YES", label: "Da" },
  { value: "NO", label: "Ne" },
];

export const employmentList_sq = [
  { value: "PNS", label: "Preferoj te mos e them"},
  { value: "YES", label: "Po" },
  { value: "NO", label: "Jo" },
];

export const caringResponsibilityList = [
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const caringResponsibilityList_es = [
  { value: "YES", label: "Sí" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefiero no decirlo" },
];

export const caringResponsibilityList_fr = [
  { value: "YES", label: "Oui" },
  { value: "NO", label: "Non" },
  { value: "PNS", label : "Je préfère ne pas le dire" },
];

export const caringResponsibilityList_hr = [
  { value: "YES", label: "Da" },
  { value: "NO", label: "Ne" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const caringResponsibilityList_sq = [
  { value: "YES", label: "Po" },
  { value: "NO", label: "Jo" },
  { value: "PNS", label: "Preferoj të mos thuash" },
];

export const volunteeredBeforeList = [
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const volunteeredBeforeList_es = [
  { value: "YES", label: "Sí" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefiero no decirlo" },
];

export const volunteeredBeforeList_fr = [
  { value: "YES", label: "Oui" },
  { value: "NO", label: "Non" },
  { value: "PNS", label : "Je préfère ne pas le dire" },
];

export const volunteeredBeforeList_hr = [
  { value: "YES", label: "Da" },
  { value: "NO", label: "Ne" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const volunteeredBeforeList_sq = [
  { value: "YES", label: "Po" },
  { value: "NO", label: "Jo" },
  { value: "PNS", label: "Preferoj të mos thuash" },
];

export const employeeVolunteerList = [
  { value: "YES", label: "Yes" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const employeeVolunteerList_es = [
  { value: "YES", label: "Sí" },
  { value: "NO", label: "No" },
  { value: "PNS", label: "Prefiero no decirlo" },
];

export const employeeVolunteerList_fr = [
  { value: "YES", label: "Oui" },
  { value: "NO", label: "Non" },
  { value: "PNS", label : "Je préfère ne pas le dire" },
];

export const employeeVolunteerList_hr = [
  { value: "YES", label: "Da" },
  { value: "NO", label: "Ne" },
  { value: "PNS", label: "Prefer Not to Say" },
];

export const employeeVolunteerList_sq = [
  { value: "YES", label: "Po" },
  { value: "NO", label: "Jo" },
  { value: "PNS", label: "Preferoj të mos thuash" },
];
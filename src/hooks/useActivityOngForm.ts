import { createOngActivity } from "@/services/ong_activity/createOngActivity";
import { submitValidation } from "@/utils/activity_ong/submitValidation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { getCountries, getStates } from "@/utils/getCountries";
import { typeofactivityList } from "@/mockups/activity_registration";

export function useActivityONGForm({ lang }: any) {
  const [activity, setActivity] = useState<any>("");
  const [programme, setProgramme] = useState<any>("");
  const [totalHours, setTotalHours] = useState<any>(0);
  const [empEnrolledSupVol, setEmpEnrolledSupVol] = useState<any>(0);
  const [numberOfFinalBen, setNumberOfFinalBen] = useState<any>(0);
  const [numberOfVol, setNumberOfVol] = useState<any>(0);
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [typeOfAct, setTypeOfAct] = useState<any>("");
  const [typeOfActAux, setTypeOfActAux] = useState<any>("");
  // const [sdg, setSdg] = useState<any>("");
  const [sdgs, setSdgs] = useState<any[]>(
    []
  );
  const [volunteerBeneficiaries, setVolunteerBeneficiaries] = useState<any[]>(
    []
  );
  const [finalBen, setFinalBen] = useState<any[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedPlantTree, setCheckedPlantTree] = useState<boolean>(false);
  const [numberOfDonors, setNumberOfDon] = useState<any>(0);
  const [checkedSavingPlan, setCheckedSavingPlan] = useState<boolean>(false);
  const [energyWasted, setEnergyWasted] = useState<any>(0);
  const [checkedRecyclingConsumables, setCheckedRecyclingConsumables] =
  useState<boolean>(false);
  const [percCons, setPercCons] = useState<any>(0);
  const [checkedMaterialExpenses, setCheckedMaterialExpenses] =
  useState<boolean>(false);
  const [matExpenses, setMatExpenses] = useState<any>(0);
  const [checkedRecyclingEquipment, setCheckedRecyclingEquipment] =
  useState<boolean>(false);
  const [percEq, setPercEq] = useState<any>(0);
  const [checkedCarbon, setCheckedCarbon] = useState<boolean>(false);
  const [percGeo, setPercGeo] = useState<any>(0);
  const [skills, setSkills] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>([]);
  const [country, setCountry] = useState<any>(null);
  const [regions, setRegions] = useState<any>([]);
  const [region, setRegion] = useState<any>(null);
  const [localities, setLocalities] = useState<any>([]);
  const [locality, setLocality] = useState<any>(null);
  const [otherSkill, setOtherSkill] = useState<any>("");
  const [otherFB, setOtherFB] = useState<any>("");
  const router = useRouter();

  useEffect(() => {
    let newRegions: any = []
    if (country === 'Croatia') {
      newRegions = [
        {value:'Bjelovar-Bilogorska', label: 'Bjelovar-Bilogorska'}, 
        {value:'Brod-Posavina', label: 'Brod-Posavina'},
        {value:'Dubrovnik-Neretva', label: 'Dubrovnik-Neretva'},
        {value:'Istria', label: 'Istria'},
        {value:'Karlovačka', label: 'Karlovačka'},
        {value:'Koprivnica-Križevačka', label: 'Koprivnica-Križevačka'},
        {value:'Krapina-Zagorje', label: 'Krapina-Zagorje'},
        {value:'Lika-Senjska', label: 'Lika-Senjska'},
        {value:'Međimurska', label: 'Međimurska'},
        {value:'Osijek-Baranja', label: 'Osijek-Baranja'},
        {value:'Požega-Eslavonia', label: 'Požega-Eslavonia'},
        {value:'Primorsko-Goranska', label: 'Primorsko-Goranska'},
        {value:'Sisak-Moslavina', label: 'Sisak-Moslavina'},
        {value:'Split-Dalmacia', label: 'Split-Dalmacia'},
        {value:'Šibenik-Knin', label: 'Šibenik-Knin'},
        {value:'Varaždinska', label: 'Varaždinska'},
        {value:'Virovitica-Podravska', label: 'Virovitica-Podravska'},
        {value:'Vukovar-Srijemska', label: 'Vukovar-Srijemska'},
        {value:'Zadar', label: 'Zadar'},
        {value:'Zagrebačka', label: 'Zagrebačka'},
        {value:'Zagreb', label: 'Zagreb'}]
    } else {
      newRegions = getStates(country);
    }
    if (country && region) {
      if (country === 'Spain' && region === 'Madrid Province') {
        setLocalities(['Madrid'])
      }
      else {
        axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: country,
          state: region,
        })
        .then((response: any) => {
          setLocalities(response?.data?.data);
        })
        .catch((error: any) => {
          setLocalities([]);
          setLocality(null);
        });
      }
    }
    setRegions(newRegions);
  }, [country, region]);

  const countriesList = getCountries();

  function handleSkillChange(newValue: any) {
    setOtherSkill(newValue?.target?.value || "");
  }

  function handleFBChange(newValue: any) {
    setOtherFB(newValue?.target?.value || "");
  }

  function changeCountry(_event: any, newValue: any) {
    setLocality("");
    setRegion("");
    setCountry(newValue?.label || "");
    setRegions([]);
    setLocalities([]);
    setErrors([])
  }

  function changeRegion(_event: any, newValue: any) {
    setLocality("");
    setRegion(newValue?.label || "");
    setLocalities([]);
    setErrors([])
  }

  function changeLocality(_event: any, newValue: any) {
    setLocality(newValue);
    setErrors([])
  }

  function handleChangePlantTree() {
    setCheckedPlantTree(!checkedPlantTree);
    setErrors([])
  }

  function changeOpenNumOfDonors(event: any) {
    if (event?.target?.value >= 0) {
      setNumberOfDon(event?.target?.value);
    } else {
      setNumberOfDon(0)
    }
    setErrors([])
  }

  function handleChangeSavingPlan() {
    setCheckedSavingPlan(!checkedSavingPlan);
    setErrors([])
  }

  function changeOpenWasted(event: any) {
    if (event?.target?.value >= 0) {
      setEnergyWasted(event?.target?.value);
    } else {
      setEnergyWasted(0)
    }
    setErrors([])
  }

  function handleChangeRecyclingConsumables() {
    setCheckedRecyclingConsumables(!checkedRecyclingConsumables);
    setErrors([])
  }

  function chagePercCons(event: any) {
    if (event?.target?.value >= 0) {
      setPercCons(event?.target?.value);
    } else {
      setPercCons(0)
    }
    setErrors([])
  }

  function handleChangeMaterialExpenses() {
    setCheckedMaterialExpenses(!checkedMaterialExpenses);
    setErrors([])
  }

  function changeMatExp(event: any) {
    if (event?.target?.value >= 0) {
      setMatExpenses(event?.target?.value);
    } else {
      setMatExpenses(0)
    }
    setErrors([])
  }

  function handleChangeRecyclingEquipment() {
    setCheckedRecyclingEquipment(!checkedRecyclingEquipment);
    setErrors([])
  }

  function changePercEq(event: any) {
    if (event?.target?.value >= 0) {
      setPercEq(event?.target?.value);
    } else {
      setPercEq(0)
    }
    setErrors([])
  }

  function handleChangeCarbon() {
    setCheckedCarbon(!checkedCarbon);
    setErrors([])
  }

  function changePercGeo(event: any) {
    if (event?.target?.value >= 0) {
      setPercGeo(event?.target?.value);
    } else {
      setPercGeo(0)
    }
    setErrors([])
  }

  function changeSkills(element: string) {
    if (skills.includes(element)) {
      setSkills((prev) => prev.filter((item) => item !== element));
    } else {
      setSkills((prev) => [...prev, element]);
    }
    setErrors([])
  }
  
  function changeActivity(value: any) {
    setActivity(value?.target?.value);
    setErrors([])
  }

  function changeTotalhours(value: any) {
    setTotalHours(value?.target?.value);
    setErrors([])
  }

  function changeEmpEnrolledSupVol(value: any) {
    setEmpEnrolledSupVol(value?.target?.value);
    setErrors([])
  }

  function changeNumberoffinalben(value: any) {
    setNumberOfFinalBen(value?.target?.value);
    setErrors([])
  }

  function changeNumberOfVol(value: any) {
    setNumberOfVol(value?.target?.value);
    setErrors([])
  }

  function changeStartDate(value: any) {
    setStartDate(value?.target?.value);
    setErrors([])
  }

  function changeEndDate(value: any) {
    setEndDate(value?.target?.value);
    setErrors([])
  }

  function changeProgramme(value: any) {
    setProgramme(value);
    setErrors([])
  }

  function changeTypeOfActivity(_event: any, newValue: any) {
    const value = typeofactivityList.find(element => element.value === newValue.value)
    setTypeOfAct(newValue?.label || "");
    setTypeOfActAux(value?.label || "")
    setErrors([])
  }
/*
  function changeSdg(_event: any, newValue: any) {
    setSdg(newValue?.label || "");
    setErrors([])
  }
*/
  function changeSDGs(element: string) {
    if (sdgs.includes(element)) {
      setSdgs((prev) =>
        prev.filter((item) => item !== element)
      );
    } else {
      setSdgs((prev) => [...prev, element]);
    }
    setErrors([])
  }

  function changeVolunteerBeneficiaries(element: string) {
    if (volunteerBeneficiaries.includes(element)) {
      setVolunteerBeneficiaries((prev) =>
        prev.filter((item) => item !== element)
      );
    } else {
      setVolunteerBeneficiaries((prev) => [...prev, element]);
    }
    setErrors([])
  }

  function changeFinalBen(element: string) {
    if (finalBen.includes(element)) {
      setFinalBen((prev) =>
        prev.filter((item) => item !== element)
      );
    } else {
      setFinalBen((prev) => [...prev, element]);
    }
    setErrors([])
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    let skillsTranformed = skills
    if (otherSkill.length > 0) {
      if (!skills.includes('other')) {
        skillsTranformed = [...skillsTranformed, 'other']
      }
    }

    let finalBenTranformed = finalBen
    if (otherFB.length > 0) {
      if (!skills.includes('Other')) {
        finalBenTranformed = [...finalBenTranformed, 'Other']
      }
    }

    const errorsArr = submitValidation({ activity, programme, totalHours, numberOfFinalBen, numberOfVol,
      finalBen: finalBenTranformed, startDate, typeOfAct, sdgs, volunteerBeneficiaries, skills: skillsTranformed,
      checkedPlantTree, numberOfDonors, checkedSavingPlan, energyWasted, checkedRecyclingConsumables,
      percCons, checkedMaterialExpenses, matExpenses, checkedRecyclingEquipment, percEq, checkedCarbon, percGeo,
      empEnrolledSupVol, country, region, lang });

    setErrors(errorsArr)

    if (!errorsArr?.length) {
      setLoading(true);
      const body = { activity, programme, totalHours: parseInt(totalHours), numberOfFinalBen: parseInt(numberOfFinalBen), numberOfVol: parseInt(numberOfVol),
        finalBen: JSON.stringify(finalBenTranformed), startDate, endDate: endDate.length ? endDate : null, typeOfAct: typeOfActAux, sdg: JSON.stringify(sdgs), volunteerBeneficiaries: null /*JSON.stringify(volunteerBeneficiaries)*/,
        skills: JSON.stringify(skillsTranformed), checkedPlantTree, numberOfDonors: parseInt(numberOfDonors), checkedSavingPlan, energyWasted: parseInt(energyWasted),
        checkedRecyclingConsumables, percCons: parseInt(percCons), checkedMaterialExpenses, matExpenses: parseInt(matExpenses), checkedRecyclingEquipment,
        percEq: parseInt(percEq), checkedCarbon, percGeo: parseInt(percGeo), empEnrolledSupVol: parseInt(empEnrolledSupVol), country, region, locality }
      createOngActivity(body)
        .then(() => {
          window.alert('The activity has been created successfully')
          router.reload()
        })
        .catch((err) => {
          if (err?.response?.data?.code === 'INVALID_ACTIVITY_NAME') {
            setErrors(['Activity Title in use'])
          } else {
            setErrors(['An error has occurred'])
          }
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }

  return {
    handleSubmit,
    changeActivity,
    activity,
    changeProgramme,
    changeTotalhours,
    totalHours,
    changeNumberoffinalben,
    numberOfFinalBen,
    changeNumberOfVol,
    numberOfVol,
    changeFinalBen,
    changeStartDate,
    startDate,
    changeEndDate,
    endDate,
    changeTypeOfActivity,
    typeOfAct,
    // changeSdg,
    changeSDGs,
    // sdg,
    sdgs,
    changeVolunteerBeneficiaries,
    volunteerBeneficiaries,
    finalBen,
    checkedPlantTree,
    handleChangePlantTree,
    changeOpenNumOfDonors,
    numberOfDonors,
    handleChangeSavingPlan,
    checkedSavingPlan,
    energyWasted,
    changeOpenWasted,
    handleChangeRecyclingConsumables,
    checkedRecyclingConsumables,
    chagePercCons,
    percCons,
    checkedMaterialExpenses,
    handleChangeMaterialExpenses,
    changeMatExp,
    matExpenses,
    handleChangeRecyclingEquipment,
    checkedRecyclingEquipment,
    changePercEq,
    percEq,
    handleChangeCarbon,
    checkedCarbon,
    percGeo,
    changePercGeo,
    changeSkills,
    skills,
    loading,
    errors,
    changeEmpEnrolledSupVol,
    empEnrolledSupVol,
    countriesList,
    changeCountry,
    country,
    regions,
    changeRegion,
    region,
    localities,
    changeLocality,
    locality,
    handleSkillChange,
    otherSkill,
    handleFBChange,
    otherFB
  }
}

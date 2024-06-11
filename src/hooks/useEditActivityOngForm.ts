import { createOngActivity } from "@/services/ong_activity/createOngActivity";
import { submitValidation } from "@/utils/activity_ong/submitValidation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { getCountries, getStates } from "@/utils/getCountries";
import { updateActivity } from "@/services/ong_activity/updateActivity";

export function useEditActivityOngForm({ data, actId, lang }: any) {
  const [activity, setActivity] = useState<any>(data.title);
  const [programme, setProgramme] = useState<any>(data.prog_id);
  const [totalHours, setTotalHours] = useState<any>(data.total_hours);
  const [empEnrolledSupVol, setEmpEnrolledSupVol] = useState<any>(data.emp_enrolled_sup_vol);
  const [numberOfFinalBen, setNumberOfFinalBen] = useState<any>(data.number_final_beneficiaries);
  const [numberOfVol, setNumberOfVol] = useState<any>(data.number_of_volunteers);
  const [startDate, setStartDate] = useState<any>(data.start_date?.substring(0,10));
  const [endDate, setEndDate] = useState<any>(data.end_date?.substring(0,10));
  const [typeOfAct, setTypeOfAct] = useState<any>(data.type_of_activity);
  // const [sdg, setSdg] = useState<any>("");
  const [sdgs, setSdgs] = useState<any[]>(
    JSON.parse(data.sdg)
  );
  const [volunteerBeneficiaries, setVolunteerBeneficiaries] = useState<any[]>(
    JSON.parse(data.volunteer_beneficiaries)
  );
  const [finalBen, setFinalBen] = useState<any[]>(
    JSON.parse(data.final_beneficiaries)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedPlantTree, setCheckedPlantTree] = useState<boolean>(!!data.checked_plant_tree);
  const [numberOfDonors, setNumberOfDon] = useState<any>(data.open_planted_tree);
  const [checkedSavingPlan, setCheckedSavingPlan] = useState<boolean>(!!data.checked_energic_plan);
  const [energyWasted, setEnergyWasted] = useState<any>(data.open_energic_plan);
  const [checkedRecyclingConsumables, setCheckedRecyclingConsumables] =
  useState<boolean>(!!data.checked_recycling_consum);
  const [percCons, setPercCons] = useState<any>(data.open_recycling_consum);
  const [checkedMaterialExpenses, setCheckedMaterialExpenses] =
  useState<boolean>(!!data.checked_materials);
  const [matExpenses, setMatExpenses] = useState<any>(data.open_materials);
  const [checkedRecyclingEquipment, setCheckedRecyclingEquipment] =
  useState<boolean>(!!data.checked_recycling_equip);
  const [percEq, setPercEq] = useState<any>(data.open_recycling_equip);
  const [checkedCarbon, setCheckedCarbon] = useState<boolean>(!!data.checked_low_carbon);
  const [percGeo, setPercGeo] = useState<any>(data.open_low_carbon);
  const [skills, setSkills] = useState<any[]>(JSON.parse(data.skills));
  const [errors, setErrors] = useState<any>([]);
  const [country, setCountry] = useState<any>(data.country);
  const [regions, setRegions] = useState<any>([]);
  const [region, setRegion] = useState<any>(data.region);
  const [localities, setLocalities] = useState<any>([]);
  const [locality, setLocality] = useState<any>(data.locality);
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
    if (!locality) {
      setLocality(data.locality)
    }
  }, [country, region, data, locality]);

  useEffect(() => {
    let newRegions: any = []
    if (data.country === 'Spain' && data.region === 'Madrid Province') {
      setLocalities(['Madrid'])
    }
    if (data.country === 'Croatia') {
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
      newRegions = getStates(data.country);
    }
    if (data.country && data.region) {
      if (data.country === 'Spain' && data.region === 'Madrid Province') {
        setLocalities(['Madrid'])
      }
      else {
        axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: data.country,
          state: data.region,
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
    setLocality(data.locality)
  }, [data])

  const countriesList = getCountries();

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
    setTypeOfAct(newValue?.label || "");
    setErrors([])
  }

  /*
    function changeSdg(_event: any, newValue: any) {
      setSdg(newValue?.label || "");
      setErrors([])
    }
  */

  function handleSkillChange(newValue: any) {
    setOtherSkill(newValue?.target?.value || "");
  }

  function handleFBChange(newValue: any) {
    setOtherFB(newValue?.target?.value || "");
  }

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
        finalBen: JSON.stringify(finalBenTranformed), startDate, endDate: endDate.length ? endDate : null, typeOfAct, sdg: JSON.stringify(sdgs), volunteerBeneficiaries: JSON.stringify(volunteerBeneficiaries),
        skills: JSON.stringify(skillsTranformed), checkedPlantTree, numberOfDonors: parseInt(numberOfDonors), checkedSavingPlan, energyWasted: parseInt(energyWasted),
        checkedRecyclingConsumables, percCons: parseInt(percCons), checkedMaterialExpenses, matExpenses: parseInt(matExpenses), checkedRecyclingEquipment,
        percEq: parseInt(percEq), checkedCarbon, percGeo: parseInt(percGeo), empEnrolledSupVol: parseInt(empEnrolledSupVol), country, region, locality }
      updateActivity(actId, body)
        .then(() => {
          window.alert('The activity has been updated successfully')
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
    programme,
    handleSkillChange,
    otherSkill,
    handleFBChange,
    otherFB
  }
}

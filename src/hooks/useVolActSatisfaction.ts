import { useState } from "react";

export function useVolActSatisfaction() {
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedPlantTree, setCheckedPlantTree] = useState<boolean>(false);
  const [checkedSavingPlan, setCheckedSavingPlan] = useState<boolean>(false);
  const [checkedRecyclingConsumables, setCheckedRecyclingConsumables] =
    useState<boolean>(false);
  const [checkedMaterialExpenses, setCheckedMaterialExpenses] =
    useState<boolean>(false);
  const [checkedRecyclingEquipment, setCheckedRecyclingEquipment] =
    useState<boolean>(false);
  const [checkedCarbon, setCheckedCarbon] = useState<boolean>(false);
  const [location, setLocation] = useState<any>("");
  const [activity, setActivity] = useState<any>("");
  const [enrolledEmp, setEnrolledEmp] = useState<any>(0);
  const [numberOfDonors, setNumberOfDon] = useState<any>(0);
  const [energyWasted, setEnergyWasted] = useState<any>(0);
  const [percCons, setPercCons] = useState<any>(0);
  const [matExpenses, setMatExpenses] = useState<any>(0);
  const [percEq, setPercEq] = useState<any>(0);
  const [percGeo, setPercGeo] = useState<any>(0);
  const [otherSkill, setOtherSkill] = useState<any>("");

  function handleSkillChange(newValue: any) {
    setOtherSkill(newValue?.target?.value || "");
  }

  function handleChangePlantTree() {
    setCheckedPlantTree(!checkedPlantTree);
  }

  function handleChangeSavingPlan() {
    setCheckedSavingPlan(!checkedSavingPlan);
  }

  function handleChangeRecyclingConsumables() {
    setCheckedRecyclingConsumables(!checkedRecyclingConsumables);
  }

  function handleChangeMaterialExpenses() {
    setCheckedMaterialExpenses(!checkedMaterialExpenses);
  }

  function handleChangeRecyclingEquipment() {
    setCheckedRecyclingEquipment(!checkedRecyclingEquipment);
  }

  function handleChangeCarbon() {
    setCheckedCarbon(!checkedCarbon);
  }

  const [finalBeneficiaries, setFinalBeneficiaries] = useState<any[]>([]);
  const [volBeneficiaries, setVolBeneficiaries] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);

  function changeFinalBeneficiaries(element: string) {
    if (finalBeneficiaries.includes(element)) {
      setFinalBeneficiaries((prev) => prev.filter((item) => item !== element));
    } else {
      setFinalBeneficiaries((prev) => [...prev, element]);
    }
  }

  function changeVolBeneficiaries(element: string) {
    if (volBeneficiaries.includes(element)) {
      setVolBeneficiaries((prev) => prev.filter((item) => item !== element));
    } else {
      setVolBeneficiaries((prev) => [...prev, element]);
    }
  }

  function changeSkills(element: string) {
    if (skills.includes(element)) {
      setSkills((prev) => prev.filter((item) => item !== element));
    } else {
      setSkills((prev) => [...prev, element]);
    }
  }

  function changeLocation(_event: any, newValue: any) {
    setLocation(newValue?.label || "");
  }

  function changeTypeAct(_event: any, newValue: any) {
    setActivity(newValue?.label || "");
  }

  function changeEnrolledEmp(value: any) {
    setEnrolledEmp(value);
  }

  function changeOpenNumOfDonors(value: any) {
    setNumberOfDon(value);
  }

  function changeOpenWasted(value: any) {
    setEnergyWasted(value);
  }

  function chagePercCons(value: any) {
    setPercCons(value);
  }

  function changeMatExp(value: any) {
    setMatExpenses(value);
  }

  function changePercEq(value: any) {
    setPercEq(value);
  }

  function changePercGeo(value: any) {
    setPercGeo(value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    let skillsTranformed = skills
    if (otherSkill.length > 0) {
      if (!skills.includes('other')) {
        skillsTranformed = [...skillsTranformed, 'other']
      }
    }
    if (
      !location?.length ||
      !activity?.length ||
      !(enrolledEmp !== null && enrolledEmp !== undefined) ||
      !(numberOfDonors !== null && numberOfDonors !== undefined) ||
      !(energyWasted !== null && energyWasted !== undefined) ||
      !(percCons !== null && percCons !== undefined) ||
      !(matExpenses !== null && matExpenses !== undefined) ||
      !(percEq !== null && percEq !== undefined) ||
      !(percGeo !== null && percGeo !== undefined) ||
      !(volBeneficiaries?.length > 0) ||
      !(skillsTranformed?.length > 0) ||
      !(finalBeneficiaries?.length > 0) ||
      (!checkedPlantTree &&
        !checkedSavingPlan &&
        !checkedRecyclingConsumables &&
        !checkedMaterialExpenses &&
        !checkedRecyclingEquipment &&
        !checkedCarbon)
    ) {
      alert("Complete todos los campos obligatorios");
    } else {
      alert("Creado");
    }
    setLoading(true);
    setLoading(false);
  }

  return {
    handleSubmit,
    changeLocation,
    changeTypeAct,
    activity,
    changeEnrolledEmp,
    enrolledEmp,
    checkedPlantTree,
    handleChangePlantTree,
    changeOpenNumOfDonors,
    numberOfDonors,
    checkedSavingPlan,
    handleChangeSavingPlan,
    changeOpenWasted,
    energyWasted,
    checkedRecyclingConsumables,
    handleChangeRecyclingConsumables,
    chagePercCons,
    percCons,
    checkedMaterialExpenses,
    handleChangeMaterialExpenses,
    changeMatExp,
    matExpenses,
    checkedRecyclingEquipment,
    handleChangeRecyclingEquipment,
    changePercEq,
    percEq,
    checkedCarbon,
    handleChangeCarbon,
    changePercGeo,
    percGeo,
    changeVolBeneficiaries,
    volBeneficiaries,
    changeSkills,
    skills,
    changeFinalBeneficiaries,
    finalBeneficiaries,
    loading,
    location,
    handleSkillChange,
    otherSkill
  }
}

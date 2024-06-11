import { createProgramme } from "@/services/programme/createProgramme";
import { submitValidation } from "@/utils/programme/submitValidation";
import { useState } from "react";
import { useRouter } from 'next/router';
import { programmeTypeList } from "@/mockups/programme_form";

export function useProgrammeForm ({ lang }: { lang?: any}) {
  const [name, setName] = useState<any>("");
  const [averageCost, setAverageCost] = useState<any>(0);
  const [costProgDelivery, setCostProgDelivery] = useState<any>(0);
  const [startDate, setStartDate] = useState<any>("");
  const [endDate, setEndDate] = useState<any>("");
  const [programmeSector, setProgrammeSector] = useState<any>("");
  const [programmeSectorAux, setProgrammeSectorAux] = useState<any>("");
  const [levelOperation, setLevelOperation] = useState<any>("");
  const [mainFundingOrganism, setMainFundingOrganism] = useState<any>("");
  const [programmeType, setProgrammeType] = useState<any>("");
  const [errors, setErrors] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  function changeName(value: any) {
    setName(value?.target?.value);
    setErrors([])
  }

  function changeAverageCost(event: any) {
    if (event?.target?.value >= 0) {
      setAverageCost(event?.target?.value);
    } else {
      setAverageCost(0)
    }
    setErrors([])
  }

  function changeProgDelCost(event: any) {
    if (event?.target?.value >= 0) {
      setCostProgDelivery(event?.target?.value);
    } else {
      setCostProgDelivery(0)
    }
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

  function changeProgrammeSector(_event: any, newValue: any) {
    const find = programmeTypeList.find(objeto => objeto.value === newValue?.value);
    setProgrammeSector(newValue?.label || "");
    setProgrammeSectorAux(find?.label || "");
    setErrors([])
  }

  function changeLevelOperation (value: string) {
    setLevelOperation(value)
    setErrors([])
  }

  function changeMainFundingOrganism (value: string) {
    setMainFundingOrganism(value)
    setErrors([])
  }

  function changeProgrammeType (value: string) {
    setProgrammeType(value)
    setErrors([])
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const errorsArr = submitValidation({ name, levelOperation, mainFundingOrganism, programmeType, averageCost, costProgDelivery, programmeSector, startDate, endDate, lang });
    setErrors(errorsArr)
    if (!errorsArr?.length) {
      const body = { name, levelOperation, mainFundingOrganism, programmeType, averageCost: parseInt(averageCost), costProgDelivery: parseInt(costProgDelivery), programmeSector: programmeSectorAux, startDate, endDate: !endDate ? null : endDate }
      setLoading(true);
      createProgramme(body).then((resp: any) => {
        window.alert('The Programme has been created successfully')
        router.reload()
      })
      .catch((err: any) => {
        if (err?.response?.data?.code === 'INVALID_PROGRAMME_NAME') {
          setErrors(['Programme Name in use'])
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
    changeName,
    name,
    changeAverageCost,
    averageCost,
    changeProgrammeSector,
    programmeSector,
    changeStartDate,
    startDate,
    changeEndDate,
    endDate,
    levelOperation,
    changeLevelOperation,
    mainFundingOrganism,
    changeMainFundingOrganism,
    programmeType,
    changeProgrammeType,
    loading,
    errors,
    changeProgDelCost,
    costProgDelivery
  }
}

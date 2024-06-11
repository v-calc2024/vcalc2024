import { submitValidation } from "@/utils/programme/submitValidation";
import { useState } from "react";
import { useRouter } from 'next/router';
import { updateProgramme } from "@/services/programme/updateProgramme";

export function useEditProgrammeForm ({ data, programmeId, lang }: any) {
  const [name, setName] = useState<any>(data.name);
  const [averageCost, setAverageCost] = useState<any>(data.average_cost);
  const [startDate, setStartDate] = useState<any>(data.start_date?.substring(0, 10));
  const [endDate, setEndDate] = useState<any>(data.end_date?.substring(0, 10));
  const [programmeSector, setProgrammeSector] = useState<any>(data.sector);
  const [levelOperation, setLevelOperation] = useState<any>(data.level_operation);
  const [mainFundingOrganism, setMainFundingOrganism] = useState<any>(data.main_funding);
  const [programmeType, setProgrammeType] = useState<any>(data.programme_type);
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

  function changeStartDate(value: any) {
    setStartDate(value?.target?.value);
    setErrors([])
  }

  function changeEndDate(value: any) {
    setEndDate(value?.target?.value);
    setErrors([])
  }

  function changeProgrammeSector(_event: any, newValue: any) {
    setProgrammeSector(newValue?.label || "");
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
    const errorsArr = submitValidation({ name, levelOperation, mainFundingOrganism, programmeType, averageCost, programmeSector, startDate, endDate, lang });
    setErrors(errorsArr)
    if (!errorsArr?.length) {
      const body = { name, levelOperation, mainFundingOrganism, programmeType, averageCost: parseInt(averageCost), programmeSector, startDate, endDate }
      setLoading(true);
      updateProgramme(programmeId, body).then((resp: any) => {
        window.alert('The Programme has been updated successfully')
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
  }
}

import { createVolActivity } from "@/services/activity_vol/createVolActivity";
import { submitValidation } from "@/utils/activity_volunteer/submitValidation";
import { useState } from "react";
import { useRouter } from 'next/router';

export function useActivityForm({ lang }: any){
  const [loading, setLoading] = useState<boolean>(false);
  const [ong, setOng] = useState<any>("");
  const [ongId, setOngId] = useState<any>(null);
  const [programme, setProgramme] = useState<any>("");
  const [programmeId, setProgrammeId] = useState<any>("");
  const [activity, setActivity] = useState<any>("");
  const [activityId, setActivityId] = useState<any>("");
  const [firstDate, setFirstDate] = useState<any>("");
  const [sessionName, setSessionName] = useState<any>("");
  const [errors, setErrors] = useState<any>([]);
  const router = useRouter();

  function changeONG(_event: any, newValue: any) {
    setOng(newValue?.label || "");
    setOngId(newValue?.value || null)
    setProgramme("")
    setErrors([])
  }

  function changeProgramme(_event: any, newValue: any) {
    setProgramme(newValue?.label || "")
    setProgrammeId(newValue?.value || null)
    setActivity("")
    setErrors([])
  }

  function changeActivity(_event: any, newValue: any) {
    setActivity(newValue?.label || "");
    setActivityId(newValue?.value || null)
    setErrors([])
  }

  function changeFirstDate(event: any) {
    setFirstDate(event?.target?.value);
    setErrors([])
  }

  function changeSessionName (value: string) {
    setSessionName(value)
    setErrors([])
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const errorsArr = submitValidation({ ong, programme, activity, sessionName, firstDate, lang });
    setErrors(errorsArr)
    if (!errorsArr.length) {
      const body = { ong: ongId, programme: programmeId, activity: activityId, sessionName, firstDate }
      setLoading(true);
      createVolActivity(body)
        .then(() => {
          window.alert('The activity has been created successfully')
          router.reload()
        })
        .catch(() => {
          setErrors(['An error has occurred'])
        })
        .finally(() => {
          setLoading(false);
      })
    }
  }

  return {
    handleSubmit,
    changeONG,
    ong,
    changeProgramme,
    programme,
    changeActivity,
    activity,
    changeFirstDate,
    firstDate,
    changeSessionName,
    sessionName,
    ongId,
    programmeId,
    loading,
    errors,
  }
}

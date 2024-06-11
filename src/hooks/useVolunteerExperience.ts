import { createVolExp } from "@/services/volunteer_exp/createVolExp";
import { submitValidation } from "@/utils/volunteer_experience/submitValidation";
import { useState } from "react";
import { useRouter } from 'next/router';

export function useVolunteerExperience({ lang }:any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [ngo, setNgo] = useState<any>("");
  const [ngoId, setNgoId] = useState<any>("");
  const [programme, setProgramme] = useState<any>("");
  const [programmeId, setProgrammeId] = useState<any>("");
  const [activity, setActivity] = useState<any>("");
  const [activityId, setActivityId] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [experienceComment, setExperienceComment] = useState("");
  const [differenceComment, setDifferencecomment] = useState("");
  const [benefitComment, setBenefitcomment] = useState("");
  const [ratingExp, setRatingExp] = useState(5);
  const [ratingDif, setRatingDif] = useState(5);
  const [ratingBen, setRatingBen] = useState(5);
  const [errors, setErrors] = useState<any>([]);
  const [hours, setHours] = useState<any>(0);

  function changeHours(event: any) {
    if (event?.target?.value >= 0) {
      setHours(event?.target?.value);
    } else {
      setHours(0)
    }
    setErrors([])
  }

  const router = useRouter();

  function handleChangeRatingExp(newValue: any) {
    setRatingExp(newValue);
  }

  function handleChangeRatingDif(newValue: any) {
    setRatingDif(newValue);
  }

  function handleChangeRatingBen(newValue: any) {
    setRatingBen(newValue);
  }

  function handleExperienceCommentChange(newValue: any) {
    setExperienceComment(newValue?.target?.value || "");
  }

  function handleDifferencecommentChange(newValue: any) {
    setDifferencecomment(newValue?.target?.value || "");
  }

  function handleBenefitcommentChange(newValue: any) {
    setBenefitcomment(newValue?.target?.value || "");
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

  function changeNgo(_event: any, newValue: any) {
    setNgo(newValue?.label || "");
    setNgoId(newValue?.value || "");
  }

  function changeProgramme(_event: any, newValue: any) {
    setProgramme(newValue?.label || "");
    setProgrammeId(newValue?.value || "");
  }

  function changeActivity(_event: any, newValue: any) {
    setActivity(newValue?.label || "");
    setActivityId(newValue?.value || "");
  }

  function handleSubmit(event: any) {
    
    const errorsArr = submitValidation({ 
      ngo: ngoId,
      programme: programmeId,
      activity: activityId,
      ratingBen,
      ratingDif,
      ratingExp,
      lang,
      hours
    })

    event.preventDefault();

    setErrors(errorsArr)

    if (!errorsArr?.length) {
      const body = {
        ngo: ngoId,
        programme: programmeId,
        activity: activityId,
        experienceComment,
        differenceComment,
        benefitComment,
        ratingBen,
        ratingDif,
        ratingExp,
        hours: parseInt(hours)
      }
  
      setLoading(true);
      createVolExp(body)
        .then(() => {
          window.alert('The Activity Completion has been created successfully')
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
    changeNgo,
    ngo,
    changeActivity,
    activity,
    changeProgramme,
    programme,
    handleOpen,
    loading,
    handleClose,
    open,
    handleExperienceCommentChange,
    experienceComment,
    handleDifferencecommentChange,
    differenceComment,
    handleBenefitcommentChange,
    benefitComment,
    ngoId,
    programmeId,
    activityId,
    ratingExp,
    ratingBen,
    ratingDif,
    handleChangeRatingExp,
    handleChangeRatingDif,
    handleChangeRatingBen,
    changeHours,
    hours,
    errors,
  }
}

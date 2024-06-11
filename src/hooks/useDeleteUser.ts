import { deleteVolunteer } from "@/services/volunteer/deleteVolunteer";
import { useState } from "react";
import { destroyCookie } from "nookies";

export function useDeleteUser({handleClose}: any){
  const [reason, setReason] = useState<any>("");
  const [comment, setComment] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(false);

  function changeReason(_event: any, newValue: any) {
    setReason(newValue?.label || "");
  }

  function handleCommentChange(newValue: any) {
    setComment(newValue?.target?.value || "");
  }

  function handleSubmit(event: any, decoded: any) {
    event.preventDefault();    
    if (!reason?.length && !comment?.length) {
      alert("complete all required information");
    } else {
      const body = {
        fullName: `${decoded?.firstname} ${decoded?.surname}`,
        email: decoded?.email,
        organisationId: decoded?.organisation_id,
        reason,
        comment
      }

      setLoading(true)

      deleteVolunteer(body)
          .then((resp: any) => {
            destroyCookie(null, "token", { path: "/" });
            localStorage.removeItem("token");
            window.location.href = "/";
            window.alert('data has been updated successfully')
          })
          .catch((err: any) => {
          })
          .finally(() => {
            setLoading(false);
          })

      handleClose()
    }
  }

  return { reason, changeReason, handleSubmit, loading, comment, handleCommentChange }
}
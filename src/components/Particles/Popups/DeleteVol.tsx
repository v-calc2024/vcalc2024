import { useDeleteUser } from "@/hooks/useDeleteUser";
import {
  reasonsList,
  reasonsList_es,
  reasonsList_fr,
  reasonsList_hr,
  reasonsList_sq,
} from "@/mockups/deleteVolunteer";
import ComboBox from "../forms/AutoCompleteInput";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import Button from "@mui/material/Button";

export function DeleteVol({ handleClose, decoded, lang }: any) {
  const {
    reason,
    changeReason,
    handleSubmit,
    loading,
    handleCommentChange,
    comment,
  } = useDeleteUser({
    handleClose,
  });

  let title = "Why do you want to stop volunteering?";
  let reason_text = "Reason";
  let reason_list = reasonsList;
  let reason_opt = "Other Reason";
  let comment_text = "Make a comment";
  let button_cancel = "Cancel";
  let button_submit = "DELETE USER";

  switch (lang) {
    case "es":
      title = "¿Por qué quieres dejar de ser voluntario?";
      reason_text = "Razón";
      reason_list = reasonsList_es;
      reason_opt = "Otra razon";
      comment_text = "Haz un comentario";
      button_cancel = "Cancelar";
      button_submit = "ELMINAR USUARIO";
      break;
    case "fr":
      title = "Pourquoi veux-tu arrêter le bénévolat ?";
      reason_text = "Raison";
      reason_list = reasonsList_fr;
      reason_opt = "Autre raison";
      comment_text = "Faire un commentaire";
      button_cancel = "Annuler";
      button_submit = "ÉLIMINER L'UTILISATEUR";
      break;
    case "hr":
      title = "Zašto želite prestati volontirati?";
      reason_text = "Razlog";
      reason_list = reasonsList_hr;
      reason_opt = "Drugi razlog";
      comment_text = "Dati komentar";
      button_cancel = "Otkaži";
      button_submit = "IZBRIŠI KORISNIKA";
      break;
    case "sq":
      title = "Pse doni të ndaloni vullnetarizmin?";
      reason_text = "Arsyeja";
      reason_list = reasonsList_sq;
      reason_opt = "Arsye tjetër";
      comment_text = "Bëj një koment";
      button_cancel = "Anuloj";
      button_submit = "FSHI PERDORIMIN";
      break;
    default:
      title = "Why do you want to stop volunteering?";
      reason_text = "Reason";
      reason_list = reasonsList;
      reason_opt = "Other Reason";
      comment_text = "Make a comment";
      button_cancel = "Cancel";
      button_submit = "DELETE USER";
      break;
  }

  return (
    <>
      <div className="popup">
        <div className="content">
          <form onSubmit={(event: any) => handleSubmit(event, decoded)}>
            <h1>{title}</h1>
            <ComboBox
              title={reason_text}
              list={reason_list}
              id="reason"
              onChange={changeReason}
              value={reason}
            />
            <h2>{reason_opt}</h2>
            <TextareaInput
              name="experiencecomment"
              handleCommentChange={handleCommentChange}
              comment={comment}
              placeholder={comment_text}
            />
            <div className="buttons">
              <Button
                type="button"
                variant="contained"
                color="primary"
                sx={{
                  fontSize: 12,
                  height: "2.2rem",
                  fontWeight: "bold",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
                onClick={handleClose}
              >
                {button_cancel}
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  fontSize: 12,
                  height: "2.2rem",
                  fontWeight: "bold",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                {loading ? <ButtonLoader /> : button_submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .popup {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          box-sizing: border-box;
        }

        form {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-row-gap: 2rem;
          justify-content: center;
          margin: 2rem 0;
          padding: 0 5rem;
          margin-bottom: 4rem;
          box-sizing: border-box;
        }

        h2,
        h1 {
          width: max-content;
          font-size: 1.2rem;
          padding: 0;
          margin: 0;
        }

        h2 {
          font-size: 0.9rem;
          padding-bottom: 4px;
          border-bottom: 1px solid black;
        }

        h1 {
          text-align: center;
          display: flex;
          width: 100%;
          height: max-content;
          padding: 0 1rem;
          justify-content: center;
          justify-self: center;
          box-sizing: border-box;
        }

        .content {
          width: 42rem;
          height: max-content;
          min-width: 22rem;
          min-height: 12rem;
          background-color: var(--secondary-bg-color);
          border-radius: 1rem;
          border: solid 1px var(--border-color);
          box-sizing: border-box;
        }

        .buttons {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: max-content max-content;
          grid-template-rows: 1fr;
          grid-column-gap: 1rem;
          justify-content: center;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

import { HeadContent } from "@/components/Particles/HeaderContent";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { BasicRatingInput } from "@/components/Particles/forms/BasicRatingInput";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";
import { useVolunteerExperience } from "@/hooks/useVolunteerExperience";
import { ReactElement, useEffect, useState } from "react";
import { getAllOng } from "@/services/ong/getAllOng";
import { getAllProgrammeByOng } from "@/services/programme/getAllProgrammeByOng";
import { getAllActivitiesByProgramme } from "@/services/ong_activity/getAllByProgramme";
import { validateJwt } from "@/utils/validateJwt";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { InputText } from "@/components/Particles/forms/TextInput";

export default function VolunteerExperience({ type, decoded }: any) {
  const {
    changeHours,
    hours,
    handleSubmit,
    changeNgo,
    ngo,
    changeActivity,
    activity,
    changeProgramme,
    programme,
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
    ratingExp,
    ratingBen,
    ratingDif,
    handleChangeRatingExp,
    handleChangeRatingDif,
    handleChangeRatingBen,
    errors,
  } = useVolunteerExperience({ lang: undefined });

  const [organisations, setOrganisations] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllOng()
      .then((response: any) => {
        const organisationsArr =
          response?.data?.ongs?.map((org: any) => {
            return {
              label: org.name,
              value: org.id,
            };
          }) || [];
        setOrganisations(organisationsArr);
      })
      .catch(() => {
        setProgrammes([]);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    if (ngoId !== undefined && ngoId !== null) {
      getAllProgrammeByOng(ngoId)
        .then((response: any) => {
          const programmesArr =
            response?.data?.programmes?.map((prog: any) => {
              return {
                label: prog.name,
                value: prog.id,
              };
            }) || [];
          setProgrammes(programmesArr);
        })
        .catch(() => {
          setProgrammes([]);
        })
        .finally(() => {});
    } else {
      setProgrammes([]);
    }
  }, [ngoId]);

  useEffect(() => {
    if (programmeId !== undefined && programmeId !== null) {
      getAllActivitiesByProgramme(programmeId)
        .then((response: any) => {
          const programmesArr =
            response?.data?.activityOngs?.map((prog: any) => {
              return {
                label: prog.title,
                value: prog.id,
              };
            }) || [];
          setActivities(programmesArr);
        })
        .catch((err: any) => {
          setActivities([]);
        })
        .finally(() => {});
    } else {
      setActivities([]);
    }
  }, [programmeId]);

  return (
    <>
      <HeadContent title="Activity Completion" />
      <main>
        <h1>Activity Completion Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <ComboBox
              title="Organisation"
              list={organisations}
              id="ngo"
              onChange={changeNgo}
              value={ngo}
              withTooltip={true}
              tooltip="Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu."
              tooltipTop="-9rem"
            />
            <ComboBox
              title="Programme"
              list={programmes}
              id="programme"
              onChange={changeProgramme}
              value={programme}
              withTooltip={true}
              tooltip="Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <ComboBox
              title="Activity"
              list={activities}
              id="activity"
              onChange={changeActivity}
              value={activity}
              withTooltip={true}
              tooltip="Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <InputText
              label="Hours"
              type="number"
              validation={() => true}
              required={true}
              name="hours"
              defaultValue=""
              changeHandler={changeHours}
              value={hours}
              clearError={() => {}}
              withTooltip={true}
              tooltip="How many hours have you spend
              on the activity in total?"
              tooltipTop="-4rem"
            />
          </div>
          <div className="form-2">
            <div>
              <div className="rate">
                <BasicRatingInput
                  title="Experience"
                  name={"experience"}
                  value={ratingExp}
                  handleChange={handleChangeRatingExp}
                  withTooltip={true}
                  tooltip="What is the nature of final beneficiaries from your activity? A final beneficiary is a person that to some extent benefits from or is impacted by your activity. You can choose one or more categories below by clicking on the boxes."
                  tooltipTop="-8rem"
                />
                <TextareaInput
                  name="experiencecomment"
                  handleCommentChange={handleExperienceCommentChange}
                  comment={experienceComment}
                />
              </div>
            </div>
            <div>
              <div className="rate">
                <BasicRatingInput
                  title="Difference"
                  name={"difference"}
                  value={ratingDif}
                  handleChange={handleChangeRatingDif}
                  withTooltip={true}
                  tooltip="Which skills are your volunteers gaining by being part of your activity? You can choose one or more options below by clicking on the boxes"
                  tooltipTop="-6rem"
                />
                <TextareaInput
                  name="differencecomment"
                  handleCommentChange={handleDifferencecommentChange}
                  comment={differenceComment}
                />
              </div>
            </div>
            <div>
              <div className="rate">
                <BasicRatingInput
                  title="Benefit"
                  name={"benefit"}
                  value={ratingBen}
                  handleChange={handleChangeRatingBen}
                  withTooltip={true}
                  tooltip="Which decabornising measures is your organisation taking in regards to your activity? Decarbonisation is the process of reducing the amount of carbon, mainly carbon dioxide (CO2), sent into the atmosphere. You can choose one or more options below by clicking on the boxes."
                  tooltipTop="-9rem"
                />
                <TextareaInput
                  name="benefitcomment"
                  handleCommentChange={handleBenefitcommentChange}
                  comment={benefitComment}
                />
              </div>
            </div>
          </div>
          {errors?.length > 0 && (
            <div className="errors-container">
              <p>Errors: </p>
              {errors?.map((error: any) => {
                return <p key={error}>- {error}</p>;
              })}
            </div>
          )}
          <div className="buttonCont">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontSize: 13,
                height: "3rem",
                fontWeight: "bold",
                borderRadius: "1.5rem",
                overflow: "hidden",
              }}
            >
              {loading ? <ButtonLoader /> : "SUBMIT YOUR EXPERIENCE"}
            </Button>
          </div>
        </form>
      </main>

      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          min-height: 100vh;
          display: grid;
          grid-template-rows: max-content 1fr;
          justify-content: center;
          padding: 2rem 5rem;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        h1 {
          text-align: center;
        }

        form,
        .form-2 {
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

        .errors-container {
          width: max-content;
          height: max-content;
          padding: 1rem;
          background-color: tomato;
          font-size: 0.8rem;
          color: white;
          display: grid;
          grid-template-columns: max-content;
          grid-auto-rows: max-content;
          grid-column-gap: 1.5rem;
          justify-self: center;
          border-radius: 1rem;
          box-sizing: border-box;
        }

        .errors-container p {
          margin: 0.5rem;
        }

        .upload {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .form {
          width: 100%;
          max-width: 80rem;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(15rem, 20rem));
          grid-template-rows: 1fr;
          grid-column-gap: 2rem;
          grid-row-gap: 2rem;
          justify-self: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .rate {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          grid-row-gap: 1rem;
          box-sizing: border-box;
        }

        .terms-conditions {
          width: max-content;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content;
          justify-self: center;
        }

        .buttonCont {
          width: max-content;
          height: max-content;
          justify-self: center;
        }

        .popup-button-container {
          width: 10rem;
          height: max-content;
          margin-left: 2rem;
          display: flex;
          justify-content: flex-start;
          justify-self: flex-start;
          box-sizing: border-box;
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
          }

          .form,
          .form-2,
          .funding-type {
            grid-template-columns: 1fr;
          }

          main {
            padding: 0rem 1rem;
          }

          .form-2,
          form {
            width: 22rem;
            max-width: 95vw;
            padding: 3rem 1rem;
          }
        }

        @media (max-width: 600px) {
          .form,
          .form-2,
          .funding-type {
            max-width: 19rem;
          }
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 1.3rem;
            max-width: 21rem;
            text-align: center;
            justify-content: center;
            justify-self: center;
          }

          main {
            padding: 1rem;
          }

          form,
          .form-2 {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}

VolunteerExperience.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);

  if (!isValid || decoded?.type !== "VOLUNTEER") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { type: decoded?.type, decoded } };
};

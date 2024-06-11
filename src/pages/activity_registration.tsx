import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { DateTimeInput } from "@/components/Particles/forms/DateTimeInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import { useActivityForm } from "@/hooks/useActivityForm";
import { validateSession } from "@/utils/activity_volunteer";
import { validateJwt } from "@/utils/validateJwt";
import { ReactElement, useEffect, useState } from "react";
import { getAllOng } from "@/services/ong/getAllOng";
import { getAllProgrammeByOng } from "@/services/programme/getAllProgrammeByOng";
import { getAllActivitiesByProgramme } from "@/services/ong_activity/getAllByProgramme";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import { sessionnameList } from "@/mockups/activity_registration";

export default function ActivityRegistration({ type }: any) {
  const {
    handleSubmit,
    changeActivity,
    activity,
    changeProgramme,
    programme,
    changeONG,
    ong,
    changeFirstDate,
    firstDate,
    changeSessionName,
    sessionName,
    ongId,
    programmeId,
    loading,
    errors,
  } = useActivityForm({ lang: undefined });

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
    if (ongId !== undefined && ongId !== null) {
      getAllProgrammeByOng(ongId)
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
  }, [ongId]);

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
      <HeadContent title="Activity Form" />
      <main>
        <h1>Activity Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <ComboBox
              title="* Organisation"
              list={organisations}
              id={"ongList"}
              onChange={changeONG}
              value={ong}
              withTooltip={true}
              tooltip="Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu."
              tooltipTop="-9rem"
            />
            <ComboBox
              title="* Programme"
              list={programmes}
              id={"programmeList"}
              onChange={changeProgramme}
              value={programme}
              withTooltip={true}
              tooltip="Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <ComboBox
              title="* Activity"
              list={activities}
              id={"activityList"}
              onChange={changeActivity}
              value={activity}
              withTooltip={true}
              tooltip="Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={"First date volunteering"}
              name={"firstdatevolunteering"}
              defaultValue={""}
              disabled={false}
              changeHandler={changeFirstDate}
              value={firstDate}
              withTooltip={true}
              tooltip="What date does your volunteering activity start?"
              tooltipTop="-3rem"
            />
            <SelectInput
              list={sessionnameList}
              name={"sessionname"}
              title={"Task type"}
              defaultValue={""}
              handleSelect={changeSessionName}
              withTooltip={true}
              tooltip={
                "What was the task type that you were part of through your affiliation with the V-CALC platform? You can choose from the task listed in the dropdown menu"
              }
              tooltipTop="-4rem"
            />
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
              {loading ? <ButtonLoader /> : "GENERATE AN ACTIVITY"}
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

        .terms-conditions {
          width: max-content;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          justify-self: center;
        }

        .buttonCont {
          width: max-content;
          height: max-content;
          justify-self: center;
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

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
          }

          .form {
            grid-template-columns: 1fr;
          }

          form {
            width: 22rem;
            max-width: 95vw;
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 600px) {
          .form,
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

          form {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}

ActivityRegistration.getLayout = function getLayout(page: ReactElement) {
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

  return { props: { type: decoded?.type } };
};

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
import {
  sessionnameList,
  sessionnameList_es,
  sessionnameList_fr,
  sessionnameList_hr,
  sessionnameList_sq,
} from "@/mockups/activity_registration";

export default function ActivityRegistration({ type, lang }: any) {
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
  } = useActivityForm({ lang });

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

  let title = "Activity Form";
  let org_input = "* Organisation";
  let org_input_tooltip =
    "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
  let prog_input = "* Programme";
  let prog_input_tooltip =
    "Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu.";
  let act_input = "* Activity";
  let act_input_tooltip =
    "Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu.";
  let first_date_input = "First date volunteering";
  let first_date_input_tooltip =
    "What date does your volunteering activity start?";
  let name_session_input = "Task type";
  let name_session_input_tooltip =
    "What was the task type that you were part of through your affiliation with the V-CALC platform? You can choose from the task listed in the dropdown menu";
  let sessionnameList_list = sessionnameList;
  let btn_text = "GENERATE AN ACTIVITY";

  switch (lang) {
    case "es":
      title = "Formulario de actividad";
      org_input = "* Organización";
      org_input_tooltip =
        "¿A qué organización u otra entidad está afiliado mediante el uso de la plataforma V-CALC? Puede elegir entre las organizaciones enumeradas en el menú desplegable. Si no encuentra su organización allí, comuníquese con su supervisor de voluntarios o a través de vcalc@volunteeringimpact.eu.";
      prog_input = "* Programa";
      prog_input_tooltip =
        "¿De qué programa eres parte mediante el uso de la plataforma V-CALC? Puede elegir entre los programas enumerados en el menú desplegable.";
      act_input = "* Actividad";
      act_input_tooltip =
        "¿De qué actividad eres parte mediante el uso de la plataforma V-CALC? Puedes elegir entre las actividades enumeradas en el menú desplegable.";
      first_date_input = "Voluntariado en la primera cita.";
      first_date_input_tooltip =
        "¿En qué fecha comienza tu actividad de voluntariado?";
      name_session_input = "Tipo de tarea";
      name_session_input_tooltip =
        "¿Cuál fue el tipo de tarea en la que participó a través de su afiliación a la plataforma V-CALC? Puede elegir entre la tarea que aparece en el menú desplegable";
      sessionnameList_list = sessionnameList_es;
      btn_text = "GENERAR UNA ACTIVIDAD";
      break;
    case "fr":
      title = "Formulaire d'activité";
      org_input = "* Organisation";
      org_input_tooltip =
        "À quelle organisation ou autre entité êtes-vous affilié grâce à votre utilisation de la plateforme V-CALC. Vous pouvez choisir parmi les organisations répertoriées dans le menu déroulant. Si vous n'y trouvez pas votre organisation, veuillez contacter votre superviseur de bénévoles ou via vcalc@volunteeringimpact.eu.";
      prog_input = "* Programme";
      prog_input_tooltip =
        "De quel programme faites-vous partie grâce à votre utilisation de la plateforme V-CALC ? Vous pouvez choisir parmi les programmes répertoriés dans le menu déroulant.";
      act_input = "* Activité";
      act_input_tooltip =
        "À quelle activité participez-vous grâce à votre utilisation de la plateforme V-CALC ? Vous pouvez choisir parmi les activités répertoriées dans le menu déroulant.";
      first_date_input = "Bénévolat pour le premier rendez-vous";
      first_date_input_tooltip =
        "À quelle date commence votre activité de volontariat ?";
      name_session_input = "Type de tâche";
      name_session_input_tooltip =
        "À quel type de tâches avez-vous participé grâce à votre affiliation à la plateforme V-CALC ? Vous pouvez choisir parmi la tâche répertoriée dans le menu déroulant";
      sessionnameList_list = sessionnameList_fr;
      btn_text = "GÉNÉRER UNE ACTIVITÉ";
      break;
    case "hr":
      title = "Obrazac aktivnosti";
      org_input = "* Organisation";
      org_input_tooltip =
        "S kojom organizacijom ili drugim subjektom ste povezani korištenjem platforme V-CALC. Možete birati između organizacija navedenih u padajućem izborniku. Ako ondje ne pronađete svoju organizaciju, obratite se svom supervizoru volontera ili putem vcalc@volunteeringimpact.eu.";
      prog_input = "* Program";
      prog_input_tooltip =
        "U koji ste program uključeni koristeći V-CALC platformu? Možete birati između programa navedenih u padajućem izborniku.";
      act_input = "* Aktivnost";
      act_input_tooltip =
        "Koje aktivnosti sudjelujete kroz korištenje platforme V-CALC? Možete birati između aktivnosti navedenih u padajućem izborniku.";
      first_date_input = "Volontiranje prvog spoja";
      first_date_input_tooltip =
        "Kojeg datuma počinje vaša volonterska aktivnost?";
      name_session_input = "Vrsta zadatka";
      name_session_input_tooltip =
        "U kojoj ste vrsti zadatka sudjelovali kroz svoju povezanost s platformom V-CALC? Možete birati između zadataka navedenih u padajućem izborniku";
      sessionnameList_list = sessionnameList_hr;
      btn_text = "GENERIRAJ AKTIVNOST";
      break;
    case "sq":
      title = "Formulari i aktivitetit";
      org_input = "* Organisation";
      org_input_tooltip =
        "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
      prog_input = "* Programi";
      prog_input_tooltip =
        "Në cilin program jeni pjesë e përdorimit të platformës V-CALC? Ju mund të zgjidhni nga programet e listuara në menunë rënëse.";
      act_input = "* Aktiviteti";
      act_input_tooltip =
        "Në cilin aktivitet jeni pjesë e përdorimit të platformës V-CALC? Ju mund të zgjidhni nga aktivitetet e listuara në menunë rënëse.";
      first_date_input = "Data e parë vullnetare";
      first_date_input_tooltip =
        "Në cilën datë fillon aktiviteti juaj vullnetar?";
      name_session_input = "Lloji i detyrës";
      name_session_input_tooltip =
        "Cili ishte lloji i detyrës në të cilën keni qenë pjesë përmes lidhjes suaj me platformën V-CALC? Ju mund të zgjidhni nga detyrat e listuara në menunë rënëse";
      sessionnameList_list = sessionnameList_sq;
      btn_text = "GJENERONI NJË AKTIVITET";
      break;
    default:
      title = "Activity Form";
      org_input = "* Organisation";
      org_input_tooltip =
        "Me cilën organizatë ose entitet tjetër jeni të lidhur përmes përdorimit të platformës V-CALC. Ju mund të zgjidhni nga organizatat e listuara në menunë rënëse. Nëse nuk e gjeni organizatën tuaj atje, ju lutemi kontaktoni mbikëqyrësin tuaj vullnetar ose përmes vcalc@volunteeringimpact.eu.";
      prog_input = "* Programme";
      prog_input_tooltip =
        "Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu.";
      act_input = "* Activity";
      act_input_tooltip =
        "Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu.";
      first_date_input = "First date volunteering";
      first_date_input_tooltip =
        "What date does your volunteering activity start?";
      name_session_input = "Task type";
      name_session_input_tooltip =
        "What was the task type that you were part of through your affiliation with the V-CALC platform? You can choose from the task listed in the dropdown menu";
      sessionnameList_list = sessionnameList;
      btn_text = "GENERATE AN ACTIVITY";
      break;
  }

  return (
    <>
      <HeadContent title="Activity Form" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <ComboBox
              title={org_input}
              list={organisations}
              id={"ongList"}
              onChange={changeONG}
              value={ong}
              withTooltip={true}
              tooltip={org_input_tooltip}
              tooltipTop="-9rem"
            />
            <ComboBox
              title={prog_input}
              list={programmes}
              id={"programmeList"}
              onChange={changeProgramme}
              value={programme}
              withTooltip={true}
              tooltip={prog_input_tooltip}
              tooltipTop="-6rem"
            />
            <ComboBox
              title={act_input}
              list={activities}
              id={"activityList"}
              onChange={changeActivity}
              value={activity}
              withTooltip={true}
              tooltip={act_input_tooltip}
              tooltipTop="-6rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={first_date_input}
              name={"firstdatevolunteering"}
              defaultValue={""}
              disabled={false}
              changeHandler={changeFirstDate}
              value={firstDate}
              withTooltip={true}
              tooltip={first_date_input_tooltip}
              tooltipTop="-3rem"
            />
            <SelectInput
              list={sessionnameList_list}
              name={name_session_input}
              title={"Task type"}
              defaultValue={""}
              handleSelect={changeSessionName}
              withTooltip={true}
              tooltip={name_session_input_tooltip}
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
              {loading ? <ButtonLoader /> : btn_text}
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
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
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

  return { props: { type: decoded?.type, lang: context.query.lang } };
};

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

export default function VolunteerExperience({ type, decoded, lang }: any) {
  const {
    handleSubmit,
    changeHours,
    hours,
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
  } = useVolunteerExperience({ lang });

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

  let title = "Activity Completion Form";
  let hours_input = "Hours";
  let hours_input_tooltip =
    "How many hours have you spend on the activity in total?";
  let org_input = "* Organisation";
  let org_input_tooltip =
    "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
  let prog_input = "* Programme";
  let prog_input_tooltip =
    "Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu.";
  let act_input = "* Activity";
  let act_input_tooltip =
    "Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu.";
  let exp_input = "Experience";
  let exp_input_tooltip =
    "What is the nature of final beneficiaries from your activity? A final beneficiary is a person that to some extent benefits from or is impacted by your activity. You can choose one or more categories below by clicking on the boxes.";
  let dif_input = "Difference";
  let dif_input_tooltip =
    "Which skills are your volunteers gaining by being part of your activity? You can choose one or more options below by clicking on the boxes";
  let ben_input = "Benefit";
  let ben_input_tooltip =
    "Which decabornising measures is your organisation taking in regards to your activity? Decarbonisation is the process of reducing the amount of carbon, mainly carbon dioxide (CO2), sent into the atmosphere. You can choose one or more options below by clicking on the boxes.";
  let comment_text = "Make a comment";
  let btn_text = "SUBMIT YOUR EXPERIENCE";

  switch (lang) {
    case "es":
      title = "Formulario de finalización de actividad";
      hours_input = "Horas";
      hours_input_tooltip =
        "¿Cuántas horas has dedicado a la actividad en total?";
      org_input = "* Organización";
      org_input_tooltip =
        "¿A qué organización u otra entidad está afiliado mediante el uso de la plataforma V-CALC? Puede elegir entre las organizaciones enumeradas en el menú desplegable. Si no encuentra su organización allí, comuníquese con su supervisor de voluntarios o a través de vcalc@volunteeringimpact.eu.";
      prog_input = "* Programa";
      prog_input_tooltip =
        "¿De qué programa eres parte mediante el uso de la plataforma V-CALC? Puede elegir entre los programas enumerados en el menú desplegable.";
      act_input = "* Actividad";
      act_input_tooltip =
        "¿De qué actividad eres parte mediante el uso de la plataforma V-CALC? Puedes elegir entre las actividades enumeradas en el menú desplegable.";
      exp_input = "Experiencia";
      exp_input_tooltip =
        "¿Cuál es la naturaleza de los beneficiarios finales de su actividad? Un beneficiario final es una persona que en cierta medida se beneficia o se ve afectada por su actividad. Puede elegir una o más categorías a continuación haciendo clic en las casillas.";
      dif_input = "Diferencia";
      dif_input_tooltip =
        "¿Qué habilidades están adquiriendo tus voluntarios al ser parte de tu actividad? Puedes elegir una o más opciones a continuación haciendo clic en las casillas";
      ben_input = "Beneficio";
      ben_input_tooltip =
        "¿Qué medidas descabornizantes está tomando su organización respecto a su actividad? La descarbonización es el proceso de reducción de la cantidad de carbono, principalmente dióxido de carbono (CO2), emitido a la atmósfera. Puede elegir una o varias opciones a continuación haciendo clic en las casillas.";
      btn_text = "ENVÍA TU EXPERIENCIA";
      comment_text = "Haz un comentario";
      break;
    case "fr":
      title = "Formulaire d'achèvement d'activité";
      hours_input = "Heures";
      hours_input_tooltip =
        "Combien d’heures avez-vous consacrées à l’activité au total?";
      org_input = "* Organisation";
      org_input_tooltip =
        "À quelle organisation ou autre entité êtes-vous affilié grâce à votre utilisation de la plateforme V-CALC. Vous pouvez choisir parmi les organisations répertoriées dans le menu déroulant. Si vous n'y trouvez pas votre organisation, veuillez contacter votre superviseur de bénévoles ou via vcalc@volunteeringimpact.eu.";
      prog_input = "* Programme";
      prog_input_tooltip =
        "De quel programme faites-vous partie grâce à votre utilisation de la plateforme V-CALC ? Vous pouvez choisir parmi les programmes répertoriés dans le menu déroulant.";
      act_input = "* Activité";
      act_input_tooltip =
        "À quelle activité participez-vous grâce à votre utilisation de la plateforme V-CALC ? Vous pouvez choisir parmi les activités répertoriées dans le menu déroulant.";
      btn_text = "SOUMETTRE VOTRE EXPÉRIENCE";
      exp_input = "Expérience";
      exp_input_tooltip =
        "Quelle est la nature des bénéficiaires finaux de votre activité ? Un bénéficiaire final est une personne qui bénéficie dans une certaine mesure ou est impactée par votre activité. Vous pouvez choisir une ou plusieurs catégories ci-dessous en cliquant sur les cases.";
      dif_input = "Différence";
      dif_input_tooltip =
        "Quelles compétences vos bénévoles acquièrent en participant à votre activité ? Vous pouvez choisir une ou plusieurs options ci-dessous en cliquant sur les cases";
      ben_input = "Avantage";
      ben_input_tooltip =
        "Quelles mesures décarbonisantes votre organisation prend-elle par rapport à votre activité ? La décarbonation est le processus de réduction de la quantité de carbone, principalement du dioxyde de carbone (CO2), émise dans l'atmosphère. Vous pouvez choisir une ou plusieurs options ci-dessous en cliquant sur les cases";
      comment_text = "Faire un commentaire";
      break;
    case "hr":
      title = "Obrazac za završetak aktivnosti";
      hours_input = "Sati";
      hours_input_tooltip = "Koliko sati ukupno provodite na aktivnosti?";
      org_input = "* Organisation";
      org_input_tooltip =
        "S kojom organizacijom ili drugim subjektom ste povezani korištenjem platforme V-CALC. Možete birati između organizacija navedenih u padajućem izborniku. Ako ondje ne pronađete svoju organizaciju, obratite se svom supervizoru volontera ili putem vcalc@volunteeringimpact.eu.";
      prog_input = "* Program";
      prog_input_tooltip =
        "U koji ste program uključeni koristeći V-CALC platformu? Možete birati između programa navedenih u padajućem izborniku.";
      act_input = "* Aktivnost";
      act_input_tooltip =
        "Koje aktivnosti sudjelujete kroz korištenje platforme V-CALC? Možete birati između aktivnosti navedenih u padajućem izborniku.";
      exp_input = "Iskustvo";
      exp_input_tooltip =
        "Kakva je priroda krajnjih korisnika vaše aktivnosti? Krajnji korisnik je osoba koja u određenoj mjeri ima koristi od vaše aktivnosti ili je pod njezinim utjecajem. Možete odabrati jednu ili više kategorija u nastavku klikom na okvire.";
      dif_input = "Razlika";
      dif_input_tooltip =
        "Koje vještine vaši volonteri stječu sudjelovanjem u vašoj aktivnosti? Možete odabrati jednu ili više opcija u nastavku klikom na okvire";
      ben_input = "Korist";
      ben_input_tooltip =
        "Koje mjere dekarbonizacije vaša organizacija poduzima u vezi s vašom djelatnošću? Dekarbonizacija je proces smanjenja količine ugljika, uglavnom ugljičnog dioksida (CO2), poslanog u atmosferu. Možete odabrati jednu ili više opcija u nastavku klikom na okvire";
      btn_text = "SOUMETTRE VOTRE EXPÉRIENCE";
      comment_text = "Dati komentar";
      break;
    case "sq":
      title = "Formulari i Plotësimit të Aktivitetit";
      hours_input = "Orë";
      hours_input_tooltip = "Sa orë keni shpenzuar në aktivitet në total?";
      org_input = "* Organisation";
      org_input_tooltip =
        "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation there please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
      prog_input = "* Programi";
      prog_input_tooltip =
        "Në cilin program jeni pjesë e përdorimit të platformës V-CALC? Ju mund të zgjidhni nga programet e listuara në menunë rënëse.";
      act_input = "* Aktiviteti";
      act_input_tooltip =
        "Në cilin aktivitet jeni pjesë e përdorimit të platformës V-CALC? Ju mund të zgjidhni nga aktivitetet e listuara në menunë rënëse.";
      exp_input = "Përvoja";
      exp_input_tooltip =
        "Cila është natyra e përfituesve përfundimtarë nga aktiviteti juaj? Përfituesi përfundimtar është një person që në një farë mase përfiton ose ndikohet nga aktiviteti juaj. Ju mund të zgjidhni një ose më shumë kategori më poshtë duke klikuar në kuti.";
      dif_input = "Diferenca";
      dif_input_tooltip =
        "Cilat aftësi fitojnë vullnetarët tuaj duke qenë pjesë e aktivitetit tuaj? Ju mund të zgjidhni një ose më shumë opsione më poshtë duke klikuar mbi kutitë";
      ben_input = "Përfitim";
      ben_input_tooltip =
        "Cilat masa dekabornizuese po merr organizata juaj në lidhje me aktivitetin tuaj? Dekarbonizimi është procesi i reduktimit të sasisë së karbonit, kryesisht dioksidit të karbonit (CO2), që dërgohet në atmosferë. Ju mund të zgjidhni një ose më shumë opsione më poshtë duke klikuar në kutitë.";
      btn_text = "DËRKONI EKSPERIENCE TUAJ";
      comment_text = "Bëj një koment";
      break;
    default:
      title = "Activity Completion Form";
      hours_input = "Hours";
      hours_input_tooltip =
        "How many hours have you spend on the activity in total?";
      org_input = "* Organisation";
      org_input_tooltip =
        "Me cilën organizatë ose entitet tjetër jeni të lidhur përmes përdorimit të platformës V-CALC. Ju mund të zgjidhni nga organizatat e listuara në menunë rënëse. Nëse nuk e gjeni organizatën tuaj atje, ju lutemi kontaktoni mbikëqyrësin tuaj vullnetar ose përmes vcalc@volunteeringimpact.eu.";
      prog_input = "* Programme";
      prog_input_tooltip =
        "Which programme are you part of through your use of the V-CALC platform? You can choose from the programmes listed in the dropdown menu.";
      act_input = "* Activity";
      act_input_tooltip =
        "Which activity are you part of through your use of the V-CALC platform? You can choose from the activities listed in the dropdown menu.";
      exp_input = "Experience";
      exp_input_tooltip =
        "What is the nature of final beneficiaries from your activity? A final beneficiary is a person that to some extent benefits from or is impacted by your activity. You can choose one or more categories below by clicking on the boxes.";
      dif_input = "Difference";
      dif_input_tooltip =
        "Which skills are your volunteers gaining by being part of your activity? You can choose one or more options below by clicking on the boxes";
      ben_input = "Benefit";
      ben_input_tooltip =
        "Which decabornising measures is your organisation taking in regards to your activity? Decarbonisation is the process of reducing the amount of carbon, mainly carbon dioxide (CO2), sent into the atmosphere. You can choose one or more options below by clicking on the boxes.";
      btn_text = "SUBMIT YOUR EXPERIENCE";
      comment_text = "Make a comment";
      break;
  }

  return (
    <>
      <HeadContent title="Activity Completion" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <ComboBox
              title={org_input}
              list={organisations}
              id="ngo"
              onChange={changeNgo}
              value={ngo}
              withTooltip={true}
              tooltip={org_input_tooltip}
              tooltipTop="-9rem"
            />
            <ComboBox
              title={prog_input}
              list={programmes}
              id="programme"
              onChange={changeProgramme}
              value={programme}
              withTooltip={true}
              tooltip={prog_input_tooltip}
              tooltipTop="-6rem"
            />
            <ComboBox
              title={act_input}
              list={activities}
              id="activity"
              onChange={changeActivity}
              value={activity}
              withTooltip={true}
              tooltip={act_input_tooltip}
              tooltipTop="-6rem"
            />
            <InputText
              label={hours_input}
              type="number"
              validation={() => true}
              required={true}
              name="hours"
              defaultValue=""
              changeHandler={changeHours}
              value={hours}
              clearError={() => {}}
              withTooltip={true}
              tooltip={hours_input_tooltip}
              tooltipTop="-4rem"
            />
          </div>
          <div className="form-2">
            <div>
              <div className="rate">
                <BasicRatingInput
                  title={exp_input}
                  name={"experience"}
                  value={ratingExp}
                  handleChange={handleChangeRatingExp}
                  withTooltip={true}
                  tooltip={exp_input_tooltip}
                  tooltipTop="-8rem"
                />
                <TextareaInput
                  name="experiencecomment"
                  handleCommentChange={handleExperienceCommentChange}
                  comment={experienceComment}
                  placeholder={comment_text}
                />
              </div>
            </div>
            <div>
              <div className="rate">
                <BasicRatingInput
                  title={dif_input}
                  name={"difference"}
                  value={ratingDif}
                  handleChange={handleChangeRatingDif}
                  withTooltip={true}
                  tooltip={dif_input_tooltip}
                  tooltipTop="-6rem"
                />
                <TextareaInput
                  name="differencecomment"
                  handleCommentChange={handleDifferencecommentChange}
                  comment={differenceComment}
                  placeholder={comment_text}
                />
              </div>
            </div>
            <div>
              <div className="rate">
                <BasicRatingInput
                  title={ben_input}
                  name={"benefit"}
                  value={ratingBen}
                  handleChange={handleChangeRatingBen}
                  withTooltip={true}
                  tooltip={ben_input_tooltip}
                  tooltipTop="-9rem"
                />
                <TextareaInput
                  name="benefitcomment"
                  handleCommentChange={handleBenefitcommentChange}
                  comment={benefitComment}
                  placeholder={comment_text}
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

  return { props: { type: decoded?.type, decoded, lang: context.query.lang } };
};

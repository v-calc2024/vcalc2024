import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { DateTimeInput } from "@/components/Particles/forms/DateTimeInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import {
  levelOperationList,
  levelOperationList_es,
  levelOperationList_fr,
  levelOperationList_hr,
  levelOperationList_sq,
  mainFundingOrganismList,
  mainFundingOrganismList_es,
  mainFundingOrganismList_fr,
  mainFundingOrganismList_hr,
  mainFundingOrganismList_sq,
  programmeSectorList,
  programmeTypeList,
  programmeTypeList_es,
  programmeTypeList_fr,
  programmeTypeList_hr,
  programmeTypeList_sq,
} from "@/mockups/programme_form";
import { validateName } from "@/utils/programme";
import { validateJwt } from "@/utils/validateJwt";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { getOneProgramme } from "@/services/programme/getOneProgramme";
import { useEditProgrammeForm } from "@/hooks/useEditProgrammeForm";

export default function ProgrammeRegistration({
  type,
  data,
  programmeId,
  lang,
}: any) {
  const {
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
    loading,
    changeLevelOperation,
    changeMainFundingOrganism,
    changeProgrammeType,
    errors,
    levelOperation,
    mainFundingOrganism,
    programmeType,
  } = useEditProgrammeForm({ data, programmeId, lang });

  let title = "Programme Form";
  let name_input = "Programme Name";
  let name_input_tooltip = "What is the name of this volunteer programme?";
  let leveloperation_input = "Level of Operation";
  let leveloperation_input_tooltip =
    "Is this programme implemented at local, national, regional or international level? You can choose the most fitting from the levels listed in the dropdown menu.";
  let levelOperationList_list = levelOperationList;
  let mainfund_input = "Main Funding Entity";
  let mainfund_input_tooltip =
    "What is the nature of the main funding entity behind this programme. You can choose the most fitting from the options listed in the dropdown menu.";
  let mainFundingOrganismList_list = mainFundingOrganismList;
  let programmeType_input = "Programme type";
  let programmeType_input_tooltip =
    "What is the type of this volunteer programme? You can choose the most fitting from the types listed in the dropdown menu.";
  let programmeTypeList_list = programmeTypeList;
  let averagecost_input = "Programme type";
  let averagecost_input_tooltip =
    "What is the type of this volunteer programme? You can choose the most fitting from the types listed in the dropdown menu.";
  let programmesector_list = programmeTypeList;
  let programmesector_input = "Programme sector";
  let programmesector_input_tooltip =
    "Which sector is your programme related to? You can choose the most fitting from the sectors listed in the dropdown menu.";
  let startdate_input = "Start Date";
  let startdate_input_tooltip = "Please enter the start date of your programme";
  let enddate_input = "End Date";
  let enddate_input_tooltip = "Please enter the end date of your programme";
  let generate_programme = "GENERATE A PROGRAMME";

  switch (lang) {
    case "es":
      title = "Formulario de Programa";
      name_input = "Nombre del programa";
      name_input_tooltip = "¿Cómo se llama este programa de voluntariado?";
      leveloperation_input = "Nivel de operación";
      leveloperation_input_tooltip =
        "¿Este programa se implementa a nivel local, nacional, regional o internacional? Puede elegir el más adecuado entre los niveles enumerados en el menú desplegable.";
      levelOperationList_list = levelOperationList_es;
      mainfund_input = "Principal entidad financiadora";
      mainfund_input_tooltip =
        "¿Cuál es la naturaleza de la principal entidad de financiación detrás de este programa? Puede elegir la más adecuada entre las opciones enumeradas en el menú desplegable.";
      mainFundingOrganismList_list = mainFundingOrganismList_es;
      programmeType_input = "Tipo de programa";
      programmeType_input_tooltip =
        "¿Cuál es el tipo de programa de voluntariado? Puedes elegir el que más se ajuste a los tipos enumerados en el menú desplegable";
      programmeTypeList_list = programmeTypeList_es;
      averagecost_input = "costo promedio";
      averagecost_input_tooltip =
        "¿Cuál es el financiamiento anual para el programa del financiador principal identificado?";
      programmesector_list = programmeTypeList_es;
      programmesector_input = "Sector del programa";
      programmesector_input_tooltip =
        "¿Con qué sector está relacionado tu programa? Puedes elegir el más adecuado entre los sectores enumerados en el menú desplegable.";
      startdate_input = "Fecha de inicio";
      startdate_input_tooltip = "Ingrese la fecha de inicio de su programa";
      enddate_input = "Fecha final";
      enddate_input_tooltip = "Ingrese la fecha de finalización de su programa";
      generate_programme = "GENERAR UN PROGRAMA";
      break;
    case "fr":
      title = "Formulaire de programme";
      name_input = "Nom du programme";
      name_input_tooltip = "Quel est le nom de ce programme de volontariat";
      leveloperation_input = "Niveau de fonctionnement";
      leveloperation_input_tooltip =
        "Ce programme est-il mis en œuvre au niveau local, national, régional ou international ? Vous pouvez choisir le niveau le plus approprié parmi les niveaux répertoriés dans le menu déroulant.";
      levelOperationList_list = levelOperationList_fr;
      mainfund_input = "Principale entité de financement";
      mainfund_input_tooltip =
        "Quelle est la nature de la principale entité de financement derrière ce programme. Vous pouvez choisir celle qui convient le mieux parmi les options répertoriées dans le menu déroulant.";
      mainFundingOrganismList_list = mainFundingOrganismList_fr;
      programmeType_input = "Type de programme";
      programmeType_input_tooltip =
        "Quel est le type de ce programme de volontariat ? Vous pouvez choisir le plus approprié parmi les types répertoriés dans le menu déroulant.";
      programmeTypeList_list = programmeTypeList_fr;
      averagecost_input = "coût moyen";
      averagecost_input_tooltip =
        "Quel est le financement annuel du programme par le principal bailleur de fonds identifié ?";
      programmesector_list = programmeTypeList_fr;
      programmesector_input = "Secteur de programme";
      programmesector_input_tooltip =
        "À quel secteur votre programme est-il lié ? Vous pouvez choisir celui qui vous convient le mieux parmi les secteurs répertoriés dans le menu déroulant.";
      startdate_input = "Date de début";
      startdate_input_tooltip =
        "Veuillez saisir la date de début de votre programme";
      enddate_input = "Date de fin";
      enddate_input_tooltip =
        "Veuillez saisir la date de fin de votre programme";
      generate_programme = "GÉNÉRER UN PROGRAMME";
      break;
    case "hr":
      title = "Obrazac programa";
      name_input = "Naziv programa";
      name_input_tooltip = "Kako se zove ovaj volonterski program?";
      leveloperation_input = "Razina rada";
      leveloperation_input_tooltip =
        "Provodi li se ovaj program na lokalnoj, nacionalnoj, regionalnoj ili međunarodnoj razini? Možete odabrati najprikladniju među razinama navedenim u padajućem izborniku.";
      levelOperationList_list = levelOperationList_hr;
      mainfund_input = "Glavni subjekt financiranja";
      mainfund_input_tooltip =
        "Koja je priroda glavnog subjekta financiranja koji stoji iza ovog programa. Možete odabrati opciju koja vam najviše odgovara iz opcija navedenih u padajućem izborniku.";
      mainFundingOrganismList_list = mainFundingOrganismList_hr;
      programmeType_input = "Vrsta programa";
      programmeType_input_tooltip =
        "Koja je vrsta ovog volonterskog programa? Možete odabrati onaj koji vam najviše odgovara među vrstama navedenim u padajućem izborniku.";
      programmeTypeList_list = programmeTypeList_hr;
      averagecost_input = "Prosječna cijena";
      averagecost_input_tooltip =
        "Kolika su godišnja sredstva za program od strane identificiranog glavnog financijera?";
      programmesector_list = programmeTypeList_hr;
      programmesector_input = "Programski sektor";
      programmesector_input_tooltip =
        "Na koji se sektor odnosi vaš program? Možete odabrati onaj koji vam najviše odgovara iz sektora navedenih u padajućem izborniku.";
      startdate_input = "Početni datum";
      startdate_input_tooltip = "Molimo unesite datum početka vašeg programa";
      enddate_input = "Datum završetka";
      enddate_input_tooltip = "Molimo unesite datum završetka vašeg programa";
      generate_programme = "GENERIRAJTE PROGRAM";
      break;
    case "sq":
      title = "Formulari i programit";
      name_input = "Emri i programit";
      name_input_tooltip = "Cili është emri i këtij programi vullnetar?";
      leveloperation_input = "Niveli i Operacionit";
      leveloperation_input_tooltip =
        "A zbatohet ky program në nivel lokal, kombëtar, rajonal apo ndërkombëtar? Ju mund të zgjidhni më të përshtatshmet nga nivelet e listuara në menunë rënëse.";
      levelOperationList_list = levelOperationList_sq;
      mainfund_input = "Subjekti kryesor financues";
      mainfund_input_tooltip =
        "Cila është natyra e entitetit kryesor financues pas këtij programi. Mund të zgjidhni më të përshtatshmet nga opsionet e listuara në menunë rënëse.";
      mainFundingOrganismList_list = mainFundingOrganismList_sq;
      programmeType_input = "Lloji i programit";
      programmeType_input_tooltip =
        "Cili është lloji i këtij programi vullnetar? Ju mund të zgjidhni më të përshtatshëm nga llojet e listuara në menunë rënëse.";
      programmeTypeList_list = programmeTypeList_sq;
      averagecost_input = "kosto mesatare";
      averagecost_input_tooltip =
        "Cili është financimi vjetor për programin nga financuesi kryesor i identifikuar?";
      programmesector_list = programmeTypeList_sq;
      programmesector_input = "Sektori i programit";
      programmesector_input_tooltip =
        "Me cilin sektor lidhet programi juaj? Ju mund të zgjidhni më të përshtatshëm nga sektorët e listuar në menunë rënëse..";
      startdate_input = "Data e fillimit";
      startdate_input_tooltip =
        "Ju lutemi shkruani datën e fillimit të programit tuaj";
      enddate_input = "Data e përfundimit";
      enddate_input_tooltip =
        "Ju lutemi shkruani datën e përfundimit të programit tuaj";
      generate_programme = "GJENERON NJË PROGRAM";
      break;
    default:
      title = "Programme Form";
      name_input = "Programme Name";
      name_input_tooltip = "What is the name of this volunteer programme?";
      leveloperation_input = "Level of Operation";
      leveloperation_input_tooltip =
        "Is this programme implemented at local, national, regional or international level? You can choose the most fitting from the levels listed in the dropdown menu.";
      levelOperationList_list = levelOperationList;
      mainfund_input = "Main Funding Entity";
      mainfund_input_tooltip =
        "What is the nature of the main funding entity behind this programme. You can choose the most fitting from the options listed in the dropdown menu.";
      mainFundingOrganismList_list = mainFundingOrganismList;
      programmeType_input = "Programme type";
      programmeType_input_tooltip =
        "What is the type of this volunteer programme? You can choose the most fitting from the types listed in the dropdown menu.";
      programmeTypeList_list = programmeTypeList;
      averagecost_input = "average cost";
      averagecost_input_tooltip =
        "What is the annual funding for the programme from the main funder identified?";
      programmesector_list = programmeTypeList;
      programmesector_input = "Programme sector";
      programmesector_input_tooltip =
        "Which sector is your programme related to? You can choose the most fitting from the sectors listed in the dropdown menu.";
      startdate_input = "Start Date";
      startdate_input_tooltip = "Please enter the start date of your programme";
      enddate_input = "End Date";
      enddate_input_tooltip = "Please enter the end date of your programme";
      generate_programme = "GENERATE A PROGRAMME";
      break;
  }

  return (
    <>
      <HeadContent title="Programme Form" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <InputText
              label={name_input}
              validation={(e: any) => validateName(e, lang)}
              required={true}
              name="name"
              changeHandler={changeName}
              value={name}
              clearError={() => {}}
              withTooltip={true}
              tooltip={name_input_tooltip}
              tooltipTop="-4rem"
            />
            <SelectInput
              list={levelOperationList_list}
              name={"leveloperation"}
              title={leveloperation_input}
              defaultValue={levelOperation}
              handleSelect={changeLevelOperation}
              withTooltip={true}
              tooltip={leveloperation_input_tooltip}
              tooltipTop="-6rem"
            />
            <SelectInput
              list={mainFundingOrganismList_list}
              name={"mainFundingOrganism"}
              title={mainfund_input}
              defaultValue={mainFundingOrganism}
              handleSelect={changeMainFundingOrganism}
              withTooltip={true}
              tooltip={mainfund_input_tooltip}
              tooltipTop="-6rem"
            />
            <SelectInput
              list={programmeTypeList_list}
              name={"programmeType"}
              title={programmeType_input}
              defaultValue={programmeType}
              handleSelect={changeProgrammeType}
              withTooltip={true}
              tooltip={programmeType_input_tooltip}
              tooltipTop="-5rem"
            />
            <InputText
              label={averagecost_input}
              type="number"
              validation={() => true}
              required={true}
              name="averagecost"
              defaultValue=""
              changeHandler={changeAverageCost}
              value={averageCost}
              clearError={() => {}}
              withTooltip={true}
              tooltip={averagecost_input_tooltip}
              tooltipTop="-4rem"
            />
            <ComboBox
              title={programmesector_input}
              list={programmesector_list}
              id="programmesector"
              onChange={changeProgrammeSector}
              value={programmeSector}
              withTooltip={true}
              tooltip={programmesector_input_tooltip}
              tooltipTop="-5rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={startdate_input}
              name={"startdate"}
              defaultValue={startDate}
              changeHandler={changeStartDate}
              value={startDate}
              disabled={false}
              withTooltip={true}
              tooltip={startdate_input_tooltip}
              tooltipTop="-4rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={enddate_input}
              name={"enddate"}
              defaultValue={endDate?.substring(0, 10)}
              changeHandler={changeEndDate}
              value={endDate}
              disabled={false}
              withTooltip={true}
              tooltip={enddate_input_tooltip}
              tooltipTop="-3rem"
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
              {loading ? <ButtonLoader /> : generate_programme}
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
          padding: 0 5rem;
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

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
          }

          .form,
          .funding-type {
            grid-template-columns: 1fr;
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

ProgrammeRegistration.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded, token } = await validateJwt(context);

  if (!isValid || decoded?.type !== "ONG") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const programmeId = context.query?.programme_form_edit;
  const resp = await getOneProgramme(token, programmeId);

  if (!resp?.data?.ong) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      type: decoded?.type,
      data: resp?.data?.ong,
      programmeId,
      lang: context.query.lang,
    },
  };
};

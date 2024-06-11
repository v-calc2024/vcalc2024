import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import {
  SDGList,
  SDGList_es,
  SDGList_fr,
  SDGList_hr,
  SDGList_sq,
  finalBeneficiariesList,
  finalBeneficiariesList_es,
  finalBeneficiariesList_fr,
  finalBeneficiariesList_hr,
  finalBeneficiariesList_sq,
  skillsList,
  skillsList_es,
  skillsList_fr,
  skillsList_hr,
  skillsList_sq,
  typeofactivityList,
  typeofactivityList_es,
  typeofactivityList_fr,
  typeofactivityList_hr,
  typeofactivityList_sq,
  volunteerBeneficiariesList,
  volunteerBeneficiariesList_es,
  volunteerBeneficiariesList_fr,
  volunteerBeneficiariesList_hr,
  volunteerBeneficiariesList_sq,
} from "@/mockups/activity_registration";
import { DateTimeInput } from "@/components/Particles/forms/DateTimeInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { validateActivity, validateLocation } from "@/utils/activity_ong";
import { ReactElement, useEffect, useState } from "react";
import { getAllProgrammeByOng } from "@/services/programme/getAllProgrammeByOng";
import { validateJwt } from "@/utils/validateJwt";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { useActivityONGForm } from "@/hooks/useActivityOngForm";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";

export default function ActivityONGRegistration({
  ongId,
  type,
  lang,
}: {
  ongId: any;
  type: any;
  lang: any;
}) {
  const {
    handleSubmit,
    changeActivity,
    activity,
    changeProgramme,
    changeTotalhours,
    totalHours,
    changeNumberoffinalben,
    numberOfFinalBen,
    changeNumberOfVol,
    numberOfVol,
    changeFinalBen,
    changeStartDate,
    startDate,
    changeEndDate,
    endDate,
    changeTypeOfActivity,
    typeOfAct,
    // changeSdg,
    changeSDGs,
    // sdg,
    sdgs,
    changeVolunteerBeneficiaries,
    volunteerBeneficiaries,
    finalBen,
    checkedPlantTree,
    handleChangePlantTree,
    changeOpenNumOfDonors,
    numberOfDonors,
    handleChangeSavingPlan,
    checkedSavingPlan,
    energyWasted,
    changeOpenWasted,
    handleChangeRecyclingConsumables,
    checkedRecyclingConsumables,
    chagePercCons,
    percCons,
    checkedMaterialExpenses,
    handleChangeMaterialExpenses,
    changeMatExp,
    matExpenses,
    handleChangeRecyclingEquipment,
    checkedRecyclingEquipment,
    changePercEq,
    percEq,
    handleChangeCarbon,
    checkedCarbon,
    percGeo,
    changePercGeo,
    changeSkills,
    skills,
    loading,
    errors,
    changeEmpEnrolledSupVol,
    empEnrolledSupVol,
    countriesList,
    changeCountry,
    country,
    regions,
    changeRegion,
    region,
    localities,
    changeLocality,
    locality,
    handleSkillChange,
    otherSkill,
    handleFBChange,
    otherFB,
  } = useActivityONGForm({ lang });

  const [programmes, setProgrammes] = useState([]);

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
        .catch(() => {})
        .finally(() => {});
    } else {
      setProgrammes([]);
    }
  }, [ongId]);

  let title = "Activity Form";
  let activity_input = "Activity title";
  let activity_input_tooltip = "What is the title of your activity?";
  let programme_input = "* Programme";
  let programme_input_tooltip =
    "Which programme is your activity part of? You can choose from the programmes listed in the dropdown menu.";
  let total_hour_input = "Non-registered volunteers hours";
  let total_hour_input_tooltip =
    "Please indicate the Non-registered volunteers hours contrubtion that is expected per volunteer for this activity.";
  let country_input = "* Country";
  let country_input_tooltip =
    "In which country is your activity taking place? You can choose from the countries in the dropdown menu";
  let region_input = "* Region";
  let region_input_tooltip =
    "In which region is your activity taking place? You can choose from the regions in the dropdown menu";
  let locality_input = "Locality";
  let locality_input_tooltip =
    "In which commune is your activity taking place? You can choose from the options in the dropdown menu";
  let numberoffinalbeneficiaries_input = "Number of Final Beneficiaries";
  let numberoffinalbeneficiaries_input_tooltip =
    "How many people are being supported by this activity?";
  let numberofvolunteers_input = "Number of Volunteers";
  let numberofvolunteers_input_tooltip =
    "How many volunteers are engaged with this activity?";
  let startdate_input = "Start Date";
  let startdate_input_tooltip = "Please enter the start date of your activity";
  let enddate_input = "End Date";
  let enddate_input_tooltip = "Please enter the end date of your activity";
  let typeofactivity_input = "* Type of activity";
  let typeofactivity_input_tooltip =
    "What is the type of your activity? You can choose the most fitting from the types listed in the dropdown menu.";
  let typeofactivityList_list = typeofactivityList;
  let empenrolledsupvol_input = "Employers enrolled supporting volunteers";
  let empenrolledsupvol_input_tooltip =
    "How many volunteers have joined the activity through Employer Supported Volunteering. Employer Supported Volunteers means when an employer in any sector or field support the organisation's staff to take part in volunteering opportunities, which can be during work hours.";
  let sdg_tooltip =
    "The Sustainable Development Goals (SDGs) are 17 goals created by the UN to transform our world in a more positive direction. You can choose below which SDGs your activity is supporting by ticking one or more boxes.";
  let SDGList_list = SDGList;
  let vol_ben_title = "Volunteer Beneficiaries";
  let vol_ben_title_tooltip =
    "What is the nature of volunteers benefitting from your activity? You can choose one or more categories below by clicking on the boxes.";
  let volunteerBeneficiariesList_list = volunteerBeneficiariesList;
  let finalBen_input = "Final Beneficiaries";
  let finalBen_input_tooltip =
    "What is the nature of final beneficiaries from your activity? A final beneficiary is a person that to some extent benefits from or is impacted by your activity. You can choose one or more categories below by clicking on the boxes.";
  let finalBeneficiariesList_list = finalBeneficiariesList;
  let skills_input = "Skills gained by volunteers with this action";
  let skills_input_tooltip =
    "Which skills are your volunteers gaining by being part of your activity? You can choose one or more options below by clicking on the boxes";
  let skillsList_list = skillsList;
  let decarbonisation_title = "Decarbonisation measures";
  let plant_tree_title = "Plant Tree";
  let opennumberofdonors_title = "Open planted trees";
  let savingplan_title = "Energetic saving plan";
  let openenergywastesaved_title = "Open energy waste saved";
  let rec_cons_title = "Recycling and reusing consumables";
  let percentageconsumables_title = "Open percentage of 4R consumables";
  let mat_money_exp_title = "Materials money expense";
  let materiaexpenses_title = "Open new material total expenses";
  let rec_and_reu = "Recycling and reusing equipment";
  let open_per_4_eq_title = "Open percentage of 4R equipmen";
  let low_mov_carb_title = "Low carbon mobility";
  let percentageoveralltrips_title =
    "Open percentage of low carbon options overall trips";
  let button_submit = "GENERATE AN ACTIVITY";
  let otherskill_placeholder = "Add other Skill";
  let otherFB_placeholder = "Add other Final Benefiary";

  switch (lang) {
    case "es":
      title = "Formulario de actividad";
      activity_input = "Título de la actividad";
      activity_input_tooltip = "¿Cuál es el título de su actividad?";
      programme_input = "* Programa";
      programme_input_tooltip =
        "¿De qué programa forma parte tu actividad? Puedes elegir entre los programas enumerados en el menú desplegable.";
      total_hour_input = "Horas de voluntariado no registradas";
      total_hour_input_tooltip =
        "Por favor indique el aporte de horas de voluntarios no registrados que se espera por voluntario para esta actividad.";
      country_input = "* País";
      country_input_tooltip =
        "¿En qué país se desarrolla su actividad? Puedes elegir entre los países en el menú desplegable.";
      region_input = "* Región";
      region_input_tooltip =
        "¿En qué región se desarrolla su actividad? Puede elegir entre las regiones en el menú desplegable";
      locality_input = "Localidad";
      locality_input_tooltip =
        "¿En qué comuna se desarrolla su actividad? Puede elegir entre las opciones en el menú desplegable.";
      numberoffinalbeneficiaries_input = "Número de beneficiarios finales";
      numberoffinalbeneficiaries_input_tooltip =
        "¿Cuántas personas se están beneficiando de esta actividad?";
      numberofvolunteers_input = "Número de Voluntarios";
      numberofvolunteers_input_tooltip =
        "¿Cuántos voluntarios participan en esta actividad?";
      startdate_input = "Fecha de inicio";
      startdate_input_tooltip = "Ingrese la fecha de inicio de su actividad";
      enddate_input = "Fecha de finalización";
      enddate_input_tooltip =
        "Ingrese la fecha de finalización de su actividad";
      typeofactivity_input = "* Tipo de actividad";
      typeofactivity_input_tooltip =
        "¿Cuál es el tipo de su actividad? Puede elegir el más adecuado entre los tipos enumerados en el menú desplegable.";
      typeofactivityList_list = typeofactivityList_es;
      empenrolledsupvol_input =
        "Empleadores inscritos que apoyan a los voluntarios";
      empenrolledsupvol_input_tooltip =
        "¿Cuántos voluntarios se han unido a la actividad a través del voluntariado apoyado por el empleador? Voluntarios apoyados por el empleador significa cuando un empleador en cualquier sector o campo apoya al personal de la organización para participar en oportunidades de voluntariado, que pueden ser durante las horas de trabajo.";
      sdg_tooltip =
        "Los Objetivos de Desarrollo Sostenible (ODS) son 17 objetivos creados por la ONU para transformar nuestro mundo en una dirección más positiva. Puedes elegir a continuación qué ODS apoya tu actividad marcando una o más casillas.";
      SDGList_list = SDGList_es;
      vol_ben_title = "Beneficiarios voluntarios";
      vol_ben_title_tooltip =
        "¿Cuál es la naturaleza de los voluntarios que se benefician de su actividad? Puede elegir una o más categorías a continuación haciendo clic en las casillas.";
      volunteerBeneficiariesList_list = volunteerBeneficiariesList_es;
      finalBen_input = "Beneficiarios finales";
      finalBen_input_tooltip =
        "¿Cuál es la naturaleza de los beneficiarios finales de su actividad? Un beneficiario final es una persona que en cierta medida se beneficia o se ve afectada por su actividad. Puede elegir una o más categorías a continuación haciendo clic en las casillas.";
      finalBeneficiariesList_list = finalBeneficiariesList_es;
      skills_input =
        "Habilidades adquiridas por los voluntarios con esta acción";
      skills_input_tooltip =
        "¿Qué habilidades están adquiriendo tus voluntarios al ser parte de tu actividad? Puede elegir una o más opciones a continuación haciendo clic en las casillas";
      skillsList_list = skillsList_es;
      decarbonisation_title = "Medidas de descarbonización";
      plant_tree_title = "Plantar árbol";
      opennumberofdonors_title = "Árboles plantados al aire libre";
      savingplan_title = "Plan de ahorro energético";
      openenergywastesaved_title = "Se ahorra desperdicio de energía abierta";
      rec_cons_title = "Reciclar y reutilizar consumibles";
      percentageconsumables_title = "Porcentaje abierto de consumibles 4R";
      mat_money_exp_title = "Gasto de dinero en materiales";
      materiaexpenses_title = "Abrir nuevo material gastos totales";
      rec_and_reu = "Reciclaje y reutilización de equipos.";
      open_per_4_eq_title = "Porcentaje abierto de equipos 4R";
      low_mov_carb_title = "Movilidad baja en carbono";
      percentageoveralltrips_title =
        "Porcentaje abierto de viajes con opciones bajas en carbono en general";
      button_submit = "GENERAR UNA ACTIVIDAD";
      otherskill_placeholder = "Agregue otra habilidad";
      otherFB_placeholder = "Agregue otro beneficiario final";
      break;
    case "fr":
      title = "Formulaire d'activité";
      activity_input = "Titre de l'activité";
      activity_input_tooltip = "Quel est le titre de votre activité?";
      programme_input = "* Programme";
      programme_input_tooltip =
        "De quel programme fait partie votre activité ? Vous pouvez choisir parmi les programmes répertoriés dans le menu déroulant.";
      total_hour_input = "Heures de bénévolat non enregistrées";
      total_hour_input_tooltip =
        "Veuillez indiquer la contribution en heures de bénévolat non enregistrée attendue par bénévole pour cette activité.";
      country_input = "* Pays";
      country_input_tooltip =
        "Dans quel pays se déroule votre activité ? Vous pouvez choisir parmi les pays dans le menu déroulant";
      region_input = "* Région";
      region_input_tooltip =
        "Dans quelle région se déroule votre activité ? Vous pouvez choisir parmi les régions dans le menu déroulant";
      locality_input = "Localité";
      locality_input_tooltip =
        "Dans quelle commune se déroule votre activité ? Vous pouvez choisir parmi les options du menu déroulant";
      numberoffinalbeneficiaries_input = "Nombre de bénéficiaires finaux";
      numberoffinalbeneficiaries_input_tooltip =
        "Combien de personnes sont soutenues par cette activité ?";
      numberofvolunteers_input = "Nombre de bénévoles";
      numberofvolunteers_input_tooltip =
        "Combien de bénévoles participent à cette activité ?";
      startdate_input = "Date de début";
      startdate_input_tooltip =
        "Veuillez saisir la date de début de votre activité";
      enddate_input = "Date de fin";
      enddate_input_tooltip =
        "Veuillez saisir la date de fin de votre activité";
      typeofactivity_input = "* Lloji i aktivitetit";
      typeofactivity_input_tooltip =
        "Cili është lloji i aktivitetit tuaj? Ju mund të zgjidhni më të përshtatshmet nga llojet e listuara në menunë rënëse.";
      typeofactivityList_list = typeofactivityList_fr;
      empenrolledsupvol_input =
        "Employeurs inscrits pour soutenir les bénévoles";
      empenrolledsupvol_input_tooltip =
        "Combien de bénévoles ont rejoint l'activité par le biais du bénévolat soutenu par l'employeur. Par bénévoles soutenus par l'employeur, on entend le fait qu'un employeur, dans n'importe quel secteur ou domaine, aide le personnel de l'organisation à participer à des opportunités de volontariat, qui peuvent avoir lieu pendant les heures de travail.";
      sdg_tooltip =
        "Les objectifs de développement durable (ODD) sont 17 objectifs créés par l'ONU pour transformer notre monde dans une direction plus positive. Vous pouvez choisir ci-dessous les ODD que votre activité soutient en cochant une ou plusieurs cases.";
      SDGList_list = SDGList_fr;
      vol_ben_title = "Bénéficiaires bénévoles";
      vol_ben_title_tooltip =
        "Quelle est la nature des bénévoles bénéficiant de votre activité ? Vous pouvez choisir une ou plusieurs catégories ci-dessous en cliquant sur les cases.";
      volunteerBeneficiariesList_list = volunteerBeneficiariesList_fr;
      finalBen_input = "Bénéficiaires finaux";
      finalBen_input_tooltip =
        "Quelle est la nature des bénéficiaires finaux de votre activité ? Un bénéficiaire final est une personne qui, dans une certaine mesure, bénéficie ou est impactée par votre activité. Vous pouvez choisir une ou plusieurs catégories ci-dessous en cliquant sur les cases.";
      finalBeneficiariesList_list = finalBeneficiariesList_fr;
      skills_input =
        "Compétences acquises par les bénévoles grâce à cette action";
      skills_input_tooltip =
        "Quelles compétences vos bénévoles acquièrent-ils en participant à votre activité ? Vous pouvez choisir une ou plusieurs options ci-dessous en cliquant sur les cases";
      skillsList_list = skillsList_fr;
      decarbonisation_title = "Mesures de décarbonation";
      plant_tree_title = "Planter un arbre";
      opennumberofdonors_title = "Arbres plantés ouverts";
      savingplan_title = "Plan d'économies d'énergie";
      openenergywastesaved_title = "Gaspillage d'énergie ouvert économisé";
      rec_cons_title = "Recyclage et réutilisation des consommables";
      percentageconsumables_title = "Porcentaje abierto de consumibles 4R";
      mat_money_exp_title = "Dépense en argent matériel";
      materiaexpenses_title =
        "Ouvrir de nouvelles dépenses totales matérielles";
      rec_and_reu = "Recyclage et réutilisation du matériel";
      open_per_4_eq_title = "Pourcentage d'ouverture des équipements 4R";
      low_mov_carb_title = "Mobilité bas carbone";
      percentageoveralltrips_title =
        "Pourcentage ouvert d'options à faible émission de carbone dans l'ensemble des voyages";
      button_submit = "GÉNÉRER UNE ACTIVITÉ";
      otherskill_placeholder = "Ajouter une autre compétence";
      otherFB_placeholder = "Ajouter un autre bénéficiaire final";
      break;
    case "hr":
      title = "Obrazac aktivnosti";
      activity_input = "Naziv aktivnosti";
      activity_input_tooltip = "Koji je naslov vaše aktivnosti?";
      programme_input = "* Program";
      programme_input_tooltip =
        "Koji je program dio vaše aktivnosti? Možete birati između programa navedenih u padajućem izborniku.";
      total_hour_input = "Neregistrirani volonterski sati";
      total_hour_input_tooltip =
        "Molimo da navedete doprinos sati neregistriranih volontera koji se očekuje po volonteru za ovu aktivnost.";
      country_input = "* Zemlja";
      country_input_tooltip =
        "U kojoj zemlji se odvija vaša aktivnost? Možete birati između zemalja u padajućem izborniku";
      region_input = "* Regija";
      region_input_tooltip =
        "U kojoj regiji se odvija vaša aktivnost? Možete birati između regija u padajućem izborniku";
      locality_input = "Mjesto";
      locality_input_tooltip =
        "U kojoj općini se odvija vaša aktivnost? Možete birati između opcija u padajućem izborniku";
      numberoffinalbeneficiaries_input = "Broj krajnjih korisnika";
      numberoffinalbeneficiaries_input_tooltip =
        "Koliko ljudi je podržano ovom aktivnošću?";
      numberofvolunteers_input = "Broj volontera";
      numberofvolunteers_input_tooltip =
        "Koliko je volontera uključeno u ovu aktivnost?";
      startdate_input = "Datum početka";
      startdate_input_tooltip = "Molimo unesite datum početka vaše aktivnosti";
      enddate_input = "Datum završetka";
      enddate_input_tooltip = "Molimo unesite datum završetka vaše aktivnosti";
      typeofactivity_input = "* Vrsta djelatnosti";
      typeofactivity_input_tooltip =
        "Koja je vrsta vaše djelatnosti? Možete odabrati najprikladniju među vrstama navedenim u padajućem izborniku.";
      typeofactivityList_list = typeofactivityList_hr;
      empenrolledsupvol_input = "Poslodavci upisani za podršku volonterima";
      empenrolledsupvol_input_tooltip =
        "Koliko se volontera pridružilo aktivnosti kroz volontiranje uz podršku poslodavca. Volonteri uz podršku poslodavca znači kada poslodavac u bilo kojem sektoru ili području podržava osoblje organizacije da sudjeluje u mogućnostima volontiranja, što može biti tijekom radnog vremena.";
      sdg_tooltip =
        "Ciljevi održivog razvoja (SDGs) 17 su ciljeva koje je stvorio UN kako bi promijenili naš svijet u pozitivnijem smjeru. U nastavku možete odabrati koje ciljeve održivog razvoja vaša aktivnost podržava označavanjem jednog ili više okvira.";
      SDGList_list = SDGList_hr;
      vol_ben_title = "Korisnici volonteri";
      vol_ben_title_tooltip =
        "Kakva je priroda volontera koji imaju koristi od vaše aktivnosti? Možete odabrati jednu ili više kategorija u nastavku klikom na okvire.";
      volunteerBeneficiariesList_list = volunteerBeneficiariesList_hr;
      finalBen_input = "Krajnji korisnici";
      finalBen_input_tooltip =
        "Kakva je priroda krajnjih korisnika vaše aktivnosti? Krajnji korisnik je osoba koja u određenoj mjeri ima koristi ili je pod utjecajem vaše aktivnosti. Možete odabrati jednu ili više kategorija u nastavku klikom na okvire.";
      finalBeneficiariesList_list = finalBeneficiariesList_hr;
      skills_input = "Vještine koje su volonteri stekli ovom akcijom";
      skills_input_tooltip =
        "Koje vještine vaši volonteri stječu sudjelovanjem u vašoj aktivnosti? Možete odabrati jednu ili više opcija u nastavku klikom na okvire";
      skillsList_list = skillsList_hr;
      decarbonisation_title = "Mjere dekarbonizacije";
      plant_tree_title = "Stablo biljke";
      opennumberofdonors_title = "Otvoreno zasađeno drveće";
      savingplan_title = "Plan uštede energije";
      openenergywastesaved_title = "Otvoreno ušteđeno rasipanje energije";
      rec_cons_title = "Recikliranje i ponovna uporaba potrošnog materijala";
      percentageconsumables_title = "Pourcentage ouvert de consommables 4R";
      mat_money_exp_title = "Novčani trošak materijala";
      materiaexpenses_title = "Otvorite nove ukupne troškove materijala";
      rec_and_reu = "Recikliranje i ponovna uporaba opreme";
      open_per_4_eq_title = "Otvoreni postotak opreme 4R";
      low_mov_carb_title = "Niska mobilnost ugljika";
      percentageoveralltrips_title =
        "Otvoreni postotak opcija s niskim udjelom ugljika u ukupnim putovanjima";
      button_submit = "GENERIRAJ AKTIVNOST";
      otherskill_placeholder = "Dodajte drugu vještinu";
      otherFB_placeholder = "Dodajte drugog krajnjeg korisnika";
      break;
    case "sq":
      title = "Formulari i aktivitetit";
      activity_input = "Titulli i aktivitetit";
      activity_input_tooltip = "Cili është titulli i aktivitetit tuaj?";
      programme_input = "* Programi";
      programme_input_tooltip =
        "Në cilin program bën pjesë aktiviteti juaj? Mund të zgjidhni nga programet e listuara në menunë rënëse.";
      total_hour_input = "Orë vullnetare të pa regjistruara";
      total_hour_input_tooltip =
        "Ju lutemi tregoni kontributin e orëve vullnetare të pa regjistruara që pritet për vullnetar për këtë aktivitet.";
      country_input = "* Vendi";
      country_input_tooltip =
        "Në cilin shtet po zhvillohet aktiviteti juaj? Ju mund të zgjidhni nga vendet në menunë rënëse";
      region_input = "* Rajon";
      region_input_tooltip =
        "Në cilin rajon po zhvillohet aktiviteti juaj? Ju mund të zgjidhni nga rajonet në menunë rënëse";
      locality_input = "Lokaliteti";
      locality_input_tooltip =
        "Në cilën komunë po zhvillohet aktiviteti juaj? Ju mund të zgjidhni nga opsionet në menunë rënëse";
      numberoffinalbeneficiaries_input = "Numri i Përfituesve Përfundimtar";
      numberoffinalbeneficiaries_input_tooltip =
        "Sa persona po mbështeten nga ky aktivitet?";
      numberofvolunteers_input = "Numri i vullnetarëve";
      numberofvolunteers_input_tooltip =
        "Sa vullnetarë janë të angazhuar në këtë aktivitet?";
      startdate_input = "Data e fillimit";
      startdate_input_tooltip =
        "Ju lutemi shkruani datën e fillimit të aktivitetit tuaj";
      enddate_input = "Data e Fundit";
      enddate_input_tooltip =
        "Ju lutemi shkruani datën e përfundimit të aktivitetit tuaj";
      typeofactivity_input = "* Lloji i aktivitetit";
      typeofactivity_input_tooltip =
        "Cili është lloji i aktivitetit tuaj? Ju mund të zgjidhni më të përshtatshmet nga llojet e listuara në menunë rënëse.";
      typeofactivityList_list = typeofactivityList_sq;
      empenrolledsupvol_input =
        "Punëdhënësit janë regjistruar vullnetarë mbështetës";
      empenrolledsupvol_input_tooltip =
        "Sa vullnetarë i janë bashkuar aktivitetit përmes Vullnetarizmit të Mbështetur nga Punëdhënësi. Vullnetarët e Mbështetur nga Punëdhënësi do të thotë kur një punëdhënës në çdo sektor apo fushë mbështet stafin e organizatës për të marrë pjesë në mundësitë vullnetare, të cilat mund të jenë gjatë orarit të punës.";
      sdg_tooltip =
        "Objektivat e Zhvillimit të Qëndrueshëm (SDGs) janë 17 synime të krijuara nga OKB-ja për të transformuar botën tonë në një drejtim më pozitiv. Më poshtë mund të zgjidhni se cilat SDG po mbështet aktiviteti juaj duke shënuar një ose më shumë kuti.";
      SDGList_list = SDGList_sq;
      vol_ben_title = "Përfitues vullnetarë";
      vol_ben_title_tooltip =
        "Cila është natyra e vullnetarëve që përfitojnë nga aktiviteti juaj? Ju mund të zgjidhni një ose më shumë kategori më poshtë duke klikuar në kuti.";
      volunteerBeneficiariesList_list = volunteerBeneficiariesList_sq;
      finalBen_input = "Përfituesit përfundimtarë";
      finalBen_input_tooltip =
        "Cila është natyra e përfituesve përfundimtarë nga aktiviteti juaj? Përfituesi përfundimtar është një person që në një farë mase përfiton ose ndikohet nga aktiviteti juaj. Ju mund të zgjidhni një ose më shumë kategori më poshtë duke klikuar në kuti";
      finalBeneficiariesList_list = finalBeneficiariesList_sq;
      skills_input = "Aftësitë e fituara nga vullnetarët me këtë veprim";
      skills_input_tooltip =
        "Cilat aftësi po fitojnë vullnetarët tuaj duke qenë pjesë e aktivitetit tuaj? Ju mund të zgjidhni një ose më shumë opsione më poshtë duke klikuar mbi kutitë";
      skillsList_list = skillsList_sq;
      decarbonisation_title = "Masat e dekarbonizimit";
      plant_tree_title = "Mbill pemë";
      opennumberofdonors_title = "Pemë të hapura të mbjella";
      savingplan_title = "Plani i kursimit të energjisë";
      openenergywastesaved_title = "Mbetjet e hapura të energjisë kursehen";
      rec_cons_title = "Riciklimi dhe ripërdorimi i materialeve harxhuese";
      percentageconsumables_title = "Otvoreni postotak 4R potrošnog materijala";
      mat_money_exp_title = "Shpenzimet e parave të materialeve";
      materiaexpenses_title = "Hapni shpenzimet totale të materialit të ri";
      rec_and_reu = "Riciklimi dhe ripërdorimi i pajisjeve";
      open_per_4_eq_title = "Përqindja e hapur e pajisjeve 4R";
      low_mov_carb_title = "Lëvizshmëri e ulët e karbonit";
      percentageoveralltrips_title =
        "Përqindja e hapur e opsioneve me karbon të ulët të udhëtimeve në përgjithësi";
      button_submit = "GJENERONI NJË AKTIVITET";
      otherskill_placeholder = "Shtoni aftësi të tjera";
      otherFB_placeholder = "Shtoni një përfitues tjetër përfundimtar";
      break;
    default:
      title = "Activity Form";
      activity_input = "Activity title";
      activity_input_tooltip = "What is the title of your activity?";
      programme_input = "* Programme";
      programme_input_tooltip =
        "Which programme is your activity part of? You can choose from the programmes listed in the dropdown menu.";
      total_hour_input = "Non-registered volunteers hours";
      total_hour_input_tooltip =
        "Please indicate the Non-registered volunteers hours contrubtion that is expected per volunteer for this activity.";
      country_input = "* Country";
      country_input_tooltip =
        "In which country is your activity taking place? You can choose from the countries in the dropdown menu";
      region_input = "* Region";
      region_input_tooltip =
        "In which region is your activity taking place? You can choose from the regions in the dropdown menu";
      locality_input = "Locality";
      locality_input_tooltip =
        "In which commune is your activity taking place? You can choose from the options in the dropdown menu";
      numberoffinalbeneficiaries_input = "Number of Final Beneficiaries";
      numberoffinalbeneficiaries_input_tooltip =
        "How many people are being supported by this activity?";
      numberofvolunteers_input = "Number of Volunteers";
      numberofvolunteers_input_tooltip =
        "How many volunteers are engaged with this activity?";
      startdate_input = "Start Date";
      startdate_input_tooltip = "Please enter the start date of your activity";
      enddate_input = "End Date";
      enddate_input_tooltip = "Please enter the end date of your activity";
      typeofactivity_input = "* Type of activity";
      typeofactivity_input_tooltip =
        "What is the type of your activity? You can choose the most fitting from the types listed in the dropdown menu.";
      typeofactivityList_list = typeofactivityList;
      empenrolledsupvol_input = "Employers enrolled supporting volunteers";
      empenrolledsupvol_input_tooltip =
        "How many volunteers have joined the activity through Employer Supported Volunteering. Employer Supported Volunteers means when an employer in any sector or field support the organisation's staff to take part in volunteering opportunities, which can be during work hours.";
      sdg_tooltip =
        "The Sustainable Development Goals (SDGs) are 17 goals created by the UN to transform our world in a more positive direction. You can choose below which SDGs your activity is supporting by ticking one or more boxes.";
      SDGList_list = SDGList;
      vol_ben_title = "Volunteer Beneficiaries";
      vol_ben_title_tooltip =
        "What is the nature of volunteers benefitting from your activity? You can choose one or more categories below by clicking on the boxes.";
      volunteerBeneficiariesList_list = volunteerBeneficiariesList;
      finalBen_input = "Final Beneficiaries";
      finalBen_input_tooltip =
        "What is the nature of final beneficiaries from your activity? A final beneficiary is a person that to some extent benefits from or is impacted by your activity. You can choose one or more categories below by clicking on the boxes.";
      finalBeneficiariesList_list = finalBeneficiariesList;
      skills_input = "Skills gained by volunteers with this action";
      skills_input_tooltip =
        "Which skills are your volunteers gaining by being part of your activity? You can choose one or more options below by clicking on the boxes";
      skillsList_list = skillsList;
      decarbonisation_title = "Decarbonisation measures";
      plant_tree_title = "Plant Tree";
      opennumberofdonors_title = "Open planted trees";
      savingplan_title = "Energetic saving plan";
      openenergywastesaved_title = "Open energy waste saved";
      rec_cons_title = "Recycling and reusing consumables";
      percentageconsumables_title = "Open percentage of 4R consumables";
      mat_money_exp_title = "Materials money expense";
      materiaexpenses_title = "Open new material total expenses";
      rec_and_reu = "Recycling and reusing equipment";
      open_per_4_eq_title = "Open percentage of 4R equipmen";
      low_mov_carb_title = "Low carbon mobility";
      percentageoveralltrips_title =
        "Open percentage of low carbon options overall trips";
      button_submit = "GENERATE AN ACTIVITY";
      otherskill_placeholder = "Add other skill";
      otherFB_placeholder = "Add other final beneficiary";
      break;
  }

  return (
    <>
      <HeadContent title="Activity Form" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <InputText
              label={activity_input}
              validation={(e: any) => validateActivity(e, lang)}
              required={true}
              name="activity"
              changeHandler={changeActivity}
              value={activity}
              clearError={() => {}}
              withTooltip={true}
              tooltip={activity_input_tooltip}
              tooltipTop="-4rem"
            />
            <SelectInput
              list={programmes}
              name={"programme"}
              title={programme_input}
              defaultValue={""}
              handleSelect={changeProgramme}
              withTooltip={true}
              tooltip={programme_input_tooltip}
              tooltipTop="-5rem"
            />
            <InputText
              label={total_hour_input}
              type="number"
              validation={() => true}
              required={false}
              name="totalhours"
              defaultValue=""
              changeHandler={changeTotalhours}
              value={totalHours}
              clearError={() => {}}
              withTooltip={false}
              tooltip={total_hour_input_tooltip}
              tooltipTop="-5rem"
            />
            <ComboBox
              title={country_input}
              list={countriesList}
              id={"countriesList"}
              onChange={changeCountry}
              value={country}
              withTooltip={true}
              tooltip={country_input_tooltip}
              tooltipTop="-5rem"
            />
            <ComboBox
              title={region_input}
              list={regions}
              onChange={changeRegion}
              id={"regions"}
              value={region}
              withTooltip={true}
              tooltip={region_input_tooltip}
              tooltipTop="-5rem"
            />
            <ComboBox
              title={locality_input}
              list={localities}
              id={"localities"}
              onChange={changeLocality}
              value={locality}
              withTooltip={true}
              tooltip={locality_input_tooltip}
              tooltipTop="-5rem"
            />
            <InputText
              label={numberoffinalbeneficiaries_input}
              type="number"
              validation={() => true}
              required={false}
              name="numberoffinalbeneficiaries"
              defaultValue=""
              changeHandler={changeNumberoffinalben}
              value={numberOfFinalBen}
              clearError={() => {}}
              withTooltip={true}
              tooltip={numberoffinalbeneficiaries_input_tooltip}
              tooltipTop="-4rem"
            />
            <InputText
              label={numberofvolunteers_input}
              type="number"
              validation={() => true}
              required={false}
              name="numberofvolunteers"
              changeHandler={changeNumberOfVol}
              value={numberOfVol}
              defaultValue=""
              clearError={() => {}}
              withTooltip={true}
              tooltip={numberofvolunteers_input_tooltip}
              tooltipTop="-4rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={startdate_input}
              name={"startdate"}
              defaultValue={""}
              changeHandler={changeStartDate}
              value={startDate}
              disabled={false}
              withTooltip={true}
              tooltip={startdate_input_tooltip}
              tooltipTop="-3rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={false}
              label={enddate_input}
              name={"enddate"}
              changeHandler={changeEndDate}
              value={endDate}
              defaultValue={""}
              disabled={false}
              withTooltip={true}
              tooltip={enddate_input_tooltip}
              tooltipTop="-3rem"
            />
            <ComboBox
              title={typeofactivity_input}
              list={typeofactivityList_list}
              id={"typeofactivityList"}
              onChange={changeTypeOfActivity}
              value={typeOfAct}
              withTooltip={true}
              tooltip={typeofactivity_input_tooltip}
              tooltipTop="-5rem"
            />
            {/*<ComboBox
              title="* SDG"
              list={SDGList}
              onChange={changeSdg}
              value={sdg}
              id={"sdgList"}
  />*/}
            <InputText
              label={empenrolledsupvol_input}
              type="number"
              validation={() => true}
              required={false}
              name="empenrolledsupvol"
              defaultValue=""
              changeHandler={changeEmpEnrolledSupVol}
              value={empEnrolledSupVol}
              clearError={() => {}}
              withTooltip={true}
              tooltip={empenrolledsupvol_input_tooltip}
              tooltipTop="-9rem"
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={SDGList_list}
              title="SDG"
              changeHandler={changeSDGs}
              checksArr={sdgs}
              withTooltip={true}
              tooltip={sdg_tooltip}
              tooltipTop="-7rem"
            />
          </div>
          {/*
            <div className="multiples-cont">
              <MultiplesOptions
                list={volunteerBeneficiariesList_list}
                title={vol_ben_title}
                changeHandler={changeVolunteerBeneficiaries}
                checksArr={volunteerBeneficiaries}
                withTooltip={true}
                tooltip={vol_ben_title_tooltip}
                tooltipTop="-7rem"
              />
            </div>
            */}
          <div className="multiples-cont">
            <MultiplesOptions
              list={finalBeneficiariesList_list}
              title={finalBen_input}
              changeHandler={changeFinalBen}
              checksArr={finalBen}
              withTooltip={true}
              tooltip={finalBen_input_tooltip}
              tooltipTop="-8rem"
            />
            <TextareaInput
              name="otherFB"
              handleCommentChange={handleFBChange}
              placeholder={otherFB_placeholder}
              comment={otherFB}
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={skillsList_list}
              title={skills_input}
              changeHandler={changeSkills}
              checksArr={skills}
              withTooltip={true}
              tooltip={skills_input_tooltip}
              tooltipTop="-7rem"
            />
            <TextareaInput
              name="otherSkill"
              handleCommentChange={handleSkillChange}
              placeholder={otherskill_placeholder}
              comment={otherSkill}
            />
          </div>
          <div className="measures-cont">
            <label>{decarbonisation_title}</label>
            <div className="form-decarbon">
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedPlantTree}
                      onChange={handleChangePlantTree}
                    />
                  }
                  label={plant_tree_title}
                />
                {checkedPlantTree && (
                  <>
                    <InputText
                      label={opennumberofdonors_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="opennumberofdonors"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={changeOpenNumOfDonors}
                      value={numberOfDonors}
                    />
                  </>
                )}
              </div>
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedSavingPlan}
                      onChange={handleChangeSavingPlan}
                    />
                  }
                  label={savingplan_title}
                />
                {checkedSavingPlan && (
                  <>
                    <InputText
                      label={openenergywastesaved_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="openenergywastesaved"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={changeOpenWasted}
                      value={energyWasted}
                    />
                  </>
                )}
              </div>
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedRecyclingConsumables}
                      onChange={handleChangeRecyclingConsumables}
                    />
                  }
                  label={rec_cons_title}
                />
                {checkedRecyclingConsumables && (
                  <>
                    <InputText
                      label={percentageconsumables_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="percentageconsumables"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={chagePercCons}
                      value={percCons}
                    />
                  </>
                )}
              </div>
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedMaterialExpenses}
                      onChange={handleChangeMaterialExpenses}
                    />
                  }
                  label={mat_money_exp_title}
                />
                {checkedMaterialExpenses && (
                  <>
                    <InputText
                      label={materiaexpenses_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="materiaexpenses"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={changeMatExp}
                      value={matExpenses}
                    />
                  </>
                )}
              </div>
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedRecyclingEquipment}
                      onChange={handleChangeRecyclingEquipment}
                    />
                  }
                  label={rec_and_reu}
                />
                {checkedRecyclingEquipment && (
                  <>
                    <InputText
                      label={open_per_4_eq_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="percentageequipmen"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={changePercEq}
                      value={percEq}
                    />
                  </>
                )}
              </div>
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedCarbon}
                      onChange={handleChangeCarbon}
                    />
                  }
                  label={low_mov_carb_title}
                />
                {checkedCarbon && (
                  <>
                    <InputText
                      label={percentageoveralltrips_title}
                      type="number"
                      validation={() => true}
                      required={true}
                      name="percentageoveralltrips"
                      defaultValue=""
                      clearError={() => {}}
                      changeHandler={changePercGeo}
                      value={percGeo}
                    />
                  </>
                )}
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
              {loading ? <ButtonLoader /> : button_submit}
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

        label {
          text-align: center;
          color: #1565c0;
          font-weight: 700;
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

        .form,
        .form-decarbon {
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

        .form-decarbon {
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
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

        .multiples-cont {
          width: 100%;
          max-width: 80rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 1.5rem;
          justify-self: center;
          box-sizing: border-box;
        }

        .measures-cont {
          width: 100%;
          max-width: 80rem;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 1.5rem;
          justify-content: center;
          justify-self: center;
          box-sizing: border-box;
        }

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
          }

          .form,
          .form-decarbon {
            grid-template-columns: 1fr;
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

ActivityONGRegistration.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);

  if (!isValid || decoded?.type !== "ONG") {
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
      ongId: decoded?.id,
      lang: context.query.lang,
    },
  };
};

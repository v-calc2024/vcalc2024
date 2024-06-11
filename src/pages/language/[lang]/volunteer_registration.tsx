import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { UploadProfileImage } from "@/components/Particles/forms/uploadProfileImage";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import Button from "@mui/material/Button";
import {
  caringResponsibilityList,
  caringResponsibilityList_es,
  caringResponsibilityList_fr,
  caringResponsibilityList_hr,
  disabilityList,
  disabilityList_es,
  disabilityList_fr,
  disabilityList_hr,
  disabilityList_sq,
  employeeVolunteerList,
  employeeVolunteerList_es,
  employeeVolunteerList_fr,
  employeeVolunteerList_hr,
  employeeVolunteerList_sq,
  employmentList,
  employmentList_es,
  employmentList_fr,
  employmentList_hr,
  employmentList_sq,
  genderList,
  genderList_es,
  genderList_fr,
  genderList_hr,
  genderList_sq,
  getYears,
  raceList,
  raceList_es,
  raceList_fr,
  raceList_hr,
  raceList_sq,
  volunteeredBeforeList,
  volunteeredBeforeList_es,
  volunteeredBeforeList_fr,
  volunteeredBeforeList_hr,
  volunteeredBeforeList_sq,
} from "@/mockups/volunteer_registration";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { useVolunteerForm } from "@/hooks/useVolunteerForm";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import {
  validateName,
  validateSurname,
  validateVolunteerEmail,
} from "@/utils/volunteer_validations";
import {
  passwordValidator,
  repeatPasswordValidator,
} from "@/utils/passwordValidator";
import { ReactElement, useEffect, useState } from "react";
import { getAllOng } from "@/services/ong/getAllOng";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { validateJwt } from "@/utils/validateJwt";

export default function VolunteerRegistration({ lang }: any) {
  const {
    handleSubmit,
    setFile,
    file,
    countriesList,
    changeCountry,
    regions,
    changeRegion,
    localities,
    changeLocality,
    checked18,
    handleChange18,
    checkedPolicy,
    handleChangePolicy,
    loading,
    name,
    changeName,
    surname,
    changeSurname,
    email,
    changeEmail,
    password,
    changePassword,
    repeatpassword,
    changeResetpassword,
    age,
    changeAge,
    changeGender,
    gender,
    changeOrganisation,
    changeDisability,
    changeEmployment,
    changeCaringresponsibility,
    changeVolunteeredbefore,
    country,
    region,
    locality,
    changeRaceSel,
    raceSel,
    errors,
    changeOther,
    other,
    changeOtherRace,
    otherRace,
    changeEmployeeVol,
  } = useVolunteerForm({ lang });

  const [organisations, setOrganisations] = useState([]);

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
      .catch((err: any) => {})
      .finally(() => {});
  }, []);

  let title = "Volunteer Registration";
  let name_input = "First Name";
  let name_input_tooltip = "Please provide here your first name(s)";
  let surname_input = "Surname";
  let surname_input_tooltip = "Please provide here your surname";
  let email_input = "Email";
  let email_input_tooltip =
    "Please provide here the email address that you would like create an account with";
  let password_input = "Password";
  let password_input_tooltip =
    "Please create your personal password. The password is for your use only and should not be shared with anyone. We recommend 8-character minimum length.";
  let repeatpassword_input = "Repeat Password";
  let repeatpassword_input_tooltip =
    "Please repeat your personal password here";
  let age_input = "* Year of Birth";
  let age_input_tooltip = "Please provide here the year in which you were born";
  let org_input = "Organisation";
  let org_input_tooltip =
    "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation here please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
  let gender_input = "Gender";
  let gender_input_tooltip =
    "Please select the gender that you identify with or select 'prefer not to say' in case you do not want to share";
  let genderList_list = genderList;
  let other_input = "Other";
  let disability_input = "* Disability";
  let disability_input_tooltip = `A disability is a physical or mental impairment which has a substantial 
  and long-term adverse effect on a person’s ability to carry out normal day-to-day 
  activities. Please identify if you have a disability or select 'prefer not to say' in case you do not want to share`;
  let disabilityList_list = disabilityList;
  let employment_input = "Employment";
  let employment_input_tooltip =
    "Please identify if you are currently employed or not";
  let employmentList_list = employmentList;
  let caring_resp_input = "* Caring responsibility";
  let caring_resp_input_tooltip =
    "A carer is anyone who gives unpaid care to a family member, partner or friend who could not cope without their support. This may be due to a long-term illness, disability, a mental health condition, or an addiction. Please identify if your are having a Caring Responsbility or select 'prefer not to say' if you do not want to share";
  let caringResponsibilityList_list = caringResponsibilityList;
  let volunteered_before_input = "* Volunteered before";
  let volunteered_before_input_tooltip =
    "Have you at any given time in your life been volunteering before this current experience?";
  let volunteeredBeforeList_list = volunteeredBeforeList;
  let country_input = "* Country";
  let country_input_tooltip =
    "What is your country of residence? You can choose from the countries in the dropdown menu";
  let region_input = "* Region";
  let region_input_tooltip =
    "Which region of your country of residence do you live in? You can choose from the regions in the dropdown menu.";
  let locality_input = "Locality";
  let locality_input_tooltip =
    "Which commune do you live in? You can choose from the options in the dropdown menu.";
  let ethical_input = "* Ethical background / Identity";
  let ethical_input_tooltip =
    "Please select below you identify as belonging to or select 'prefer not to say' if you do not want to share";
  let raceList_list = raceList;
  let terms_cond_title = "Confirm over 18 years old";
  let policy_title = "I accept the Privacy Policy Terms";
  let submit_button_text = "Create a Volunteer account";
  let employeeVol_input = "* Employee Volunteer";
  let employeeVol_input_tooltip =
    "Please indicate if you are engaging in this volunteer opportunity as part of an initiative supported by your employer?";
  let employeeVolunteerList_list = employeeVolunteerList;

  switch (lang) {
    case "es":
      title = "Registro de voluntarios";
      name_input = "Nombres";
      name_input_tooltip = "";
      surname_input = "Apellido";
      surname_input_tooltip = "Por favor proporcione aquí su apellido";
      email_input = "Email";
      email_input_tooltip =
        "Proporcione aquí la dirección de correo electrónico con la que desea crear una cuenta.";
      password_input = "Contraseña";
      password_input_tooltip =
        "Por favor cree su contraseña personal. La contraseña es para su uso exclusivo y no debe compartirse con nadie. Recomendamos una longitud mínima de 8 caracteres.";
      repeatpassword_input = "Repetir Contraseña";
      repeatpassword_input_tooltip =
        "Por favor repita su contraseña personal aquí";
      age_input = "* Año de nacimiento";
      age_input_tooltip = "Indique aquí el año en el que nació";
      org_input = "Organización";
      org_input_tooltip =
        "¿A qué organización u otra entidad está afiliado mediante el uso de la plataforma V-CALC? Puede elegir entre las organizaciones enumeradas en el menú desplegable. Si no encuentra su organización aquí, comuníquese con su supervisor voluntario o a través de vcalc@ voluntariadoimpact.eu.";
      gender_input = "* Género";
      gender_input_tooltip =
        "Por favor selecciona el género con el que te identificas o selecciona 'prefiero no decirlo' en caso de que no quieras compartir";
      genderList_list = genderList_es;
      other_input = "Otro";
      disability_input = "* Discapacidad";
      disability_input_tooltip = `Una discapacidad es un impedimento físico o mental que tiene un impacto sustancial
      y efecto adverso a largo plazo sobre la capacidad de una persona para llevar a cabo el día a día normal.
      actividades. Por favor identifique si tiene alguna discapacidad o seleccione 'prefiero no decir' en caso de que no quiera compartir`;
      disabilityList_list = disabilityList_es;
      employment_input = "Empleo";
      employment_input_tooltip =
        "Por favor identifique si actualmente está empleado o no";
      employmentList_list = employmentList_es;
      caring_resp_input = "* Responsabilidad solidaria";
      caring_resp_input_tooltip =
        "Un cuidador es cualquier persona que brinda cuidados no remunerados a un familiar, pareja o amigo que no podría arreglárselas sin su apoyo. Esto puede deberse a una enfermedad a largo plazo, una discapacidad, una condición de salud mental o una adicción. Identifique si tienes una Responsabilidad de Cuidar o selecciona 'prefiero no decir' si no quieres compartir";
      caringResponsibilityList_list = caringResponsibilityList_es;
      volunteered_before_input = "* Fue voluntario antes";
      volunteered_before_input_tooltip =
        "¿En algún momento de su vida ha sido voluntario antes de esta experiencia actual?";
      volunteeredBeforeList_list = volunteeredBeforeList_es;
      country_input = "* País";
      country_input_tooltip =
        "¿Cuál es tu país de residencia? Puedes elegir entre los países en el menú desplegable";
      region_input = "* Region";
      region_input_tooltip =
        "¿En qué región de su país de residencia vive? Puede elegir entre las regiones en el menú desplegable.";
      locality_input = "Localidad";
      locality_input_tooltip =
        "¿En qué comuna vives? Puedes elegir entre las opciones en el menú desplegable.";
      ethical_input = "* Antecedentes éticos / Identidad";
      ethical_input_tooltip =
        "Por favor seleccione a continuación que se identifica como perteneciente o seleccione 'prefiero no decirlo' si no desea compartir";
      raceList_list = raceList_es;
      terms_cond_title = "Confirmar mayores de 18 años";
      policy_title = "Acepto los Términos de la Política de Privacidad";
      submit_button_text = "Crear una cuenta de voluntario";
      employeeVol_input = "* Empleado voluntario";
      employeeVol_input_tooltip =
        "Indique si participa en esta oportunidad de voluntariado como parte de una iniciativa apoyada por su empleador.";
      employeeVolunteerList_list = employeeVolunteerList_es;
      break;
    case "fr":
      title = "Inscription des bénévoles";
      name_input = "Prénom";
      name_input_tooltip = "Veuillez indiquer ici votre (vos) prénom(s)";
      surname_input = "Nom de famille";
      surname_input_tooltip = "Veuillez indiquer ici votre nom de famille";
      email_input = "E-mail";
      email_input_tooltip =
        "Veuillez indiquer ici l'adresse e-mail avec laquelle vous souhaitez créer un compte";
      password_input = "Mot de passe";
      password_input_tooltip =
        "Veuillez créer votre mot de passe personnel. Le mot de passe est destiné à votre usage uniquement et ne doit être partagé avec personne. Nous recommandons une longueur minimale de 8 caractères.";
      repeatpassword_input = "Répéter le mot de passe";
      repeatpassword_input_tooltip =
        "Veuillez répéter votre mot de passe personnel ici";
      age_input = "* Année de naissance";
      age_input_tooltip = "Veuillez indiquer ici l'année de votre naissance";
      org_input = "Organisation";
      org_input_tooltip =
        "À quelle organisation ou autre entité êtes-vous affilié via votre utilisation de la plateforme V-CALC. Vous pouvez choisir parmi les organisations répertoriées dans le menu déroulant. Si vous ne trouvez pas votre organisation ici, veuillez contacter votre superviseur de bénévoles ou via vcalc@ volontaireingimpact.eu.";
      gender_input = "* Sexe";
      gender_input_tooltip =
        "Veuillez sélectionner le sexe auquel vous vous identifiez ou sélectionnez 'Je préfère ne pas le dire' au cas où vous ne souhaiteriez pas partager";
      genderList_list = genderList_fr;
      other_input = "Autre";
      disability_input = "* Handicap";
      disability_input_tooltip = `Un handicap est une déficience physique ou mentale qui a une
      et effet néfaste à long terme sur la capacité d’une personne à mener à bien ses activités quotidiennes normales
      activités. Veuillez identifier si vous avez un handicap ou sélectionnez « préférez ne pas dire » au cas où vous ne souhaiteriez pas partager`;
      disabilityList_list = disabilityList_fr;
      employment_input = "Emploi";
      employment_input_tooltip =
        "Veuillez indiquer si vous êtes actuellement employé ou non";
      employmentList_list = employmentList_fr;
      caring_resp_input = "* Responsabilité de bienveillance";
      caring_resp_input_tooltip =
        "Un soignant est toute personne qui prodigue des soins non rémunérés à un membre de la famille, un partenaire ou un ami qui ne pourrait pas s'en sortir sans son soutien. Cela peut être dû à une maladie de longue durée, un handicap, un problème de santé mentale ou une dépendance. Veuillez identifier si vous avez une responsabilité de soins ou sélectionnez « préfère ne pas dire » si vous ne souhaitez pas partager";
      caringResponsibilityList_list = caringResponsibilityList_fr;
      volunteered_before_input = "* A déjà été bénévole";
      volunteered_before_input_tooltip =
        "Avez-vous, à un moment donné de votre vie, fait du bénévolat avant cette expérience actuelle ?";
      volunteeredBeforeList_list = volunteeredBeforeList_fr;
      country_input = "* Pays";
      country_input_tooltip =
        "Quel est votre pays de résidence ? Vous pouvez choisir parmi les pays dans le menu déroulant";
      region_input = "* Région";
      region_input_tooltip =
        "Dans quelle région de votre pays de résidence habitez-vous ? Vous pouvez choisir parmi les régions dans le menu déroulant.";
      locality_input = "Localité";
      locality_input_tooltip =
        "Dans quelle commune habitez-vous ? Vous pouvez choisir parmi les options du menu déroulant.";
      ethical_input = "* Contexte éthique / Identité";
      ethical_input_tooltip =
        "Veuillez sélectionner ci-dessous à laquelle vous vous identifiez comme appartenant à ou sélectionnez « préfère ne pas dire » si vous ne souhaitez pas partager";
      raceList_list = raceList_fr;
      terms_cond_title = "Confirmer plus de 18 ans";
      policy_title =
        "J'accepte les conditions de la politique de confidentialité";
      submit_button_text = "Créer un compte bénévole";
      employeeVol_input = "* Employé bénévole";
      employeeVol_input_tooltip =
        "Veuillez indiquer si vous participez à cette opportunité de bénévolat dans le cadre d'une initiative soutenue par votre employeur ?";
      employeeVolunteerList_list = employeeVolunteerList_fr;
      break;
    case "hr":
      title = "Prijava volontera";
      name_input = "Prezime";
      name_input_tooltip = "Ovdje navedite svoje ime(na)";
      surname_input = "Surname";
      surname_input_tooltip = "Ovdje unesite svoje prezime";
      email_input = "elektronička pošta";
      email_input_tooltip =
        "Ovdje navedite adresu e-pošte s kojom želite otvoriti račun";
      password_input = "Lozinka";
      password_input_tooltip =
        "Molimo kreirajte svoju osobnu lozinku. Lozinka je samo za vašu upotrebu i ne smijete je dijeliti ni s kim. Preporučujemo minimalnu duljinu od 8 znakova.";
      repeatpassword_input = "Ponovi lozinku";
      repeatpassword_input_tooltip = "Ovdje ponovite svoju osobnu lozinku";
      age_input = "* Godina rođenja";
      age_input_tooltip = "Ovdje unesite godinu u kojoj ste rođeni";
      org_input = "Organizacija";
      org_input_tooltip =
        "S kojom organizacijom ili drugim subjektom ste povezani korištenjem platforme V-CALC. Možete birati između organizacija navedenih u padajućem izborniku. Ako ovdje ne pronađete svoju organizaciju, obratite se svom supervizoru volontera ili putem vcalc@ volunteeringimpact.eu.";
      gender_input = "* Spol";
      gender_input_tooltip =
        "Molimo odaberite spol s kojim se identificirate ili odaberite 'ne želim reći' u slučaju da ne želite dijeliti";
      genderList_list = genderList_hr;
      other_input = "Ostalo";
      disability_input = "* Invaliditet";
      disability_input_tooltip = `Invaliditet je fizičko ili mentalno oštećenje koje ima značajan
      i dugoročni štetni učinak na sposobnost osobe da obavlja normalnu svakodnevicu
      aktivnosti. Navedite imate li invaliditet ili odaberite 'ne želim reći' u slučaju da ne želite dijeliti`;
      disabilityList_list = disabilityList_hr;
      employment_input = "Zapošljavanje";
      employment_input_tooltip =
        "Molimo da navedete jeste li trenutno zaposleni ili ne";
      employmentList_list = employmentList_hr;
      caring_resp_input = "* Odgovornost brige";
      caring_resp_input_tooltip =
        "Njegovatelj je svatko tko pruža neplaćenu skrb članu obitelji, partneru ili prijatelju koji se ne bi mogao nositi bez njihove podrške. To može biti posljedica dugotrajne bolesti, invaliditeta, mentalnog zdravstvenog stanja ili ovisnosti. Navedite ako imate odgovornost za skrb ili odaberite 'ne želim reći' ako ne želite dijeliti";
      caringResponsibilityList_list = caringResponsibilityList_hr;
      volunteered_before_input = "* Volontirao prije";
      volunteered_before_input_tooltip =
        "Jeste li ikada u životu volontirali prije ovog trenutnog iskustva?";
      volunteeredBeforeList_list = volunteeredBeforeList_hr;
      country_input = "* Država";
      country_input_tooltip =
        "Koja je vaša zemlja prebivališta? Možete birati između zemalja u padajućem izborniku";
      region_input = "* Regija";
      region_input_tooltip =
        "U kojoj regiji vaše zemlje prebivališta živite? Možete birati između regija u padajućem izborniku.";
      locality_input = "Lokalitet";
      locality_input_tooltip =
        "U kojoj općini živite? Možete birati između opcija u padajućem izborniku.";
      ethical_input = "* Etička pozadina / Identitet";
      ethical_input_tooltip =
        "Odaberite u nastavku za koji se identificirate ili odaberite 'ne želim reći' ako ne želite dijeliti";
      raceList_list = raceList_hr;
      terms_cond_title = "Potvrda stariji od 18 godina";
      policy_title = "Prihvaćam uvjete Politike privatnosti";
      submit_button_text = "Napravite volonterski račun";
      employeeVol_input = "* Zaposlenik volonter";
      employeeVol_input_tooltip =
        "Molimo navedite uključujete li se u ovu mogućnost volontiranja kao dio inicijative koju podržava vaš poslodavac?";
      employeeVolunteerList_list = employeeVolunteerList_hr;
      break;
    case "sq":
      title = "Regjistrimi i vullnetarëve";
      name_input = "Emri";
      name_input_tooltip = "Ju lutemi jepni këtu emrat tuaj të parë";
      surname_input = "Mbiemri";
      surname_input_tooltip = "Ju lutemi jepni këtu mbiemrin tuaj";
      email_input = "Email";
      email_input_tooltip =
        "Ju lutemi jepni këtu adresën e emailit me të cilën dëshironi të krijoni një llogari";
      password_input = "Fjalëkalim";
      password_input_tooltip =
        "Ju lutemi krijoni fjalëkalimin tuaj personal. Fjalëkalimi është vetëm për përdorimin tuaj dhe nuk duhet të ndahet me askënd. Ne rekomandojmë gjatësinë minimale prej 8 karakteresh.";
      repeatpassword_input = "Përsëris fjalëkalimin";
      repeatpassword_input_tooltip =
        "Ju lutemi përsërisni fjalëkalimin tuaj personal këtu";
      age_input = "* Viti i lindjes";
      age_input_tooltip = "Ju lutemi jepni këtu vitin në të cilin keni lindur";
      org_input = "Organizata";
      org_input_tooltip =
        "Me cilën organizatë ose entitet tjetër jeni të lidhur nëpërmjet përdorimit të platformës V-CALC. Ju mund të zgjidhni nga organizatat e listuara në menunë rënëse. Nëse nuk e gjeni organizatën tuaj këtu, ju lutemi kontaktoni mbikëqyrësin tuaj vullnetar ose përmes vcalc@ volunteeringimpact.eu.";
      gender_input = "* Gjinia";
      gender_input_tooltip =
        "Ju lutemi zgjidhni gjininë me të cilën identifikoheni ose zgjidhni 'preferoni të mos thoni' në rast se nuk dëshironi të ndani";
      genderList_list = genderList_sq;
      other_input = "Të tjera";
      disability_input = "* Aftësia e kufizuar";
      disability_input_tooltip = `Një paaftësi është një dëmtim fizik ose mendor që ka një
      dhe efekti negativ afatgjatë në aftësinë e një personi për të kryer normale çdo ditë
      aktivitetet. Ju lutemi identifikoni nëse keni një paaftësi ose zgjidhni 'preferoni të mos thoni' në rast se nuk dëshironi të ndani`;
      disabilityList_list = disabilityList_sq;
      employment_input = "Punësim";
      employment_input_tooltip =
        "Ju lutemi identifikoni nëse jeni aktualisht i punësuar apo jo";
      employmentList_list = employmentList_sq;
      caring_resp_input = "* Përgjegjësia e kujdesit";
      caring_resp_input_tooltip =
        "Një kujdestar është kushdo që i jep kujdes të papaguar një anëtari të familjes, partnerit ose mikut i cili nuk mund të përballonte pa mbështetjen e tyre. Kjo mund të jetë për shkak të një sëmundjeje afatgjatë, paaftësie, një gjendje të shëndetit mendor ose një varësie. Ju lutemi identifikoni nëse ju keni një Përgjegjësi Kujdesi ose zgjidhni 'preferoni të mos thoni' nëse nuk doni të ndani";
      caringResponsibilityList_list = caringResponsibilityList;
      volunteered_before_input = "* Vullnetarizuar më parë";
      volunteered_before_input_tooltip =
        "A keni qenë në ndonjë moment të caktuar në jetën tuaj vullnetar përpara kësaj përvoje aktuale?";
      volunteeredBeforeList_list = volunteeredBeforeList_sq;
      country_input = "* Vendi";
      country_input_tooltip =
        "Cili është vendi juaj i banimit? Mund të zgjidhni nga vendet në menunë rënëse";
      region_input = "* Rajoni";
      region_input_tooltip =
        "Në cilin rajon të vendit tuaj të banimit jetoni? Mund të zgjidhni nga rajonet në menunë rënëse.";
      locality_input = "Lokalitet";
      locality_input_tooltip =
        "Në cilën komunë jetoni? Mund të zgjidhni nga opsionet në menunë rënëse.";
      ethical_input = "* Sfondi etik / Identiteti";
      ethical_input_tooltip =
        "Ju lutemi zgjidhni më poshtë që identifikoni se i përkisni ose zgjidhni 'preferoni të mos thoni' nëse nuk dëshironi të ndani";
      raceList_list = raceList_sq;
      terms_cond_title = "Konfirmoni mbi 18 vjeç";
      policy_title = "Unë pranoj Kushtet e Politikës së Privatësisë";
      submit_button_text = "Krijo një llogari vullnetare";
      employeeVol_input = "* Punonjës Vullnetar";
      employeeVol_input_tooltip =
        "Ju lutemi tregoni nëse jeni duke u angazhuar në këtë mundësi vullnetare si pjesë e një nisme të mbështetur nga punëdhënësi juaj?";
      employeeVolunteerList_list = employeeVolunteerList_sq;
      break;
    default:
      title = "Volunteer Registration";
      name_input = "First Name";
      name_input_tooltip = "Please provide here your first name(s)";
      surname_input = "Surname";
      surname_input_tooltip = "Please provide here your surname";
      email_input = "Email";
      email_input_tooltip =
        "Please provide here the email address that you would like create an account with";
      password_input = "Password";
      password_input_tooltip =
        "Please create your personal password. The password is for your use only and should not be shared with anyone. We recommend 8-character minimum length.";
      repeatpassword_input = "Repeat Password";
      repeatpassword_input_tooltip =
        "Please repeat your personal password here";
      age_input = "* Year of Birth";
      age_input_tooltip = "Please provide here the year in which you were born";
      org_input = "Organisation";
      org_input_tooltip =
        "Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation here please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu.";
      gender_input = "* Gender";
      gender_input_tooltip =
        "Please select the gender that you identify with or select 'prefer not to say' in case you do not want to share";
      genderList_list = genderList;
      other_input = "Other";
      disability_input = "* Disability";
      disability_input_tooltip = `A disability is a physical or mental impairment which has a substantial 
  and long-term adverse effect on a person’s ability to carry out normal day-to-day 
  activities. Please identify if you have a disability or select 'prefer not to say' in case you do not want to share`;
      disabilityList_list = disabilityList;
      employment_input = "Employment";
      employment_input_tooltip =
        "Please identify if you are currently employed or not";
      employmentList_list = employmentList;
      caring_resp_input = "* Caring responsibility";
      caring_resp_input_tooltip =
        "A carer is anyone who gives unpaid care to a family member, partner or friend who could not cope without their support. This may be due to a long-term illness, disability, a mental health condition, or an addiction. Please identify if your are having a Caring Responsbility or select 'prefer not to say' if you do not want to share";
      caringResponsibilityList_list = caringResponsibilityList;
      volunteered_before_input = "* Volunteered before";
      volunteered_before_input_tooltip =
        "Have you at any given time in your life been volunteering before this current experience?";
      volunteeredBeforeList_list = volunteeredBeforeList;
      country_input = "* Country";
      country_input_tooltip =
        "What is your country of residence? You can choose from the countries in the dropdown menu";
      region_input = "* Region";
      region_input_tooltip =
        "Which region of your country of residence do you live in? You can choose from the regions in the dropdown menu.";
      locality_input = "Locality";
      locality_input_tooltip =
        "Which commune do you live in? You can choose from the options in the dropdown menu.";
      ethical_input = "* Ethical background / Identity";
      ethical_input_tooltip =
        "Please select below you identify as belonging to or select 'prefer not to say' if you do not want to share";
      raceList_list = raceList;
      terms_cond_title = "Confirm over 18 years old";
      policy_title = "I accept the Privacy Policy Terms";
      submit_button_text = "Create a Volunteer account";
      employeeVol_input = "* Employee Volunteer";
      employeeVol_input_tooltip =
        "Please indicate if you are engaging in this volunteer opportunity as part of an initiative supported by your employer?";
      employeeVolunteerList_list = employeeVolunteerList;
      break;
  }

  return (
    <>
      <HeadContent title="Volunteer Registration" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="upload">
            <UploadProfileImage setFile={setFile} file={file} />
          </div>
          <div className="form">
            <div className="row">
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
              />
              <InputText
                label={surname_input}
                validation={(e: any) => validateSurname(e, lang)}
                required={true}
                name="surname"
                changeHandler={changeSurname}
                value={surname}
                clearError={() => {}}
                withTooltip={true}
                tooltip={surname_input_tooltip}
              />
            </div>
            <div className="row">
              <InputText
                label={email_input}
                validation={(e: any) => validateVolunteerEmail(e, lang)}
                required={true}
                name="email"
                changeHandler={changeEmail}
                value={email}
                clearError={() => {}}
                withTooltip={true}
                tooltip={email_input_tooltip}
                tooltipTop="-4rem"
              />
              <InputText
                label={password_input}
                validation={(e: any) => passwordValidator(e, lang)}
                required={true}
                name="password"
                type="password"
                changeHandler={changePassword}
                value={password}
                clearError={() => {}}
                withTooltip={true}
                tooltip={password_input_tooltip}
                tooltipTop="-5rem"
              />
              <InputText
                label={repeatpassword_input}
                validation={(e: any) =>
                  repeatPasswordValidator(password, repeatpassword, lang)
                }
                required={true}
                name="repeatpassword"
                type="password"
                changeHandler={changeResetpassword}
                value={repeatpassword}
                clearError={() => {}}
                withTooltip={true}
                tooltip={repeatpassword_input_tooltip}
              />
            </div>
            <div className="row">
              <SelectInput
                list={getYears()}
                name={"age"}
                title={age_input}
                defaultValue={""}
                handleSelect={changeAge}
                withTooltip={true}
                tooltip={age_input_tooltip}
                tooltipTop="-4rem"
              />
              <SelectInput
                list={genderList_list}
                name={"gender"}
                title={gender_input}
                defaultValue={""}
                handleSelect={changeGender}
                withTooltip={true}
                tooltip={gender_input_tooltip}
                tooltipTop="-5rem"
              />
              <InputText
                label={other_input}
                validation={() => {}}
                required={false}
                disabled={gender !== "05"}
                name="other"
                type="text"
                changeHandler={changeOther}
                value={other}
                clearError={() => {}}
                withTooltip={false}
              />
            </div>
            <div className="row">
              <SelectInput
                list={organisations}
                name={"organisation"}
                title={org_input}
                defaultValue={""}
                handleSelect={changeOrganisation}
                withTooltip={true}
                tooltip={org_input_tooltip}
                tooltipTop="-9rem"
              />
              <SelectInput
                list={disabilityList_list}
                name={"disability"}
                title={disability_input}
                defaultValue={""}
                handleSelect={changeDisability}
                withTooltip={true}
                tooltip={disability_input_tooltip}
                tooltipTop="-9rem"
              />
              <SelectInput
                list={employmentList_list}
                name={"employment"}
                title={employment_input}
                defaultValue={""}
                handleSelect={changeEmployment}
                withTooltip={true}
                tooltip={employment_input_tooltip}
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <SelectInput
                list={caringResponsibilityList_list}
                name={"caringresponsibility"}
                title={caring_resp_input}
                defaultValue={""}
                handleSelect={changeCaringresponsibility}
                withTooltip={true}
                tooltip={caring_resp_input_tooltip}
                tooltipTop="-10rem"
              />
              <SelectInput
                list={volunteeredBeforeList_list}
                name={"volunteeredbefore"}
                title={volunteered_before_input}
                defaultValue={""}
                handleSelect={changeVolunteeredbefore}
                withTooltip={true}
                tooltip={volunteered_before_input_tooltip}
                tooltipTop="-4rem"
              />
              <SelectInput
                list={employeeVolunteerList_list}
                name={"employeeVol"}
                title={employeeVol_input}
                defaultValue={""}
                handleSelect={changeEmployeeVol}
                withTooltip={true}
                tooltip={employeeVol_input_tooltip}
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
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
            </div>
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={raceList_list}
              title={ethical_input}
              changeHandler={changeRaceSel}
              checksArr={raceSel}
              withTooltip={true}
              tooltip={ethical_input_tooltip}
              tooltipTop="-6rem"
            />
            <InputText
              label={"Other"}
              validation={() => {}}
              required={false}
              name="other_race"
              type="text"
              changeHandler={changeOtherRace}
              value={otherRace}
              clearError={() => {}}
              withTooltip={false}
            />
          </div>
          <div className="terms-conditions">
            <FormControlLabel
              control={
                <Checkbox checked={checked18} onChange={handleChange18} />
              }
              label={terms_cond_title}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedPolicy}
                  onChange={handleChangePolicy}
                />
              }
              label={policy_title}
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
              {loading ? <ButtonLoader /> : submit_button_text}
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
          grid-template-rows: repeat(2, max-content);
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

        .row {
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
          padding-top: 1rem;
          padding-bottom: 3rem;
          border-bottom: solid 1px #e9e9e9;
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
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 2rem;
          grid-row-gap: 2rem;
          justify-self: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .multiples-cont {
          width: 100%;
          max-width: 80rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 1.5rem;
          justify-self: center;
          padding-top: 1rem;
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

        @media (max-width: 800px) {
          h1 {
            font-size: 1.5rem;
          }

          .form,
          .row,
          .funding-type {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .form,
          .row,
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

VolunteerRegistration.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);

  if (isValid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { lang: context.query.lang } };
};

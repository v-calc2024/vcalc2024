import { HeadContent } from "@/components/Particles/HeaderContent";
import { Header } from "@/components/Organisms/Header";
import { InputText } from "@/components/Particles/forms/TextInput";
import { UploadProfileImage } from "@/components/Particles/forms/uploadProfileImage";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import { Footer } from "@/components/Organisms/Footer";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { useNGOForm } from "@/hooks/useNGOForm";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import {
  organisationObjetivesList,
  organisationObjetivesList_es,
  organisationObjetivesList_fr,
  organisationObjetivesList_hr,
  organisationObjetivesList_sq,
} from "@/mockups/ngo_registration";
import { validateOngEmail, validateOngName } from "@/utils/ong_validations";
import {
  passwordValidator,
  repeatPasswordValidator,
} from "@/utils/passwordValidator";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { validateJwt } from "@/utils/validateJwt";
import {
  annualIncomeList,
  annualIncomeList_es,
  annualIncomeList_fr,
  annualIncomeList_hr,
  annualIncomeList_sq,
} from "@/mockups/activity_ong_registration";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";

export default function NGORegistration({ lang }: any) {
  const {
    handleSubmit,
    setFile,
    file,
    changeName,
    name,
    changeEmail,
    email,
    changePassword,
    password,
    changeResetPassword,
    repeatpassword,
    changeEmployees,
    employees,
    changeHourWages,
    hourWages,
    changeVolunteers,
    volunteers,
    changeAnnualincome,
    annualincome,
    countriesList,
    changeCountry,
    country,
    regions,
    changeRegion,
    region,
    localities,
    changeLocality,
    locality,
    checkedFundraising,
    handleChangeFundraising,
    changeOpennumberofdonors,
    opennumberofdonors,
    changeOpentotalamountfundraising,
    opentotalamountfundraising,
    checkedMembership,
    handleChangeMembership,
    changeOpennumberofmembers,
    opennumberofmembers,
    changeOpentotalamountmembership,
    opentotalamountmembership,
    checkedPolicy,
    handleChangePolicy,
    loading,
    changeOrgObjetives,
    orgObjetives,
    errors,
    comment,
    changeComment,
  } = useNGOForm({ lang });

  let title = "My Profile";
  let organisation_input = "Organisation name";
  let organisation_input_tooltip =
    "Please provide here your organisation's official name";
  let email_input = "Email";
  let email_input_tooltip =
    "Please provide here the email address that you would like to create an account with";
  let password_input = "Password";
  let password_input_tooltip =
    "Please create your personal password. The password is for your use only and should not be shared with anyone. We recommend 8-character minimum length.";
  let repeat_password_input = "Password";
  let repeat_password_input_tooltip =
    "Please repeat your personal password here";
  let employees_input = "Employees";
  let employees_input_tooltip =
    "How many members of staff full time equivalent does your organisation have at the time of creating your profile?";
  let volunteers_input = "Volunteers";
  let volunteers_input_tooltip =
    "How many individual volunteers does your organisation have at the time of creating your profile?";
  let annual_income_input = "Annual Income";
  let annual_income_input_tooltip =
    "What is the estimated annual income of your organisation?";
  let hour_wage_input = "Country minimum wage (€)";
  let hour_wage_input_tooltip =
    "What is the estimated average hourly wage for the employees in your organisation?";
  let country_input = "* Country";
  let country_input_tooltip =
    "Which country is your organisation based in? You can choose from the countries in the dropdown menu";
  let region_input = "* Region";
  let region_input_tooltip =
    "Which region is your organisation based in? You can choose from the regions in the dropdown menu";
  let locality_input = "Locality";
  let locality_input_tooltip =
    "Which commune is your organisation located in? You can choose from the options in the dropdown menu";
  let membership_input = "Membership";
  let fundraising_input = "Fundraising";
  let open_number_donor_input = "Open number of donors";
  let open_total_amount_input = "Open total amount";
  let organisation_obj_input = "Organisation objective";
  let organisation_obj_input_tooltip =
    "What are the key objectives of your organisation? You can choose between the options below by ticking the boxes. You may choose more than one.";
  let open_number_member_input = "Open number of members";
  let open_total_amount_member_input = "Open total amount";
  let annual_income_list = annualIncomeList;
  let organisationObjetivesList_list = organisationObjetivesList;
  let policy_priv = "I accept the Privacy Policy";
  let accept_btn = "Create a NGO account";
  let otherObjectives_placeholder = "Add Others Organisation Objectives";

  switch (lang) {
    case "es":
      title = "Mi Perfil";
      organisation_input = "Nombre de organización";
      organisation_input_tooltip =
        "Por favor proporcione aquí el nombre oficial de su organización.";
      email_input = "Email";
      email_input_tooltip =
        "Por favor proporcione aquí la dirección de correo electrónico";
      password_input = "Contraseña";
      password_input_tooltip =
        "Por favor cree su contraseña personal. La contraseña es para su uso exclusivo y no debe compartirse con nadie. Recomendamos una longitud mínima de 8 caracteres.";
      repeat_password_input = "Repetir Contraseña";
      repeat_password_input_tooltip =
        "Por favor repita su contraseña personal aquí";
      employees_input = "Empleados";
      employees_input_tooltip =
        "¿Cuántos miembros del personal equivalente a tiempo completo tiene su organización al momento de crear su perfil?";
      volunteers_input = "Voluntarios";
      volunteers_input_tooltip =
        "¿Cuántos voluntarios individuales tiene su organización al momento de crear su perfil?";
      annual_income_input = "Ingresos anuales";
      annual_income_input_tooltip =
        "¿Cuál es el ingreso anual estimado de su organización?";
      hour_wage_input = "Salario mínimo del país (€)";
      hour_wage_input_tooltip =
        "¿Cuál es el salario medio por hora estimado de los empleados de su organización?";
      country_input = "* País";
      country_input_tooltip =
        "¿En qué país tiene su sede su organización? Puedes elegir entre los países en el menú desplegable.";
      region_input = "* Región";
      region_input_tooltip =
        "¿En qué región tiene su sede su organización? Puede elegir entre las regiones en el menú desplegable";
      locality_input = "Localidad";
      locality_input_tooltip =
        "¿En qué comuna está ubicada su organización? Puede elegir entre las opciones en el menú desplegable.";
      membership_input = "Afiliación";
      fundraising_input = "Fundación";
      organisation_obj_input = "Objetivo de la organización";
      organisation_obj_input_tooltip =
        "¿Cuáles son los objetivos clave de su organización? Puede elegir entre las siguientes opciones marcando las casillas. Puedes elegir más de uno.";
      open_number_donor_input = "Número abierto de donantes";
      open_total_amount_input = "Monto total abierto";
      open_total_amount_member_input = "Monto total abierto";
      open_number_member_input = "Número abierto de miembros";
      annual_income_list = annualIncomeList_es;
      organisationObjetivesList_list = organisationObjetivesList_es;
      policy_priv = "Acepto las políticas de privacidad";
      accept_btn = "Crear una cuenta de ONG";
      otherObjectives_placeholder = "Agregar otros objetivos de organización";
      break;
    case "fr":
      title = "Mon profil";
      organisation_input = "Nom de l'organisme";
      organisation_input_tooltip =
        "Veuillez indiquer ici le nom officiel de votre organisation";
      email_input = "E-mail";
      email_input_tooltip =
        "Veuillez indiquer ici l'adresse e-mail avec laquelle vous souhaitez créer un compte";
      password_input = "Mot de passe";
      password_input_tooltip =
        "Veuillez créer votre mot de passe personnel. Le mot de passe est destiné à votre usage uniquement et ne doit être partagé avec personne. Nous recommandons une longueur minimale de 8 caractères.";
      repeat_password_input = "Répéter le mot de passe";
      repeat_password_input_tooltip =
        "Veuillez répéter votre mot de passe personnel ici";
      employees_input = "Employées";
      employees_input_tooltip =
        "De combien de membres du personnel équivalent temps plein votre organisation compte-t-elle au moment de la création de votre profil ?";
      volunteers_input = "Bénévoles";
      volunteers_input_tooltip =
        "De combien de bénévoles individuels votre organisation dispose-t-elle au moment de la création de votre profil ?";
      annual_income_input = "Revenu annuel";
      annual_income_input_tooltip =
        "Quel est le revenu annuel estimé de votre organisation ?";
      hour_wage_input = "Salaire minimum du pays (€)";
      hour_wage_input_tooltip =
        "Quel est le salaire horaire moyen estimé des employés de votre organisation ?";
      country_input = "* Pays";
      country_input_tooltip =
        "Dans quel pays votre organisation est-elle basée ? Vous pouvez choisir parmi les pays dans le menu déroulant";
      region_input = "* Région";
      region_input_tooltip =
        "Dans quelle région votre organisation est-elle basée ? Vous pouvez choisir parmi les régions dans le menu déroulant";
      locality_input = "Localité";
      locality_input_tooltip =
        "Dans quelle commune votre organisation est-elle implantée ? Vous pouvez choisir parmi les options du menu déroulant";
      membership_input = "Adhésion";
      fundraising_input = "Collecte de fonds";
      organisation_obj_input = "Objectif de l'organisation";
      organisation_obj_input_tooltip =
        "Quels sont les objectifs clés de votre organisation ? Vous pouvez choisir entre les options ci-dessous en cochant les cases. Vous pouvez en choisir plusieurs.";
      open_number_donor_input = "Nombre ouvert de donateurs";
      open_total_amount_input = "Montant total ouvert";
      open_total_amount_member_input = "Montant total ouvert";
      open_number_member_input = "Nombre ouvert de membres";
      annual_income_list = annualIncomeList_fr;
      organisationObjetivesList_list = organisationObjetivesList_fr;
      policy_priv = "J'accepte la politique de confidentialité";
      accept_btn = "Créer un compte ONG";
      otherObjectives_placeholder =
        "Ajouter d'autres objectifs de l'organisation";
      break;
    case "hr":
      title = "Moj profil";
      organisation_input = "Ime organizacije";
      organisation_input_tooltip =
        "Ovdje navedite službeni naziv vaše organizacije";
      email_input = "E-mail";
      email_input_tooltip =
        "Ovdje navedite adresu e-pošte s kojom želite otvoriti račun";
      password_input = "Lozinka";
      password_input_tooltip =
        "Molimo kreirajte svoju osobnu lozinku. Lozinka je samo za vašu upotrebu i ne smijete je dijeliti ni s kim. Preporučujemo minimalnu duljinu od 8 znakova.";
      repeat_password_input = "Ponovi lozinku";
      repeat_password_input_tooltip = "Ovdje ponovite svoju osobnu lozinku";
      employees_input = "Zaposlenici";
      employees_input_tooltip =
        "Koliko članova osoblja u ekvivalentu punog radnog vremena vaša organizacija ima u trenutku stvaranja vašeg profila?";
      volunteers_input = "volonteri";
      volunteers_input_tooltip =
        "Koliko pojedinačnih volontera vaša organizacija ima u trenutku izrade vašeg profila?";
      annual_income_input = "Godišnji prihod";
      annual_income_input_tooltip =
        "Quel est le revenu annuel estimé de votre organisation ?";
      hour_wage_input = "Minimalna plaća u zemlji (€)";
      hour_wage_input_tooltip =
        "Kolika je procijenjena prosječna plaća po satu za zaposlenike u vašoj organizaciji?";
      country_input = "* Zemlja";
      country_input_tooltip =
        "U kojoj je zemlji sjedište vaše organizacije? Možete birati između zemalja u padajućem izborniku";
      region_input = "* Regija";
      region_input_tooltip =
        "U kojoj je regiji sjedište vaše organizacije? Možete birati između regija u padajućem izborniku";
      locality_input = "Mjesto";
      locality_input_tooltip =
        "U kojoj se općini nalazi vaša organizacija? Možete birati između opcija u padajućem izborniku";
      membership_input = "Adhésion";
      fundraising_input = "Prikupljanje sredstava";
      organisation_obj_input = "Organizacijski cilj";
      organisation_obj_input_tooltip =
        "Koji su ključni ciljevi vaše organizacije? Možete birati između opcija u nastavku označavanjem kućica. Možete odabrati više od jednog.";
      open_number_donor_input = "Otvoreni broj donatora";
      open_total_amount_input = "Otvorite ukupni iznos";
      open_total_amount_member_input = "Otvorite ukupni iznos";
      open_number_member_input = "Otvoreni broj članova";
      annual_income_list = annualIncomeList_hr;
      organisationObjetivesList_list = organisationObjetivesList_hr;
      policy_priv = "Prihvaćam Politiku privatnosti";
      accept_btn = "Napravite NVO račun";
      otherObjectives_placeholder = "Dodaj druge Ciljeve organizacije";
      break;
    case "sq":
      title = "Profili im";
      organisation_input = "Emri i organizatës";
      email_input = "Email";
      email_input_tooltip =
        "Ju lutemi jepni këtu adresën e emailit me të cilën dëshironi të krijoni një llogari";
      password_input = "Fjalëkalimi";
      password_input_tooltip =
        "Ju lutemi krijoni fjalëkalimin tuaj personal. Fjalëkalimi është vetëm për përdorimin tuaj dhe nuk duhet të ndahet me askënd. Ne rekomandojmë gjatësinë minimale prej 8 karakteresh.";
      repeat_password_input = "Përsëritni fjalëkalimin";
      repeat_password_input_tooltip =
        "Ju lutemi përsërisni fjalëkalimin tuaj personal këtu";
      employees_input = "Punonjësit";
      employees_input_tooltip =
        "Sa anëtarë të stafit ekuivalent me kohë të plotë ka organizata juaj në kohën e krijimit të profilit tuaj?";
      volunteers_input = "Vullnetarët";
      volunteers_input_tooltip =
        "Sa vullnetarë individualë ka organizata juaj në kohën e krijimit të profilit tuaj?";
      annual_income_input = "Të ardhurat vjetore";
      annual_income_input_tooltip =
        "Cilat janë të ardhurat vjetore të vlerësuara të organizatës suaj?";
      hour_wage_input = "Paga minimale e vendit (€)";
      hour_wage_input_tooltip =
        "Cila është paga mesatare e vlerësuar për orë për punonjësit në organizatën tuaj?";
      country_input = "* Vendi";
      country_input_tooltip =
        "Në cilin shtet e ka bazën organizata juaj? Ju mund të zgjidhni nga vendet në menunë rënëse";
      region_input = "* Rajon";
      region_input_tooltip =
        "Në cilin rajon e ka bazën organizata juaj? Ju mund të zgjidhni nga rajonet në menunë rënëse";
      locality_input = "Lokaliteti";
      locality_input_tooltip =
        "Në cilën komunë ndodhet organizata juaj? Ju mund të zgjidhni nga opsionet në menunë rënëse";
      membership_input = "Anëtarësimi";
      fundraising_input = "Mbledhja e fondeve";
      organisation_obj_input = "Objektivi i organizatës";
      organisation_obj_input_tooltip =
        "Koji su ključni ciljevi vaše organizacije? Možete birati između opcija u nastavku označavanjem kućica. Možete odabrati više od jednog.";
      open_number_donor_input = "Numri i hapur i donatorëve";
      open_total_amount_input = "Hapni shumën totale";
      open_total_amount_member_input = "Hapni shumën totale";
      open_number_member_input = "Numri i hapur i anëtarëve";
      annual_income_list = annualIncomeList_sq;
      organisationObjetivesList_list = organisationObjetivesList_sq;
      policy_priv = "Unë pranoj Politikën e Privatësisë";
      accept_btn = "Krijo një llogari të OJQ-së";
      otherObjectives_placeholder = "Shtoni të tjerë Objektivat e Organizatës";
      break;
    default:
      title = "My Profile";
      organisation_input = "Organisation name";
      organisation_input_tooltip =
        "Ju lutemi jepni këtu emrin zyrtar të organizatës suaj";
      email_input = "Email";
      email_input_tooltip =
        "Please provide here the email address that you would like to create an account with";
      password_input = "Password";
      password_input_tooltip =
        "Please create your personal password. The password is for your use only and should not be shared with anyone. We recommend 8-character minimum length.";
      repeat_password_input = "Password";
      repeat_password_input_tooltip =
        "Please repeat your personal password here";
      employees_input = "Employees";
      employees_input_tooltip =
        "How many members of staff full time equivalent does your organisation have at the time of creating your profile?";
      volunteers_input = "Volunteers";
      volunteers_input_tooltip =
        "How many individual volunteers does your organisation have at the time of creating your profile?";
      annual_income_input = "Annual Income";
      annual_income_input_tooltip =
        "What is the estimated annual income of your organisation?";
      hour_wage_input = "Country minimum wage (€)";
      hour_wage_input_tooltip =
        "What is the estimated average hourly wage for the employees in your organisation?";
      country_input = "* Country";
      country_input_tooltip =
        "Which country is your organisation based in? You can choose from the countries in the dropdown menu";
      region_input = "* Region";
      region_input_tooltip =
        "Which region is your organisation based in? You can choose from the regions in the dropdown menu";
      locality_input = "Locality";
      locality_input_tooltip =
        "Which commune is your organisation located in? You can choose from the options in the dropdown menu";
      membership_input = "Membership";
      fundraising_input = "Fundraising";
      organisation_obj_input = "Organisation objective";
      organisation_obj_input_tooltip =
        "Cilat janë objektivat kryesore të organizatës suaj? Ju mund të zgjidhni midis opsioneve të mëposhtme duke shënuar kutitë. Ju mund të zgjidhni më shumë se një.";
      open_number_donor_input = "Open number of donors";
      open_total_amount_input = "Open total amount";
      open_total_amount_member_input = "Open total amount";
      open_number_member_input = "Open number of members";
      annual_income_list = annualIncomeList;
      organisationObjetivesList_list = organisationObjetivesList;
      policy_priv = "I accept the Privacy Policy";
      accept_btn = "Create a NGO account";
      otherObjectives_placeholder = "Add Others Organisation Objectives";
      break;
  }

  async function validateName(name: string, lang?: any) {
    const nameError = await validateOngName(name, lang);
    return nameError;
  }

  async function validateEmail(name: string, lang?: any) {
    const emailError = await validateOngEmail(name, lang);
    return emailError;
  }

  return (
    <>
      <HeadContent title="My Profile" />
      <main>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="upload">
            <UploadProfileImage setFile={setFile} file={file} />
          </div>
          <div className="form">
            <div className="row">
              <InputText
                label={organisation_input}
                validation={(e: any) => validateName(e, lang)}
                required={true}
                name="name"
                changeHandler={changeName}
                value={name}
                clearError={() => {}}
                withTooltip={true}
                tooltip={organisation_input_tooltip}
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <InputText
                label={email_input}
                validation={(e: any) => validateEmail(e, lang)}
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
                label={repeat_password_input}
                validation={(e: any) =>
                  repeatPasswordValidator(password, repeatpassword, lang)
                }
                required={true}
                name="repeatpassword"
                type="password"
                changeHandler={changeResetPassword}
                value={repeatpassword}
                clearError={() => {}}
                withTooltip={true}
                tooltip={repeat_password_input_tooltip}
              />
            </div>
            <div className="row">
              <InputText
                label={employees_input}
                type="number"
                validation={() => true}
                required={true}
                name="employees"
                defaultValue=""
                changeHandler={changeEmployees}
                value={employees}
                clearError={() => {}}
                withTooltip={true}
                tooltip={employees_input_tooltip}
                tooltipTop="-5rem"
              />
              <InputText
                label={volunteers_input}
                type="number"
                validation={() => true}
                required={true}
                name="volunteers"
                defaultValue=""
                changeHandler={changeVolunteers}
                value={volunteers}
                clearError={() => {}}
                withTooltip={true}
                tooltip={volunteers_input_tooltip}
                tooltipTop="-5rem"
              />
              <SelectInput
                list={annual_income_list}
                name={"annualincome"}
                title={annual_income_input}
                defaultValue={""}
                handleSelect={changeAnnualincome}
                withTooltip={true}
                tooltip={annual_income_input_tooltip}
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <InputText
                label={`${hour_wage_input} (€)`}
                type="number"
                validation={() => true}
                required={true}
                name="hourwages"
                defaultValue=""
                changeHandler={changeHourWages}
                value={hourWages}
                clearError={() => {}}
                withTooltip={false}
                tooltip={hour_wage_input_tooltip}
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
          <div className="funding-type">
            <div className="item">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedFundraising}
                    onChange={handleChangeFundraising}
                  />
                }
                label={fundraising_input}
              />
              {checkedFundraising && (
                <>
                  <InputText
                    label={open_number_donor_input}
                    type="number"
                    validation={() => true}
                    required={true}
                    name="opennumberofdonors"
                    defaultValue=""
                    changeHandler={changeOpennumberofdonors}
                    value={opennumberofdonors}
                    clearError={() => {}}
                  />
                  <InputText
                    label={open_total_amount_input}
                    type="number"
                    validation={() => true}
                    required={true}
                    name="opentotalamountfundraising"
                    defaultValue=""
                    changeHandler={changeOpentotalamountfundraising}
                    value={opentotalamountfundraising}
                    clearError={() => {}}
                  />
                </>
              )}
            </div>
            <div className="item">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedMembership}
                    onChange={handleChangeMembership}
                  />
                }
                label={membership_input}
              />
              {checkedMembership && (
                <>
                  <InputText
                    label={open_number_member_input}
                    type="number"
                    validation={() => true}
                    required={true}
                    name="opennumberofmembers"
                    defaultValue=""
                    changeHandler={changeOpennumberofmembers}
                    value={opennumberofmembers}
                    clearError={() => {}}
                  />
                  <InputText
                    label={open_total_amount_member_input}
                    type="number"
                    validation={() => true}
                    required={true}
                    name="opentotalamountmembership"
                    defaultValue=""
                    changeHandler={changeOpentotalamountmembership}
                    value={opentotalamountmembership}
                    clearError={() => {}}
                  />
                </>
              )}
            </div>
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={organisationObjetivesList_list}
              title={organisation_obj_input}
              changeHandler={changeOrgObjetives}
              checksArr={orgObjetives}
              withTooltip={true}
              tooltip={organisation_obj_input_tooltip}
              tooltipTop="-6rem"
            />
            <TextareaInput
              name="otherObjectives"
              handleCommentChange={changeComment}
              comment={comment}
              placeholder={otherObjectives_placeholder}
            />
          </div>
          <div className="terms-conditions">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedPolicy}
                  onChange={handleChangePolicy}
                />
              }
              label={policy_priv}
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
              {loading ? <ButtonLoader /> : accept_btn}
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

        .terms-conditions {
          width: max-content;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          justify-self: center;
          box-sizing: border-box;
        }

        .buttonCont {
          width: max-content;
          height: max-content;
          justify-self: center;
          box-sizing: border-box;
        }

        .funding-type {
          width: 100%;
          max-width: 65rem;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 2rem;
          grid-row-gap: 2rem;
          padding-top: 1rem;
          justify-self: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .funding-type .item {
          width: 100%;
          height: max-content;
          min-height: 100%;
          border: solid 1px #bed9f3;
          border-radius: 0.6rem;
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 1.5rem;
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
          box-sizing: border-box;
        }

        @media (max-width: 1183px) {
          .funding-type {
            max-width: 42rem;
          }
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
          .row {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}

NGORegistration.getLayout = function getLayout(page: ReactElement) {
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

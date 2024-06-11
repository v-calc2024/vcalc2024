import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { UploadProfileImage } from "@/components/Particles/forms/uploadProfileImage";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import Button from "@mui/material/Button";
import {
  caringResponsibilityList,
  disabilityList,
  employeeVolunteerList,
  employmentList,
  genderList,
  getYears,
  raceList,
  volunteeredBeforeList,
} from "@/mockups/volunteer_registration";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import { validateName, validateSurname } from "@/utils/volunteer_validations";
import {
  passwordValidator,
  repeatPasswordValidator,
} from "@/utils/passwordValidator";
import { ReactElement, useEffect, useState } from "react";
import { getAllOng } from "@/services/ong/getAllOng";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { validateJwt } from "@/utils/validateJwt";
import { useMyProfile } from "@/hooks/useMyProfile";
import { validateOngNameById } from "@/utils/ong_validations";
import Modal from "@mui/material/Modal";
import { DeleteVol } from "@/components/Particles/Popups/DeleteVol";
import React from "react";

export default function MyProfile({ decoded }: any) {
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
    changeOther,
    other,
    changeOrganisation,
    organisation,
    changeDisability,
    disability,
    changeEmployment,
    employment,
    changeCaringresponsibility,
    caringresponsibility,
    changeVolunteeredbefore,
    volunteeredbefore,
    country,
    region,
    locality,
    changeRaceSel,
    raceSel,
    errors,
    handleOpen,
    handleClose,
    open,
    changeOtherRace,
    otherRace,
    changeEmployeeVol,
  } = useMyProfile({ decoded, lang: undefined });

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

  return (
    <>
      <HeadContent title="My Profile" />
      <main>
        <h1>My Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="upload">
            <UploadProfileImage
              setFile={setFile}
              file={file}
              urlImage={decoded.image}
            />
          </div>
          <div className="form">
            <div className="row">
              <InputText
                label="First Name"
                validation={validateName}
                required={true}
                name="name"
                changeHandler={changeName}
                value={name}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please provide here your first name(s)"
              />
              <InputText
                label="Surname"
                validation={validateSurname}
                required={true}
                name="surname"
                changeHandler={changeSurname}
                value={surname}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please provide here your surname"
              />
            </div>
            <div className="row">
              <InputText
                label="Email"
                validation={validateOngNameById}
                required={true}
                name="email"
                changeHandler={changeEmail}
                value={email}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please provide here the email address that you would like create an account with"
                tooltipTop="-4rem"
              />
              <InputText
                label="Password"
                validation={passwordValidator}
                required={true}
                name="password"
                type="password"
                changeHandler={changePassword}
                value={password}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please create your personal password. The password is for your use only and should not be shared with anyone. We recommend 8-character minimum length."
                tooltipTop="-5rem"
              />
              <InputText
                label="Repeat Password"
                validation={() =>
                  repeatPasswordValidator(password, repeatpassword)
                }
                required={true}
                name="repeatpassword"
                type="password"
                changeHandler={changeResetpassword}
                value={repeatpassword}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please repeat your personal password here"
              />
            </div>
            <div className="row">
              <SelectInput
                list={getYears()}
                name={"age"}
                title="* Year of Birth"
                defaultValue={age}
                handleSelect={changeAge}
                withTooltip={true}
                tooltip="Please provide here the year in which you were born"
                tooltipTop="-4rem"
              />
              <SelectInput
                list={genderList}
                name={"gender"}
                title="* Gender"
                defaultValue={gender}
                handleSelect={changeGender}
                withTooltip={true}
                tooltip="Please select the gender that you identify with or select 'prefer not to say' in case you do not want to share"
                tooltipTop="-5rem"
              />
              <InputText
                label={"Other"}
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
                title="* Organisation"
                defaultValue={organisation}
                handleSelect={changeOrganisation}
                withTooltip={true}
                tooltip="Which organisation or other entity are you affiliated with through your use of the V-CALC platform. You can choose from the organsations listed in the dropdown menu. If you don't find your organisation here please contact your volunteer supervisor or through vcalc@volunteeringimpact.eu."
                tooltipTop="-9rem"
              />
              <SelectInput
                list={disabilityList}
                name={"disability"}
                title="* Disability"
                defaultValue={disability}
                handleSelect={changeDisability}
                withTooltip={true}
                tooltip="A disability is a physical or mental impairment which has a substantial 
                and long-term adverse effect on a person’s ability to carry out normal day-to-day 
                activities. Please identify if you have a disability or select 'prefer not to say' in case you do not want to share"
                tooltipTop="-9rem"
              />
              <SelectInput
                list={employmentList}
                name={"employment"}
                title="* Employment"
                defaultValue={employment}
                handleSelect={changeEmployment}
                withTooltip={true}
                tooltip="Please identify if you are currently employed or not"
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <SelectInput
                list={caringResponsibilityList}
                name={"caringresponsibility"}
                title="* Caring responsibility"
                defaultValue={caringresponsibility}
                handleSelect={changeCaringresponsibility}
                withTooltip={true}
                tooltip="A carer is anyone who gives unpaid care to a family member, partner or friend who could not cope without their support. This may be due to a long-term illness, disability, a mental health condition, or an addiction. Please identify if your are having a Caring Responsbility or select 'prefer not to say' if you do not want to share"
                tooltipTop="-10rem"
              />
              <SelectInput
                list={volunteeredBeforeList}
                name={"volunteeredbefore"}
                title="* Volunteered before"
                defaultValue={volunteeredbefore}
                handleSelect={changeVolunteeredbefore}
                withTooltip={true}
                tooltip="Have you at any given time in your life been volunteering before this current experience?"
                tooltipTop="-4rem"
              />
              <SelectInput
                list={employeeVolunteerList}
                name={"employeeVol"}
                title="* Employee Volunteer"
                defaultValue={""}
                handleSelect={changeEmployeeVol}
                withTooltip={true}
                tooltip="Please indicate if you are engaging in this volunteer opportunity as part of an initiative supported by your employer?"
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <ComboBox
                title="* Country"
                list={countriesList}
                id={"countriesList"}
                onChange={changeCountry}
                value={country}
                withTooltip={true}
                tooltip="What is your country of residence? You can choose from the countries in the dropdown menu"
                tooltipTop="-5rem"
              />
              <ComboBox
                title="* Region"
                list={regions}
                onChange={changeRegion}
                id={"regions"}
                value={region}
                withTooltip={true}
                tooltip="Which region of your country of residence do you live in? You can choose from the regions in the dropdown menu."
                tooltipTop="-5rem"
              />
              <ComboBox
                title="Locality"
                list={localities}
                id={"localities"}
                onChange={changeLocality}
                value={locality}
                withTooltip={true}
                tooltip="Which commune do you live in? You can choose from the options in the dropdown menu. "
                tooltipTop="-5rem"
              />
            </div>
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={raceList}
              title="* Ethical background / Identity"
              changeHandler={changeRaceSel}
              checksArr={raceSel}
              withTooltip={true}
              tooltip="Please select below you identify as belonging to or select 'prefer not to say' if you do not want to share"
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
              {loading ? <ButtonLoader /> : "Update my account"}
            </Button>
          </div>
        </form>
        <div className="popup-button-container">
          <Button
            sx={{
              color: "grey",
              fontSize: "0.7rem",
              backgroundColor: "#e3e2e2",
              borderRadius: "1rem",
              marginBottom: "1.5rem",
              padding: "0.5rem 0.8rem",
            }}
            className="popup-button"
            onClick={handleOpen}
          >
            Stop Volunteering
          </Button>
        </div>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <React.Fragment>
          <DeleteVol handleClose={handleClose} decoded={decoded} />
        </React.Fragment>
      </Modal>
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
          margin-top: 2rem 0;
          padding: 0 5rem;
          margin-bottom: 1.5rem;
          box-sizing: border-box;
        }

        .popup-button-container {
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: center;
          justify-self: flex-start;
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

          form {
            padding: 0 1rem;
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

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);

  if (!isValid) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { decoded } };
};

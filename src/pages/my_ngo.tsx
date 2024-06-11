import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { UploadProfileImage } from "@/components/Particles/forms/uploadProfileImage";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import { organisationObjetivesList } from "@/mockups/ngo_registration";
import {
  validateOngName,
  validateUpdateONGEmail,
} from "@/utils/ong_validations";
import {
  passwordValidator,
  repeatPasswordValidator,
} from "@/utils/passwordValidator";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { validateJwt } from "@/utils/validateJwt";
import { annualIncomeList } from "@/mockups/activity_ong_registration";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import { useMyNGOForm } from "@/hooks/useMyNGOForm";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";

export default function MyNGO({ decoded }: any) {
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
    loading,
    changeOrgObjetives,
    orgObjetives,
    errors,
    changeComment,
    comment,
  } = useMyNGOForm({ decoded, lang: undefined });

  async function validateName(name: string) {
    const nameError = await validateOngName(name);
    return nameError;
  }

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
              urlImage={decoded?.image || null}
            />
          </div>
          <div className="form">
            <div className="row">
              <InputText
                label="Organisation name"
                validation={validateName}
                required={true}
                name="name"
                changeHandler={changeName}
                value={name}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please provide here your organisation's official name"
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <InputText
                label="Email"
                validation={validateUpdateONGEmail}
                required={true}
                name="email"
                changeHandler={changeEmail}
                value={email}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please provide here the email address that you would like to create an account with"
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
                changeHandler={changeResetPassword}
                value={repeatpassword}
                clearError={() => {}}
                withTooltip={true}
                tooltip="Please repeat your personal password here"
              />
            </div>
            <div className="row">
              <InputText
                label="Employees"
                type="number"
                validation={() => true}
                required={true}
                name="employees"
                defaultValue=""
                changeHandler={changeEmployees}
                value={employees}
                clearError={() => {}}
                withTooltip={true}
                tooltip="How many members of staff full time equivalent does your organisation have at the time of creating your profile?"
                tooltipTop="-5rem"
              />
              <InputText
                label="Volunteers"
                type="number"
                validation={() => true}
                required={true}
                name="volunteers"
                defaultValue=""
                changeHandler={changeVolunteers}
                value={volunteers}
                clearError={() => {}}
                withTooltip={true}
                tooltip="How many individual volunteers does your organisation have at the time of creating your profile?"
                tooltipTop="-5rem"
              />
              <SelectInput
                list={annualIncomeList}
                name={"annualincome"}
                title="Annual Income"
                defaultValue={annualincome}
                handleSelect={changeAnnualincome}
                withTooltip={true}
                tooltip="What is the estimated annual income of your organisation? "
                tooltipTop="-4rem"
              />
            </div>
            <div className="row">
              <InputText
                label="Country minimum wage (€)"
                type="number"
                validation={() => true}
                required={true}
                name="hourwages"
                defaultValue=""
                changeHandler={changeHourWages}
                value={hourWages}
                clearError={() => {}}
                withTooltip={false}
                tooltip="What is the estimated average hourly wage for the employees in your organisation?"
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
                tooltip="Which country is your organisation based in? You can choose from the countries in the dropdown menu"
                tooltipTop="-5rem"
              />
              <ComboBox
                title="* Region"
                list={regions}
                onChange={changeRegion}
                id={"regions"}
                value={region}
                withTooltip={true}
                tooltip="Which region is your organisation based in? You can choose from the regions in the dropdown menu"
                tooltipTop="-5rem"
              />
              <ComboBox
                title="Locality"
                list={localities}
                id={"localities"}
                onChange={changeLocality}
                value={locality}
                withTooltip={true}
                tooltip="Which commune is your organisation located in? You can choose from the options in the dropdown menu"
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
                label="Fundraising"
              />
              {checkedFundraising && (
                <>
                  <InputText
                    label="Open number of donors"
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
                    label="Open total amount"
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
                label="Membership"
              />
              {checkedMembership && (
                <>
                  <InputText
                    label="Open number of members"
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
                    label="Open total amount"
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
              list={organisationObjetivesList}
              title="Organisation objective"
              changeHandler={changeOrgObjetives}
              checksArr={orgObjetives}
              withTooltip={true}
              tooltip="What are the key objectives of your organisation? You can choose between the options below by ticking the boxes. You may choose more than one."
              tooltipTop="-6rem"
            />
            <TextareaInput
              name="otherObjectives"
              handleCommentChange={changeComment}
              comment={comment}
              placeholder={"Add Others Organisation Objectives"}
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
              {loading ? <ButtonLoader /> : "Update my NGO account"}
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

          form {
            padding: 0 1rem;
          }

          .row {
            padding-bottom: 2rem;
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
        }
      `}</style>
    </>
  );
}

MyNGO.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
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

  return { props: { decoded: decoded } };
};

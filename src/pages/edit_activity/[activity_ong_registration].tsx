import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import {
  SDGList,
  finalBeneficiariesList,
  skillsList,
  typeofactivityList,
  volunteerBeneficiariesList,
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
import { getOneActivity } from "@/services/ong_activity/getOneActivity";
import { useEditActivityOngForm } from "@/hooks/useEditActivityOngForm";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";

export default function ActivityONGRegistration({
  ongId,
  type,
  actId,
  data,
}: {
  ongId: any;
  type: any;
  actId: any;
  data: any;
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
    programme,
    handleSkillChange,
    otherSkill,
    handleFBChange,
    otherFB,
  } = useEditActivityOngForm({ actId, data, lang: undefined });

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

  return (
    <>
      <HeadContent title="Activity Form" />
      <main>
        <h1>Activity Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <InputText
              label="Activity title"
              validation={validateActivity}
              required={true}
              name="activity"
              changeHandler={changeActivity}
              value={activity}
              clearError={() => {}}
            />
            <SelectInput
              list={programmes}
              name={"programme"}
              title="* Programme"
              defaultValue={programme}
              handleSelect={changeProgramme}
            />
            <InputText
              label="Non-registered volunteers hours"
              type="number"
              validation={() => true}
              required={false}
              name="totalhours"
              defaultValue=""
              withTooltip={false}
              changeHandler={changeTotalhours}
              value={totalHours}
              clearError={() => {}}
            />
            <ComboBox
              title="* Country"
              list={countriesList}
              id={"countriesList"}
              onChange={changeCountry}
              value={country}
            />
            <ComboBox
              title="* Region"
              list={regions}
              onChange={changeRegion}
              id={"regions"}
              value={region}
            />
            <ComboBox
              title="Locality"
              list={localities}
              id={"localities"}
              onChange={changeLocality}
              value={locality}
            />
            <InputText
              label="Number of Final Beneficiaries"
              type="number"
              validation={() => true}
              required={false}
              name="numberoffinalbeneficiaries"
              defaultValue=""
              changeHandler={changeNumberoffinalben}
              value={numberOfFinalBen}
              clearError={() => {}}
            />
            <InputText
              label="Number of Volunteers"
              type="number"
              validation={() => true}
              required={false}
              name="numberofvolunteers"
              changeHandler={changeNumberOfVol}
              value={numberOfVol}
              defaultValue=""
              clearError={() => {}}
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={true}
              label={"Start Date"}
              name={"startdate"}
              defaultValue={""}
              changeHandler={changeStartDate}
              value={startDate}
              disabled={false}
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={false}
              label={"End Date"}
              name={"enddate"}
              changeHandler={changeEndDate}
              value={endDate}
              defaultValue={""}
              disabled={false}
            />
            <ComboBox
              title="* Type of activity"
              list={typeofactivityList}
              id={"typeofactivityList"}
              onChange={changeTypeOfActivity}
              value={typeOfAct}
            />
            {/*<ComboBox
              title="* SDG"
              list={SDGList}
              onChange={changeSdg}
              value={sdg}
              id={"sdgList"}
  />*/}
            <InputText
              label="Employers enrolled supporting volunteers"
              type="number"
              validation={() => true}
              required={false}
              name="empenrolledsupvol"
              defaultValue=""
              changeHandler={changeEmpEnrolledSupVol}
              value={empEnrolledSupVol}
              clearError={() => {}}
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={SDGList}
              title="SDG"
              changeHandler={changeSDGs}
              checksArr={sdgs}
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={volunteerBeneficiariesList}
              title="Volunteer Beneficiaries"
              changeHandler={changeVolunteerBeneficiaries}
              checksArr={volunteerBeneficiaries}
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={finalBeneficiariesList}
              title="Final Beneficiaries"
              changeHandler={changeFinalBen}
              checksArr={finalBen}
            />
            <TextareaInput
              name="otherFB"
              handleCommentChange={handleFBChange}
              placeholder={"Add other final benefiary"}
              comment={otherFB}
            />
          </div>
          <div className="multiples-cont">
            <MultiplesOptions
              list={skillsList}
              title="Skills gained by volunteers with this action"
              changeHandler={changeSkills}
              checksArr={skills}
            />
            <TextareaInput
              name="otherSkill"
              handleCommentChange={handleSkillChange}
              placeholder="Add other skill"
              comment={otherSkill}
            />
          </div>
          <div className="measures-cont">
            <label>Decarbonisation measures</label>
            <div className="form-decarbon">
              <div className="item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedPlantTree}
                      onChange={handleChangePlantTree}
                    />
                  }
                  label="Plant Tree"
                />
                {checkedPlantTree && (
                  <>
                    <InputText
                      label="Open planted trees"
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
                  label="Energetic saving plan"
                />
                {checkedSavingPlan && (
                  <>
                    <InputText
                      label="Open energy waste saved"
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
                  label="Recycling and reusing consumables"
                />
                {checkedRecyclingConsumables && (
                  <>
                    <InputText
                      label="Open percentage of 4R consumables"
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
                  label="Materials money expense"
                />
                {checkedMaterialExpenses && (
                  <>
                    <InputText
                      label="Open new material total expenses"
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
                  label="Recycling and reusing equipment"
                />
                {checkedRecyclingEquipment && (
                  <>
                    <InputText
                      label="Open percentage of 4R equipmen"
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
                  label="Low carbon mobility"
                />
                {checkedCarbon && (
                  <>
                    <InputText
                      label="Open percentage of low carbon options overall trips"
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
              {loading ? <ButtonLoader /> : "UPDATE ACTIVITY"}
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
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
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

  const actId = context.query?.activity_ong_registration;
  const resp = await getOneActivity(token, actId);

  if (!resp?.data?.activityOng) {
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
      data: resp?.data?.activityOng,
      actId,
    },
  };
};

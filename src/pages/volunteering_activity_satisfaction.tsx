import { HeadContent } from "@/components/Particles/HeaderContent";
import { Header } from "@/components/Organisms/Header";
import { InputText } from "@/components/Particles/forms/TextInput";
import { Footer } from "@/components/Organisms/Footer";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import {
  finalBeneficiariesList,
  locationsList,
  skillsList,
  typeofactivityList,
  volunteerBeneficiariesList,
} from "@/mockups/activity_registration";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MultiplesOptions } from "@/components/Particles/forms/MultiplesOptions";
import { useVolActSatisfaction } from "@/hooks/useVolActSatisfaction";
import TextareaInput from "@/components/Particles/forms/TextAreaInput";

export default function ActivityONGRegistration() {
  const {
    handleSubmit,
    changeLocation,
    changeTypeAct,
    activity,
    changeEnrolledEmp,
    enrolledEmp,
    checkedPlantTree,
    handleChangePlantTree,
    changeOpenNumOfDonors,
    numberOfDonors,
    checkedSavingPlan,
    handleChangeSavingPlan,
    changeOpenWasted,
    energyWasted,
    checkedRecyclingConsumables,
    handleChangeRecyclingConsumables,
    chagePercCons,
    percCons,
    checkedMaterialExpenses,
    handleChangeMaterialExpenses,
    changeMatExp,
    matExpenses,
    checkedRecyclingEquipment,
    handleChangeRecyclingEquipment,
    changePercEq,
    percEq,
    checkedCarbon,
    handleChangeCarbon,
    changePercGeo,
    percGeo,
    changeVolBeneficiaries,
    volBeneficiaries,
    changeSkills,
    skills,
    changeFinalBeneficiaries,
    finalBeneficiaries,
    loading,
    location,
    handleSkillChange,
    otherSkill,
  } = useVolActSatisfaction();
  return (
    <>
      <HeadContent title="Volunteer Registration" />
      <Header />
      <main>
        <h1>Volunteering Activity Satisfaction</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <ComboBox
              title="Location of activities"
              list={locationsList}
              id={"locationsList"}
              onChange={changeLocation}
              value={location}
            />
            <ComboBox
              title="Type of activity"
              list={typeofactivityList}
              id={"typeofactivityList"}
              onChange={changeTypeAct}
              value={activity}
            />
            <InputText
              label="Employers enrolled supporting volunteers"
              type="number"
              validation={() => true}
              required={true}
              name="enrolledemployees"
              defaultValue=""
              clearError={() => {}}
              changeHandler={changeEnrolledEmp}
              value={enrolledEmp}
            />
          </div>
          <div className="measures-cont">
            <label>Decarbonisation measures</label>
            <div className="form">
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
                  label="Recycling and reusing equipment "
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
          <div className="multiples-cont">
            <MultiplesOptions
              list={volunteerBeneficiariesList}
              title="Volunteer Beneficiaries"
              changeHandler={changeVolBeneficiaries}
              checksArr={volBeneficiaries}
            />
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
            <MultiplesOptions
              list={finalBeneficiariesList}
              title="Final Beneficiaries"
              changeHandler={changeFinalBeneficiaries}
              checksArr={finalBeneficiaries}
            />
          </div>
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
              {loading ? <ButtonLoader /> : "SUBMIT ACTIVITY IMPACT"}
            </Button>
          </div>
        </form>
        <Footer />
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

        .item {
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

        label {
          text-align: center;
          color: #1565c0;
          font-weight: 700;
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

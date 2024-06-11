import { HeadContent } from "@/components/Particles/HeaderContent";
import { InputText } from "@/components/Particles/forms/TextInput";
import { SelectInput } from "@/components/Particles/forms/SelectInput";
import Button from "@mui/material/Button";
import { ButtonLoader } from "@/components/Particles/forms/ButtonLoader";
import { DateTimeInput } from "@/components/Particles/forms/DateTimeInput";
import ComboBox from "@/components/Particles/forms/AutoCompleteInput";
import {
  levelOperationList,
  mainFundingOrganismList,
  programmeSectorList,
  programmeTypeList,
} from "@/mockups/programme_form";
import { useProgrammeForm } from "@/hooks/useProgrammeForm";
import { validateName } from "@/utils/programme";
import { validateJwt } from "@/utils/validateJwt";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";

export default function ProgrammeRegistration({ type }: any) {
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
    changeProgDelCost,
    costProgDelivery,
  } = useProgrammeForm({ lang: undefined });

  return (
    <>
      <HeadContent title="Programme Form" />
      <main>
        <h1>Programme Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <InputText
              label="Programme Name"
              validation={validateName}
              required={true}
              name="name"
              changeHandler={changeName}
              value={name}
              clearError={() => {}}
              withTooltip={true}
              tooltip="What is the name of this volunteer programme?"
              tooltipTop="-4rem"
            />
            <SelectInput
              list={levelOperationList}
              name={"leveloperation"}
              title="Level of Operation"
              defaultValue={""}
              handleSelect={changeLevelOperation}
              withTooltip={true}
              tooltip="Is this programme implemented at local, national, regional or international level? You can choose the most fitting from the levels listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <SelectInput
              list={mainFundingOrganismList}
              name={"mainFundingOrganism"}
              title="Main Funding Entity"
              defaultValue={""}
              handleSelect={changeMainFundingOrganism}
              withTooltip={true}
              tooltip="What is the nature of the main funding entity behind this programme. You can choose the most fitting from the options listed in the dropdown menu."
              tooltipTop="-6rem"
            />
            <SelectInput
              list={programmeTypeList}
              name={"programmeType"}
              title="Programme type"
              defaultValue={""}
              handleSelect={changeProgrammeType}
              withTooltip={true}
              tooltip="What is the type of this volunteer programme? You can choose the most fitting from the types listed in the dropdown menu."
              tooltipTop="-5rem"
            />
            <InputText
              label="Average Cost"
              type="number"
              validation={() => true}
              required={true}
              name="averagecost"
              defaultValue=""
              changeHandler={changeAverageCost}
              value={averageCost}
              clearError={() => {}}
              withTooltip={true}
              tooltip="What is the annual funding for the programme from the main funder identified?"
              tooltipTop="-4rem"
            />
            <ComboBox
              title="Programme sector"
              list={programmeSectorList}
              id="programmesector"
              onChange={changeProgrammeSector}
              value={programmeSector}
              withTooltip={true}
              tooltip="Which sector is your programme related to? You can choose the most fitting from the sectors listed in the dropdown menu."
              tooltipTop="-5rem"
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
              withTooltip={true}
              tooltip="Please enter the start date of your programme"
              tooltipTop="-4rem"
            />
            <DateTimeInput
              validation={() => true}
              clearError={() => {}}
              required={false}
              label={"End Date"}
              name={"enddate"}
              defaultValue={""}
              changeHandler={changeEndDate}
              value={endDate}
              disabled={false}
              withTooltip={true}
              tooltip="Please enter the end date of your programme"
              tooltipTop="-3rem"
            />
            <InputText
              label="Cost of Programme Delivery"
              type="number"
              validation={() => true}
              required={true}
              name="costProgDelivery"
              defaultValue=""
              changeHandler={changeProgDelCost}
              value={costProgDelivery}
              clearError={() => {}}
              withTooltip={true}
              tooltip="Please indicate approximately how much the delivery of the programme costs?"
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
              {loading ? <ButtonLoader /> : "GENERATE A PROGRAMME"}
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

          form {
            padding: 0 1rem;
            width: 20rem;
            max-width: 95vw;
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

  return { props: { type: decoded?.type } };
};

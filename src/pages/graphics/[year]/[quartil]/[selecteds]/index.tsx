import { HeadContent } from "@/components/Particles/HeaderContent";
import MultiBarChart from "@/components/Particles/ChartComponent/MultiBarChart";
import PieChartGapComponent from "@/components/Particles/ChartComponent/PieChartGapComponent";
import ExcelJS from "exceljs";
import { getOneReportByYearQuartil } from "@/services/report/getOneReportByYearQuartil";

export default function Report({
  selecteds,
  report,
  newVolNoBef,
  newVolNoYoung,
  volByTwoOrMoreOrgAct,
  volByDifOrgAct,
  volProgBySector,
  volProgByVolType,
  volProgByAct,
  volByExp,
  volGender,
  volRace,
  volDisability,
  actOngByTypes,
  progsBySectors,
  actVulnProfRegions,
  volActsFM,
  volActsSM,
  volActsTM,
  ongPriceRegsFM,
  ongPriceRegsSM,
  ongPriceRegsTM,
  progHealthVolsFM,
  progHealthVolsSM,
  progHealthVolsTM,
  progHealthEmpsFM,
  progHealthEmpsSM,
  progHealthEmpsTM,
  progEducVolsFM,
  progEducVolsSM,
  progEducVolsTM,
  progEducEmpsFM,
  progEducEmpsSM,
  progEducEmpsTM,
  progSocEconVolsFM,
  progSocEconVolsSM,
  progSocEconVolsTM,
  progSocEconEmpsFM,
  progSocEconEmpsSM,
  progSocEconEmpsTM,
  environmentProgTypes,
  environmentProgSector,
  actProgSDGs,
  actProgSkills,
  descMeasures,
  descPlantTrees,
  descEnSavPlans,
}: any) {
  function printPDF() {
    window.print();
  }
  function orderByName(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  function returnActOngByLoc(report: any) {
    let actOngByTypesLoc: any = [];
    if (report && typeof report === "object") {
      Object.entries(report).forEach(([key, value]: any) => {
        actOngByTypesLoc.push(value?.country);
        actOngByTypesLoc.push(value?.region);
        const arrAct: any = [];
        const arrActVal: any = [];
        Object.entries(value?.actTypeArr).forEach(([key2, value2]) => {
          arrAct.push(key2);
          arrActVal.push(value2);
        });
        actOngByTypesLoc.push(arrAct);
        actOngByTypesLoc.push(arrActVal);
      });
    }

    return actOngByTypesLoc;
  }

  function returnActRegionsVolBens(report: any) {
    let actOngByTypesLoc: any = [];
    if (report && typeof report === "object") {
      Object.entries(report).forEach(([key, value]: any) => {
        actOngByTypesLoc.push(value?.country);
        actOngByTypesLoc.push(value?.region);
        const arrAct: any = [];
        const arrActVal: any = [];
        Object.entries(value?.volBenArr).forEach(([key2, value2]) => {
          arrAct.push(key2);
          arrActVal.push(value2);
        });
        actOngByTypesLoc.push(arrAct);
        actOngByTypesLoc.push(arrActVal);
      });
    }

    return actOngByTypesLoc;
  }

  function returnActRegionsVolActs(report: any) {
    let actOngByTypesLoc: any = [];
    if (report && typeof report === "object") {
      Object.entries(report).forEach(([key, value]: any) => {
        actOngByTypesLoc.push(value?.country);
        actOngByTypesLoc.push(value?.region);
        actOngByTypesLoc.push(value?.voluntArr?.length || 0);
      });
    }

    return actOngByTypesLoc;
  }

  function returnActRegionsVolSecRegs(report: any) {
    let actOngByTypesLoc: any = [];
    if (report && typeof report === "object") {
      Object.entries(report).forEach(([key, value]: any) => {
        actOngByTypesLoc.push(value?.country);
        actOngByTypesLoc.push(value?.region);
        const arrAct: any = [];
        const arrActVal: any = [];
        Object.entries(value?.progSectorArr).forEach(([key2, value2]) => {
          arrAct.push(key2);
          arrActVal.push(value2);
        });
        actOngByTypesLoc.push(arrAct);
        actOngByTypesLoc.push(arrActVal);
      });
    }

    return actOngByTypesLoc;
  }

  const generarExcel = async () => {
    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet("Individual Improvement");
    worksheet.columns = [
      { header: "", key: "first_column", width: 35 },
      { header: "", key: "second_column", width: 35 },
      { header: "", key: "third_column", width: 35 },
      { header: "", key: "quarter_column", width: 35 },
      { header: "", key: "fifth_column", width: 35 },
      { header: "", key: "sixth_column", width: 35 },
      { header: "", key: "seventh_column", width: 35 },
      { header: "", key: "eighth_column", width: 35 },
      { header: "", key: "ninth_column", width: 35 },
      { header: "", key: "tenth_column", width: 35 },
    ];

    // 1
    const boldRowNewVol = worksheet.addRow({
      first_column: "#1 New volunteers become involved",
    });

    boldRowNewVol.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const newVolBecInvHeader = worksheet.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    newVolBecInvHeader.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet.addRow({
      first_column: report?.newVolunteersNoBefore?.firstMonth || 0,
      second_column: report?.newVolunteersNoBefore?.secondMonth || 0,
      third_column: report?.newVolunteersNoBefore?.thirdMonth || 0,
      quarter_column: report?.newVolunteersNoBefore?.global || 0,
    });

    worksheet.addRow([]);

    // 2
    const boldRowYoungPeople = worksheet.addRow({
      first_column:
        "#2 Young people become involved as volunteers: people among 18-35 years old",
    });

    boldRowYoungPeople.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const youngPeople = worksheet.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    youngPeople.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet.addRow({
      first_column: report?.newVolunteersYoung?.firstMonth || 0,
      second_column: report?.newVolunteersYoung?.secondMonth || 0,
      third_column: report?.newVolunteersYoung?.thirdMonth || 0,
      quarter_column: report?.newVolunteersYoung?.global || 0,
    });

    worksheet.addRow([]);

    // 3
    const boldRowVolSameOrg = worksheet.addRow({
      first_column: "#3 Volunteers continue activity with same organisation",
    });

    boldRowVolSameOrg.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const sameOrg = worksheet.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    sameOrg.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet.addRow({
      first_column: report?.volunteersByTwoOrMoreOrgAct?.firstMonth || 0,
      second_column: report?.volunteersByTwoOrMoreOrgAct?.secondMonth || 0,
      third_column: report?.volunteersByTwoOrMoreOrgAct?.thirdMonth || 0,
      quarter_column: report?.volunteersByTwoOrMoreOrgAct?.global || 0,
    });

    worksheet.addRow([]);

    // 4
    const boldRowVolActDifOrg = worksheet.addRow({
      first_column:
        "#4 Volunteers continue activity with different organisation",
    });

    boldRowVolActDifOrg.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volActDifOrg = worksheet.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volActDifOrg.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet.addRow({
      first_column: report?.volunteersByDifOrgAct?.firstMonth || 0,
      second_column: report?.volunteersByDifOrgAct?.secondMonth || 0,
      third_column: report?.volunteersByDifOrgAct?.thirdMonth || 0,
      quarter_column: report?.volunteersByDifOrgAct?.global || 0,
    });

    worksheet.addRow([]);

    // 5
    const boldRowVol5 = worksheet.addRow({
      first_column:
        "#5 Volunteers take part in different types of volunteering",
    });

    boldRowVol5.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader5 = worksheet.addRow({
      first_column: "Types of volunteering",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader5.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volProgrammeByTypes?.firstMonth?.forEach(
      (element: any, index: number) => {
        worksheet.addRow({
          first_column: element.label,
          second_column: element.volArr?.length || 0,
          third_column:
            report?.volProgrammeByTypes?.secondMonth[index]?.volArr?.length ||
            0,
          quarter_column:
            report?.volProgrammeByTypes?.thirdMonth[index]?.volArr?.length || 0,
          fifth_column:
            (element.volArr?.length || 0) +
            (report?.volProgrammeByTypes?.secondMonth[index]?.volArr?.length ||
              0) +
            (report?.volProgrammeByTypes?.thirdMonth[index]?.volArr?.length ||
              0),
        });
      }
    );

    worksheet.addRow([]);

    // 6a
    const boldRowVol6 = worksheet.addRow({
      first_column: "#6 Volunteers take part in different sectors",
    });

    boldRowVol6.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader6 = worksheet.addRow({
      first_column: "Sector",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader6.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volProgrammeByTypes?.firstMonth?.forEach(
      (element: any, index: number) => {
        worksheet.addRow({
          first_column: element.label,
          second_column: element.volArr?.length || 0,
          third_column:
            report?.volProgrammeBySector?.secondMonth[index]?.volArr?.length ||
            0,
          quarter_column:
            report?.volProgrammeBySector?.thirdMonth[index]?.volArr?.length ||
            0,
          fifth_column:
            (element.volArr?.length || 0) +
            (report?.volProgrammeBySector?.secondMonth[index]?.volArr?.length ||
              0) +
            (report?.volProgrammeBySector?.thirdMonth[index]?.volArr?.length ||
              0),
        });
      }
    );

    worksheet.addRow([]);

    // 6b
    const boldRowVol6b = worksheet.addRow({
      first_column: "#6 Volunteers take part in different activities",
    });

    boldRowVol6b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader6b = worksheet.addRow({
      first_column: "Sector",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader6b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volProgrammeByTypes?.firstMonth?.forEach(
      (element: any, index: number) => {
        worksheet.addRow({
          first_column: element.label,
          second_column: element.volArr?.length || 0,
          third_column:
            report?.volActivities?.secondMonth[index]?.volArr?.length || 0,
          quarter_column:
            report?.volActivities?.thirdMonth[index]?.volArr?.length || 0,
          fifth_column:
            (element.volArr?.length || 0) +
            (report?.volActivities?.secondMonth[index]?.volArr?.length || 0) +
            (report?.volActivities?.thirdMonth[index]?.volArr?.length || 0),
        });
      }
    );

    worksheet.addRow([]);

    // 7
    const boldRowVol7 = worksheet.addRow({
      first_column: "#7 Volunteers report positive volunteering experience",
    });

    boldRowVol7.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader7 = worksheet.addRow({
      first_column: "Experience",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader7.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet.addRow({
      first_column: "Experience",
      second_column: report?.volExperiences?.firstMonth?.rateExpFM || 0,
      third_column: report?.volExperiences?.secondMonth?.rateExpSM || 0,
      quarter_column: report?.volExperiences?.thirdMonth?.rateExpTM || 0,
      fifth_column:
        (report?.volExperiences?.firstMonth?.rateExpFM || 0) +
        (report?.volExperiences?.secondMonth?.rateExpSM || 0) +
        (report?.volExperiences?.thirdMonth?.rateExpTM || 0),
    });

    worksheet.addRow({
      first_column: "Benefit",
      second_column: report?.volExperiences?.firstMonth?.rateBenFM || 0,
      third_column: report?.volExperiences?.secondMonth?.rateBenSM || 0,
      quarter_column: report?.volExperiences?.thirdMonth?.rateBenTM || 0,
      fifth_column:
        (report?.volExperiences?.firstMonth?.rateBenFM || 0) +
        (report?.volExperiences?.secondMonth?.rateBenSM || 0) +
        (report?.volExperiences?.thirdMonth?.rateBenTM || 0),
    });

    worksheet.addRow({
      first_column: "Difference",
      second_column: report?.volExperiences?.firstMonth?.rateDifFM || 0,
      third_column: report?.volExperiences?.secondMonth?.rateDifSM || 0,
      quarter_column: report?.volExperiences?.thirdMonth?.rateDifTM || 0,
      fifth_column:
        (report?.volExperiences?.firstMonth?.rateDifFM || 0) +
        (report?.volExperiences?.secondMonth?.rateDifSM || 0) +
        (report?.volExperiences?.thirdMonth?.rateDifTM || 0),
    });

    worksheet.addRow([]);

    // Volunteers take part in different types of volunteering

    const worksheet2 = workbook.addWorksheet("Community empowerment");

    // 8
    worksheet2.columns = [
      { header: "", key: "first_column", width: 35 },
      { header: "", key: "second_column", width: 35 },
      { header: "", key: "third_column", width: 35 },
      { header: "", key: "quarter_column", width: 35 },
      { header: "", key: "fifth_column", width: 35 },
      { header: "", key: "sixth_column", width: 35 },
      { header: "", key: "seventh_column", width: 35 },
      { header: "", key: "eighth_column", width: 35 },
      { header: "", key: "ninth_column", width: 35 },
      { header: "", key: "tenth_column", width: 35 },
    ];

    const boldRowVol8 = worksheet2.addRow({
      first_column: "#8 More diverse volunteers become involved by Gender",
    });

    boldRowVol8.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader8 = worksheet2.addRow({
      first_column: "Gender",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader8.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet2.addRow({
      first_column: "Male",
      second_column: report?.volGenders?.firstMonth[0]?.volArr?.length || 0,
      third_column: report?.volGenders?.secondMonth[0]?.volArr?.length || 0,
      quarter_column: report?.volGenders?.thirdMonth[0]?.volArr?.length || 0,
      fifth_column:
        (report?.volGenders?.firstMonth[0]?.volArr?.length || 0) +
        (report?.volGenders?.secondMonth[0]?.volArr?.length || 0) +
        (report?.volGenders?.thirdMonth[0]?.volArr?.length || 0),
    });

    worksheet2.addRow({
      first_column: "Female",
      second_column: report?.volGenders?.firstMonth[1]?.volArr?.length || 0,
      third_column: report?.volGenders?.secondMonth[1]?.volArr?.length || 0,
      quarter_column: report?.volGenders?.thirdMonth[1]?.volArr?.length || 0,
      fifth_column:
        (report?.volGenders?.firstMonth[1]?.volArr?.length || 0) +
        (report?.volGenders?.secondMonth[1]?.volArr?.length || 0) +
        (report?.volGenders?.thirdMonth[1]?.volArr?.length || 0),
    });

    worksheet2.addRow({
      first_column: "Non Binary",
      second_column: report?.volGenders?.firstMonth[2]?.volArr?.length || 0,
      third_column: report?.volGenders?.secondMonth[2]?.volArr?.length || 0,
      quarter_column: report?.volGenders?.thirdMonth[2]?.volArr?.length || 0,
      fifth_column:
        (report?.volGenders?.firstMonth[2]?.volArr?.length || 0) +
        (report?.volGenders?.secondMonth[2]?.volArr?.length || 0) +
        (report?.volGenders?.thirdMonth[2]?.volArr?.length || 0),
    });

    worksheet2.addRow({
      first_column: "Prefer Not to Say",
      second_column: report?.volGenders?.firstMonth[3]?.volArr?.length || 0,
      third_column: report?.volGenders?.secondMonth[3]?.volArr?.length || 0,
      quarter_column: report?.volGenders?.thirdMonth[3]?.volArr?.length || 0,
      fifth_column:
        (report?.volGenders?.firstMonth[3]?.volArr?.length || 0) +
        (report?.volGenders?.secondMonth[3]?.volArr?.length || 0) +
        (report?.volGenders?.thirdMonth[3]?.volArr?.length || 0),
    });

    worksheet2.addRow([]);

    const boldRowVol8b = worksheet2.addRow({
      first_column: "#8 More diverse volunteers become involved by Race",
    });

    boldRowVol8b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader8b = worksheet2.addRow({
      first_column: "Race",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader8b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volRace?.firstMonth?.forEach((element: any, index: number) => {
      worksheet2.addRow({
        first_column: element.label,
        second_column: element?.volArr?.length || 0,
        third_column: report?.volRace?.secondMonth[index]?.volArr?.length || 0,
        quarter_column: report?.volRace?.thirdMonth[index]?.volArr?.length || 0,
        fifth_column:
          (report?.volRace?.firstMonth[index]?.volArr?.length || 0) +
          (report?.volRace?.secondMonth[index]?.volArr?.length || 0) +
          (report?.volRace?.thirdMonth[index]?.volArr?.length || 0),
      });
    });

    worksheet2.addRow([]);

    const boldRowVol8c = worksheet2.addRow({
      first_column: "#8 More diverse volunteers become involved by Disability",
    });

    boldRowVol8c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader8c = worksheet2.addRow({
      first_column: "Disability",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader8c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volDisability?.firstMonth?.forEach(
      (element: any, index: number) => {
        worksheet2.addRow({
          first_column: element.label,
          second_column: element?.volDisability?.length || 0,
          third_column:
            report?.volDisability?.secondMonth[index]?.volArr?.length || 0,
          quarter_column:
            report?.volDisability?.thirdMonth[index]?.volArr?.length || 0,
          fifth_column:
            (report?.volDisability?.firstMonth[index]?.volArr?.length || 0) +
            (report?.volDisability?.secondMonth[index]?.volArr?.length || 0) +
            (report?.volDisability?.thirdMonth[index]?.volArr?.length || 0),
        });
      }
    );

    worksheet2.addRow([]);

    const boldRowVol8d = worksheet2.addRow({
      first_column: "#8 More diverse volunteers become involved by Employment",
    });

    boldRowVol8d.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader8d = worksheet2.addRow({
      first_column: "Employment",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader8d.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    report?.volEmployment?.firstMonth?.forEach(
      (element: any, index: number) => {
        worksheet2.addRow({
          first_column: element.label,
          second_column: element?.volEmployment?.length || 0,
          third_column:
            report?.volEmployment?.secondMonth[index]?.volArr?.length || 0,
          quarter_column:
            report?.volEmployment?.thirdMonth[index]?.volArr?.length || 0,
          fifth_column:
            (report?.volEmployment?.firstMonth[index]?.volArr?.length || 0) +
            (report?.volEmployment?.secondMonth[index]?.volArr?.length || 0) +
            (report?.volEmployment?.thirdMonth[index]?.volArr?.length || 0),
        });
      }
    );

    worksheet2.addRow([]);

    // 9
    const boldRowVol9 = worksheet2.addRow({
      first_column:
        "#9 More diverse volunteering opportunities are offered by Activity Type",
    });

    boldRowVol9.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader9 = worksheet2.addRow({
      first_column: "Activity Type",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader9.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actOngByTypes?.firstMonth &&
        Object.entries(report?.actOngByTypes?.firstMonth).map(
          ([key, value]: any) => {
            worksheet2.addRow({
              first_column: key,
              second_column: report?.actOngByTypes?.firstMonth[key] || 0,
              third_column: report?.actOngByTypes?.secondMonth[key] || 0,
              quarter_column: report?.actOngByTypes?.thirdMonth[key] || 0,
              fifth_column:
                (report?.actOngByTypes?.firstMonth[key] || 0) +
                (report?.actOngByTypes?.secondMonth[key] || 0) +
                (report?.actOngByTypes?.thirdMonth[key] || 0),
            });
          }
        );
    }

    worksheet2.addRow([]);

    const boldRowVol9b = worksheet2.addRow({
      first_column:
        "#9 More diverse volunteering opportunities are offered by Sector",
    });

    boldRowVol9b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader9b = worksheet2.addRow({
      first_column: "Sector",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader9b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progsBySectors?.firstMonth &&
        Object.entries(report?.progsBySectors?.firstMonth).map(
          ([key, value]: any) => {
            worksheet2.addRow({
              first_column: key,
              second_column: report?.progsBySectors?.firstMonth[key] || 0,
              third_column: report?.progsBySectors?.secondMonth[key] || 0,
              quarter_column: report?.progsBySectors?.thirdMonth[key] || 0,
              fifth_column:
                (report?.progsBySectors?.firstMonth[key] || 0) +
                (report?.progsBySectors?.secondMonth[key] || 0) +
                (report?.progsBySectors?.thirdMonth[key] || 0),
            });
          }
        );
    }

    worksheet2.addRow([]);

    const boldRowVol9c = worksheet2.addRow({
      first_column:
        "#9 More diverse volunteering opportunities are offered by Activity and Region, First Month",
    });

    boldRowVol9c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader9c = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "First Month",
    });

    volHeader9c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actOngByTypesLoc?.firstMonth &&
        report?.actOngByTypesLoc?.firstMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.actTypeArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actOngByTypesLoc?.firstMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    const boldRowVol9d = worksheet2.addRow({
      first_column:
        "#9 More diverse volunteering opportunities are offered by Activity and Region, Second Month",
    });

    boldRowVol9d.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader9d = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "Second Month",
    });

    volHeader9d.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actOngByTypesLoc?.secondMonth &&
        report?.actOngByTypesLoc?.secondMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.actTypeArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actOngByTypesLoc?.secondMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    const boldRowVol9e = worksheet2.addRow({
      first_column:
        "#9 More diverse volunteering opportunities are offered by Activity and Region, Third Month",
    });

    boldRowVol9e.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader9e = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "Third Month",
    });

    volHeader9e.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actOngByTypesLoc?.thirdMonth &&
        report?.actOngByTypesLoc?.thirdMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.actTypeArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.actTypeArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actOngByTypesLoc?.thirdMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    // 10

    const boldRowVol10 = worksheet2.addRow({
      first_column: "#10 More diverse beneficiaries are reached, First Month",
    });

    boldRowVol10.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader10 = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "First Month",
    });

    volHeader10.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actRegionsVolBens?.firstMonth &&
        report?.actRegionsVolBens?.firstMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.volBenArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actRegionsVolBens?.firstMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    const boldRowVol10b = worksheet2.addRow({
      first_column: "#10 More diverse beneficiaries are reached, Second Month",
    });

    boldRowVol10b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader10b = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "Second Month",
    });

    volHeader10b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actRegionsVolBens?.secondMonth &&
        report?.actRegionsVolBens?.secondMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.volBenArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actRegionsVolBens?.secondMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    const boldRowVol10c = worksheet2.addRow({
      first_column: "#10 More diverse beneficiaries are reached, Third Month",
    });

    boldRowVol10c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader10c = worksheet2.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Activity",
      quarter_column: "Third Month",
    });

    volHeader10c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actRegionsVolBens?.thirdMonth &&
        report?.actRegionsVolBens?.thirdMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.volBenArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.volBenArr[key],
              };
            }

            worksheet2.addRow(row);
            count++;
          });
          worksheet2.addRow([]);
        });
    }
    {
      !report?.actRegionsVolBens?.thirdMonth?.length &&
        worksheet2.addRow(["Sin Datos"]);
    }

    worksheet2.addRow([]);

    // 11
    const boldRowVol11 = worksheet2.addRow({
      first_column:
        "#11 Beneficiaries from communities previously underserved are reached",
    });

    boldRowVol11.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader11 = worksheet2.addRow({
      first_column: "Vulnerability Profile",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
    });

    volHeader11.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.actVulnProfRegions?.firstMonth &&
        Object.entries(report?.actVulnProfRegions?.firstMonth).map(
          ([key, value]: any) => {
            worksheet2.addRow({
              first_column: key,
              second_column: report?.actVulnProfRegions?.firstMonth[key] || 0,
              third_column: report?.actVulnProfRegions?.secondMonth[key] || 0,
              quarter_column: report?.actVulnProfRegions?.thirdMonth[key] || 0,
              fifth_column:
                (report?.actVulnProfRegions?.firstMonth[key] || 0) +
                (report?.actVulnProfRegions?.secondMonth[key] || 0) +
                (report?.actVulnProfRegions?.thirdMonth[key] || 0),
            });
          }
        );
    }

    worksheet2.addRow([]);

    const worksheet3 = workbook.addWorksheet("Societal strengthening");

    worksheet3.columns = [
      { header: "", key: "first_column", width: 35 },
      { header: "", key: "second_column", width: 35 },
      { header: "", key: "third_column", width: 35 },
      { header: "", key: "quarter_column", width: 35 },
      { header: "", key: "fifth_column", width: 35 },
      { header: "", key: "sixth_column", width: 35 },
      { header: "", key: "seventh_column", width: 35 },
      { header: "", key: "eighth_column", width: 35 },
      { header: "", key: "ninth_column", width: 35 },
      { header: "", key: "tenth_column", width: 35 },
    ];

    // 14
    const boldRowVol14 = worksheet3.addRow({
      first_column:
        "#14 Volunteer involving organisation measure impact First Month",
    });

    boldRowVol14.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader14 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Nº volunteer",
    });

    volHeader14.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volActs?.firstMonth &&
        report?.volActs?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.voluntArr?.length || 0,
          };

          worksheet3.addRow(row);
        });
    }
    {
      !report?.volActs?.firstMonth?.length && worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol14b = worksheet3.addRow({
      first_column:
        "#14 Volunteer involving organisation measure impact Second Month",
    });

    boldRowVol14b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader14b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Nº volunteer",
    });

    volHeader14b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volActs?.secondMonth &&
        report?.volActs?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.voluntArr?.length || 0,
          };

          worksheet3.addRow(row);
        });
    }
    {
      !report?.volActs?.secondMonth?.length && worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol14c = worksheet3.addRow({
      first_column:
        "#14 Volunteer involving organisation measure impact First Month",
    });

    boldRowVol14c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader14c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Nº volunteer",
    });

    volHeader14c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volActs?.thirdMonth &&
        report?.volActs?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.voluntArr?.length || 0,
          };

          worksheet3.addRow(row);
        });
    }
    {
      !report?.volActs?.thirdMonth?.length && worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 15
    const boldRowVol15 = worksheet3.addRow({
      first_column:
        "#15 Volunteer involving organisation secure funding, First Month",
    });

    boldRowVol15.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader15 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Funding Categories",
      quarter_column: "First Month",
    });

    volHeader15.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volSecRegs?.firstMonth &&
        report?.volSecRegs?.firstMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.progSectorArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            }

            worksheet3.addRow(row);
            count++;
          });
          worksheet3.addRow([]);
        });
    }
    {
      !report?.volSecRegs?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol15b = worksheet3.addRow({
      first_column:
        "#15 Volunteer involving organisation secure funding, Second Month",
    });

    boldRowVol15b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader15b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Funding Categories",
      quarter_column: "Second Month",
    });

    volHeader15b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volSecRegs?.secondMonth &&
        report?.volSecRegs?.secondMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.progSectorArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            }

            worksheet3.addRow(row);
            count++;
          });
          worksheet3.addRow([]);
        });
    }
    {
      !report?.volSecRegs?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol15c = worksheet3.addRow({
      first_column:
        "#15 Volunteer involving organisation secure funding, Third Month",
    });

    boldRowVol15c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader15c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Funding Categories",
      quarter_column: "Third Month",
    });

    volHeader15c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.volSecRegs?.thirdMonth &&
        report?.volSecRegs?.thirdMonth.forEach((element: any) => {
          let count = 0;
          Object.entries(element?.progSectorArr).map(([key, value]: any) => {
            let row: any = null;
            if (count > 0) {
              row = {
                first_column: "",
                second_column: "",
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            } else {
              row = {
                first_column: element.country,
                second_column: element.region,
                third_column: key,
                quarter_column: element?.progSectorArr[key],
              };
            }

            worksheet3.addRow(row);
            count++;
          });
          worksheet3.addRow([]);
        });
    }
    {
      !report?.volSecRegs?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 16
    const boldRowVol16 = worksheet3.addRow({
      first_column:
        "#16 Volunteer involvement offers net economic gain, First Month",
    });

    boldRowVol16.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader16 = worksheet3.addRow({
      first_column: "Organisation",
      second_column: "First Month",
    });

    volHeader16.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.ongPriceRegs?.firstMonth &&
        report?.ongPriceRegs?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.name,
            second_column: element.hours,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.ongPriceRegs?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol16b = worksheet3.addRow({
      first_column:
        "#16 Volunteer involvement offers net economic gain, Second Month",
    });

    boldRowVol16b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader16b = worksheet3.addRow({
      first_column: "Organisation",
      second_column: "Second Month",
    });

    volHeader16b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.ongPriceRegs?.secondMonth &&
        report?.ongPriceRegs?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.name,
            second_column: element.hours,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.ongPriceRegs?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol16c = worksheet3.addRow({
      first_column:
        "#16 Volunteer involvement offers net economic gain, First Month",
    });

    boldRowVol16c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader16c = worksheet3.addRow({
      first_column: "Organisation",
      second_column: "Third Month",
    });

    volHeader16c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.ongPriceRegs?.thirdMonth &&
        report?.ongPriceRegs?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.name,
            second_column: element.hours,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.ongPriceRegs?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 17

    const boldRowVol17 = worksheet3.addRow({
      first_column: "#17 Health services involve volunteers, First Month",
    });

    boldRowVol17.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader17 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader17.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthVols?.firstMonth &&
        report?.progHealthVols?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthVols?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol17b = worksheet3.addRow({
      first_column: "#17 Health services involve volunteers, Second Month",
    });

    boldRowVol17b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader17b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader17b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthVols?.secondMonth &&
        report?.progHealthVols?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthVols?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol17c = worksheet3.addRow({
      first_column: "#17 Health services involve volunteers, Third Month",
    });

    boldRowVol17c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader17c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader17c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthVols?.thirdMonth &&
        report?.progHealthVols?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthVols?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 18

    const boldRowVol18 = worksheet3.addRow({
      first_column:
        "#18 Health services have employer supported volunteering programmes, First Month",
    });

    boldRowVol18.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader18 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader18.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthEmps?.firstMonth &&
        report?.progHealthEmps?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthEmps?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol18b = worksheet3.addRow({
      first_column:
        "#18 Health services have employer supported volunteering programmes, Second Month",
    });

    boldRowVol18b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader18b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader18b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthEmps?.secondMonth &&
        report?.progHealthEmps?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthEmps?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol18c = worksheet3.addRow({
      first_column:
        "#18 Health services have employer supported volunteering programmes, Third Month",
    });

    boldRowVol18c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader18c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader18c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progHealthEmps?.thirdMonth &&
        report?.progHealthEmps?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progHealthEmps?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 19

    const boldRowVol19 = worksheet3.addRow({
      first_column:
        "#19 Educational institutions involve volunteers, First Month",
    });

    boldRowVol19.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader19 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader19.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducVols?.firstMonth &&
        report?.progEducVols?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducVols?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol19b = worksheet3.addRow({
      first_column:
        "#19 Educational institutions involve volunteers, Second Month",
    });

    boldRowVol19b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader19b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader19b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducVols?.secondMonth &&
        report?.progEducVols?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducVols?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol19c = worksheet3.addRow({
      first_column:
        "#19 Educational institutions involve volunteers, Third Month",
    });

    boldRowVol19c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader19c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader19c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducVols?.thirdMonth &&
        report?.progEducVols?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducVols?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 20

    const boldRowVol20 = worksheet3.addRow({
      first_column:
        "#20 Educational institutions have employer supported volunteering programmes, First Month",
    });

    boldRowVol20.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader20 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader20.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducEmps?.firstMonth &&
        report?.progEducEmps?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducEmps?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol20b = worksheet3.addRow({
      first_column:
        "#20 Educational institutions have employer supported volunteering programmes, Second Month",
    });

    boldRowVol20b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader20b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader20b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducEmps?.secondMonth &&
        report?.progEducEmps?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducEmps?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol20c = worksheet3.addRow({
      first_column:
        "#20 Educational institutions have employer supported volunteering programmes, Third Month",
    });

    boldRowVol20c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader20c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader20c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progEducEmps?.thirdMonth &&
        report?.progEducEmps?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progEducEmps?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 21

    const boldRowVol21 = worksheet3.addRow({
      first_column: "#21 Social businesses involve volunteers, First Month",
    });

    boldRowVol21.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader21 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader21.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconVols?.firstMonth &&
        report?.progSocEconVols?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconVols?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol21b = worksheet3.addRow({
      first_column: "#21 Social businesses involve volunteers, Second Month",
    });

    boldRowVol21b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader21b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader21b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconVols?.secondMonth &&
        report?.progSocEconVols?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconVols?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol21c = worksheet3.addRow({
      first_column: "#21 Social businesses involve volunteers, Third Month",
    });

    boldRowVol21c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader21c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader21c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconVols?.thirdMonth &&
        report?.progSocEconVols?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconVols?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    // 22

    const boldRowVol22 = worksheet3.addRow({
      first_column:
        "#22 Employers have employer supported volunteer programmes, First Month",
    });

    boldRowVol22.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader22 = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader22.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconEmps?.firstMonth &&
        report?.progSocEconEmps?.firstMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconEmps?.firstMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol22b = worksheet3.addRow({
      first_column:
        "#22 Employers have employer supported volunteer programmes, Second Month",
    });

    boldRowVol22b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader22b = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader22b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconEmps?.secondMonth &&
        report?.progSocEconEmps?.secondMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconEmps?.secondMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const boldRowVol22c = worksheet3.addRow({
      first_column:
        "#22 Employers have employer supported volunteer programmes, Third Month",
    });

    boldRowVol22c.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader22c = worksheet3.addRow({
      first_column: "Country",
      second_column: "Region",
      third_column: "Sector",
    });

    volHeader22c.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    {
      report?.progSocEconEmps?.thirdMonth &&
        report?.progSocEconEmps?.thirdMonth.forEach((element: any) => {
          let row: any = {
            first_column: element.country,
            second_column: element.region,
            third_column: element.sector?.length || 0,
          };
          worksheet3.addRow(row);
        });
    }
    {
      !report?.progSocEconEmps?.thirdMonth?.length &&
        worksheet3.addRow(["Sin Datos"]);
    }

    worksheet3.addRow([]);

    const worksheet4 = workbook.addWorksheet("Environmental protection");
    worksheet4.columns = [
      { header: "", key: "first_column", width: 35 },
      { header: "", key: "second_column", width: 35 },
      { header: "", key: "third_column", width: 35 },
      { header: "", key: "quarter_column", width: 35 },
      { header: "", key: "fifth_column", width: 35 },
      { header: "", key: "sixth_column", width: 35 },
      { header: "", key: "seventh_column", width: 35 },
      { header: "", key: "eighth_column", width: 35 },
      { header: "", key: "ninth_column", width: 35 },
      { header: "", key: "tenth_column", width: 35 },
    ];

    // 23

    const boldRowVol23 = worksheet4.addRow({
      first_column:
        "#23 Projects for environmental protection strengthen environmental work Programme Types",
    });

    boldRowVol23.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader23 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader23.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.environmentProgTypes?.firstMonth || 0,
      second_column: report?.environmentProgTypes?.secondMonth || 0,
      third_column: report?.environmentProgTypes?.thirdMonth || 0,
      quarter_column:
        (report?.environmentProgTypes?.firstMonth || 0) +
        (report?.environmentProgTypes?.secondMonth || 0) +
        (report?.environmentProgTypes?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    const boldRowVol23b = worksheet4.addRow({
      first_column:
        "#23 Projects for environmental protection strengthen environmental work Programme Sector",
    });

    boldRowVol23b.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader23b = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader23b.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.environmentProgSector?.firstMonth || 0,
      second_column: report?.environmentProgSector?.secondMonth || 0,
      third_column: report?.environmentProgSector?.thirdMonth || 0,
      quarter_column:
        (report?.environmentProgSector?.firstMonth || 0) +
        (report?.environmentProgSector?.secondMonth || 0) +
        (report?.environmentProgSector?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    // 24

    const boldRowVol24 = worksheet4.addRow({
      first_column:
        "#24 Volunteers become involved in projects for environmental protection",
    });

    boldRowVol24.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader24 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader24.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.actProgSDGs?.firstMonth || 0,
      second_column: report?.actProgSDGs?.secondMonth || 0,
      third_column: report?.actProgSDGs?.thirdMonth || 0,
      quarter_column:
        (report?.actProgSDGs?.firstMonth || 0) +
        (report?.actProgSDGs?.secondMonth || 0) +
        (report?.actProgSDGs?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    // 25

    const boldRowVol25 = worksheet4.addRow({
      first_column: "#25 Volunteers gain skills for environmental protection",
    });

    boldRowVol25.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader25 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader25.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.actProgSkills?.firstMonth || 0,
      second_column: report?.actProgSkills?.secondMonth || 0,
      third_column: report?.actProgSkills?.thirdMonth || 0,
      quarter_column:
        (report?.actProgSkills?.firstMonth || 0) +
        (report?.actProgSkills?.secondMonth || 0) +
        (report?.actProgSkills?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    // 26

    const boldRowVol26 = worksheet4.addRow({
      first_column: "#26 Volunteers travel",
    });

    boldRowVol26.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader26 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader26.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.descMeasures?.firstMonth || 0,
      second_column: report?.descMeasures?.secondMonth || 0,
      third_column: report?.descMeasures?.thirdMonth || 0,
      quarter_column:
        (report?.descMeasures?.firstMonth || 0) +
        (report?.descMeasures?.secondMonth || 0) +
        (report?.descMeasures?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    // 27

    const boldRowVol27 = worksheet4.addRow({
      first_column: "#27 Organisation footprint",
    });

    boldRowVol27.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader27 = worksheet4.addRow({
      first_column: "Activity",
      second_column: "First Month",
      third_column: "Second Month",
      quarter_column: "Third Month",
      fifth_column: "Accumulated",
    });

    volHeader27.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: "Materials money expense",
      second_column: report?.descRecMatMons?.firstMonth?.totalActMat || 0,
      third_column: report?.descRecMatMons?.secondMonth?.totalActMat || 0,
      quarter_column: report?.descRecMatMons?.thirdMonth?.totalActMat || 0,
      fifth_column:
        (report?.descRecMatMons?.firstMonth?.totalActMat || 0) +
        (report?.descRecMatMons?.secondMonth?.totalActMat || 0) +
        (report?.descRecMatMons?.thirdMonth?.totalActMat || 0),
    });

    worksheet4.addRow({
      first_column: "Recycling and reusing equipment",
      second_column: report?.descRecMatMons?.firstMonth?.totalActRecEq || 0,
      third_column: report?.descRecMatMons?.secondMonth?.totalActRecEq || 0,
      quarter_column: report?.descRecMatMons?.thirdMonth?.totalActRecEq || 0,
      fifth_column:
        (report?.descRecMatMons?.firstMonth?.totalActRecEq || 0) +
        (report?.descRecMatMons?.secondMonth?.totalActRecEq || 0) +
        (report?.descRecMatMons?.thirdMonth?.totalActRecEq || 0),
    });

    worksheet4.addRow({
      first_column: "Recycling and reusing consumables",
      second_column: report?.descRecMatMons?.firstMonth?.totalActRecCons || 0,
      third_column: report?.descRecMatMons?.secondMonth?.totalActRecCons || 0,
      quarter_column: report?.descRecMatMons?.thirdMonth?.totalActRecCons || 0,
      fifth_column:
        (report?.descRecMatMons?.firstMonth?.totalActRecCons || 0) +
        (report?.descRecMatMons?.secondMonth?.totalActRecCons || 0) +
        (report?.descRecMatMons?.thirdMonth?.totalActRecCons || 0),
    });

    worksheet4.addRow([]);

    // 28

    const boldRowVol28 = worksheet4.addRow({
      first_column: "#28 Carbon captured",
    });

    boldRowVol28.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader28 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader28.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.descPlantTrees?.firstMonth || 0,
      second_column: report?.descPlantTrees?.secondMonth || 0,
      third_column: report?.descPlantTrees?.thirdMonth || 0,
      quarter_column:
        (report?.descPlantTrees?.firstMonth || 0) +
        (report?.descPlantTrees?.secondMonth || 0) +
        (report?.descPlantTrees?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    // 29

    const boldRowVol29 = worksheet4.addRow({
      first_column: "#29 Carbon output reduced",
    });

    boldRowVol29.eachCell((cell) => {
      cell.font = {
        bold: true,
        color: { argb: "008000" },
        size: 12,
      };
    });

    const volHeader29 = worksheet4.addRow({
      first_column: "First Month",
      second_column: "Second Month",
      third_column: "Third Month",
      quarter_column: "Accumulated",
    });

    volHeader29.eachCell((cell) => {
      cell.font = {
        bold: true,
      };
    });

    worksheet4.addRow({
      first_column: report?.descEnSavPlans?.firstMonth || 0,
      second_column: report?.descEnSavPlans?.secondMonth || 0,
      third_column: report?.descEnSavPlans?.thirdMonth || 0,
      quarter_column:
        (report?.descEnSavPlans?.firstMonth || 0) +
        (report?.descEnSavPlans?.secondMonth || 0) +
        (report?.descEnSavPlans?.thirdMonth || 0),
    });

    worksheet4.addRow([]);

    const buffer = await workbook.xlsx.writeBuffer();

    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "report.xlsx";
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <>
      <HeadContent title="Report" />
      <main>
        <div className="button-container">
          <button className="excel-button" onClick={generarExcel}>
            Download Excel
          </button>
          <button className="excel-button" onClick={printPDF}>
            Print PDF
          </button>
        </div>
        {selecteds.includes("1") && (
          <>
            <h2>Individual Improvement</h2>
            <h3>#1 New volunteers become involved</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.newVolunteersNoBefore?.firstMonth || 0}</div>
              <div>{report?.newVolunteersNoBefore?.secondMonth || 0}</div>
              <div>{report?.newVolunteersNoBefore?.thirdMonth || 0}</div>
              <div>{report?.newVolunteersNoBefore?.global || 0}</div>
            </div>
            <PieChartGapComponent data={newVolNoBef.sort(orderByName)} />
            <h3>
              #2 Young people become involved as volunteers: people among 18-35
              years old
            </h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.newVolunteersYoung?.firstMonth || 0}</div>
              <div>{report?.newVolunteersYoung?.secondMonth || 0}</div>
              <div>{report?.newVolunteersYoung?.thirdMonth || 0}</div>
              <div>{report?.newVolunteersYoung?.global || 0}</div>
            </div>
            <PieChartGapComponent data={newVolNoYoung.sort(orderByName)} />
            <h3>#3 Volunteers continue activity with same organisation</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.volunteersByTwoOrMoreOrgAct?.firstMonth || 0}</div>
              <div>{report?.volunteersByTwoOrMoreOrgAct?.secondMonth || 0}</div>
              <div>{report?.volunteersByTwoOrMoreOrgAct?.thirdMonth || 0}</div>
              <div>{report?.volunteersByTwoOrMoreOrgAct?.global || 0}</div>
            </div>
            <PieChartGapComponent
              data={volByTwoOrMoreOrgAct.sort(orderByName)}
            />
            <h3>#4 Volunteers continue activity with different organisation</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.volunteersByDifOrgAct?.firstMonth || 0}</div>
              <div>{report?.volunteersByDifOrgAct?.secondMonth || 0}</div>
              <div>{report?.volunteersByDifOrgAct?.thirdMonth || 0}</div>
              <div>{report?.volunteersByDifOrgAct?.global || 0}</div>
            </div>
            <PieChartGapComponent data={volByDifOrgAct.sort(orderByName)} />
            <h3>#5 Volunteers take part in different types of volunteering</h3>
            <div className="table-5">
              <div className="column-title">types of volunteering</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volProgrammeByTypes?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volProgrammeByTypes?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volProgrammeByTypes?.secondMonth?.map(
                  (report: any) => {
                    return (
                      <div key={report?.label}>
                        {report?.volArr?.length || 0}
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {report?.volProgrammeByTypes?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volProgrammeByTypes?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volProgrammeByTypes?.secondMonth[index]
                            ?.volArr?.length || 0) +
                          (report?.volProgrammeByTypes?.thirdMonth[index]
                            ?.volArr?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volProgByVolType} axisHeight={335} />
            <h3>#6 Volunteers take part in different sectors</h3>
            <div className="table-5">
              <div className="column-title">Sector</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volProgrammeBySector?.firstMonth?.map(
                  (report: any) => {
                    return <div key={report?.label}>{report?.label}</div>;
                  }
                )}
              </div>
              <div>
                {report?.volProgrammeBySector?.firstMonth?.map(
                  (report: any) => {
                    return (
                      <div key={report?.label}>
                        {report?.volArr?.length || 0}
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {report?.volProgrammeBySector?.secondMonth?.map(
                  (report: any) => {
                    return (
                      <div key={report?.label}>
                        {report?.volArr?.length || 0}
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {report?.volProgrammeBySector?.thirdMonth?.map(
                  (report: any) => {
                    return (
                      <div key={report?.label}>
                        {report?.volArr?.length || 0}
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                {report?.volProgrammeBySector?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volProgrammeBySector?.secondMonth[index]
                            ?.volArr?.length || 0) +
                          (report?.volProgrammeBySector?.thirdMonth[index]
                            ?.volArr?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volProgBySector} />
            <h3>#6 Volunteers take part in different activities</h3>
            <div className="table-5">
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volActivities?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volActivities?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volActivities?.secondMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volActivities?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volActivities?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volActivities?.secondMonth[index]?.volArr
                            ?.length || 0) +
                          (report?.volActivities?.thirdMonth[index]?.volArr
                            ?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volProgByAct} height={900} axisHeight={480} />
            <h3>#7 Volunteers report positive volunteering experience</h3>
            <div className="table-5">
              <div className="column-title">Experience</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                <div>Experience</div>
                <div>Difference</div>
                <div>Benefit</div>
              </div>
              <div>
                <div>
                  {report?.volExperiences?.firstMonth?.rateExpFM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.firstMonth?.rateBenFM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.firstMonth?.rateDifFM?.toFixed(2)}
                </div>
              </div>
              <div>
                <div>
                  {report?.volExperiences?.secondMonth?.rateExpSM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.secondMonth?.rateBenSM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.secondMonth?.rateDifSM?.toFixed(2)}
                </div>
              </div>
              <div>
                <div>
                  {report?.volExperiences?.thirdMonth?.rateExpTM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.thirdMonth?.rateBenTM?.toFixed(2)}
                </div>
                <div>
                  {report?.volExperiences?.thirdMonth?.rateDifTM?.toFixed(2)}
                </div>
              </div>
              <div>
                <div>
                  {(
                    parseFloat(report?.volExperiences?.firstMonth?.rateBenFM) +
                    parseFloat(report?.volExperiences?.secondMonth?.rateBenSM) +
                    parseFloat(report?.volExperiences?.thirdMonth?.rateBenTM)
                  )?.toFixed(2)}
                </div>
                <div>
                  {(
                    parseFloat(report?.volExperiences?.firstMonth?.rateDifFM) +
                    parseFloat(report?.volExperiences?.secondMonth?.rateDifSM) +
                    parseFloat(report?.volExperiences?.thirdMonth?.rateDifTM)
                  )?.toFixed(2)}
                </div>
                <div>
                  {(
                    parseFloat(report?.volExperiences?.firstMonth?.rateExpFM) +
                    parseFloat(report?.volExperiences?.secondMonth?.rateExpSM) +
                    parseFloat(report?.volExperiences?.thirdMonth?.rateExpTM)
                  )?.toFixed(2)}
                </div>
              </div>
            </div>
            <MultiBarChart data={volByExp} height={600} axisHeight={120} />
          </>
        )}
        {selecteds.includes("2") && (
          <>
            <h2>Community empowerment</h2>
            <h3>#8 More diverse volunteers become involved by Gender</h3>
            <div className="table-5">
              <div className="column-title">Gender</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volGenders?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volGenders?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volGenders?.secondMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volGenders?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volGenders?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volGenders?.secondMonth[index]?.volArr
                            ?.length || 0) +
                          (report?.volGenders?.thirdMonth[index]?.volArr
                            ?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volGender} height={600} axisHeight={160} />
            <h3>#8 More diverse volunteers become involved by Race</h3>
            <div className="table-5">
              <div className="column-title">Race</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volRace?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volRace?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volRace?.secondMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volRace?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volRace?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volRace?.secondMonth[index]?.volArr
                            ?.length || 0) +
                          (report?.volRace?.thirdMonth[index]?.volArr?.length ||
                            0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volRace} height={600} axisHeight={180} />
            <h3>#8 More diverse volunteers become involved by Disability</h3>
            <div className="table-5">
              <div className="column-title">Disability</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volDisability?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volDisability?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volDisability?.secondMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volDisability?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volDisability?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volDisability?.secondMonth[index]?.volArr
                            ?.length || 0) +
                          (report?.volDisability?.thirdMonth[index]?.volArr
                            ?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volRace} height={600} axisHeight={180} />
            <h3>#8 More diverse volunteers become involved by Employment</h3>
            <div className="table-5">
              <div className="column-title">Employment</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.volEmployment?.firstMonth?.map((report: any) => {
                  return <div key={report?.label}>{report?.label}</div>;
                })}
              </div>
              <div>
                {report?.volEmployment?.firstMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volEmployment?.secondMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volEmployment?.thirdMonth?.map((report: any) => {
                  return (
                    <div key={report?.label}>{report?.volArr?.length || 0}</div>
                  );
                })}
              </div>
              <div>
                {report?.volEmployment?.firstMonth?.map(
                  (volProgByTypes: any, index: number) => {
                    return (
                      <div key={volProgByTypes?.label}>
                        {(volProgByTypes?.volArr?.length || 0) +
                          (report?.volEmployment?.secondMonth[index]?.volArr
                            ?.length || 0) +
                          (report?.volEmployment?.thirdMonth[index]?.volArr
                            ?.length || 0)}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <MultiBarChart data={volDisability} height={600} axisHeight={180} />
            <h3>
              #9 More diverse volunteering opportunities are offered by Activity
              Type
            </h3>
            <div className="table-5">
              <div className="column-title">Activity Type</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.actOngByTypes?.thirdMonth &&
                  Object.entries(report?.actOngByTypes?.thirdMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{key}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.actOngByTypes?.firstMonth &&
                  Object.entries(report?.actOngByTypes?.firstMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.actOngByTypes?.secondMonth &&
                  Object.entries(report?.actOngByTypes?.secondMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.actOngByTypes?.thirdMonth &&
                  Object.entries(report?.actOngByTypes?.thirdMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.actOngByTypes?.thirdMonth &&
                  Object.entries(report?.actOngByTypes?.thirdMonth).map(
                    ([key, value]: any) => {
                      return (
                        <div key={key}>
                          {value +
                            report?.actOngByTypes?.secondMonth[key] +
                            report?.actOngByTypes?.firstMonth[key]}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <MultiBarChart data={actOngByTypes} height={940} axisHeight={525} />
            <h3>
              #9 More diverse volunteering opportunities are offered by Sector
            </h3>
            <div className="table-5">
              <div className="column-title">Sector</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>
                {report?.progsBySectors?.thirdMonth &&
                  Object.entries(report?.progsBySectors?.thirdMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{key}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progsBySectors?.firstMonth &&
                  Object.entries(report?.progsBySectors?.firstMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progsBySectors?.secondMonth &&
                  Object.entries(report?.progsBySectors?.secondMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progsBySectors?.thirdMonth &&
                  Object.entries(report?.progsBySectors?.thirdMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{value}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progsBySectors?.thirdMonth &&
                  Object.entries(report?.progsBySectors?.thirdMonth).map(
                    ([key, value]: any) => {
                      return (
                        <div key={key}>
                          {value +
                            report?.progsBySectors?.secondMonth[key] +
                            report?.progsBySectors?.firstMonth[key]}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <MultiBarChart data={progsBySectors} />
            <h3>
              #9 More diverse volunteering opportunities are offered by Activity
              and Region, First Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              {report?.actOngByTypesLoc?.firstMonth &&
                returnActOngByLoc(report?.actOngByTypesLoc?.firstMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.actOngByTypesLoc?.firstMonth?.length && "Sin datos"}
            <h3>
              #9 More diverse volunteering opportunities are offered by Activity
              and Region, Second Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              {report?.actOngByTypesLoc?.secondMonth &&
                returnActOngByLoc(report?.actOngByTypesLoc?.secondMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.actOngByTypesLoc?.secondMonth?.length && "Sin datos"}
            <h3>
              #9 More diverse volunteering opportunities are offered by Activity
              and Region, Third Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              {report?.actOngByTypesLoc?.thirdMonth &&
                returnActOngByLoc(report?.actOngByTypesLoc?.thirdMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.actOngByTypesLoc?.thirdMonth?.length && "Sin datos"}
            <h3>#10 More diverse beneficiaries are reached First Month</h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              {report?.actRegionsVolBens?.firstMonth &&
                returnActRegionsVolBens(
                  report?.actRegionsVolBens?.firstMonth
                )?.map((element: any, index: number) => {
                  return (
                    <div key={index}>
                      {Array.isArray(element)
                        ? element.map((el: any, index: number) => {
                            return <div key={index}>{el}</div>;
                          })
                        : element}
                    </div>
                  );
                })}
            </div>
            {!report?.actRegionsVolBens?.firstMonth?.length && "Sin datos"}

            <h3>#10 More diverse beneficiaries are reached Second Month</h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">Second Month</div>
              {report?.actRegionsVolBens?.secondMonth &&
                returnActRegionsVolBens(
                  report?.actRegionsVolBens?.secondMonth
                )?.map((element: any, index: number) => {
                  return (
                    <div key={index}>
                      {Array.isArray(element)
                        ? element.map((el: any, index: number) => {
                            return <div key={index}>{el}</div>;
                          })
                        : element}
                    </div>
                  );
                })}
            </div>
            {!report?.actRegionsVolBens?.secondMonth?.length && "Sin datos"}

            <h3>#10 More diverse beneficiaries are reached Third Month</h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Activity</div>
              <div className="column-title">Second Month</div>
              {report?.actRegionsVolBens?.thirdMonth &&
                returnActRegionsVolBens(
                  report?.actRegionsVolBens?.thirdMonth
                )?.map((element: any, index: number) => {
                  return (
                    <div key={index}>
                      {Array.isArray(element)
                        ? element.map((el: any, index: number) => {
                            return <div key={index}>{el}</div>;
                          })
                        : element}
                    </div>
                  );
                })}
            </div>
            {!report?.actRegionsVolBens?.thirdMonth?.length && "Sin datos"}

            <h3>
              #11 Beneficiaries from communities previously underserved are
              reached
            </h3>
            <div className="table-4">
              <div className="column-title">Vulnerability Profile</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div>
                {report?.actVulnProfRegions?.thirdMonth &&
                  Object.entries(report?.actVulnProfRegions?.thirdMonth).map(
                    ([key, value]: any) => {
                      return <div key={key}>{key}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.actVulnProfRegions?.firstMonth &&
                  Object.entries(report?.actVulnProfRegions?.firstMonth).map(
                    ([key, value]: any) => {
                      return (
                        <div key={key}>
                          {report?.actVulnProfRegions?.firstMonth[key]}
                        </div>
                      );
                    }
                  )}
              </div>
              <div>
                {report?.actVulnProfRegions?.secondMonth &&
                  Object.entries(report?.actVulnProfRegions?.secondMonth).map(
                    ([key, value]: any) => {
                      return (
                        <div key={key}>
                          {report?.actVulnProfRegions?.secondMonth[key]}
                        </div>
                      );
                    }
                  )}
              </div>
              <div>
                {report?.actVulnProfRegions?.thirdMonth &&
                  Object.entries(report?.actVulnProfRegions?.thirdMonth).map(
                    ([key, value]: any) => {
                      return (
                        <div key={key}>
                          {report?.actVulnProfRegions?.thirdMonth[key]}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            <MultiBarChart
              data={actVulnProfRegions}
              height={600}
              axisHeight={230}
            />
          </>
        )}
        {selecteds.includes("3") && (
          <>
            <h2>Societal strengthening</h2>

            <h3>
              #14 Volunteer involving organisation measure impact First Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Nº volunteer</div>
              {report?.volActs?.firstMonth &&
                returnActRegionsVolActs(report?.volActs?.firstMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volActs?.firstMonth?.length && "Sin datos"}
            {report?.volActs?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={volActsFM}
                oneElement={true}
                elementName="volunteers"
                height={700}
                axisHeight={310}
              />
            )}

            <h3>
              #14 Volunteer involving organisation measure impact Second Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Nº volunteer</div>
              {report?.volActs?.secondMonth &&
                returnActRegionsVolActs(report?.volActs?.secondMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volActs?.secondMonth?.length && "Sin datos"}
            {report?.volActs?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={volActsSM}
                oneElement={true}
                elementName="volunteers"
                height={700}
                axisHeight={310}
              />
            )}

            <h3>
              #14 Volunteer involving organisation measure impact Third Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Nº volunteer</div>
              {report?.volActs?.thirdMonth &&
                returnActRegionsVolActs(report?.volActs?.thirdMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volActs?.thirdMonth?.length && "Sin datos"}
            {report?.volActs?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={volActsTM}
                oneElement={true}
                elementName="volunteers"
                height={700}
                axisHeight={310}
              />
            )}

            <h3>
              #15 Volunteer involving organisation secure funding First Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Funding Categories</div>
              <div className="column-title">First Month</div>
              {report?.volSecRegs?.firstMonth &&
                returnActRegionsVolActs(report?.volSecRegs?.firstMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volSecRegs?.firstMonth?.length && "Sin datos"}

            <h3>
              #15 Volunteer involving organisation secure funding Second Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Funding Categories</div>
              <div className="column-title">Second Month</div>
              {report?.volSecRegs?.secondMonth &&
                returnActRegionsVolActs(report?.volSecRegs?.secondMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volSecRegs?.secondMonth?.length && "Sin datos"}

            <h3>
              #15 Volunteer involving organisation secure funding Third Month
            </h3>
            <div className="table-4">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Funding Categories</div>
              <div className="column-title">Third Month</div>
              {report?.volSecRegs?.thirdMonth &&
                returnActRegionsVolSecRegs(report?.volSecRegs?.thirdMonth)?.map(
                  (element: any, index: number) => {
                    return (
                      <div key={index}>
                        {Array.isArray(element)
                          ? element.map((el: any, index: number) => {
                              return <div key={index}>{el}</div>;
                            })
                          : element}
                      </div>
                    );
                  }
                )}
            </div>
            {!report?.volSecRegs?.thirdMonth?.length && "Sin datos"}

            <h3>
              #16 Volunteer involvement offers net economic gain First Month
            </h3>
            <div className="table-2">
              <div className="column-title">Organisation</div>
              <div className="column-title">Third Month</div>
              <div>
                {report?.ongPriceRegs?.firstMonth &&
                  report?.ongPriceRegs?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.name}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.ongPriceRegs?.firstMonth &&
                  report?.ongPriceRegs?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.hours}</div>;
                    }
                  )}
              </div>
            </div>
            {!report?.ongPriceRegs?.firstMonth?.length && "Sin datos"}
            {report?.ongPriceRegs?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={ongPriceRegsFM}
                oneElement={true}
                elementName="firstMonth"
                height={720}
                axisHeight={410}
              />
            )}

            <h3>
              #16 Volunteer involvement offers net economic gain Second Month
            </h3>
            <div className="table-2">
              <div className="column-title">Organisation</div>
              <div className="column-title">Third Month</div>
              <div>
                {report?.ongPriceRegs?.secondMonth &&
                  report?.ongPriceRegs?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.name}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.ongPriceRegs?.secondMonth &&
                  report?.ongPriceRegs?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.hours}</div>;
                    }
                  )}
              </div>
            </div>
            {!report?.ongPriceRegs?.secondMonth?.length && "Sin datos"}
            {report?.ongPriceRegs?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={ongPriceRegsSM}
                oneElement={true}
                elementName="secondMonth"
                height={720}
                axisHeight={410}
              />
            )}

            <h3>
              #16 Volunteer involvement offers net economic gain Third Month
            </h3>
            <div className="table-2">
              <div className="column-title">Organisation</div>
              <div className="column-title">Third Month</div>
              <div>
                {report?.ongPriceRegs?.thirdMonth &&
                  report?.ongPriceRegs?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.name}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.ongPriceRegs?.thirdMonth &&
                  report?.ongPriceRegs?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.name}>{element.hours}</div>;
                    }
                  )}
              </div>
            </div>
            {!report?.ongPriceRegs?.thirdMonth?.length && "Sin datos"}
            {report?.ongPriceRegs?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={ongPriceRegsTM}
                oneElement={true}
                elementName="thirdMonth"
                height={720}
                axisHeight={410}
              />
            )}

            <h3>#17 Health services involve volunteers First Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthVols?.firstMonth &&
                  report?.progHealthVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.firstMonth &&
                  report?.progHealthVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.firstMonth &&
                  report?.progHealthVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthVols?.firstMonth?.length && "Sin datos"}
            {report?.progHealthVols?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthVolsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>#17 Health services involve volunteers Second Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthVols?.secondMonth &&
                  report?.progHealthVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.secondMonth &&
                  report?.progHealthVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.secondMonth &&
                  report?.progHealthVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthVols?.secondMonth?.length && "Sin datos"}
            {report?.progHealthVols?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthVolsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>#17 Health services involve volunteers Third Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthVols?.thirdMonth &&
                  report?.progHealthVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.thirdMonth &&
                  report?.progHealthVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthVols?.thirdMonth &&
                  report?.progHealthVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthVols?.thirdMonth?.length && "Sin datos"}
            {report?.progHealthVols?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthVolsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>
              #18 Health services have employer supported volunteering
              programmes First Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthEmps?.firstMonth &&
                  report?.progHealthEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.firstMonth &&
                  report?.progHealthEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.firstMonth &&
                  report?.progHealthEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthEmps?.firstMonth?.length && "Sin datos"}
            {report?.progHealthEmps?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthEmpsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>
              #18 Health services have employer supported volunteering
              programmes Third Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthEmps?.secondMonth &&
                  report?.progHealthEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.secondMonth &&
                  report?.progHealthEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.secondMonth &&
                  report?.progHealthEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthEmps?.secondMonth?.length && "Sin datos"}
            {report?.progHealthEmps?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthEmpsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>
              #18 Health services have employer supported volunteering
              programmes First Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progHealthEmps?.thirdMonth &&
                  report?.progHealthEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.thirdMonth &&
                  report?.progHealthEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progHealthEmps?.thirdMonth &&
                  report?.progHealthEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progHealthEmps?.thirdMonth?.length && "Sin datos"}
            {report?.progHealthEmps?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progHealthEmpsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={220}
              />
            )}

            <h3>#19 Educational institutions involve volunteers First Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducVols?.firstMonth &&
                  report?.progEducVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.firstMonth &&
                  report?.progEducVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.firstMonth &&
                  report?.progEducVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducVols?.firstMonth?.length && "Sin datos"}
            {report?.progEducVols?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progEducVolsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #19 Educational institutions involve volunteers Second Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducVols?.secondMonth &&
                  report?.progEducVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.secondMonth &&
                  report?.progEducVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.secondMonth &&
                  report?.progEducVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducVols?.secondMonth?.length && "Sin datos"}
            {report?.progEducVols?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progEducVolsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>#19 Educational institutions involve volunteers Third Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducVols?.thirdMonth &&
                  report?.progEducVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.thirdMonth &&
                  report?.progEducVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducVols?.thirdMonth &&
                  report?.progEducVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducVols?.thirdMonth?.length && "Sin datos"}
            {report?.progEducVols?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progEducVolsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #20 Educational institutions have employer supported volunteering
              programmes First Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducEmps?.firstMonth &&
                  report?.progEducEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.firstMonth &&
                  report?.progEducEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.firstMonth &&
                  report?.progEducEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducEmps?.firstMonth?.length && "Sin datos"}
            {report?.progEducEmps?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progEducEmpsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #20 Educational institutions have employer supported volunteering
              programmes Third Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducEmps?.secondMonth &&
                  report?.progEducEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.secondMonth &&
                  report?.progEducEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.secondMonth &&
                  report?.progEducEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducEmps?.secondMonth?.length && "Sin datos"}
            {report?.progEducEmps?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progEducEmpsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #20 Educational institutions have employer supported volunteering
              programmes Third Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progEducEmps?.thirdMonth &&
                  report?.progEducEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.thirdMonth &&
                  report?.progEducEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progEducEmps?.thirdMonth &&
                  report?.progEducEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progEducEmps?.thirdMonth?.length && "Sin datos"}
            {report?.progEducEmps?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progEducEmpsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>#21 Social businesses involve volunteers First Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconVols?.firstMonth &&
                  report?.progSocEconVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.firstMonth &&
                  report?.progSocEconVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.firstMonth &&
                  report?.progSocEconVols?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconVols?.firstMonth?.length && "Sin datos"}
            {report?.progSocEconVols?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconVolsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>#21 Social businesses involve volunteers Third Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconVols?.secondMonth &&
                  report?.progSocEconVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.secondMonth &&
                  report?.progSocEconVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.secondMonth &&
                  report?.progSocEconVols?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconVols?.secondMonth?.length && "Sin datos"}
            {report?.progSocEconVols?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconVolsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>#21 Social businesses involve volunteers Third Month</h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconVols?.thirdMonth &&
                  report?.progSocEconVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.thirdMonth &&
                  report?.progSocEconVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconVols?.thirdMonth &&
                  report?.progSocEconVols?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconVols?.thirdMonth?.length && "Sin datos"}
            {report?.progSocEconVols?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconVolsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #22 Employers have employer supported volunteer programmes First
              Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconEmps?.firstMonth &&
                  report?.progSocEconEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.firstMonth &&
                  report?.progSocEconEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.firstMonth &&
                  report?.progSocEconEmps?.firstMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconEmps?.firstMonth?.length && "Sin datos"}
            {report?.progSocEconEmps?.firstMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconEmpsFM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #22 Employers have employer supported volunteer programmes Third
              Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconEmps?.secondMonth &&
                  report?.progSocEconEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.secondMonth &&
                  report?.progSocEconEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.secondMonth &&
                  report?.progSocEconEmps?.secondMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconEmps?.secondMonth?.length && "Sin datos"}
            {report?.progSocEconEmps?.secondMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconEmpsSM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}

            <h3>
              #22 Employers have employer supported volunteer programmes Third
              Month
            </h3>
            <div className="table-3">
              <div className="column-title">Country</div>
              <div className="column-title">Region</div>
              <div className="column-title">Sector</div>
              <div>
                {report?.progSocEconEmps?.thirdMonth &&
                  report?.progSocEconEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.country}>{element.country}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.thirdMonth &&
                  report?.progSocEconEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return <div key={element.region}>{element.region}</div>;
                    }
                  )}
              </div>
              <div>
                {report?.progSocEconEmps?.thirdMonth &&
                  report?.progSocEconEmps?.thirdMonth?.map(
                    (element: any, index: number) => {
                      return (
                        <div key={element.sector?.length}>
                          {element.sector?.length}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
            {!report?.progSocEconEmps?.thirdMonth?.length && "Sin datos"}
            {report?.progSocEconEmps?.thirdMonth?.length > 0 && (
              <MultiBarChart
                data={progSocEconEmpsTM}
                oneElement={true}
                elementName="sectors"
                height={610}
                axisHeight={290}
              />
            )}
          </>
        )}

        {selecteds.includes("4") && (
          <>
            <h2>Environmental protection</h2>

            <h3>
              #23 Projects for environmental protection strengthen environmental
              work Programme Types
            </h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.environmentProgTypes?.firstMonth || 0}</div>
              <div>{report?.environmentProgTypes?.secondMonth || 0}</div>
              <div>{report?.environmentProgTypes?.thirdMonth || 0}</div>
              <div>
                {(report?.environmentProgTypes?.firstMonth || 0) +
                  (report?.environmentProgTypes?.secondMonth || 0) +
                  (report?.environmentProgTypes?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent
              data={environmentProgTypes.sort(orderByName)}
            />

            <h3>
              #23 Projects for environmental protection strengthen environmental
              work Programme Sector
            </h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.environmentProgSector?.firstMonth || 0}</div>
              <div>{report?.environmentProgSector?.secondMonth || 0}</div>
              <div>{report?.environmentProgSector?.thirdMonth || 0}</div>
              <div>
                {(report?.environmentProgSector?.firstMonth || 0) +
                  (report?.environmentProgSector?.secondMonth || 0) +
                  (report?.environmentProgSector?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent
              data={environmentProgSector.sort(orderByName)}
            />

            <h3>
              #24 Volunteers become involved in projects for environmental
              protection
            </h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.actProgSDGs?.firstMonth || 0}</div>
              <div>{report?.actProgSDGs?.secondMonth || 0}</div>
              <div>{report?.actProgSDGs?.thirdMonth || 0}</div>
              <div>
                {(report?.actProgSDGs?.firstMonth || 0) +
                  (report?.actProgSDGs?.secondMonth || 0) +
                  (report?.actProgSDGs?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent data={actProgSDGs.sort(orderByName)} />

            <h3>#25 Volunteers gain skills for environmental protection</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.actProgSkills?.firstMonth || 0}</div>
              <div>{report?.actProgSkills?.secondMonth || 0}</div>
              <div>{report?.actProgSkills?.thirdMonth || 0}</div>
              <div>
                {(report?.actProgSkills?.firstMonth || 0) +
                  (report?.actProgSkills?.secondMonth || 0) +
                  (report?.actProgSkills?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent data={actProgSkills.sort(orderByName)} />

            <h3>#26 Volunteers travel</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.descMeasures?.firstMonth || 0}</div>
              <div>{report?.descMeasures?.secondMonth || 0}</div>
              <div>{report?.descMeasures?.thirdMonth || 0}</div>
              <div>
                {(report?.descMeasures?.firstMonth || 0) +
                  (report?.descMeasures?.secondMonth || 0) +
                  (report?.descMeasures?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent data={descMeasures.sort(orderByName)} />

            <h3>#27 Organisation footprint</h3>
            <div className="table-5">
              <div className="column-title">Activity</div>
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>Materials money expense</div>
              <div>{report?.descRecMatMons?.firstMonth?.totalActMat || 0}</div>
              <div>{report?.descRecMatMons?.secondMonth?.totalActMat || 0}</div>
              <div>{report?.descRecMatMons?.thirdMonth?.totalActMat || 0}</div>
              <div>
                {(report?.descRecMatMons?.firstMonth?.totalActMat || 0) +
                  (report?.descRecMatMons?.secondMonth?.totalActMat || 0) +
                  (report?.descRecMatMons?.thirdMonth?.totalActMat || 0)}
              </div>
              <div>Recycling and reusing equipment</div>
              <div>
                {report?.descRecMatMons?.firstMonth?.totalActRecEq || 0}
              </div>
              <div>
                {report?.descRecMatMons?.secondMonth?.totalActRecEq || 0}
              </div>
              <div>
                {report?.descRecMatMons?.thirdMonth?.totalActRecEq || 0}
              </div>
              <div>
                {(report?.descRecMatMons?.firstMonth?.totalActRecEq || 0) +
                  (report?.descRecMatMons?.secondMonth?.totalActRecEq || 0) +
                  (report?.descRecMatMons?.thirdMonth?.totalActRecEq || 0)}
              </div>
              <div>Recycling and reusing consumables</div>
              <div>
                {report?.descRecMatMons?.firstMonth?.totalActRecCons || 0}
              </div>
              <div>
                {report?.descRecMatMons?.secondMonth?.totalActRecCons || 0}
              </div>
              <div>
                {report?.descRecMatMons?.thirdMonth?.totalActRecCons || 0}
              </div>
              <div>
                {(report?.descRecMatMons?.firstMonth?.totalActRecCons || 0) +
                  (report?.descRecMatMons?.secondMonth?.totalActRecCons || 0) +
                  (report?.descRecMatMons?.thirdMonth?.totalActRecCons || 0)}
              </div>
            </div>

            <h3>#28 Carbon captured</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.descPlantTrees?.firstMonth || 0}</div>
              <div>{report?.descPlantTrees?.secondMonth || 0}</div>
              <div>{report?.descPlantTrees?.thirdMonth || 0}</div>
              <div>
                {(report?.descPlantTrees?.firstMonth || 0) +
                  (report?.descPlantTrees?.secondMonth || 0) +
                  (report?.descPlantTrees?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent data={descPlantTrees.sort(orderByName)} />

            <h3>#29 Carbon output reduced</h3>
            <div className="table-4">
              <div className="column-title">First Month</div>
              <div className="column-title">Second Month</div>
              <div className="column-title">Third Month</div>
              <div className="column-title">accumulated</div>
              <div>{report?.descEnSavPlans?.firstMonth || 0}</div>
              <div>{report?.descEnSavPlans?.secondMonth || 0}</div>
              <div>{report?.descEnSavPlans?.thirdMonth || 0}</div>
              <div>
                {(report?.descEnSavPlans?.firstMonth || 0) +
                  (report?.descEnSavPlans?.secondMonth || 0) +
                  (report?.descEnSavPlans?.thirdMonth || 0)}
              </div>
            </div>
            <PieChartGapComponent data={descEnSavPlans.sort(orderByName)} />
          </>
        )}
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          display: grid;
          justify-content: center;
          box-sizing: border-box;
          padding: 1.5rem 1rem; /** */
        }

        h3 {
          color: #ff5722;
          border-bottom: solid 1px gainsboro;
          padding-bottom: 0.5rem;
          padding-right: 3rem;
          font-size: 1rem;
        }

        .button-container {
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        .excel-button {
          width: max-content;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }

        .table-2,
        .table-4,
        .table-3,
        .table-5,
        .table-7 {
          width: max-content;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(4, max-content);
          grid-template-rows: auto;
          grid-column-gap: 1rem;
          grid-row-gap: 0.5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
          box-sizing: border-box;
          max-width: 90vw; /** */
          overflow: auto; /** */
          font-size: 14px;
        }

        .table-5 {
          grid-template-columns: repeat(5, max-content);
        }

        .table-7 {
          grid-template-columns: repeat(7, max-content);
        }

        .table-3 {
          grid-template-columns: repeat(3, max-content);
        }

        .table-2 {
          grid-template-columns: repeat(2, max-content);
        }

        .column-title {
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media print {
          main {
            justify-content: flex-start;
            padding: 2rem;
          }

          .button-container {
            display: none;
          }

          .table-2,
          .table-4,
          .table-3,
          .table-5,
          .table-7 {
            max-width: max-content;
            overflow: unset;
          }
        }
      `}</style>
    </>
  );
}

export const getServerSideProps: any = async (context: any) => {
  const { year, quartil, selecteds } = context.query;
  const response = await getOneReportByYearQuartil({ year, quartil });
  if (!response.data?.actProgSDGs) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const data = response.data;

  // 1
  const newVolNoBef: any = [];
  if (data?.newVolunteersNoBefore) {
    Object.entries(data?.newVolunteersNoBefore).forEach(([key, value]: any) => {
      if (key !== "global") {
        newVolNoBef.push({ name: key, value: value });
      }
    });
  }

  // 2
  const newVolNoYoung: any = [];
  if (data?.newVolunteersYoung) {
    Object.entries(data?.newVolunteersYoung).forEach(([key, value]: any) => {
      if (key !== "global") {
        newVolNoYoung.push({ name: key, value: value });
      }
    });
  }

  // 3
  const volByTwoOrMoreOrgAct: any = [];
  if (data?.volunteersByTwoOrMoreOrgAct) {
    Object.entries(data?.volunteersByTwoOrMoreOrgAct).forEach(
      ([key, value]: any) => {
        if (key !== "global") {
          volByTwoOrMoreOrgAct.push({ name: key, value: value });
        }
      }
    );
  }

  // 4
  const volByDifOrgAct: any = [];
  if (data?.volunteersByDifOrgAct) {
    Object.entries(data?.volunteersByDifOrgAct).forEach(([key, value]: any) => {
      if (key !== "global") {
        volByDifOrgAct.push({ name: key, value: value });
      }
    });
  }

  // 5
  const volProgByVolType: any = [];
  if (data?.volProgrammeByTypes) {
    Object.entries(data?.volProgrammeByTypes?.firstMonth).forEach(
      (element: any, index: number) => {
        volProgByVolType.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth:
            data?.volProgrammeByTypes?.secondMonth[index].volArr?.length || 0,
          thirdMonth:
            data?.volProgrammeByTypes?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 6
  const volProgBySector: any = [];
  if (data?.volProgrammeBySector) {
    Object.entries(data?.volProgrammeBySector?.firstMonth).forEach(
      (element: any, index: number) => {
        volProgBySector.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth:
            data?.volProgrammeBySector?.secondMonth[index].volArr?.length || 0,
          thirdMonth:
            data?.volProgrammeBySector?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 7
  const volProgByAct: any = [];
  if (data?.volActivities) {
    Object.entries(data?.volActivities?.firstMonth).forEach(
      (element: any, index: number) => {
        volProgByAct.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth:
            data?.volActivities?.secondMonth[index].volArr?.length || 0,
          thirdMonth:
            data?.volActivities?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 7
  let volByExp: any = [];
  if (data?.volExperiences) {
    volByExp = [
      {
        name: "Experience",
        firstMonth: data?.volExperiences?.firstMonth?.rateExpFM,
        secondMonth: data?.volExperiences?.secondMonth?.rateExpSM,
        thirdMonth: data?.volExperiences?.thirdMonth?.rateExpTM,
      },
      {
        name: "Difference",
        firstMonth: data?.volExperiences?.firstMonth?.rateBenFM,
        secondMonth: data?.volExperiences?.secondMonth?.rateBenSM,
        thirdMonth: data?.volExperiences?.thirdMonth?.rateBenTM,
      },
      {
        name: "Benefit",
        firstMonth: data?.volExperiences?.firstMonth?.rateDifFM,
        secondMonth: data?.volExperiences?.secondMonth?.rateDifSM,
        thirdMonth: data?.volExperiences?.thirdMonth?.rateDifTM,
      },
    ];
  }

  // 8
  const volGender: any = [];
  if (data?.volGenders) {
    Object.entries(data?.volGenders?.firstMonth).forEach(
      (element: any, index: number) => {
        volGender.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth: data?.volGenders?.secondMonth[index].volArr?.length || 0,
          thirdMonth: data?.volGenders?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 8
  const volRace: any = [];
  if (data?.volRace) {
    Object.entries(data?.volRace?.firstMonth).forEach(
      (element: any, index: number) => {
        volRace.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth: data?.volRace?.secondMonth[index].volArr?.length || 0,
          thirdMonth: data?.volRace?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 8
  const volDisability: any = [];
  if (data?.volDisability) {
    Object.entries(data?.volDisability?.firstMonth).forEach(
      (element: any, index: number) => {
        volDisability.push({
          name: element[1].label,
          firstMonth: element[1].volArr?.length || 0,
          secondMonth:
            data?.volDisability?.secondMonth[index].volArr?.length || 0,
          thirdMonth:
            data?.volDisability?.thirdMonth[index].volArr?.length || 0,
        });
      }
    );
  }

  // 9
  const actOngByTypes: any = [];
  if (data?.actOngByTypes) {
    Object.entries(data?.actOngByTypes?.firstMonth).forEach(
      (element: any, index: number) => {
        actOngByTypes.push({
          name: element[0],
          firstMonth: element[1] || 0,
          secondMonth: data?.actOngByTypes?.secondMonth[element[0]] || 0,
          thirdMonth: data?.actOngByTypes?.thirdMonth[element[0]] || 0,
        });
      }
    );
  }

  // 9
  const progsBySectors: any = [];
  if (data?.progsBySectors) {
    Object.entries(data?.progsBySectors?.firstMonth).forEach(
      (element: any, index: number) => {
        progsBySectors.push({
          name: element[0],
          firstMonth: element[1] || 0,
          secondMonth: data?.progsBySectors?.secondMonth[element[0]] || 0,
          thirdMonth: data?.progsBySectors?.thirdMonth[element[0]] || 0,
        });
      }
    );
  }

  // 11
  const actVulnProfRegions: any = [];
  if (data?.actVulnProfRegions) {
    Object.entries(data?.actVulnProfRegions?.firstMonth).forEach(
      (element: any, index: number) => {
        actVulnProfRegions.push({
          name: element[0],
          firstMonth: element[1] || 0,
          secondMonth: data?.actVulnProfRegions?.secondMonth[element[0]] || 0,
          thirdMonth: data?.actVulnProfRegions?.thirdMonth[element[0]] || 0,
        });
      }
    );
  }

  // 14
  const volActsFM: any = [];
  if (data?.volActs) {
    Object.entries(data?.volActs?.firstMonth).forEach(
      (element: any, index: number) => {
        volActsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          volunteers: element[1].voluntArr.length || 0,
        });
      }
    );
  }

  // 14
  const volActsSM: any = [];
  if (data?.volActs) {
    Object.entries(data?.volActs?.secondMonth).forEach(
      (element: any, index: number) => {
        volActsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          volunteers: element[1].voluntArr.length || 0,
        });
      }
    );
  }

  // 14
  const volActsTM: any = [];
  if (data?.volActs) {
    Object.entries(data?.volActs?.thirdMonth).forEach(
      (element: any, index: number) => {
        volActsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          volunteers: element[1].voluntArr.length || 0,
        });
      }
    );
  }

  // 16
  const ongPriceRegsFM: any = [];
  if (data?.ongPriceRegs) {
    data?.ongPriceRegs?.firstMonth.forEach((element: any) => {
      ongPriceRegsFM.push({
        name: element.name,
        firstMonth: element.hours || 0,
      });
    });
  }

  // 16
  const ongPriceRegsSM: any = [];
  if (data?.ongPriceRegs) {
    data?.ongPriceRegs?.secondMonth.forEach((element: any) => {
      ongPriceRegsSM.push({
        name: element.name,
        secondMonth: element.hours || 0,
      });
    });
  }

  // 16
  const ongPriceRegsTM: any = [];
  if (data?.ongPriceRegs) {
    data?.ongPriceRegs?.thirdMonth.forEach((element: any) => {
      ongPriceRegsTM.push({
        name: element.name,
        thirdMonth: element.hours || 0,
      });
    });
  }

  // 17
  const progHealthVolsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthVols?.thirdMonth).forEach(
      (element: any, index: number) => {
        progHealthVolsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 17
  const progHealthVolsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthVols?.thirdMonth).forEach(
      (element: any, index: number) => {
        progHealthVolsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 17
  const progHealthVolsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthVols?.thirdMonth).forEach(
      (element: any, index: number) => {
        progHealthVolsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 18
  const progHealthEmpsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthEmps?.firstMonth).forEach(
      (element: any, index: number) => {
        progHealthEmpsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 18
  const progHealthEmpsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthEmps?.secondMonth).forEach(
      (element: any, index: number) => {
        progHealthEmpsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 18
  const progHealthEmpsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progHealthEmps?.thirdMonth).forEach(
      (element: any, index: number) => {
        progHealthEmpsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 19
  const progEducVolsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducVols?.firstMonth).forEach(
      (element: any, index: number) => {
        progEducVolsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 19
  const progEducVolsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducVols?.secondMonth).forEach(
      (element: any, index: number) => {
        progEducVolsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 19
  const progEducVolsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducVols?.thirdMonth).forEach(
      (element: any, index: number) => {
        progEducVolsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 20
  const progEducEmpsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducEmps?.firstMonth).forEach(
      (element: any, index: number) => {
        progEducEmpsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 20
  const progEducEmpsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducEmps?.secondMonth).forEach(
      (element: any, index: number) => {
        progEducEmpsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 20
  const progEducEmpsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progEducEmps?.thirdMonth).forEach(
      (element: any, index: number) => {
        progEducEmpsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 21
  const progSocEconVolsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconVols?.firstMonth).forEach(
      (element: any, index: number) => {
        progSocEconVolsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 21
  const progSocEconVolsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconVols?.secondMonth).forEach(
      (element: any, index: number) => {
        progSocEconVolsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 21
  const progSocEconVolsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconVols?.thirdMonth).forEach(
      (element: any, index: number) => {
        progSocEconVolsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 22
  const progSocEconEmpsFM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconEmps?.firstMonth).forEach(
      (element: any, index: number) => {
        progSocEconEmpsFM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 22
  const progSocEconEmpsSM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconEmps?.secondMonth).forEach(
      (element: any, index: number) => {
        progSocEconEmpsSM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 22
  const progSocEconEmpsTM: any = [];
  if (data?.progHealthVols) {
    Object.entries(data?.progSocEconEmps?.thirdMonth).forEach(
      (element: any, index: number) => {
        progSocEconEmpsTM.push({
          name: `${element[1].region} - ${element[1].country}`,
          sectors: element[1].sector.length || 0,
        });
      }
    );
  }

  // 23
  const environmentProgTypes: any = [];
  if (data?.environmentProgTypes) {
    Object.entries(data?.environmentProgTypes).forEach(([key, value]: any) => {
      if (key !== "global") {
        environmentProgTypes.push({ name: key, value: value });
      }
    });
  }

  // 24
  const environmentProgSector: any = [];
  if (data?.environmentProgSector) {
    Object.entries(data?.environmentProgSector).forEach(([key, value]: any) => {
      if (key !== "global") {
        environmentProgSector.push({ name: key, value: value });
      }
    });
  }

  // 25
  const actProgSDGs: any = [];
  if (data?.actProgSDGs) {
    Object.entries(data?.actProgSDGs).forEach(([key, value]: any) => {
      if (key !== "global") {
        actProgSDGs.push({ name: key, value: value });
      }
    });
  }

  // 26
  const actProgSkills: any = [];
  if (data?.actProgSkills) {
    Object.entries(data?.actProgSkills).forEach(([key, value]: any) => {
      if (key !== "global") {
        actProgSkills.push({ name: key, value: value });
      }
    });
  }

  // 27
  const descMeasures: any = [];
  if (data?.descMeasures) {
    Object.entries(data?.descMeasures).forEach(([key, value]: any) => {
      if (key !== "global") {
        descMeasures.push({ name: key, value: value });
      }
    });
  }

  // 28
  const descPlantTrees: any = [];
  if (data?.descPlantTrees) {
    Object.entries(data?.descPlantTrees).forEach(([key, value]: any) => {
      if (key !== "global") {
        descPlantTrees.push({ name: key, value: value });
      }
    });
  }

  // 29
  const descEnSavPlans: any = [];
  if (data?.descEnSavPlans) {
    Object.entries(data?.descEnSavPlans).forEach(([key, value]: any) => {
      if (key !== "global") {
        descEnSavPlans.push({ name: key, value: value });
      }
    });
  }

  return {
    props: {
      report: response.data,
      newVolNoBef,
      newVolNoYoung,
      volByTwoOrMoreOrgAct,
      volByDifOrgAct,
      volProgBySector,
      volProgByVolType,
      volProgByAct,
      volByExp,
      volGender,
      volRace,
      volDisability,
      actOngByTypes,
      progsBySectors,
      actVulnProfRegions,
      volActsFM,
      volActsSM,
      volActsTM,
      ongPriceRegsFM,
      ongPriceRegsSM,
      ongPriceRegsTM,
      progHealthVolsFM,
      progHealthVolsSM,
      progHealthVolsTM,
      progHealthEmpsFM,
      progHealthEmpsSM,
      progHealthEmpsTM,
      progEducVolsFM,
      progEducVolsSM,
      progEducVolsTM,
      progEducEmpsFM,
      progEducEmpsSM,
      progEducEmpsTM,
      progSocEconVolsFM,
      progSocEconVolsSM,
      progSocEconVolsTM,
      progSocEconEmpsFM,
      progSocEconEmpsSM,
      progSocEconEmpsTM,
      environmentProgTypes,
      environmentProgSector,
      actProgSDGs,
      actProgSkills,
      descMeasures,
      descPlantTrees,
      descEnSavPlans,
      selecteds,
    },
  };
};

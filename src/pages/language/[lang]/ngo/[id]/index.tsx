import { HeadContent } from "@/components/Particles/HeaderContent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CustomTable from "@/components/Particles/CustomTable";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { getOngInfoById } from "@/services/ong/getOngInfoById";
import {
  SDGList_es,
  SDGList_fr,
  SDGList_hr,
  SDGList_sq,
} from "@/mockups/activity_registration";

export default function Home({ data, image, name, lang }: any) {
  const PROGRAMMES = {
    headers: [
      "Programmes",
      "Start Date",
      "End Date",
      "Country",
      "Region",
      "Edit",
    ],
    rows: data?.myProgrammes || [],
  };

  const PROGRAMMES_ES = {
    headers: [
      "Programas",
      "Fecha de inicio",
      "Fecha final",
      "País",
      "Región",
      "Edit",
    ],
    rows: data?.myProgrammes || [],
  };

  const PROGRAMMES_FR = {
    headers: [
      "Programmes",
      "Date de début",
      "Date de fin",
      "Pays",
      "Région",
      "Edit",
    ],
    rows: data?.myProgrammes || [],
  };

  const PROGRAMMES_HR = {
    headers: [
      "Programi",
      "Početni datum",
      "Datum završetka",
      "Zemlja",
      "Regija",
      "Edit",
    ],
    rows: data?.myProgrammes || [],
  };

  const PROGRAMMES_SQ = {
    headers: [
      "Programet",
      "Data e fillimit",
      "Data e përfundimit",
      "Vendi",
      "Rajon",
      "Edit",
    ],
    rows: data?.myProgrammes || [],
  };

  const ACTIVITIES = {
    headers: [
      "Activity",
      "Programme",
      "Start Date",
      "End Date",
      "Activity Hours",
      "Country",
      "Region",
      "Edit",
    ],
    rows: data?.myActivities || [],
  };

  const ACTIVITIES_ES = {
    headers: [
      "Actividad",
      "Programa",
      "Fecha de inicio",
      "Fecha final",
      "Horas de actividad",
      "País",
      "Región",
      "Edit",
    ],
    rows: data?.myActivities || [],
  };

  const ACTIVITIES_FR = {
    headers: [
      "Activité",
      "Programme",
      "Date de début",
      "Date de fin",
      "Heures d'activité",
      "Pays",
      "Région",
      "Edit",
    ],
    rows: data?.myActivities || [],
  };

  const ACTIVITIES_HR = {
    headers: [
      "Aktivnost",
      "Program",
      "Početni datum",
      "Datum završetka",
      "Sati aktivnosti",
      "Zemlja",
      "Regija",
      "Edit",
    ],
    rows: data?.myActivities || [],
  };

  const ACTIVITIES_SQ = {
    headers: [
      "Aktiviteti",
      "Programi",
      "Data e fillimit",
      "Data e përfundimit",
      "Ora e aktivitetit",
      "Vendi",
      "Rajon",
      "Edit",
    ],
    rows: data?.myActivities || [],
  };

  const VOLUNTEERS = {
    headers: ["Name", "Country", "Region"],
    rows: data?.myVolunteers || [],
  };

  const VOLUNTEERS_ES = {
    headers: ["Nombre", "País", "Región"],
    rows: data?.myVolunteers || [],
  };

  const VOLUNTEERS_FR = {
    headers: ["Nom", "Pays", "Région"],
    rows: data?.myVolunteers || [],
  };

  const VOLUNTEERS_HR = {
    headers: ["Ime", "Država", "Regija"],
    rows: data?.myVolunteers || [],
  };

  const VOLUNTEERS_SQ = {
    headers: ["Emri", "Vendi", "Rajoni"],
    rows: data?.myVolunteers || [],
  };

  const SDGIMPACTED = {
    headers: ["SDGs impacted"],
    rows: data?.mySDG || [],
  };

  const rows_sdg_es = data?.mySDG?.map((element: string) => {
    const skill = SDGList_es.find(
      (item: any) => item.value === element[0]?.substring(0, 5)?.trim()
    );
    return [skill?.label];
  });

  const SDGIMPACTED_ES = {
    headers: ["SDGs impactados"],
    rows: rows_sdg_es,
  };

  const rows_sdg_fr = data?.mySDG?.map((element: string) => {
    const skill = SDGList_fr.find(
      (item: any) => item.value === element[0]?.substring(0, 5)?.trim()
    );
    return [skill?.label];
  });

  const SDGIMPACTED_FR = {
    headers: ["Les SDGs impactés"],
    rows: rows_sdg_fr,
  };

  const rows_sdg_hr = data?.mySDG?.map((element: string) => {
    const skill = SDGList_hr.find(
      (item: any) => item.value === element[0]?.substring(0, 5)?.trim()
    );
    return [skill?.label];
  });

  const SDGIMPACTED_HR = {
    headers: ["Utjecao na SDGS"],
    rows: rows_sdg_hr,
  };

  const rows_sdg_sq = data?.mySDG?.map((element: string) => {
    const skill = SDGList_sq.find(
      (item: any) => item.value === element[0]?.substring(0, 5)?.trim()
    );
    return [skill?.label];
  });

  const SDGIMPACTED_SQ = {
    headers: ["SDGS ndikuar"],
    rows: rows_sdg_sq,
  };

  let title = "My Impact";
  let copy_shared_text = "Copy Share Link";
  let copy_text = "Copied Link";
  let programmes_title = "My Programmes";
  let programmes = PROGRAMMES;
  let activities = ACTIVITIES;
  let volunteers = VOLUNTEERS;
  let sdgs = SDGIMPACTED;
  let activities_title = "My Activities";
  let volunteers_title = "My Volunteers";
  let sdg_title = "SDGs impacted";

  switch (lang) {
    case "es":
      title = "Mi impacto";
      programmes_title = "Mis Programas";
      activities_title = "Mis Actividades";
      volunteers_title = "Mis Voluntarios";
      sdg_title = "SDGs impactados";
      programmes = PROGRAMMES_ES;
      activities = ACTIVITIES_ES;
      volunteers = VOLUNTEERS_ES;
      sdgs = SDGIMPACTED_ES;
      copy_shared_text = "Copiar enlace compartido";
      copy_text = "Enlace copiado";
      break;
    case "fr":
      title = "Mon impact";
      programmes_title = "Mes programmes";
      activities_title = "Mes activités";
      volunteers_title = "Mes bénévoles";
      sdg_title = "Les SDGs impactés";
      programmes = PROGRAMMES_FR;
      activities = ACTIVITIES_FR;
      volunteers = VOLUNTEERS_FR;
      sdgs = SDGIMPACTED_FR;
      copy_shared_text = "Copier le lien de partage";
      copy_text = "Lien copié";
      break;
    case "hr":
      title = "Moj utjecaj";
      programmes_title = "Moji programi";
      activities_title = "Moje aktivnosti";
      volunteers_title = "Moji volonteri";
      sdg_title = "Utjecaj na SDGs";
      programmes = PROGRAMMES_HR;
      activities = ACTIVITIES_HR;
      volunteers = VOLUNTEERS_HR;
      sdgs = SDGIMPACTED_HR;
      copy_shared_text = "Kopiraj Podijeli vezu";
      copy_text = "Kopirana veza";
      break;
    case "sq":
      title = "Ndikimi im";
      programmes_title = "Programet e mia";
      activities_title = "Aktivitetet e mia";
      volunteers_title = "Vullnetarët e mi";
      sdg_title = "SDGs-të e ndikua";
      programmes = PROGRAMMES_SQ;
      activities = ACTIVITIES_SQ;
      volunteers = VOLUNTEERS_SQ;
      sdgs = SDGIMPACTED_SQ;
      copy_shared_text = "Kopjo lidhjen e ndarjes";
      copy_text = "Lidhje e kopjuar";
      break;
    default:
      title = "My Impact";
      programmes_title = "My Programmes";
      activities_title = "My Activities";
      volunteers_title = "My Volunteers";
      sdg_title = "SDGs impacted";
      copy_shared_text = "Copy Share Link";
      copy_text = "Copied Link";
      break;
  }

  return (
    <>
      <HeadContent title="My Impact" />
      <main>
        <div className="title-cont">
          <div className="title">
            <AssignmentIcon sx={{ width: 35, height: 35 }} />
            <h1>{title}</h1>
          </div>
        </div>
        <section className="profile">
          <span className="avatar">
            <img src={image} alt="profile image" className="img-prof" />
          </span>
          <div className="user-info">
            <p className="name">{name}</p>
          </div>
        </section>
        <section className="info-table-content">
          <h2>{programmes_title}</h2>
          <CustomTable headersArr={programmes} />
        </section>
        <section className="info-table-content">
          <h2>{activities_title}</h2>
          <CustomTable headersArr={activities} />
        </section>
        <section className="info-table-content">
          <h2>{volunteers_title}</h2>
          <CustomTable headersArr={volunteers} />
        </section>
        <section className="info-table-content">
          <h2>{sdg_title}</h2>
          <CustomTable headersArr={sdgs} />
        </section>
      </main>

      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          min-height: 100vh;
          display: grid;
          grid-auto-rows: max-content;
          grid-row-gap: 3rem;
          padding: 5rem;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        p {
          margin: 0;
          padding: 0;
        }

        h1 {
          width: 100%;
          line-height: 1.1;
          margin: 0;
          padding: 0;
          font-weight: 900;
        }

        h2 {
          width: 100%;
          line-height: 1.1;
          font-size: 1.5rem;
          margin: 0;
          padding: 0;
          font-weight: 900;
        }

        .img-prof {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .logo {
          width: 9rem;
          height: 2.2rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 9px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .avatar {
          position: relative;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
          overflow: hidden;
          width: 13rem;
          height: 8.12rem;
        }

        .title-cont {
          width: 100%;
          height: max-content;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .title {
          width: max-content;
          height: max-content;
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .profile {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(3, max-content);
          grid-template-rows: 1fr;
          grid-column-gap: 1rem;
          align-items: center;
          box-sizing: border-box;
        }

        .user-info {
          width: max-content;
          height: max-content;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .name {
          font-weight: 800;
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        .info-table-content{
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr
          grid-template-rows: repeat(2, max-content);
          grid-row-gap: 2rem;
          align-items: center;
          box-sizing: border-box;
        }

        @media (max-width: 600px) {
          h1, h2 {
            font-size: 1.3rem;
            max-width: 21rem;
            text-align: center;
            justify-content: center;
            justify-self: center;
          }

          p {
            font-size: .9rem;
          }

          h2 {
            font-size: 1.1rem;
          }

          main {
            padding: 2rem;
          }

          .profile{
            width: max-content;
          }

          .avatar {
            width: 5rem;
            height: 5rem;
          }

          .user-info {
            max-width: 12rem;
          }
        }
      `}</style>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
};

export const getServerSideProps: any = async (context: any) => {
  const { id } = context.query;
  const resp: any = await getOngInfoById(id);

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
      type: resp?.data?.ong?.type,
      data: resp?.data,
      image: resp?.data?.ong?.image,
      name: resp?.data?.ong?.name,
      lang: context.query?.lang,
    },
  };
};

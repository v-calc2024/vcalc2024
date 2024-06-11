import { HeadContent } from "@/components/Particles/HeaderContent";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CustomTable from "@/components/Particles/CustomTable";
import { validateJwt } from "@/utils/validateJwt";
import { getUserInfo } from "@/services/volunteer/getUserInfo";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { getUserInfoById } from "@/services/volunteer/getUserInfoById";
import {
  SDGList_es,
  SDGList_fr,
  SDGList_hr,
  SDGList_sq,
  skillsList_es,
  skillsList_fr,
  skillsList_hr,
  skillsList_sq,
} from "@/mockups/activity_registration";

export default function Home({ type, data, image, name, lang }: any) {
  const ACTIVITIES = {
    headers: ["Activity", "Date", "Activity Hours", "Country", "Region"],
    rows: data?.myActivities,
  };

  const ACTIVITIES_ES = {
    headers: ["Actividad", "Fecha", "Horario de actividad", "País", "Región"],
    rows: data?.myActivities,
  };

  const ACTIVITIES_FR = {
    headers: ["Activité", "Date", "Heures d'activité", "Pays", "Région"],
    rows: data?.myActivities,
  };

  const ACTIVITIES_HR = {
    headers: ["Aktivnost", "Datum", "Sati aktivnosti", "Država", "Regija"],
    rows: data?.myActivities,
  };

  const ACTIVITIES_SQ = {
    headers: ["Aktiviteti", "Data", "Orët e Aktivitetit", "Vendi", "Rajoni"],
    rows: data?.myActivities,
  };

  const NGOS = {
    headers: ["Organisation", "Country", "Region"],
    rows: data?.myONGS,
  };

  const NGOS_ES = {
    headers: ["Organización", "País", "Región"],
    rows: data?.myONGS,
  };

  const NGOS_FR = {
    headers: ["Organisation", "Pays", "Région"],
    rows: data?.myONGS,
  };

  const NGOS_HR = {
    headers: ["Organizacija", "Država", "Regija"],
    rows: data?.myONGS,
  };

  const NGOS_SQ = {
    headers: ["Organizimi", "Vendi", "Rajoni"],
    rows: data?.myONGS,
  };

  const SKILLS = {
    headers: ["Acquired Skills"],
    rows: data?.mySkills,
  };

  const rows_es = data?.mySkills?.map((element: string) => {
    const skill = skillsList_es.find((item: any) => item.value === element[0]);
    return [skill?.label];
  });

  const SKILLS_ES = {
    headers: ["Habilidades adquiridas"],
    rows: rows_es,
  };

  const rows_fr = data?.mySkills?.map((element: string) => {
    const skill = skillsList_fr.find((item: any) => item.value === element[0]);
    return [skill?.label];
  });

  const SKILLS_FR = {
    headers: ["Compétences acquises"],
    rows: rows_fr,
  };

  const rows_hr = data?.mySkills?.map((element: string) => {
    const skill = skillsList_hr.find((item: any) => item.value === element[0]);
    return [skill?.label];
  });

  const SKILLS_HR = {
    headers: ["Stečene vještine"],
    rows: rows_hr,
  };

  const rows_sq = data?.mySkills?.map((element: string) => {
    const skill = skillsList_sq.find((item: any) => item.value === element[0]);
    return [skill?.label];
  });

  const SKILLS_SQ = {
    headers: ["Aftësitë e fituara"],
    rows: rows_sq,
  };

  const SDGIMPACTED = {
    headers: ["SDGs impacted"],
    rows: data?.mySDG,
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
  let activities = ACTIVITIES;
  let activities_title = "My Activities";
  let ngos = NGOS;
  let ngos_title = "My Organisations";
  let skills_title = "Acquired Skills";
  let skills = SKILLS;
  let sdgs = SDGIMPACTED;
  let sdgs_title = "SDGs impacted";
  let copy_shared_text = "Copy Share Link";
  let copy_text = "Copied Link";

  switch (lang) {
    case "es":
      title = "Mi impacto";
      activities_title = "Mis actividades";
      activities = ACTIVITIES_ES;
      ngos_title = "Mis Organizaciones";
      ngos = NGOS_ES;
      skills_title = "Habilidades adquiridas";
      skills = SKILLS_ES;
      sdgs_title = "SDGs impactados";
      sdgs = SDGIMPACTED_ES;
      copy_shared_text = "Copiar enlace compartido";
      copy_text = "Enlace copiado";
      break;
    case "fr":
      title = "Mon impact";
      activities_title = "Mes activités";
      activities = ACTIVITIES_FR;
      ngos_title = "Mon organisation";
      ngos = NGOS_FR;
      skills_title = "Compétences acquises";
      skills = SKILLS_FR;
      sdgs_title = "Les SDGs impactés";
      sdgs = SDGIMPACTED_FR;
      copy_shared_text = "Copier le lien de partage";
      copy_text = "Lien copié";
      break;
    case "hr":
      title = "Moj utjecaj";
      activities_title = "Moje aktivnosti";
      activities = ACTIVITIES_HR;
      ngos_title = "Moja organizacija";
      ngos = NGOS_HR;
      skills_title = "Stečene vještine";
      skills = SKILLS_HR;
      sdgs = SDGIMPACTED_HR;
      copy_shared_text = "Kopiraj Podijeli vezu";
      copy_text = "Kopirana veza";
      break;
    case "sq":
      title = "Ndikimi im";
      activities_title = "Aktivitetet e mia";
      activities = ACTIVITIES_SQ;
      ngos_title = "Organizata ime";
      ngos = NGOS_SQ;
      skills_title = "Aftësitë e fituara";
      skills = SKILLS_SQ;
      sdgs_title = "SDGS ndikuar";
      sdgs = SDGIMPACTED_SQ;
      copy_shared_text = "Kopjo lidhjen e ndarjes";
      copy_text = "Lidhje e kopjuar";
      break;
    default:
      title = "My Impact";
      activities_title = "My Activities";
      activities = ACTIVITIES;
      ngos_title = "My Organisations";
      ngos = NGOS;
      skills_title = "Habilidades adquiridas";
      skills = SKILLS;
      sdgs_title = "Utjecao na SDGS";
      sdgs = SDGIMPACTED;
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
            <Avatar
              alt="Profile Image"
              src={image}
              sx={{ width: "100%", height: "100%" }}
            />
          </span>
          <div className="user-info">
            <p className="name">{name}</p>
            {/*
                <div className="logo">
                  <Image
                    src="/share-linkedin.png"
                    alt="share linkedin"
                    fill
                    objectFit="cover"
                  />
                </div>
              */}
          </div>
        </section>
        <section className="info-table-content">
          <h2>{activities_title}</h2>
          <CustomTable headersArr={activities} />
        </section>
        <section className="info-table-content">
          <h2>{ngos_title}</h2>
          <CustomTable headersArr={ngos} />
        </section>
        <section className="info-table-content">
          <h2>{skills_title}</h2>
          <CustomTable headersArr={skills} />
        </section>
        <section className="info-table-content">
          <h2>{sdgs_title}</h2>
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
          width: 8.12rem;
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
          text-transform: capitalize;
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
  const resp: any = await getUserInfoById(id);

  if (!resp?.data?.volunteer) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      type: resp?.data?.volunteer?.type,
      data: resp?.data,
      image: resp?.data?.volunteer?.image,
      name: `${resp?.data?.volunteer?.firstname} ${resp?.data?.volunteer?.surname}`,
      lang: context.query.lang,
    },
  };
};

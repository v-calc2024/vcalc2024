import { HeadContent } from "@/components/Particles/HeaderContent";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CustomTable from "@/components/Particles/CustomTable";
import { validateJwt } from "@/utils/validateJwt";
import { getUserInfo } from "@/services/volunteer/getUserInfo";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { getUserInfoById } from "@/services/volunteer/getUserInfoById";

export default function Home({ type, data, image, name }: any) {
  const ACTIVITIES = {
    headers: ["Activity", "Date", "Activity Hours", "Country", "Region"],
    rows: data?.myActivities,
  };

  const NGOS = {
    headers: ["Organisation", "Country", "Region"],
    rows: data?.myONGS,
  };

  const SKILLS = {
    headers: ["Acquired Skills"],
    rows: data?.mySkills,
  };

  const SDGIMPACTED = {
    headers: ["SDGs impacted"],
    rows: data?.mySDG,
  };

  return (
    <>
      <HeadContent title="My Impact" />
      <main>
        <div className="title-cont">
          <div className="title">
            <AssignmentIcon sx={{ width: 35, height: 35 }} />
            <h1>My Impact</h1>
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
          <h2>My Activities</h2>
          <CustomTable headersArr={ACTIVITIES} />
        </section>
        <section className="info-table-content">
          <h2>My Organisations</h2>
          <CustomTable headersArr={NGOS} />
        </section>
        <section className="info-table-content">
          <h2>Acquired Skills</h2>
          <CustomTable headersArr={SKILLS} />
        </section>
        <section className="info-table-content">
          <h2>SDGs impacted</h2>
          <CustomTable headersArr={SDGIMPACTED} />
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
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
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
    },
  };
};

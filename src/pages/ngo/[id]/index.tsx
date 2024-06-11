import { HeadContent } from "@/components/Particles/HeaderContent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CustomTable from "@/components/Particles/CustomTable";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";
import { getOngInfoById } from "@/services/ong/getOngInfoById";

export default function Home({ data, image, name }: any) {
  const PROGRAMMES = {
    headers: ["Programmes", "Start Date", "End Date", "Country", "Region"],
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
    ],
    rows: data?.myActivities || [],
  };

  const VOLUNTEERS = {
    headers: ["Name", "Country", "Region"],
    rows: data?.myVolunteers || [],
  };

  const SDGIMPACTED = {
    headers: ["SDGs impacted"],
    rows: data?.mySDG || [],
  };

  return (
    <>
      <HeadContent title="My Impact" />
      <main>
        <div className="title-cont">
          <div className="title">
            <AssignmentIcon sx={{ width: 35, height: 35 }} />
            <h1>{"My Impact"}</h1>
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
          <h2>My Programmes</h2>
          <CustomTable headersArr={PROGRAMMES} />
        </section>
        <section className="info-table-content">
          <h2>My Activities</h2>
          <CustomTable headersArr={ACTIVITIES} />
        </section>
        <section className="info-table-content">
          <h2>My Volunteers</h2>
          <CustomTable headersArr={VOLUNTEERS} />
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
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
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
    },
  };
};

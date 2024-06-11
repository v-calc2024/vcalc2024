import { HeadContent } from "@/components/Particles/HeaderContent";
import { Banner } from "@/components/Particles/Banner";
import Training from "@/components/Particles/Training";
import AboutUs from "@/components/Particles/AboutUs";
import Organization from "@/components/Particles/Organization";
import Opinions from "@/components/Particles/Opinions";
import FAQs from "@/components/Particles/Faqs";
import WhatIs from "@/components/Particles/WhatIsVCalc";
import ImpactReport from "@/components/Particles/ImpactReport";
import { validateJwt } from "@/utils/validateJwt";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import { ReactElement } from "react";

export default function Home({ isValid, email }: any) {
  return (
    <>
      <HeadContent title="Home" />
      <main>
        <Banner isValid={isValid} lang={"en"} />
        <WhatIs />
        <ImpactReport userEmail={email} lang={"en"} />
        <Training />
        <AboutUs />
        <Organization />
        <Opinions />
        <FAQs />
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: max-content;
          display: grid;
          justify-content: center;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout lang="en">{page}</DefaultLayout>;
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);

  if (!isValid) {
    return { props: { type: null } };
  }

  return {
    props: {
      type: decoded?.type || null,
      isValid,
      email: decoded?.email || null,
    },
  };
};

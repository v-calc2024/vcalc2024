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

export default function Home({ isValid, email, lang }: any) {
  return (
    <>
      <HeadContent title="Home" />
      <main>
        <Banner isValid={isValid} lang={lang} />
        <WhatIs lang={lang} />
        <ImpactReport userEmail={email} lang={lang} />
        <Training lang={lang} />
        <AboutUs lang={lang} />
        <Organization lang={lang} />
        <Opinions lang={lang} />
        <FAQs lang={lang} />
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
  return (
    <DefaultLayout lang={page?.props?.children[0]?.props?.lang}>
      {page}
    </DefaultLayout>
  );
};

export const getServerSideProps: any = async (context: any) => {
  const { isValid, decoded } = await validateJwt(context);
  const { lang } = context.query;

  if (!isValid) {
    return { props: { type: null, lang } };
  }

  return {
    props: {
      type: decoded?.type || null,
      isValid,
      email: decoded?.email || null,
      lang,
    },
  };
};

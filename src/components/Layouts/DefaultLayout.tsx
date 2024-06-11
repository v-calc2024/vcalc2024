import { Footer } from "../Organisms/Footer";
import { Header } from "../Organisms/Header";
import { ReactElement } from "react";

export function DefaultLayout({
  children,
  lang,
}: {
  children: ReactElement;
  lang: string;
}) {
  return (
    <>
      <div className="container">
        <div className="header-cont">
          <Header language={lang} />
        </div>
        {children}
        <Footer lang={lang} />
      </div>

      <style jsx>{`
        .header-cont {
          width: 100vw;
          min-width: 100%;
          position: relative;
          height: max-content;
        }

        @media (max-width: 700px) {
          .header-cont {
            height: max-content;
          }
        }

        .container {
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template-rows: max-content max-content max-content;
          grid-template-columns: 1fr;
          overflow-y: auto;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .header-space {
          width: 100vw;
          height: 5rem;
          background-color: transparent;
        }
      `}</style>
    </>
  );
}

import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export function Footer({ lang }: any) {
  const linkStyles = {
    color: "inherit",
    textDecoration: "none",
  };

  let description = `Funded by the European Union. Views and opinions expressed are 
  however those of the author(s) only and do not necessarily reflect those of 
  the European Union or EACEA. Neither the European Union nor the granting authority 
  can be held responsible for them.`;
  let whatis_text = "What is V-CALC";
  let report_text = "Report";
  let training_text = "Training";
  let about_us_text = "About us";
  let about_you_text = "About You";

  switch (lang) {
    case "es":
      description = `Este trabajo se ha realizado dentro del proyecto “Voluntariado
      Formación en Medición de Impacto en Europa - V-CALC”, (101090539). Este
      El proyecto está financiado con el apoyo del Programa Erasmus+ de la
      Unión Europea. Toda la información y documentación proporcionada reflejan
      las opiniones únicamente de los autores, y no se puede considerar a la Comisión
      responsable del uso que pueda hacerse de la información
      contenida en el mismo.`;
      whatis_text = "Qué es V-CALC";
      report_text = "Reporte";
      training_text = "Capacitación";
      about_us_text = "Sobre nosotros";
      about_you_text = "Acerca de ti";
      break;
    case "fr":
      description = `Ce travail a été réalisé dans le cadre du projet « Volontariat
      Formation à la mesure d'impact en Europe - V-CALC », (101090539). Ce
      Le projet est financé avec le soutien du programme Erasmus+ de la
      Union européenne. Toutes les informations et la documentation fournies reflètent
      les opinions uniquement des auteurs, et la Commission ne peut être tenue
      responsable de toute utilisation qui pourrait être faite des informations
      contenues dans celui-ci.`;
      whatis_text = "Qu'est-ce que V-CALC";
      report_text = "Rapport";
      training_text = "Entraînement";
      about_us_text = "À propos de nous";
      about_you_text = "Au propos de vous";
      break;
    case "hr":
      description = `Rad je izveden u okviru projekta „Volontiranje
      Impact Measurement Training in Europe - V-CALC”, (101090539). Ovaj
      Projekt je financiran uz potporu programa Erasmus+
      Europska unija. Sve navedene informacije i dokumentacija odražavaju
      stajališta samo autora, a Komisija se ne može održati
      odgovoran za bilo kakvu upotrebu informacija
      sadržane u njemu.`;
      whatis_text = "Što je V-CALC";
      report_text = "Izvješće";
      training_text = "Trening";
      about_us_text = "O nama";
      about_you_text = "O tebi";
      break;
    case "sq":
      description = `Kjo punë është realizuar në kuadër të projektit “Vullnetarizmi
      Trajnim për Matjen e Ndikimit në Evropë - V-CALC”, (101090539). Kjo
      Projekti financohet me mbështetjen e Programit Erasmus+ të
      Bashkimi Europian. Të gjitha informacionet dhe dokumentacioni i dhënë pasqyrojnë
      pikëpamjet vetëm të autorëve, dhe Komisioni nuk mund të mbahet
      përgjegjës për çdo përdorim që mund t'i bëhet informacionit
      të përfshira në të.`;
      whatis_text = "Çfarë është V-CALC";
      report_text = "Raporto";
      training_text = "Trajnimi";
      about_us_text = "Rreth nesh";
      about_you_text = "Rreth Jush";
      break;
    default:
      description = `Funded by the European Union. Views and opinions expressed are 
      however those of the author(s) only and do not necessarily reflect those of 
      the European Union or EACEA. Neither the European Union nor the granting authority 
      can be held responsible for them.`;
      whatis_text = "What is V-CALC";
      report_text = "Report";
      training_text = "Training";
      about_us_text = "About us";
      about_you_text = "About You";
      break;
  }

  const descargarArchivoPDF = () => {
    const pdfLink = document.createElement("a");
    pdfLink.href = "/VCALC Platform_GDPR & Privacy Policy_EN_012024.pdf";
    pdfLink.download = "VCALC Platform_GDPR & Privacy Policy_EN_012024.pdf";
    pdfLink.click();
  };

  return (
    <>
      <footer>
        <section className="top">
          <div className="description">
            <div className="logo">
              <Image src="/Logo.svg" alt="Logo" width={60} height={60} />
            </div>
            <p>{description}</p>
            <div className="icons-cont">
              <span className="icon">
                <FacebookIcon
                  sx={{
                    width: "24",
                    height: "24",
                    color: "white",
                    fill: "white",
                  }}
                />
              </span>
              <span className="icon">
                <InstagramIcon
                  sx={{
                    width: "24",
                    height: "24",
                    color: "white",
                    fill: "white",
                  }}
                />
              </span>
              <span className="icon">
                <TwitterIcon
                  sx={{
                    width: "24",
                    height: "24",
                    color: "white",
                    fill: "white",
                  }}
                />
              </span>
              <span className="icon">
                <YouTubeIcon
                  sx={{
                    width: "24",
                    height: "24",
                    color: "white",
                    fill: "white",
                  }}
                />
              </span>
            </div>
          </div>
          <nav className="vcalc">
            <p className="title">Vcalc</p>
            <ul className="sections-cont">
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `/language/${lang}` : "/"}`}
                >
                  <span className="link">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#whatis` : "/#whatis"}`}
                  scroll={true}
                >
                  <span className="link">{whatis_text}</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#report` : "/#report"}`}
                  scroll={true}
                >
                  <span className="link">{report_text}</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#training` : "/#training"}`}
                  scroll={true}
                >
                  <span className="link">{training_text}</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#aboutus` : "/#aboutus"}`}
                  scroll={true}
                >
                  <span className="link">{about_us_text}</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#aboutyou` : "/#aboutyou"}`}
                  scroll={true}
                >
                  <span className="link">{about_you_text}</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href={`${lang !== undefined ? `#faqs` : "/#faqs"}`}
                  scroll={true}
                >
                  <span className="link">FAQs</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="partners">
            <p className="title">Partners</p>
            <ul className="partners-cont">
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.hazloposible.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">Hazloposible</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.beyondbarriers.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">Beyond Barriers</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.dkolektiv.hr/public/hr"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">Dkolektiv</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.europeanvolunteercentre.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">Centre for European Volunteering</span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.uea.ac.uk/groups-and-centres/institute-for-volunteering-research"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">
                    UEA Institute for Volunteering Research
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  style={linkStyles}
                  href="https://www.outofthebox-international.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                  scroll={true}
                >
                  <span className="link">Out of the box International</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="bottom">
          <p>VCALC - © 2023 All Rights Reserved</p>
          <div className="terms">
            {/*
              <a href="#">
                <p>Terms of Service</p>
              </a>
              */}
            <a onClick={descargarArchivoPDF}>
              <p>Privacy Policy</p>
            </a>
          </div>
        </section>
      </footer>
      <style jsx>{`
        footer {
          width: 100vw;
          min-width: 100%;
          height: max-content;
          min-height: 4rem;
          background-color: #1f2131;
          padding: 0 4rem;
          color: var(--contrast-color);
          box-sizing: border-box;
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          justify-self: center;
          text-align: center;
          padding: 0;
          box-sizing: border-box;
        }

        .top {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 1rem;
          justify-content: center;
          padding: 2rem;
          border-bottom: solid 1px var(--border-color);
          box-sizing: border-box;
        }

        .description {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(3, max-content);
          grid-row-gap: 2rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .logo {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          justify-self: center;
          cursor: pointer;
          border-radius: 100%;
          padding: 0.5rem;
          border: solid 1px var(--border-color);
          box-sizing: border-box;
        }

        .top p {
          max-width: 100%;
          text-align: center;
        }

        .icons-cont {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: repeat(4, max-content);
          grid-column-gap: 1rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .partners,
        .vcalc {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-rows: max-content max-content;
          grid-template-columns: 1fr;
          grid-row-gap: 1.5rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .partners-cont,
        .sections-cont {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 0.9rem;
          justify-content: center;
          font-size: 0.9rem;
          box-sizing: border-box;
        }

        .bottom {
          width: 100%;
          height: max-content;
          min-height: 4rem;
          padding: 0 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--contrast-color);
          box-sizing: border-box;
        }

        p,
        a {
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
        }

        a {
          text-decoration: none;
          color: var(--contrast-color);
        }

        .terms {
          width: max-content;
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-template-rows: 1fr;
          grid-column-gap: 2rem;
          box-sizing: border-box;
        }

        .terms a {
          cursor: pointer;
        }

        @media (max-width: 800px) {
          .top {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, max-content);
            grid-row-gap: 1rem;
          }

          .bottom {
            margin-top: 2rem;
            margin-bottom: 2rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, max-content);
            grid-row-gap: 1rem;
            justify-content: center;
            text-align: center;
          }

          .terms {
            justify-self: center;
          }

          main {
            overflow-x: hidden;
          }

          ul {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

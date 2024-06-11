import { useState } from "react";
import Link from "next/link";

export function HeaderNav({ lang }: any) {
  const [selected, setSelected] = useState("home");

  function changeSelected(value: string) {
    setSelected(value);
  }

  const linkStyles = {
    color: "inherit",
    textDecoration: "none",
  };

  let whatis_text = "What is V-CALC";
  let report_text = "Report";
  let training_text = "Training";
  let about_us_text = "About us";
  let about_you_text = "About You";

  switch (lang) {
    case "es":
      whatis_text = "Qué es V-CALC";
      report_text = "Reporte";
      training_text = "Capacitación";
      about_us_text = "Sobre nosotros";
      about_you_text = "Acerca de ti";
      break;
    case "fr":
      whatis_text = "Qu'est-ce que V-CALC";
      report_text = "Rapport";
      training_text = "Entraînement";
      about_us_text = "À propos de nous";
      about_you_text = "Au propos de vous";
      break;
    case "hr":
      whatis_text = "Što je V-CALC";
      report_text = "Izvješće";
      training_text = "Trening";
      about_us_text = "O nama";
      about_you_text = "O tebi";
      break;
    case "sq":
      whatis_text = "Çfarë është V-CALC";
      report_text = "Raporto";
      training_text = "Trajnimi";
      about_us_text = "Rreth nesh";
      about_you_text = "Rreth Jush";
      break;
    default:
      whatis_text = "What is V-CALC";
      report_text = "Report";
      training_text = "Training";
      about_us_text = "About us";
      about_you_text = "About You";
      break;
  }

  return (
    <>
      <nav>
        <ul>
          <li
            className={selected === "home" ? "selected" : "unselected"}
            onClick={() => changeSelected("home")}
          >
            <Link style={linkStyles} href="/">
              <span className="link">Home</span>
            </Link>
          </li>
          <li
            className={selected === "whatis" ? "selected" : "unselected"}
            onClick={() => changeSelected("whatis")}
          >
            <Link
              style={linkStyles}
              href={`${lang !== undefined ? `#whatis` : "/#whatis"}`}
            >
              <span className="link">{whatis_text}</span>
            </Link>
          </li>
          <li
            className={selected === "report" ? "selected" : "unselected"}
            onClick={() => changeSelected("report")}
          >
            <Link
              style={linkStyles}
              href={`${lang !== undefined ? `#report` : "/#report"}`}
            >
              <span className="link">{report_text}</span>
            </Link>
          </li>
          <li
            className={selected === "training" ? "selected" : "unselected"}
            onClick={() => changeSelected("training")}
          >
            <Link
              style={linkStyles}
              href={`${lang !== undefined ? `#training` : "/#training"}`}
              scroll={true}
            >
              <span className="link">{training_text}</span>
            </Link>
          </li>
          <li
            className={selected === "aboutus" ? "selected" : "unselected"}
            onClick={() => changeSelected("aboutus")}
          >
            <Link
              style={linkStyles}
              href={`${lang !== undefined ? `#aboutus` : "/#aboutus"}`}
              scroll={true}
            >
              <span className="link">{about_us_text}</span>
            </Link>
          </li>
          <li
            className={selected === "aboutyou" ? "selected" : "unselected"}
            onClick={() => changeSelected("aboutyou")}
          >
            <Link
              style={linkStyles}
              href={`${lang !== undefined ? `#aboutyou` : "/#aboutyou"}`}
            >
              <span className="link">{about_you_text}</span>
            </Link>
          </li>
          <li
            className={selected === "faq" ? "selected" : "unselected"}
            onClick={() => changeSelected("faq")}
          >
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
      <style jsx>{`
        .link {
          scroll-margin-top: 70px;
        }

        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        a,
        span {
          text-decoration: none;
          color: inherit;
        }

        .unselected,
        .selected {
          position: relative;
          display: inline-block;
          cursor: pointer;
          overflow: hidden;
          padding-bottom: 0.5rem;
        }

        .unselected:hover {
          color: var(--primary-hover-color);
        }

        .unselected::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 100%;
          height: 2px;
          background: linear-gradient(
            to right,
            var(--primary-hover-color),
            var(--primary-hover-color) 100%,
            transparent 50%
          );
          transition: right 0.7s;
        }

        .unselected:hover::before {
          right: 0;
        }

        nav ul .selected {
          color: var(--primary-hover-color);
          border-bottom: solid 2px var(--primary-hover-color);
        }

        nav ul .selected a,
        .selected .link {
          color: var(--primary-hover-color);
        }
      `}</style>
    </>
  );
}

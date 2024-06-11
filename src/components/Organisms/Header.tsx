import Image from "next/image";
import { HeaderNav } from "../Particles/HeaderNav";
import { PageButton } from "../Particles/Buttons/PageButtons";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { getObjectHash } from "@/utils/getObjectHash";

export function Header({ type, language }: any) {
  const [viewMenu, setViewMenu] = useState<boolean>(false);
  const [isNgo, setIsNgo] = useState<boolean>(true);
  const [isVol, setIsVol] = useState<boolean>(false);
  const [isLangAct, setIsLangAct] = useState<boolean>(false);
  const [lang, setLang] = useState<any>(language?.toUpperCase() || "EN");
  const router = useRouter();

  let log_in_text = "LOG IN";
  let log_out_text = "LOG OUT";
  let profile_text = "My Profile";
  let impact_text = "My Impact";
  let activity_form_text = "Activity Form";
  let activity_completion_text = "Activity Completion";
  let programme_form_text = "Programme Form";

  switch (language) {
    case "es":
      log_in_text = "INICIAR SESIÓN";
      log_out_text = "CERRAR SESIÓN";
      profile_text = "Mi Perfil";
      impact_text = "Mi Impacto";
      activity_form_text = "Formulario de actividad";
      activity_completion_text = "Finalización de la actividad";
      programme_form_text = "Formulario de programa";
      break;
    case "fr":
      log_in_text = "SE CONNECTER";
      log_out_text = "SE DÉCONNECTER";
      profile_text = "Mon Profil";
      impact_text = "Mon Impact";
      activity_form_text = "Formulaire d'activité";
      activity_completion_text = "Achèvement de l'activité";
      programme_form_text = "Formulaire de programme";
      break;
    case "hr":
      log_in_text = "PRIJAVITI SE";
      log_out_text = "ODJAVITE SE";
      profile_text = "Moj Profil";
      impact_text = "Moj Utjecaj";
      activity_form_text = "Obrazac aktivnosti";
      activity_completion_text = "Završetak aktivnosti";
      programme_form_text = "Obrazac programa";
      break;
    case "sq":
      log_in_text = "Identifikohu";
      log_out_text = "SHKYÇ";
      profile_text = "Profili Im";
      impact_text = "Ndikimi Im";
      activity_form_text = "Formulari i aktivitetit";
      activity_completion_text = "Përfundimi i aktivitetit";
      programme_form_text = "Formulari i programit";
      break;
    default:
      log_in_text = "LOG IN";
      log_out_text = "LOG OUT";
      profile_text = "My Profile";
      impact_text = "My Impact";
      activity_form_text = "Activity Form";
      activity_completion_text = "Activity Completion";
      programme_form_text = "Programme Form";
      break;
  }

  function changeLangAct() {
    setIsLangAct(!isLangAct);
  }

  function changeLang(lang: string) {
    const programme_form_edit: any = router.query.programme_form_edit;
    const activity_ong_registration: any =
      router.query.activity_ong_registration;

    let redirectionRoute = `${
      router.pathname.includes("language")
        ? router.pathname.replace("[lang]", lang?.toLowerCase())
        : `/language/${lang?.toLowerCase()}${router.pathname}`
    }`;

    if (programme_form_edit !== undefined) {
      redirectionRoute = redirectionRoute.replace(
        "[programme_form_edit]",
        programme_form_edit
      );
    } else if (activity_ong_registration !== undefined) {
      redirectionRoute = redirectionRoute.replace(
        "[programme_form_edit]",
        activity_ong_registration
      );
    }

    setLang(lang);
    setIsLangAct(!isLangAct);
    router.push(redirectionRoute);
  }

  useEffect(() => {
    const token = window?.localStorage?.getItem("token") || "";
    getObjectHash({ tokenValue: token }).then((resp: any) => {
      setIsNgo(resp?.type === "ONG");
      setIsVol(resp?.type === "VOLUNTEER");
    });
  }, [type]);

  function logout() {
    destroyCookie(null, "token", { path: "/" });
    localStorage.removeItem("token");
    window.location.href = `${
      lang !== undefined && lang?.toLowerCase() !== "en"
        ? `/language/${lang?.toLowerCase()}`
        : "/"
    }`;
  }

  function login() {
    router.push(
      `${
        lang !== undefined && lang?.toLowerCase() !== "en"
          ? `/language/${lang?.toLowerCase()}/login`
          : "/login"
      }`
    );
  }

  function redirectHome() {
    router.push(
      `${
        lang !== undefined && lang?.toLowerCase() !== "en"
          ? `/language/${lang?.toLowerCase()}`
          : "/"
      }`
    );
  }

  const linkStyles = {
    fontSize: "1.5rem",
    color: "#dddddd",
    textDecoration: "none",
  };

  return (
    <>
      <header>
        <div className="logo" onClick={redirectHome}>
          <Image src="/Logo.svg" alt="Logo" width={60} height={50} />
        </div>
        <div className="logo">
          <div className="big-logo" onClick={redirectHome}>
            <Image src="/logo-alt.jpg" alt="Logo" fill objectFit="contain" />
          </div>
          <div className="small-logo" onClick={redirectHome}>
            <Image src="/logo-alt.jpg" alt="Logo" fill objectFit="contain" />
          </div>
        </div>
        <div className="desktop">
          <HeaderNav lang={language} />
        </div>
        <div className="lang">
          {lang === "EN" ? (
            <div className="flag" onClick={changeLangAct}>
              <p>EN</p>
              <Image src="/uk-icon.png" alt="Flag" width={30} height={30} />
            </div>
          ) : lang === "ES" ? (
            <div className="flag" onClick={changeLangAct}>
              <p>ES</p>
              <Image src="/spain-icon.png" alt="Flag" width={30} height={30} />
            </div>
          ) : lang === "FR" ? (
            <div className="flag" onClick={changeLangAct}>
              <p>FR</p>
              <Image src="/france-icon.png" alt="Flag" width={30} height={30} />
            </div>
          ) : lang === "HR" ? (
            <div className="flag" onClick={changeLangAct}>
              <p>HR</p>
              <Image
                src="/croatia-icon.png"
                alt="Flag"
                width={30}
                height={30}
              />
            </div>
          ) : (
            <div className="flag" onClick={changeLangAct}>
              <p>SQ</p>
              <Image
                src="/albania-icon.png"
                alt="Flag"
                width={30}
                height={30}
              />
            </div>
          )}
          {isLangAct && (
            <div className="options">
              <div className="flagicon" onClick={() => changeLang("EN")}>
                <p>EN</p>
                <Image src="/uk-icon.png" alt="Flag" width={30} height={30} />
              </div>
              <div className="flagicon" onClick={() => changeLang("ES")}>
                <p>ES</p>
                <Image
                  src="/spain-icon.png"
                  alt="Flag"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flagicon" onClick={() => changeLang("FR")}>
                <p>FR</p>
                <Image
                  src="/france-icon.png"
                  alt="Flag"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flagicon" onClick={() => changeLang("HR")}>
                <p>HR</p>
                <Image
                  src="/croatia-icon.png"
                  alt="Flag"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flagicon" onClick={() => changeLang("SQ")}>
                <p>SQ</p>
                <Image
                  src="/albania-icon.png"
                  alt="Flag"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          )}
        </div>
        <div className="desktop">
          {!isNgo && !isVol ? (
            <PageButton
              label={log_in_text}
              isPrimary={true}
              handleClick={login}
            />
          ) : (
            <PageButton
              label={log_out_text}
              isPrimary={true}
              handleClick={logout}
            />
          )}
        </div>
        <span className="menu-icon" onClick={() => setViewMenu(true)}>
          <MenuIcon sx={{ width: "2rem", height: "2rem" }} />
        </span>
        {viewMenu && (
          <div className="menu">
            <span
              className="menu-icon right"
              onClick={() => setViewMenu(false)}
            >
              <CloseIcon
                sx={{
                  width: "2rem",
                  height: "2rem",
                  color: "white",
                  fill: "white",
                }}
              />
            </span>
            <div>
              <nav>
                <ul>
                  <li onClick={() => setViewMenu(false)}>
                    <Link
                      style={linkStyles}
                      href={`${
                        lang !== undefined && lang?.toLowerCase() !== "en"
                          ? `/language/${lang?.toLowerCase()}`
                          : "/"
                      }`}
                    >
                      <span className="link">Home</span>
                    </Link>
                  </li>
                  {isNgo && (
                    <React.Fragment>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/my_ngo`
                              : "/my_ngo"
                          }`}
                        >
                          <span className="link">{profile_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/my_ong_impact`
                              : "/my_ong_impact"
                          }`}
                        >
                          <span className="link">{impact_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/programme_form`
                              : "/programme_form"
                          }`}
                        >
                          <span className="link">{programme_form_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/activity_ong_registration`
                              : "/activity_ong_registration"
                          }`}
                        >
                          <span className="link">{activity_form_text}</span>
                        </Link>
                      </li>
                      {/* 
                      <li>
                        <Link
                          style={linkStyles}
                          href="/volunteering_activity_satisfaction"
                        >
                          <span className="link">Volunteering Activity</span>
                        </Link>
                      </li>
                      */}
                    </React.Fragment>
                  )}
                  {isVol && (
                    <React.Fragment>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/my_profile`
                              : "/my_profile"
                          }`}
                        >
                          <span className="link">{profile_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/my_impact`
                              : "/my_impact"
                          }`}
                        >
                          <span className="link">{impact_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/activity_registration`
                              : "/activity_registration"
                          }`}
                        >
                          <span className="link">{activity_form_text}</span>
                        </Link>
                      </li>
                      <li onClick={() => setViewMenu(false)}>
                        <Link
                          style={linkStyles}
                          href={`${
                            lang !== undefined && lang?.toLowerCase() !== "en"
                              ? `/language/${lang?.toLowerCase()}/activity_completion_form`
                              : "/activity_completion_form"
                          }`}
                        >
                          <span className="link">
                            {activity_completion_text}
                          </span>
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                  <li onClick={() => setViewMenu(false)}>
                    {!isNgo && !isVol ? (
                      <Link
                        style={linkStyles}
                        href={`${
                          language !== undefined
                            ? `/language/${lang?.toLowerCase()}/login`
                            : "/login"
                        }`}
                      >
                        <span
                          className="link"
                          style={{ textTransform: "capitalize" }}
                        >
                          {log_in_text.toLocaleLowerCase()}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        style={linkStyles}
                        href={`${
                          lang !== undefined && lang?.toLowerCase() !== "en"
                            ? `/language/${lang?.toLowerCase()}`
                            : "/"
                        }`}
                        onClick={logout}
                      >
                        <span
                          className="link"
                          style={{ textTransform: "capitalize" }}
                        >
                          {log_out_text.toLocaleLowerCase()}
                        </span>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        .options {
          width: 100%;
          height: max-content;
          background-color: var(--primary-bg-color);
          position: absolute;
          top: 3.3rem;
          display: flex;
          flex-direction: column;
          border: solid 1px #f3f3f3;
          border-top: none;
          box-sizing: border-box;
        }

        .lang {
          width: max-content;
          height: max-content;
          position: relative;
          box-sizing: border-box;
        }

        .menu {
          width: 30rem;
          height: 100vh;
          min-height: 100%;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 50;
          background-color: #1f2131;
          padding: 1rem;
          box-sizing: border-box;
        }

        .menu-icon {
          cursor: pointer;
        }

        .right {
          position: absolute;
          right: 2rem;
          top: 2rem;
        }

        nav {
          margin-top: 5rem;
        }

        nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          font-size: 1.5rem;
          color: #dddddd;
        }

        .link,
        a {
          text-decoration: none;
          color: #dddddd;
          font-size: 1.5rem;
        }

        .link:hover,
        a:hover {
          color: var(--contrast-color);
        }

        p {
          font-size: 0.8rem;
        }

        header {
          width: 100%;
          height: max-content;
          top: 0;
          position: relative;
          display: grid;
          grid-template-columns: max-content max-content 1fr max-content max-content max-content;
          grid-template-rows: 1fr;
          grid-column-gap: 1.5rem;
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          padding: 1.5rem 3.1rem;
          align-items: center;
          background-color: var(--primary-bg-color);
          z-index: 30;
          box-sizing: border-box;
          transition: background-color 0.3s;
        }

        .header-scroll {
          padding: 0.5rem 3.1rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo,
        .flag,
        .flagicon {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-sizing: border-box;
        }

        .flag,
        .flagicon {
          width: 7rem;
          gap: 0.5rem;
          font-weight: 800;
        }

        .flagicon {
          height: 4rem;
        }

        .flagicon:hover {
          background-color: #f3f3f3;
        }

        .small-logo {
          display: none;
          width: 130px;
          height: 2rem;
          position: relative;
        }

        .big-logo {
          display: block;
          width: 200px;
          height: 3rem;
          position: relative;
        }

        @media (max-width: 1765px) {
          h1 {
            font-size: 1.5rem;
          }

          .form {
            grid-template-columns: 1fr;
          }

          .menu-icon {
            width: max-content;
            height: max-content;
            cursor: pointer;
            display: block;
          }

          .desktop {
            display: none;
          }

          header {
            grid-template-columns: max-content 1fr max-content max-content;
          }
        }

        @media (max-width: 700px) {
          .menu {
            width: 100%;
          }

          a {
            font-size: 1.1rem;
          }

          header,
          .header-scroll {
            padding: 0.5rem 1.1rem;
          }

          .big-logo {
            display: none;
          }

          .small-logo {
            display: block;
          }

          .flag,
          .flagicon {
            width: 5rem;
          }
        }

        @media (max-width: 500px) {
          header {
            width: 100%;
            min-width: 100vw;
            padding: 0.5rem;
            grid-column-gap: 0.7rem;
            grid-template-columns: repeat(4, max-content);
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}

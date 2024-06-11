import Image from "next/image";
import { PageButton } from "../Buttons/PageButtons";
import { useRouter } from "next/router";

export function Banner({ isValid, lang }: any) {
  const router = useRouter();
  function ngoRegister() {
    const redirectionUrl =
      router.query.lang !== undefined
        ? `/language/${router.query.lang}/ngo_registration`
        : "/ngo_registration";
    router.push(redirectionUrl);
  }

  function volunteerRegister() {
    const redirectionUrl =
      router.query.lang !== undefined
        ? `/language/${router.query.lang}/volunteer_registration`
        : "/volunteer_registration";
    router.push(redirectionUrl);
  }

  let title =
    "This is a Beta version of a platform currently developed by the V-CALC project";
  let create_ngo_button = "Create a NGO account";
  let create_vol_button = "Create a Volunteer account";

  switch (lang) {
    case "es":
      title =
        "Esta es una versión Beta de una plataforma desarrollada actualmente por el proyecto V-CALC.";
      create_ngo_button = "Crear una cuenta NGO";
      create_vol_button = "crear una cuenta Voluntario";
      break;
    case "fr":
      title =
        "Il s'agit d'une version bêta d'une plateforme actuellement développée par le projet V-CALC";
      create_ngo_button = "Créer un compte ONG";
      create_vol_button = "Créer un compte volontaire";
      break;
    case "hr":
      title =
        "Ovo je beta verzija platforme koja se trenutno razvija u okviru projekta V-CALC";
      create_ngo_button = "Kreirati NGO račun";
      create_vol_button = "Napravite volonterski račun";
      break;
    case "sq":
      title =
        "Ky është një version Beta i një platforme të zhvilluar aktualisht nga projekti V-CALC";
      create_ngo_button = "Krijoni një llogari të OJQ-së";
      create_vol_button = "Krijoni një llogari vullnetare";
      break;
    default:
      title =
        "This is a Beta version of a platform currently developed by the V-CALC project";
      create_ngo_button = "Create a NGO account";
      create_vol_button = "Create a Volunteer account";
      break;
  }

  return (
    <>
      <section>
        <div id="banner"></div>
        <div className="description">
          <h1>{title}</h1>
          <p></p>
          {!isValid && (
            <div className="buttons">
              <PageButton
                label={create_ngo_button}
                isPrimary={true}
                handleClick={ngoRegister}
              />
              <PageButton
                label={create_vol_button}
                isPrimary={true}
                handleClick={volunteerRegister}
              />
            </div>
          )}
        </div>
        <div className="image">
          <div className="bigImage">
            <Image
              src="/Banner-New-Image.png"
              alt="Banner Image"
              fill
              objectFit="contain"
            />
          </div>
          <div className="smallImage">
            <Image
              src="/Banner-New-Image.png"
              alt="Banner Image"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        #banner {
          position: absolute;
          top: -4rem;
        }

        section {
          width: 100%;
          height: max-content;
          min-height: 100vh;
          background-color: var(--primary-bg-color);
          padding: 2.5rem 4.5rem;
          padding-top: 6.12rem;
          display: grid;
          grid-template-columns: 2fr 3fr;
          grid-template-rows: 1fr;
          grid-column-gap: 4rem;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        .description {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content max-content;
          grid-row-gap: 1rem;
          box-sizing: border-box;
        }

        h1 {
          line-height: 1.1;
          font-size: 3rem;
          margin: 0;
          padding: 0;
          text-align: center;
          font-weight: 900;
        }

        p {
          color: var(--secondary-color);
        }

        .image {
          width: 100%;
          min-height: 40rem;
          position: relative;
        }

        .buttons {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: max-content max-content;
          grid-template-rows: 1fr;
          grid-column-gap: 2rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .smallImage {
          display: none;
        }

        .bigImage {
          display: block;
        }

        @media (max-width: 1250px) {
          section {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 4rem 5rem;
            text-align: center;
            margin-top: 0;
            padding-top: 5rem;
            padding-bottom: 1rem;
          }

          .image {
            min-height: 30rem;
          }

          .smallImage {
            display: block;
          }

          .bigImage {
            display: none;
          }
        }

        @media (max-width: 1200px) {
          .image {
            min-height: 22rem;
          }

          section {
            padding-right: 0;
            padding-left: 0;
          }

          .description {
            padding: 0 2.5rem;
          }
        }

        @media (max-width: 620px) {
          h1 {
            font-size: 1.3rem;
            width: 22rem;
          }

          section {
            height: max-content;
            min-height: max-content;
            padding-bottom: 2rem;
            padding-top: 2rem;
          }

          .image {
            min-height: 15rem;
            width: 23rem;
          }

          .buttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
          }

          p {
            width: 22rem;
          }

          .description {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </>
  );
}

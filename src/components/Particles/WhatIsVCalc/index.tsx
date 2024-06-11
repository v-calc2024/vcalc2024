import { useState } from "react";
import { ProjectDescription } from "./ProjectDescription";
import { VolunteersDefinition } from "./VolunteersDefinition";

export default function WhatIs({ lang }: any) {
  const [isProjectDescription, setIsProjectDescription] = useState(true);
  function changeIsProjectDescription(value: boolean) {
    setIsProjectDescription(value);
  }

  let title = "What is V-CALC";
  let project_description = "Project Description";
  let definition_of_vol = "Definition of Volunteering";

  switch (lang) {
    case "es":
      title = "¿Qué es V-CALC?";
      project_description = "Descripción del Proyecto";
      definition_of_vol = "Definición de voluntariado";
      break;
    case "fr":
      title = "Qu'est-ce que V-CALC";
      project_description = "Description du projet";
      definition_of_vol = "Définition du bénévolat";
      break;
    case "hr":
      title = "Što je V-CALC";
      project_description = "Opis projekta";
      definition_of_vol = "Definicija volontiranja";
      break;
    case "sq":
      title = "Çfarë është V-CALC";
      project_description = "Përshkrimi i projektit";
      definition_of_vol = "Përkufizimi i Vullnetarizmit";
      break;
    default:
      title = "What is V-CALC";
      project_description = "Create a NGO account";
      definition_of_vol = "Definition of Volunteering";
      break;
  }

  return (
    <>
      <section>
        <div id="whatis"></div>
        <h2>{title}</h2>
        <div className="button-container">
          <button
            className={isProjectDescription ? "active" : "inactive"}
            onClick={() => changeIsProjectDescription(true)}
          >
            {project_description}
          </button>
          <button
            className={isProjectDescription ? "inactive" : "active"}
            onClick={() => changeIsProjectDescription(false)}
          >
            {definition_of_vol}
          </button>
        </div>
        <div className="content">
          {isProjectDescription ? (
            <ProjectDescription lang={lang} />
          ) : (
            <VolunteersDefinition lang={lang} />
          )}
        </div>
      </section>
      <style jsx>{`
        #whatis {
          position: absolute;
          top: -4rem;
        }

        section {
          width: 100%;
          height: max-content;
          display: grid;
          background-color: var(--secondary-bg-color);
          justify-content: center;
          padding: 3rem 4.5rem;
          position: relative;
          box-sizing: border-box;
        }

        h2 {
          font-size: 3rem;
          font-weight: 900;
          text-align: center;
          margin: 0;
          margin-bottom: 2rem;
          padding: 0;
        }

        .button-container {
          width: 40rem;
          height: 3rem;
          border: solid 2px var(--terciary-color);
          border-radius: 0.6rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          justify-self: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        button {
          border: none;
          background-color: var(--terciary-color);
          cursor: pointer;
          font-weight: 900;
          color: var(--contrast-color);
        }

        .inactive {
          background-color: var(--contrast-color);
          color: var(--primary-color);
        }

        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 30rem 40rem;
          grid-template-rows: 1fr;
          grid-column-gap: 4rem;
          margin-top: 4rem;
          box-sizing: border-box;
        }

        @media (max-width: 1250px) {
          .content {
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column-reverse;
            margin-top: 4rem;
            padding: 0 5rem;
            text-align: center;
            box-sizing: border-box;
          }

          .button-container {
            width: 24rem;
          }
        }

        @media (max-width: 1200px) {
          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 620px) {
          .content {
            margin-top: 2rem;
          }

          section {
            padding: 2rem 0;
          }

          h2 {
            font-size: 1.3rem;
          }

          .button-container {
            width: 18rem;
          }
        }
      `}</style>
    </>
  );
}

import { useState } from "react";
import { Ngo } from "./Ngo";
import { Volunteers } from "./Volunteers";

export default function HowWork() {
  const [isNGO, setIsNGO] = useState(true);
  function changeIsNGO(value: boolean) {
    setIsNGO(value);
  }

  return (
    <>
      <section>
        <h2>How Vcalc works?</h2>
        <div className="button-container">
          <button
            className={isNGO ? "active" : "inactive"}
            onClick={() => changeIsNGO(true)}
          >
            NGOs
          </button>
          <button
            className={isNGO ? "inactive" : "active"}
            onClick={() => changeIsNGO(false)}
          >
            Volunteers
          </button>
        </div>
        <div className="content">{isNGO ? <Ngo /> : <Volunteers />}</div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: max-content;
          display: grid;
          background-color: var(--secondary-bg-color);
          justify-content: center;
          padding: 3rem 4.5rem;
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
          grid-template-columns: 20rem 40rem;
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

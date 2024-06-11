export default function FAQs({ lang }: any) {
  let subtitle = "Questions and Answers";

  switch (lang) {
    case "es":
      subtitle = "Preguntas y respuestas";
      break;
    case "fr":
      subtitle = "Questions et réponses";
      break;
    case "hr":
      subtitle = "Pitanja i odgovori";
      break;
    case "sq":
      subtitle = "Pyetje dhe pergjigje";
      break;
    default:
      subtitle = "Questions and Answers";
      break;
  }
  
  return (
    <>
      <section>
        <div id="faqs"></div>
        <h2>FAQs</h2>
        <p>{subtitle}</p>
      </section>
      <style jsx>{`
        #faqs {
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
          text-align: center;
          padding: 0;
        }

        p {
          width: 40rem;
          text-align: center;
          justify-self: center;
          color: var(--secondary-color);
        }

        @media (max-width: 1200px) {
          p {
            max-width: 30rem;
          }

          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 620px) {
          h2 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }

          p {
            width: 22rem;
          }

          section {
            padding: 2rem 0;
          }
        }
      `}</style>
    </>
  );
}

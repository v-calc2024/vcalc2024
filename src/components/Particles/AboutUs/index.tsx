import Image from "next/image";

export default function AboutUs({ lang }: any) {
  let title = "About Us";

  switch (lang) {
    case "es":
      title = "Sobre Nosotros";
      break;
    case "fr":
      title = "À propos de nous";
      break;
    case "hr":
      title = "O nama";
      break;
    case "sq":
      title = "Rreth Nesh";
      break;
    default:
      title = "About Us";
      break;
  }

  return (
    <>
      <section>
        <div id="aboutus"></div>
        <h2>{title}</h2>
        {/*
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          pharetra orci. Quisque sagittis nisi quis ligula
        </p>
        */}
        <div className="image">
          <Image
            src="/about-us-image.jpg"
            alt="Banner Image"
            fill
            objectFit="contain"
          />
        </div>
      </section>
      <style jsx>{`
        #aboutus {
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

        .image {
          width: 50rem;
          min-height: 30rem;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          justify-self: center;
          margin-top: 3rem;
        }

        @media (max-width: 1200px) {
          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 960px) {
          .image {
            margin-top: 1rem;
            width: 40rem;
            min-height: 25rem;
          }

          p {
            width: 30rem;
          }
        }

        @media (max-width: 620px) {
          section {
            padding: 2rem 0;
          }

          h2 {
            font-size: 1.3rem;
          }

          p {
            width: 23rem;
          }

          .image {
            margin-top: 1rem;
            width: 24rem;
            min-height: 17rem;
          }
        }
      `}</style>
    </>
  );
}

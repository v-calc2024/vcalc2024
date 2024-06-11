import Image from "next/image";

export function Ngo() {
  return (
    <>
      <div className="description">
        <h3>NGOs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          pharetra orci. Quisque sagittis nisi quis ligula consectetur, sit amet
          dapibus tellus sagittis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
          pharetra orci.
        </p>
      </div>
      <div className="image">
        <Image
          src="/Volunteers-Image.jpg"
          alt="Banner Image"
          fill
          objectFit="contain"
        />
      </div>
      <style jsx>{`
        .image {
          width: 100%;
          height: 100%;
          min-height: 30rem;
          position: relative;
        }

        p {
          color: var(--secondary-color);
        }

        @media (max-width: 1250px) {
          .image {
            min-height: 16rem;
          }

          p {
            max-width: 30rem;
          }
        }

        @media (max-width: 620px) {
          .image {
            max-width: 20rem;
          }

          p {
            max-width: 19rem;
          }
        }
      `}</style>
    </>
  );
}

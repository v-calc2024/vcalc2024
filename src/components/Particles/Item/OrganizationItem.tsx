import Image from "next/image";

export default function OrganizationItem({
  imageUrl,
  title,
  children,
  href,
}: {
  imageUrl: string;
  title: string;
  children: any;
  href: string;
}) {
  function redirect() {
    window.open(href, "_blank");
  }

  return (
    <>
      <article>
        <div className="image" onClick={redirect}>
          <Image src={imageUrl} alt="Banner Image" fill objectFit="contain" />
        </div>
        <h1 onClick={redirect}>{title}</h1>
      </article>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 22rem;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content 1fr;
          border-radius: 15px;
          overflow: hidden;
          justify-content: center;
          box-sizing: border-box;
        }

        .image {
          width: 15rem;
          height: 5rem;
          overflow: hidden;
          display: flex;
          justify-content: center;
          justify-self: center;
          cursor: pointer;
          position: relative;
        }

        h1 {
          text-align: center;
          font-weight: 900;
          font-size: 1.2rem;
          text-transform: uppercase;
          margin-top: 2rem;
          cursor: pointer;
        }

        @media (max-width: 1250px) {
          article {
            max-width: 19rem;
          }
        }
      `}</style>
    </>
  );
}

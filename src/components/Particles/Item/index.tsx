import Image from "next/image";

export default function Item({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <article>
        <div className="image">
          <Image src={imageUrl} alt="Banner Image" fill objectFit="cover" />
        </div>
        <h1>{title}</h1>
      </article>
      <style jsx>{`
        article {
          width: 18rem;
          height: max-content;
          max-height: 32rem;
          border: 1px solid var(--border-color);
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          border-radius: 15px;
          overflow: hidden;
          box-sizing: border-box;
        }

        article:hover {
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        }

        .image {
          width: 100%;
          height: 17rem;
          position: relative;
        }

        h1 {
          text-align: center;
          font-weight: 900;
          font-size: 1.2rem;
        }

        p {
          padding: 1.2rem;
          padding-top: 0;
          text-align: center;
          color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}

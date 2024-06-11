import Image from "next/image";

export default function OpinionItem({
  imageUrl,
  name,
  profile,
  children,
}: {
  imageUrl: string;
  name: string;
  profile: string;
  children: any;
}) {
  return (
    <>
      <article>
        <div className="user-info">
          <div className="image">
            <Image src={imageUrl} alt="Banner Image" fill objectFit="cover" />
          </div>
          <div className="user-name">
            <p className="name">{name}</p>
            <p className="profile">{profile}</p>
          </div>
        </div>
        {children}
      </article>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 22rem;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content 1fr;
          overflow: hidden;
          border: solid 1px var(--border-color);
          border-radius: 1rem;
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          background-color: var(--secondary-bg-color);
          box-sizing: border-box;
        }

        .user-info {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: max-content 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 1rem;
          align-items: center;
          box-sizing: border-box;
        }

        .user-name {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          grid-row-gap: 5px;
          box-sizing: border-box;
        }

        .name {
          font-weight: 900;
          text-transform: capitalize;
          font-size: 0.9rem;
        }

        .profile {
          font-size: 0.9rem;
        }

        .image {
          width: 4rem;
          height: 4rem;
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          border: solid 1px var(--border-color);
          position: relative;
        }

        h1 {
          text-align: center;
          font-weight: 900;
          font-size: 1.2rem;
          text-transform: uppercase;
          margin-top: 2rem;
        }

        p {
          margin: 0;
          padding: 0;
        }

        @media (max-width: 1050px) {
          article {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

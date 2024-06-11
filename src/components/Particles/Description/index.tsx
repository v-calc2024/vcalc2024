import Image from "next/image";

export default function Description() {
  return (
    <>
      <section>
        <div className="content">
          <article>
            <div className="title">
              <div className="image">
                <Image
                  src="/Description-Image-1.png"
                  alt="Description Image"
                  width={70}
                  height={70}
                />
              </div>
              <h2>Project Description</h2>
            </div>
            <p>
              The Volunteering Impact Measurement Training in Europe (V- CALC)
              project is a two-year partnership between six organisations from
              five European countries: UK, Belgium, Spain, Albania and Croatia.
            </p>
            <p>
              The V-CALC project was developed to address the issue that there
              is currently no methodology which measures the impact of volunteer
              involvement across nations. The V-CALC project will develop a
              user-friendly online platform, which will gather data about
              volunteer involvement and volunteers. Volunteer managers and
              coordinators will be trained during the V-CALC project, on how to
              use the online platform.
            </p>
            <p>
              The V-CALC project aims to develop a robust and reliable
              methodology to gather data about the impact of volunteering, types
              of volunteering and the demographic and motivations of volunteers.
              The V-CALC platform also aims to measure the impact of
              volunteering on building social and human capital and on promoting
              common European values.
            </p>
            <p>
              The data gathered from the V-CALC online platform will be used to
              inform policy nationally and cross-nationally and aims to make the
              contribution of volunteer involvement to civic society more
              visible across Europe.
            </p>
          </article>
          <article>
            <div className="title">
              <div className="image">
                <Image
                  src="/Description-Image-2.png"
                  alt="Description Image"
                  width={70}
                  height={70}
                />
              </div>
              <h2>Definition of Volunteering </h2>
            </div>
            <p>
              Each project partner country had their own definition of
              volunteering, in their native language. The European Council and
              Parliament has a definition of volunteering, with Spain, Croatia
              and Albania all having legal definitions of volunteering. It was
              fundamental therefore to agree on an approach and on a definition
              that all could share, which was to be initially in English. From
              all these realities, project partners collaboratively agreed the
              V-CALC platform will underpin volunteering by 3 principles:
            </p>
            <ul>
              <li>free will, by choice, without obligation</li>
              <li>unpaid, not predominantly for financial gain</li>
              <li>
                making a difference to individuals, communities, society and the
                environment
              </li>
            </ul>
            <p>
              “When it comes to volunteering, each country has different
              notions, definitions and traditions. Volunteering is defined as
              all forms of voluntary activity, whether formal or informal.
              Volunteers act under their own free will, according to their own
              choices and motivations and do not seek financial gain.
              Volunteering is a journey of solidarity and a way for individuals
              and associations to identify and address human, social or
              environmental needs and concerns. Volunteering is often carried
              out in support of a non-profit organisation or community-based
              initiative.” - European Commission, 2011
            </p>
          </article>
        </div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, max-content);
          grid-column-gap: 2rem;
          justify-content: center;
          padding: 1rem 4.5rem;
          box-sizing: border-box;
        }

        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-template-rows: 1fr;
          grid-column-gap: 9rem;
          justify-content: center;
          padding: 3rem 4.5rem;
          box-sizing: border-box;
        }

        article {
          width: max-content;
          height: 100%;
          border: solid 1px var(--border-color);
          border-radius: 1rem;
          background-color: var(--secondary-bg-color);
          padding: 1rem 1.5rem;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }

        h1 {
          max-width: 25rem;
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          margin-bottom: 2rem;
          justify-self: center;
          text-align: center;
          padding: 0;
        }

        h2 {
          max-width: 25rem;
          font-size: 1.4rem;
          font-weight: 900;
          margin: 0;
          justify-self: flex-start;
          text-align: center;
          padding: 0;
        }

        p,
        ul li {
          font-size: 0.9rem;
          max-width: 25rem;
          justify-self: center;
          color: var(--secondary-color);
        }

        .title {
          height: max-content;
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .image {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 100%;
          overflow: hidden;
          box-sizing: border-box;
        }

        @media (max-width: 1200px) {
          section {
            padding: 1rem 0;
            padding-top: 0;
          }

          .content {
            grid-column-gap: 3rem;
            padding-top: 0;
          }
        }

        @media (max-width: 1125px) {
          .content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;
          }

          article {
            width: 30rem;
          }
        }

        @media (max-width: 620px) {
          h2 {
            font-size: 1.3rem;
          }

          article {
            width: 23rem;
          }

          .content {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}

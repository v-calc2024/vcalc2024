import OrganizationItem from "../Item/OrganizationItem";

export default function Organization({ lang }: any) {
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
        <div className="content">
          <OrganizationItem
            imageUrl="/hazloposible.png"
            title="HazloPosible"
            href="https://www.hazloposible.org"
          >
            <a href="https://www.hazloposible.org" target="_blank">
              www.hazloposible.org
            </a>
          </OrganizationItem>
          <OrganizationItem
            imageUrl="/beyond-barriers.png"
            title="Beyond Barriers"
            href="https://www.beyondbarriers.org"
          >
            <a href="https://www.beyondbarriers.org" target="_blank">
              www.beyondbarriers.org
            </a>
          </OrganizationItem>
          <OrganizationItem
            imageUrl="/center-european-volunteering.png"
            title="Centre for European Volunteering"
            href="https://www.europeanvolunteercentre.org"
          >
            <a href="https://www.europeanvolunteercentre.org" target="_blank">
              www.europeanvolunteercentre.org
            </a>
          </OrganizationItem>
          <OrganizationItem
            imageUrl="/dkolektiv.png"
            title="DKolektiv"
            href="https://www.dkolektiv.hr"
          >
            <a href="https://www.dkolektiv.hr" target="_blank">
              www.dkolektiv.hr
            </a>
          </OrganizationItem>
          <OrganizationItem
            imageUrl="/institute-for-volunteering-research.png"
            title="UEA Institute for Volunteering Research"
            href="https://www.uea.ac.uk/groups-and-centres/institute-for-volunteering-research"
          >
            <a
              href="https://www.uea.ac.uk/groups-and-centres/institute-for-volunteering-research"
              target="_blank"
            >
              www.uea.ac.uk
            </a>
          </OrganizationItem>
          <OrganizationItem
            imageUrl="/9out-of-the-box.png"
            title="Out of the box International"
            href="https://www.outofthebox-international.org"
          >
            <a href="https://www.outofthebox-international.org" target="_blank">
              www.outofthebox-international.org
            </a>
          </OrganizationItem>
        </div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: max-content;
          display: grid;
          background-color: var(--secondary-bg-color);
          padding: 3rem 4.5rem;
          box-sizing: border-box;
        }

        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-auto-rows: max-content;
          grid-gap: 4rem;
          justify-content: center;
          box-sizing: border-box;
        }

        p,
        a {
          padding-top: 0;
          text-align: center;
          color: var(--secondary-color);
        }

        @media (max-width: 1250px) {
          .content {
            grid-template-columns: max-content;
          }
        }

        @media (max-width: 1200px) {
          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 620px) {
          section {
            padding: 2rem 0;
            padding-top: 1rem;
          }

          .content {
            grid-gap: 2rem;
          }
        }
      `}</style>
    </>
  );
}

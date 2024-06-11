import Item from "../Item";

export default function Training({ lang }: any) {
  let title = "Training";
  let item_1_title = "Training Manual";
  let item_2_title = "Video tutorial";
  let item_3_title = "Other resources";

  switch (lang) {
    case "es":
      title = "Capacitación";
      item_1_title = "Manual de entrenamiento";
      item_2_title = "Video tutorial";
      item_3_title = "Otros recursos";
      break;
    case "fr":
      title = "Entraînement";
      item_1_title = "Manuel de formation";
      item_2_title = "Didacticiel vidéo";
      item_3_title = "Autres ressources";
      break;
    case "hr":
      title = "Trening";
      item_1_title = "Priručnik za obuku";
      item_2_title = "Video tutorial";
      item_3_title = "Ostali resursi";
      break;
    case "sq":
      title = "Trajnimi";
      item_1_title = "Manuali i trajnimit";
      item_2_title = "Video tutorial";
      item_3_title = "Burime të tjera";
      break;
    default:
      title = "Training";
      item_1_title = "Training Manual";
      item_2_title = "Video tutorial";
      item_3_title = "Other resources";
      break;
  }

  return (
    <>
      <section>
        <div id="training"></div>
        <h2>{title}</h2>
        <div className="content">
          <Item
            imageUrl="/Training-Image-1.jpg"
            title={item_1_title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            pharetra orci. Quisque sagittis nisi quis ligula consectetur, sit amet
            dapibus tellus sagittis"
          />
          <Item
            imageUrl="/Training-Image-2.jpg"
            title={item_2_title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            pharetra orci. Quisque sagittis nisi quis ligula consectetur, sit amet
            dapibus tellus sagittis"
          />
          <Item
            imageUrl="/Training-Image-3.jpg"
            title={item_3_title}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            pharetra orci. Quisque sagittis nisi quis ligula consectetur, sit amet
            dapibus tellus sagittis"
          />
        </div>
      </section>
      <style jsx>{`
        #training {
          position: absolute;
          top: -4rem;
        }

        section {
          width: 100%;
          height: max-content;
          display: grid;
          background-color: var(--primary-bg-color);
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

        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(3, minmax(3.23rem, 1fr));
          grid-auto-rows: max-content;
          grid-gap: 2rem;
          box-sizing: border-box;
        }

        .view-more {
          width: 100%;
          height: max-content;
          padding: 2rem 0;
          display: flex;
          justify-content: flex-end;
          box-sizing: border-box;
        }

        .view-more a {
          width: max-content;
          color: #006ce5;
          padding-bottom: 2px;
          text-decoration: none;
          border-bottom: solid 1px #006ce5;
        }

        @media (max-width: 1200px) {
          section {
            padding: 3rem 0;
          }
        }

        @media (max-width: 1000px) {
          .content {
            grid-template-columns: repeat(3, minmax(3.23rem, 1fr));
            grid-template-columns: max-content;
            grid-auto-rows: max-content;
            grid-gap: 2rem;
          }

          .view-more {
            justify-content: center;
          }
        }

        @media (max-width: 620px) {
          section {
            padding: 2rem 0;
          }

          h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}

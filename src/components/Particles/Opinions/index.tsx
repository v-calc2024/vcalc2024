import OpinionItem from "../Item/OpinionItem";

export default function Opinions({ lang }: any) {
  let title = "About You";
  let opinion_1 =
    "A place where we can share our experience with other associations and with our fellow volunteers.";
  let opinion_2 =
    "The site where we can really expose all our actions in the world of volunteering.";
  let opinion_3 =
    "All NGOs on a website, where we can give our opinion and report how we help others.";
  let opinion_4 =
    "I am very happy to always help and serve our community and now to be able to share it.";
  let opinion_5 =
    "I feel very fortunate to share my data so we can grow our association.";
  let opinion_6 =
    "They recommended it to me a few days ago and in a while I was able to share years of volunteering.";

  switch (lang) {
    case "es":
      title = "Acerca de ti";
      opinion_1 =
        "Un lugar donde compartir nuestra experiencia con otras asociaciones y con nuestros compañeros voluntarios.";
      opinion_2 =
        "El sitio donde realmente podemos exponer todas nuestras acciones en el mundo del voluntariado.";
      opinion_3 =
        "Todas las ONG en una web, donde podemos dar nuestra opinión e informar de cómo ayudamos a los demás.";
      opinion_4 =
        "Estoy muy feliz de siempre ayudar y servir a nuestra comunidad y ahora poder compartirlo.";
      opinion_5 =
        "Me siento muy afortunado de compartir mis datos para que podamos hacer crecer nuestra asociación.";
      opinion_6 =
        "Me lo recomendaron hace unos días y al tiempo pude compartir años de voluntariado.";
      break;
    case "fr":
      title = "Au propos de vous";
      opinion_1 =
        "Un lieu où nous pouvons partager notre expérience avec d'autres associations et avec nos collègues bénévoles.";
      opinion_2 =
        "Le site où l'on peut réellement exposer toutes nos actions dans le monde du volontariat.";
      opinion_3 =
        "Toutes les ONG sur un site Internet, où nous pouvons donner notre avis et raconter comment nous aidons les autres.";
      opinion_4 =
        "Je suis très heureux de toujours aider et servir notre communauté et maintenant de pouvoir la partager.";
      opinion_5 =
        "Je me sens très chanceux de partager mes données afin que nous puissions développer notre association.";
      opinion_6 =
        "Ils me l'ont recommandé il y a quelques jours et en peu de temps j'ai pu partager des années de bénévolat.";
      break;
    case "hr":
      title = "O tebi";
      opinion_1 =
        "Mjesto gdje možemo podijeliti svoja iskustva s drugim udrugama i s našim kolegama volonterima.";
      opinion_2 =
        "Stranica na kojoj stvarno možemo izložiti sve svoje akcije u svijetu volontiranja.";
      opinion_3 =
        "Sve nevladine organizacije na web stranici, gdje možemo dati svoje mišljenje i izvijestiti kako pomažemo drugima.";
      opinion_4 =
        "Vrlo sam sretan što uvijek pomažem i služim našoj zajednici i sada to mogu dijeliti.";
      opinion_5 =
        "Osjećam se vrlo sretnim što dijelim svoje podatke kako bismo mogli razviti našu udrugu.";
      opinion_6 =
        "Preporučili su mi ga prije nekoliko dana i nakon nekog vremena sam mogao podijeliti godine volontiranja.";
      break;
    case "sq":
      title = "Rreth jush";
      opinion_1 =
        "Një vend ku ne mund të ndajmë përvojën tonë me shoqata të tjera dhe me kolegët tanë vullnetarë.";
      opinion_2 =
        "Faqja ku ne mund të ekspozojmë vërtet të gjitha veprimet tona në botën e vullnetarizmit.";
      opinion_3 =
        "Të gjitha OJQ-të në një faqe interneti, ku mund të japim mendimin tonë dhe të raportojmë se si i ndihmojmë të tjerët.";
      opinion_4 =
        "Jam shumë i lumtur që gjithmonë ndihmoj dhe i shërbej komunitetit tonë dhe tani mund ta ndaj.";
      opinion_5 =
        "Ndihem shumë me fat që ndaj të dhënat e mia në mënyrë që të mund të rrisim shoqërinë tonë.";
      opinion_6 =
        "Më rekomanduan disa ditë më parë dhe në një kohë munda të ndaja vitet e vullnetarizmit.";
      break;
    default:
      title = "About You";
      opinion_1 =
        "A place where we can share our experience with other associations and with our fellow volunteers.";
      opinion_2 =
        "The site where we can really expose all our actions in the world of volunteering.";
      opinion_3 =
        "All NGOs on a website, where we can give our opinion and report how we help others.";
      opinion_4 =
        "I am very happy to always help and serve our community and now to be able to share it.";
      opinion_5 =
        "I feel very fortunate to share my data so we can grow our association.";
      opinion_6 =
        "They recommended it to me a few days ago and in a while I was able to share years of volunteering.";
      break;
  }

  return (
    <>
      <section>
        <div id="aboutyou"></div>
        <h2>{title}</h2>
        <div className="content">
          <OpinionItem
            name="natalia"
            profile="@natalia"
            imageUrl="/Profile-Image-1.jpg"
          >
            <p>{opinion_1}</p>
          </OpinionItem>
          <OpinionItem
            name="matias"
            profile="@matias"
            imageUrl="/Profile-Image-4.jpg"
          >
            <p>{opinion_2}</p>
          </OpinionItem>
          <OpinionItem
            name="florencia"
            profile="@florencia"
            imageUrl="/Profile-Image-2.jpg"
          >
            <p>{opinion_3}</p>
          </OpinionItem>
          <OpinionItem
            name="german"
            profile="@german"
            imageUrl="/Profile-Image-6.jpg"
          >
            <p>{opinion_4}</p>
          </OpinionItem>
          <OpinionItem
            name="virginia"
            profile="@virginia"
            imageUrl="/Profile-Image-3.webp"
          >
            <p>{opinion_5}</p>
          </OpinionItem>
          <OpinionItem
            name="alan"
            profile="@alan"
            imageUrl="/Profile-Image-5.png"
          >
            <p>{opinion_6}</p>
          </OpinionItem>
        </div>
      </section>
      <style jsx>{`
        #aboutyou {
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
          padding-bottom: 4.5rem;
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
          justify-self: center;
          padding: 0;
        }

        p {
          margin: 0;
          margin-top: 1rem;
          padding: 0;
          font-size: 0.9rem;
          color: var(--secondary-color);
        }

        .image {
          width: 50rem;
          min-height: 30rem;
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
          margin-top: 3rem;
        }

        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: max-content;
          grid-gap: 2rem;
          justify-content: center;
          box-sizing: border-box;
        }

        @media (max-width: 1200px) {
          section {
            padding: 3rem 0;
          }

          .content {
            grid-template-columns: repeat(2, 20rem);
            grid-gap: 2rem;
          }

          h2 {
            max-width: 32rem;
          }
        }

        @media (max-width: 750px) {
          .content {
            grid-template-columns: 20rem;
            grid-gap: 2rem;
          }
        }

        @media (max-width: 620px) {
          section {
            padding: 2rem 0;
          }

          h2 {
            font-size: 1.3rem;
            width: 22rem;
          }
        }
      `}</style>
    </>
  );
}

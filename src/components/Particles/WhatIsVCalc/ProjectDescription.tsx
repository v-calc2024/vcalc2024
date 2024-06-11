import Image from "next/image";

export function ProjectDescription({ lang }: any) {
  let title = "Project Description";
  let p1 = `The Volunteering Impact Measurement Training in Europe (V- CALC)
  project is a two-year partnership between six organisations from five
  European countries: UK, Belgium, Spain, Albania and Croatia.`;
  let p2 = `The V-CALC project was developed to address the issue that there is
  currently no methodology which measures the impact of volunteer
  involvement across nations. The V-CALC project will develop a
  user-friendly online platform, which will gather data about volunteer
  involvement and volunteers. Volunteer managers and coordinators will
  be trained during the V-CALC project, on how to use the online
  platform.`;
  let p3 = `The V-CALC project aims to develop a robust and reliable methodology
  to gather data about the impact of volunteering, types of volunteering
  and the demographic and motivations of volunteers. The V-CALC platform
  also aims to measure the impact of volunteering on building social and
  human capital and on promoting common European values.`;
  let p4 = `The data gathered from the V-CALC online platform will be used to
  inform policy nationally and cross-nationally and aims to make the
  contribution of volunteer involvement to civic society more visible
  across Europe.`;
  let definition_of_vol = "Definition of Volunteering";

  switch (lang) {
    case "es":
      title = "Descripción del Proyecto";
      p1 = `La formación sobre medición del impacto del voluntariado en Europa (V-CALC)
      El proyecto es una asociación de dos años entre seis organizaciones de cinco
      Países europeos: Reino Unido, Bélgica, España, Albania y Croacia.`;
      p2 = `El proyecto V-CALC fue desarrollado para abordar el problema de que existe
      Actualmente no existe una metodología que mida el impacto del voluntariado.
      participación entre naciones. El proyecto V-CALC desarrollará un
      plataforma en línea fácil de usar, que recopilará datos sobre los voluntarios
      implicación y voluntariado. Los gerentes y coordinadores voluntarios
      recibir capacitación durante el proyecto V-CALC sobre cómo utilizar el
      plataforma.`;
      p3 = `El proyecto V-CALC pretende desarrollar una metodología robusta y fiable
      Recopilar datos sobre el impacto del voluntariado, tipos de voluntariado.
      y la demografía y las motivaciones de los voluntarios. La plataforma V-CALC
      También pretende medir el impacto del voluntariado en la construcción social y
      capital humano y en la promoción de los valores europeos comunes.`;
      p4 = `Los datos recopilados de la plataforma en línea V-CALC se utilizarán para
      informar las políticas a nivel nacional e internacional y tiene como objetivo hacer que
      La contribución de la participación voluntaria a la sociedad cívica es más visible.
      a través de Europa.`;
      definition_of_vol = "Definición de voluntariado";
      break;
    case "fr":
      title = "Description du projet";
      p1 = `La formation à la mesure de l'impact du volontariat en Europe (V-CALC)
      Le projet est un partenariat de deux ans entre six organisations de cinq
      Pays européens : Royaume-Uni, Belgique, Espagne, Albanie et Croatie`;
      p2 = `Le projet V-CALC a été développé pour résoudre le problème de l'existence
      actuellement aucune méthodologie permettant de mesurer l’impact du volontariat
      participation à travers les nations. Le projet V-CALC développera un
      plateforme en ligne conviviale, qui recueillera des données sur les bénévoles
      implication et bénévoles. Les gestionnaires et coordonnateurs des bénévoles
      être formé, pendant le projet V-CALC, à l'utilisation du système en ligne
      plate-forme.`;
      p3 = `Le projet V-CALC vise à développer une méthodologie robuste et fiable
      pour recueillir des données sur l'impact du volontariat, les types de volontariat
      et la démographie et les motivations des bénévoles. La plateforme V-CALC
      vise également à mesurer l’impact du volontariat sur la construction sociale et
      capital humain et sur la promotion des valeurs européennes communes.`;
      p4 = `Les données recueillies à partir de la plateforme en ligne V-CALC seront utilisées pour
      éclairer les politiques aux niveaux national et transnational et vise à faire en sorte que
      la contribution de l'engagement bénévole à la société civile est plus visible
      à travers l'Europe.`;
      definition_of_vol = "Définition du bénévolat";
      break;
    case "hr":
      title = "Opis projekta";
      p1 = `Obuka o mjerenju učinka volontiranja u Europi (V-CALC)
      Projekt je dvogodišnje partnerstvo između šest organizacija iz pet
      Europske zemlje: Velika Britanija, Belgija, Španjolska, Albanija i Hrvatska`;
      p2 = `Projekt V-CALC razvijen je za rješavanje problema koji postoji
      trenutno ne postoji metodologija koja mjeri učinak volontiranja
      uključenost među nacijama. Projekt V-CALC će razviti a
      user-friendly online platforma, koja će prikupljati podatke o volonterima
      uključenost i volontere. Voditelji i koordinatori volontera će
      biti obučeni tijekom V-CALC projekta o tome kako koristiti online
      platforma.`;
      p3 = `Projekt V-CALC ima za cilj razviti robusnu i pouzdanu metodologiju
      prikupiti podatke o utjecaju volontiranja, vrstama volontiranja
      te demografija i motivacija volontera. V-CALC platforma
      također ima za cilj izmjeriti učinak volontiranja na izgradnju društvenih i
      ljudski kapital i na promicanje zajedničkih europskih vrijednosti.`;
      p4 = `Podaci prikupljeni s online platforme V-CALC koristit će se za
      informirati politiku na nacionalnoj i međunacionalnoj razini i nastoji učiniti
      vidljiviji doprinos uključivanja volontera civilnom društvu
      diljem Europe.`;
      definition_of_vol = "Definicija volontiranja";
      break;
    case "sq":
      title = "Përshkrimi i projektit";
      p1 = `Trajnimi për Matjen e Ndikimit të Vullnetarizmit në Evropë (V-CALC)
      Projekti është një partneritet dyvjeçar midis gjashtë organizatave nga pesë
      Vendet evropiane: MB, Belgjika, Spanja, Shqipëria dhe Kroacia`;
      p2 = `Projekti V-CALC u zhvillua për të adresuar çështjen që ekziston
      aktualisht nuk ka metodologji që mat ndikimin e vullnetarëve
      përfshirje në të gjithë kombet. Projekti V-CALC do të zhvillojë një
      platformë online miqësore për përdoruesit, e cila do të mbledhë të dhëna për vullnetarët
      përfshirjen dhe vullnetarët. Menaxherët dhe koordinatorët vullnetarë do të
      të trajnohen gjatë projektit V-CALC, se si të përdorin internetin
      platformë.`;
      p3 = `Projekti V-CALC synon të zhvillojë një metodologji të fortë dhe të besueshme
      për të mbledhur të dhëna për ndikimin e vullnetarizmit, llojet e vullnetarizmit
      dhe demografike dhe motivimet e vullnetarëve. Platforma V-CALC
      synon gjithashtu të masë ndikimin e vullnetarizmit në ndërtimin social dhe
      kapitalit njerëzor dhe në promovimin e vlerave të përbashkëta evropiane.`;
      p4 = `Të dhënat e mbledhura nga platforma online V-CALC do të përdoren për të
      informojnë politikën në nivel kombëtar dhe ndërkombëtar dhe synon të bëjë
      kontributi i përfshirjes vullnetare në shoqërinë civile është më i dukshëm
      nëpër Evropë.`;
      definition_of_vol = "Përkufizimi i Vullnetarizmit";
      break;
    default:
      title = "Project Description";
      p1 = `The Volunteering Impact Measurement Training in Europe (V- CALC)
      project is a two-year partnership between six organisations from five
      European countries: UK, Belgium, Spain, Albania and Croatia.`;
      p2 = `The V-CALC project was developed to address the issue that there is
      currently no methodology which measures the impact of volunteer
      involvement across nations. The V-CALC project will develop a
      user-friendly online platform, which will gather data about volunteer
      involvement and volunteers. Volunteer managers and coordinators will
      be trained during the V-CALC project, on how to use the online
      platform.`;
      p3 = `The V-CALC project aims to develop a robust and reliable methodology
      to gather data about the impact of volunteering, types of volunteering
      and the demographic and motivations of volunteers. The V-CALC platform
      also aims to measure the impact of volunteering on building social and
      human capital and on promoting common European values.`;
      p4 = `The data gathered from the V-CALC online platform will be used to
      inform policy nationally and cross-nationally and aims to make the
      contribution of volunteer involvement to civic society more visible
      across Europe.`;
      definition_of_vol = "Definition of Volunteering";
      break;
  }
  
  return (
    <>
      <div className="description">
        <h3>{title}</h3>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
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
          font-family: "Verdana", "Montserrat", sans-serif !important;
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

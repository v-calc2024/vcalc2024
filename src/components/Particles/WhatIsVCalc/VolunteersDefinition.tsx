import Image from "next/image";

export function VolunteersDefinition({ lang }: any) {
  let title = "Definition of Volunteering";
  let p1 = `Each project partner country had their own definition of volunteering,
  in their native language. The European Council and Parliament has a
  definition of volunteering, with Spain, Croatia and Albania all having
  legal definitions of volunteering. It was fundamental therefore to
  agree on an approach and on a definition that all could share, which
  was to be initially in English. From all these realities, project
  partners collaboratively agreed the V-CALC platform will underpin
  volunteering by 3 principles:`;
  let p2 = `“When it comes to volunteering, each country has different notions,
  definitions and traditions. Volunteering is defined as all forms of
  voluntary activity, whether formal or informal. Volunteers act under
  their own free will, according to their own choices and motivations
  and do not seek financial gain. Volunteering is a journey of
  solidarity and a way for individuals and associations to identify and
  address human, social or environmental needs and concerns.
  Volunteering is often carried out in support of a non-profit
  organisation or community-based initiative.” - European Commission,
  2011`;
  let li1 = `Free will, by choice, without obligation`;
  let li2 = `Unpaid, not predominantly for financial gain`;
  let li3 = `Making a difference to individuals, communities, society and the
  environment`;

  switch (lang) {
    case "es":
      title = "Descripción del Proyecto";
      p1 = `Cada país socio del proyecto tenía su propia definición de voluntariado,
      en su lengua nativa. El Consejo y el Parlamento Europeos tienen la
      definición de voluntariado: España, Croacia y Albania tienen todos ellos
      definiciones legales de voluntariado. Por lo tanto, era fundamental
      acordar un enfoque y una definición que todos puedan compartir, que
      iba a estar inicialmente en inglés. De todas estas realidades, proyecto
      Los socios acordaron en colaboración que la plataforma V-CALC respaldará
      voluntariado por 3 principios:`;
      p2 = `“Cuando se trata de voluntariado, cada país tiene nociones diferentes,
      definiciones y tradiciones. El voluntariado se define como toda forma de
      actividad voluntaria, ya sea formal o informal. Los voluntarios actúan bajo
      su propia voluntad, según sus propias elecciones y motivaciones
      y no busques ganancias económicas. El voluntariado es un viaje de
      solidaridad y una manera para que individuos y asociaciones identifiquen y
      abordar necesidades y preocupaciones humanas, sociales o ambientales.
      El voluntariado a menudo se lleva a cabo en apoyo de una organización sin fines de lucro.
      organización o iniciativa comunitaria”. -Comisión Europea,
      2011`;
      li1 = `Libre albedrío, por elección, sin obligación`;
      li2 = `No remunerado, no predominantemente para obtener ganancias financieras`;
      li3 = `Marcar la diferencia para los individuos, las comunidades, la sociedad y el
      ambiente`;
      break;
    case "fr":
      title = "Définition du bénévolat";
      p1 = `Chaque pays partenaire du projet avait sa propre définition du volontariat,
      dans leur langue maternelle. Le Conseil et le Parlement européens ont
      définition du volontariat, l’Espagne, la Croatie et l’Albanie ayant toutes
      définitions juridiques du volontariat. Il était donc fondamental de
      se mettre d'accord sur une approche et sur une définition que tous pourraient partager,
      devait être initialement en anglais. De toutes ces réalités, projet
      les partenaires ont convenu en collaboration que la plateforme V-CALC soutiendrait
      le bénévolat selon 3 principes :`;
      p2 = `« En matière de volontariat, chaque pays a des notions différentes,
      définitions et traditions. Le bénévolat est défini comme toutes les formes de
      activité bénévole, qu'elle soit formelle ou informelle. Les bénévoles agissent sous
      leur propre libre arbitre, selon leurs propres choix et motivations
      et ne cherchez pas de gain financier. Le bénévolat est un voyage de
      solidarité et un moyen pour les individus et les associations d'identifier et
      répondre aux besoins et préoccupations humains, sociaux ou environnementaux.
      Le bénévolat est souvent effectué en soutien à une organisation à but non lucratif
      organisation ou initiative communautaire. - Commission européenne,
      2011`;
      li1 = `Libre arbitre, par choix, sans obligation`;
      li2 = `Non rémunéré, pas principalement pour un gain financier`;
      li3 = `Faire une différence pour les individus, les communautés, la société et le
      environnement`;
      break;
    case "hr":
      title = "Definicija volontiranja";
      p1 = `Svaka zemlja partner projekta imala je svoju definiciju volontiranja,
      na svom materinjem jeziku. Europsko vijeće i parlament imaju
      definiciju volontiranja, a sve imaju Španjolska, Hrvatska i Albanija
      pravne definicije volontiranja. Stoga je bilo temeljno
      slažu se oko pristupa i definicije koju bi svi mogli dijeliti, koja
      u početku je trebao biti na engleskom. Od svih ovih stvarnosti, projekt
      partneri su se zajednički složili da će platforma V-CALC poduprijeti
      volontiranje po 3 principa:`;
      p2 = `„Kada je riječ o volontiranju, svaka zemlja ima različite pojmove,
      definicije i tradicije. Volontiranje se definira kao svi oblici
      volonterske aktivnosti, formalne ili neformalne. Volonteri djeluju pod
      svojom slobodnom voljom, prema vlastitom izboru i motivaciji
      i ne traže financijsku dobit. Volontiranje je putovanje
      solidarnost i način da se pojedinci i udruge identificiraju i
      rješavanje ljudskih, društvenih ili ekoloških potreba i briga.
      Volontiranje se često provodi kao podrška neprofitnim organizacijama
      organizacije ili inicijative u zajednici.” - Europska komisija,
      2011`;
      li1 = `Slobodna volja, po izboru, bez obaveze`;
      li2 = `Neplaćeno, ne pretežno zbog financijske dobiti`;
      li3 = `Čineći razliku za pojedince, zajednice, društvo i druge
      okoliš`;
      break;
    case "sq":
      title = "Përkufizimi i Vullnetarizmit";
      p1 = `Çdo vend partner i projektit kishte përkufizimin e vet të vullnetarizmit,
      në gjuhën e tyre amtare. Këshilli Evropian dhe Parlamenti ka
      përkufizimi i vullnetarizmit, me Spanjën, Kroacinë dhe Shqipërinë
      përkufizimet ligjore të vullnetarizmit. Prandaj ishte thelbësore që
      bien dakord për një qasje dhe për një përkufizim që të gjithë mund të ndajnë, të cilat
      fillimisht duhej të ishte në anglisht. Nga të gjitha këto realitete, projekt
      partnerët ranë dakord në bashkëpunim se platforma V-CALC do të mbështesë
      vullnetarizmi sipas 3 parimeve:`;
      p2 = `“Kur bëhet fjalë për vullnetarizmin, çdo vend ka nocione të ndryshme,
      përkufizimet dhe traditat. Vullnetarizmi përkufizohet si të gjitha format e
      aktivitet vullnetar, qoftë formal apo joformal. Vullnetarët veprojnë nën
      vullnetin e tyre të lirë, sipas zgjedhjeve dhe motivimeve të tyre
      dhe mos kërkoni përfitime financiare. Vullnetarizmi është një udhëtim i
      solidariteti dhe një mënyrë që individët dhe shoqatat të identifikojnë dhe
      adresojnë nevojat dhe shqetësimet njerëzore, sociale ose mjedisore.
      Vullnetarizmi shpesh kryhet në mbështetje të një organizate jofitimprurëse
      organizatë ose iniciativë e bazuar në komunitet.” - Komisioni Europian,
      2011`;
      li1 = `Vullneti i lirë, me zgjedhje, pa detyrim`;
      li2 = `Të papaguara, jo kryesisht për përfitime financiare`;
      li3 = `Duke bërë një ndryshim për individët, komunitetet, shoqërinë dhe
      mjedisi`;
      break;
    default:
      title = "Definition of Volunteering";
      p1 = `Each project partner country had their own definition of volunteering,
      in their native language. The European Council and Parliament has a
      definition of volunteering, with Spain, Croatia and Albania all having
      legal definitions of volunteering. It was fundamental therefore to
      agree on an approach and on a definition that all could share, which
      was to be initially in English. From all these realities, project
      partners collaboratively agreed the V-CALC platform will underpin
      volunteering by 3 principles:`;
      p2 = `“When it comes to volunteering, each country has different notions,
      definitions and traditions. Volunteering is defined as all forms of
      voluntary activity, whether formal or informal. Volunteers act under
      their own free will, according to their own choices and motivations
      and do not seek financial gain. Volunteering is a journey of
      solidarity and a way for individuals and associations to identify and
      address human, social or environmental needs and concerns.
      Volunteering is often carried out in support of a non-profit
      organisation or community-based initiative.” - European Commission,
      2011`;
      li1 = `Free will, by choice, without obligation`;
      li2 = `Unpaid, not predominantly for financial gain`;
      li3 = `Making a difference to individuals, communities, society and the
      environment`;
      break;
  }

  return (
    <>
      <div className="description">
        <h3>{title}</h3>
        <p>{p1}</p>
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>
        <p>{p2}</p>
      </div>
      <div className="image">
        <Image
          src="/volunteer-image-2.jpg"
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

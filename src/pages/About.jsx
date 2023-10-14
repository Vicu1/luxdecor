import about from '../assets/images/pexels-eva-klanduchova-296968.jpg';
import { abilities } from '../static/abilities.js';
const AboutPage = () => {
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1 className={'container'} data-aos="zoom-in">About us</h1>
      </div>
      <section className={'container'}>
        <div className="about-content">
          <img
            className="img-about"
            src={about}
            alt="about"
          />
          <div data-aos="zoom-in-left" className="about-content-inner">
            <h2 className="title">About us</h2>
            <p>
              Qui sommes-nous ? Implantee au Province du Luxembourg depuis 2021, AVG LuxDecor est tout d'abord une Entreprise qui se veut a la fois jeune et flexible.
              Cette Entreprise a su diversifier ses activites et reste a votre ecoute lors d'interventions aussi bien sur vos chantiers exterieurs (fenêtres et portes KÖMMERLING, facade isolante) que sur vos chantiers interieurs (peinture et decoration, platre, renovation).
            </p>
            <p>
              Nous vous proposons des fenêtres et des portes KÖMMERLING de haute qualité, fabriquées dans des délais très courts, avec une garantie constructeur de 5 ans. KÖMMERLING 76 et KÖMMERLING 88 est la fenêtre de l'avenir. Le système innovant premium de portes et fenêtres répond à toutes les exigences pour la construction de maisons passives, avec une protection sonore et anti-effraction optimale et un concept orienté vers de nouvelles perspectives.
            </p>
            <p>
              Sa reussite reside surtout dans la mise en place d'une equipe de professionnels dynamiques qui savent allier savoir-faire et experience pour repondre au mieux a vos exigences. N'hesitez pas a nous contacter et a nous demander conseils pour vos petits comme pour vos grands projets !
            </p>
          </div>
        </div>
      </section>
      <section className="knowladge">
        <div className={'container'}>
          <h2 className="title">Main Reason to Choose Us</h2>
          <div className="knowladge-inner">
            {abilities.map((ability, index) => (
              <div
                key={index}
                data-aos="zoom-out"
                data-aos-delay={300 * index + 2}
                data-aos-duration="700"
                className="knowladge-inner-card"
              >
                <div className={'knowladge-title'}>
                  <img
                    className="knowladge-icon"
                    src={ability.image}
                    alt="img"
                  />
                  <h3>{ability.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;

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
              We're more than just a construction company – we're your partners in bringing architectural visions to life. With a legacy of excellence and a passion for innovation, we've been at the forefront of the construction industry for 10 years.
            </p>
            <p>
              Our unwavering commitment to quality, safety, and customer satisfaction has earned us a stellar reputation among our clients and peers. We specialize in a wide range of construction services, including residential, commercial, and industrial projects.
            </p>
            <p>
              With a proven track record of successful projects and a passion for excellence, we are your trusted construction partner. Whether you have a small renovation project or a large-scale development, we have the expertise and dedication to bring your vision to life. Contact us today to discuss your project needs and experience the difference with DJ Concept.
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

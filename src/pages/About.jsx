import about from '../assets/images/about.png';
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
              Since 1997. Consulting, IT Service&Sale. You can consult our experts on the needs of your website via e-mail, live support or phone. Our support team is here to provide you friendly service. Our staff makes your life easier!
            </p>
            <p>
              We are dedicated to providing reliable and efficient web hosting solutions for businesses, entrepreneurs, and individuals worldwide. With a passion for technological innovation and a commitment to exceptional customer service, we strive to ensure that your online presence is secure, accessible, and seamlessly integrated
            </p>
            <p>
              Our mission is to empower our clients with the tools and support they need to succeed in the digital world. Whether you're a small business looking to establish an online footprint or a growing enterprise in need of scalable hosting solutions, we have the expertise and infrastructure to meet your specific requirements.
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

import facade from '../assets/images/facade.jpeg';
import couverture from '../assets/images/couverture.jpg';
import tratment from '../assets/images/tratment.jpg';
import tightness from '../assets/images/tightness.jpg';
import house from '../assets/images/roof-svgrepo-com.svg';
const ServicesPage = () => {
  const services = [
    {
      img: facade,
      icon: house,
      title: 'Facade insulation & painting',
      text: 'Revitalize your building\'s exterior with our expert facade insulation and painting services.',
    },
    {
      img: couverture,
      icon: house,
      title: 'Couverture Services',
      text: 'Discover the comfort and protection you need for your roofing needs with our comprehensive couverture services.',
    },
    {
      img: tratment,
      icon: house,
      title: 'Cleaning and Treatment',
      text: 'We offer a comprehensive range of professional cleaning and treatment services tailored to meet your specific needs.',
    },
    {
      img: tightness,
      icon: house,
      title: 'Tightness Service',
      text: 'Our Tightness Service is designed to provide you with the utmost confidence in the integrity of your building\'s envelope.',
    },
  ];
  return (
    <>
      <div className={'about'}>
        <div className={'about-bg'} />
        <h1
          className={'container'}
          data-aos="zoom-in"
        >
          Services
        </h1>
      </div>
      <section className={'services'}>
        <div className={'container'}>
          <h1 data-aos="zoom-in-up">Top Quality Service</h1>
          <p data-aos="zoom-in-up" className={'services-text'}>
            If you're looking for a dependable plumber in your area, you need to
            look to none other than Homelance Plumbing, Heating & Solar. Our
            experienced team offers services for both residential and commercial
            properties.
          </p>
          <div className={'services-wrapper'}>
            {services.map((service, key) => (
              <div
                data-aos="zoom-out"
                data-aos-delay={500 * key + 2}
                key={key}
                className={'service'}
              >
                <img
                  className={'service-img'}
                  src={service.img}
                  alt="img"
                />
                <div className={'service-icon'}>

                  <h4>{service.title}</h4>
                </div>
                <div className={'service-content'}>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;

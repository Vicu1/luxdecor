import roof from '../assets/images/service-v7-1.jpg';
import house from '../assets/images/roof-svgrepo-com.svg';
const ServicesPage = () => {
  const services = [
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
    },
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
    },
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
    },
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
    },
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
    },
    {
      img: roof,
      icon: house,
      title: 'New Roof Installation',
      text: 'Bring to the table win-win survial strategies to ensure proactive on a practice domination.',
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
                  <img
                    src={service.icon}
                    alt="img"
                  />
                </div>
                <div className={'service-content'}>
                  <h4>{service.title}</h4>
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

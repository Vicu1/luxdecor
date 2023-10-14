// import bg from '../assets/images/header-bg2.jpg';
import bg from '../assets/images/header.jpg';
import BlackBtn from '../components/UI/BlackBtn.jsx';
const HomePage = () => {
  return (
    <section className="home">
      <img
        className={'home-bg'}
        src={bg}
        alt={'bg'}
      />
      <div className={'container home-wrapper'}>
          <div data-aos="fade-up"
               data-aos-anchor-placement="top-bottom">
              <h1>Luxdecor</h1>
              <p>FENÊTRES KÖMMERLING! RÉNOVATIONS ET CONSTRUCTIONS</p>
              <BlackBtn url={'/services'}>See services</BlackBtn>
          </div>

      </div>
    </section>
  );
};
export default HomePage;

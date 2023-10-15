// import bg from '../assets/images/header-bg2.jpg';
import bg from '../assets/images/bg.jpg';
import BlackBtn from '../components/UI/BlackBtn.jsx';
import WhatGet from "../components/WhatGet.jsx";
import WhyWeBest from "../components/WhyWeBest.jsx";
import Plans from "../components/Plans.jsx";
const HomePage = () => {
  return (
      <>
          <section className="home">
              <div className={'container home-wrapper'}>
                  <div data-aos="fade-up"
                       data-aos-anchor-placement="top-bottom">
                      <h1>AVG Hosting</h1>
                      <p>The Cheapest and The Best Hosting
                          Unlimited Web Hosting</p>
                  </div>
              </div>
          </section>
          <Plans/>
          <WhatGet />
          <WhyWeBest />
      </>

  );
};
export default HomePage;

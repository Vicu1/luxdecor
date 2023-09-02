import Header from '../components/Header.jsx';
import instagram from '../assets/images/footer/instagram.png';
import facebook from '../assets/images/footer/facebook.png';
import twitter from '../assets/images/footer/twitter.png';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
const DefaultLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header background={'withBg'} />
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <div className="footer">
            <a
              className="footer-logo"
              href="/"
            >
              <h3>DJC</h3>
            </a>
            <div className="footer-item">
              <h5 className="footer-title">Introduction</h5>
              <a
                className="footer-info"
                href="/about"
              >
                About us
              </a>
              <a
                className="footer-info"
                href="/services"
              >
                Our services
              </a>
            </div>
            <div className="footer-item">
              <h5 className="footer-title">Contacts</h5>
              <a
                className="footer-info"
                href="mailto:info@dj-concept.be"
              >
                E-mail (info@dj-concept.be)
              </a>
              <a
                className="footer-info"
                href="tel:+495548487"
              >
                Phone (+495 548 487)
              </a>
            </div>
            <div className="footer-item">
              <h5 className="footer-title">Social</h5>
              <div className="footer-social">
                <a
                  className="footer-info"
                  href=""
                >
                  <img
                    src={instagram}
                    alt="img"
                  />
                </a>
                <a
                  className="footer-info"
                  href=""
                >
                  <img
                    src={facebook}
                    alt="img"
                  />
                </a>
                <a
                  className="footer-info"
                  href=""
                >
                  <img
                    src={twitter}
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default DefaultLayout;

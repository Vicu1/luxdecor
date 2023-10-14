import Header from '../components/Header.jsx';
import {useEffect, useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FacebookIcon from "../assets/images/footer/Facebook.jsx";
import InstagramIcon from "../assets/images/footer/Instragram.jsx";
const DefaultLayout = () => {
  const { pathname } = useLocation();
  const [facebookHover, setFacebookHover] = useState(false)
  const [instagramHover, setInstagramHover] = useState(false)

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
              <h3>AVG</h3>
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
                href="mailto:info@avg.lu"
              >
                E-mail (info@avg.lu)
              </a>
              <a
                className="footer-info"
                href="tel:+32494683608"
              >
                Phone (+32 494 683 608)
              </a>
            </div>
            <div className="footer-item">
              <h5 className="footer-title">Social</h5>
              <div className="footer-social">
                <a
                  onMouseOver={() => setFacebookHover(true)}
                  onMouseLeave={() => setFacebookHover(false)}
                  className={'footer-info'}
                  href="https://www.facebook.com/LuxDecor.Be/"
                  target={'_blank'}
                >
                 <FacebookIcon color={facebookHover ? '#d90429' : '#444444'} />
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

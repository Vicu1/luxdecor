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
                    onMouseOver={() => setInstagramHover(true)}
                    onMouseLeave={() => setInstagramHover(false)}
                  className="footer-info"
                  href=""
                >
                  <InstagramIcon color={instagramHover ? '#d90429' : '#444444'} />
                </a>
                <a
                  onMouseOver={() => setFacebookHover(true)}
                  onMouseLeave={() => setFacebookHover(false)}
                  className={'footer-info'}
                  href=""
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

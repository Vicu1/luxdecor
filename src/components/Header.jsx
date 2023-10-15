import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/logo.png'
const Header = ({ background = '' }) => {
  const [open, setOpen] = useState(false);
  const router = useLocation();
  const headers = [
    {
      label: 'About',
      link: '/about',
    },
    {
      label: 'Web hosting',
      link: '/web-hosting',
    },
    {
      label: 'VPS hosting',
      link: '/vps-hosting',
    },
    {
      label: 'Dedicated servers',
      link: '/dedicated-servers',
    },
    {
      label: 'Contacts',
      link: '/contacts',
    },
  ];

  return (
    <header className={background}>
      <div className="container">
        <nav>
          <Link to={'/'}>
            <img src={logo} alt={'logo'}/>
          </Link>
          <ul className={`${open ? 'show' : ''}`}>
            {headers.map((item, key) => (
              <li
                className={`nav-item`}
                key={key}
              >
                <Link
                  onClick={() => setOpen(false)}
                  className={`nav-link ${
                    router.pathname === item.link && 'nav-link-active'
                  }`}
                  to={item.link}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`hamburger-lines ${open ? 'show' : ''}`}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;

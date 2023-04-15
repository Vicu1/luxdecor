import {Link, useLocation} from "react-router-dom";
import logo from '../assets/images/design-svgrepo-com.svg'
import {useState} from "react";
const Header = ({background = ''}) => {
    const [open, setOpen] = useState(false)
    const router = useLocation()
    const headers = [{
        label: 'Home',
        link: '/'
    },
    {
        label: 'About',
        link: '/about'
    },
    {
        label: 'Services',
        link: '/services'
    },
    {
        label: 'Gallery',
        link: '/gallery'
    },
    {
        label: 'Contacts',
        link: '/contacts'
    }]

    return (
        <header className={background}>
            <div className="container">
                <nav>
                    <Link to={'/'}>
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <ul className={`${open ? 'show' : ''}`}>
                        {headers.map((item, key) =>
                            <li className={`nav-item`} key={key}>
                                <Link onClick={() => setOpen(false)} className={`nav-link ${router.pathname === item.link && 'nav-link-active'}`} to={item.link}>{item.label}</Link>
                            </li>
                        )}
                    </ul>
                    <div className={`hamburger-lines ${open ? 'show' : ''}`} onClick={() => setOpen((value) => !value)}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header

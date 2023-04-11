import {Link, useLocation} from "react-router-dom";
import logo from '../assets/images/logo.png'
const Header = ({background = ''}) => {
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
    console.log(router)
    return (
        <header className={background}>
            <div className="container">
                <nav>
                    <Link to={'/'}>
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <ul>
                        {headers.map((item, key) =>
                            <li className={`nav-item`} key={key}>
                                <Link className={`nav-link ${router.pathname === item.link && 'nav-link-active'}`} to={item.link}>{item.label}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header
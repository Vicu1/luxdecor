import {Link} from "react-router-dom";
import logo from '../assets/images/logo.png'
const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <Link to={'/'}>
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <ul>
                        <li className="nav-item" preventScrollReset={true}>
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item" preventScrollReset={true}>
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item" preventScrollReset={false}>
                            <Link className="nav-link" to={'/projects'}>Projects</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to={'/gallery'}>Gallery</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item" preventScrollReset={true}>
                            <Link className="nav-link" to={'/contacts'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header
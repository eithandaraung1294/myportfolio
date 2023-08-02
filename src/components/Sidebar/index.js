import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo.png';
import LogoSubtitle from '../../assets/images/etda.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    console.log('Sidebar component rendered');
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink exact={true} activeClassName="active" to="/" data-text="HOME">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact={true} activeClassName="active" className="about-link" to="/about" data-text="ABOUT">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact" data-text="CONTACT">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ei-thandar-aung-710961278/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/eithandaraung1294">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100008406007327">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
            </ul>

        </div>
    );
}
export default Sidebar
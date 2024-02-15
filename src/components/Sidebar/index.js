import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/cube-2.png';
import LogoSubtitle from '../../assets/images/cube-1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => <>
 <div className="nav-bar">
    <Link className="logo" to="/My-Portfolio">
      <img className="loggo" src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/My-Portfolio">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/My-Portfolio/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/My-Portfolio/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel='noreferer' href='https://www.linkedin.com/in/abenezer-nigussie-892867233'>
          <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferer' href='https://github.com/abenaacs'>
          <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
        </a>
      </li>

    </ul>
  </div>;
</>;
export default Sidebar;

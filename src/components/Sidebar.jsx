import SocialNetworks from './SocialNetworks';
import ContactInfo from './ContactInfo';

import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Luigi Ferreira Bertelli"/>
        <p className="title">Full Stack Developer</p>
        <SocialNetworks/>
        <ContactInfo/>
        <a href="" className="btn">
            Download Resume (en)
        </a>

        <a href="" className="btn">
            Download Resume (pt)
        </a>
    </aside>
  )
}

export default Sidebar
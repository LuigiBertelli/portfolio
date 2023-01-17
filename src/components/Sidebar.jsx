import SocialNetworks from './SocialNetworks';
import ContactInfo from './ContactInfo';

import Avatar from '../img/eu.jpg';
import langObj from '../languages/components/sidebar.json';
import personalDataObj from '../configs/personalData.json';

import '../styles/components/sidebar.sass';

const Sidebar = ({lang}) => {

  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Luigi Ferreira Bertelli"/>
        <p className="title">{langObj.languages[lang].title}</p>
        <SocialNetworks lang={lang}/>
        <ContactInfo lang={lang}/>
        <a href={personalDataObj.cv[lang]} className="btn" download>
          {langObj.languages[lang].btnResume}
        </a>
    </aside>
  )
}

export default Sidebar
import { useEffect} from 'react';

import langObj from '../languages/components/aboutme.json';


const AboutMe = ({lang}) => {

  useEffect(() => {
    document.querySelector('.about-description').innerHTML = langObj.languages[lang].descriptionHtml.trim();
  }, [lang])
  

  return (
    <div id="about">
        <h2>{langObj.languages[lang].title}</h2>
        <div className="about-description"></div>
    </div>
  )
}

export default AboutMe
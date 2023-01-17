import { useEffect } from 'react';

import langObj from '../languages/components/projects.json';
import personalDataObj from '../configs/personalData.json';

const Projects = ({lang}) => {
  useEffect(() => {
    document.querySelector('.projects-description').innerHTML = langObj.languages[lang].descriptionHtml.trim();
  }, [lang])

  return (
    <section className="projects-container">
        <h2>{langObj.languages[lang].title}</h2>
        <div className="projects-description"></div>
        <a className="btn" href={`${personalDataObj.github}?tab=repositories`}>{langObj.languages[lang].myProjects}</a>
    </section>
  )
}

export default Projects
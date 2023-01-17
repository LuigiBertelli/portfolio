import {DiHtml5, DiCss3, DiJsBadge, DiJqueryLogo, DiReact, DiMysql, DiDotnet, DiPhp} from 'react-icons/di';
import {SiCsharp, SiVuedotjs} from 'react-icons/si';

import langObj from '../languages/components/technologies.json';

import '../styles/components/technologies.sass';

const technologies = [
    {   id: 'html', 
        name: 'HTML5', 
        icon: <DiHtml5/>},
    {   id: 'css',
        name: 'CSS3', 
        icon: <DiCss3/>,},
    {   id: 'js', 
        name: 'Javascript', 
        icon: <DiJsBadge/>},
    {   id: 'csharp', 
        name: 'C#', 
        icon: <SiCsharp/>},
    {   id: 'php', 
        name: 'PHP', 
        icon: <DiPhp/>},
    {   id: 'mysql', 
        name: 'MySQL', 
        icon: <DiMysql/>},
    {   id: 'react', 
        name: 'React', 
        icon: <DiReact/>},
    {   id: 'vue', 
        name: 'VueJs', 
        icon: <SiVuedotjs/>},
    {   id: 'dotnet', 
        name: '.NET', 
        icon: <DiDotnet/>},
    {   id: 'jquery', 
        name: 'JQuery', 
        icon: <DiJqueryLogo/>},
]

const Technologies = ({lang}) => {
  return (
    <section className="technologies-container">
        <h2>{langObj.languages[lang].title}</h2>
        <div className="technologies-grid">
            {
                technologies.map(tech => (
                    <div key={tech.id} id={tech.id} className="technology-card">
                        {tech.icon}
                        
                        <h3>{tech.name}</h3>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Technologies
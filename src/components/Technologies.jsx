import {DiHtml5, DiCss3, DiJsBadge, DiJqueryLogo, DiReact, DiMysql, DiDotnet, DiPhp} from 'react-icons/di';
import {SiCsharp, SiVuedotjs} from 'react-icons/si';

import '../styles/components/technologies.sass'

const technologies = [
    {   id: 'html', 
        name: 'HTML5', 
        icon: <DiHtml5/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'css',
        name: 'CSS3', 
        icon: <DiCss3/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'js', 
        name: 'Javascript', 
        icon: <DiJsBadge/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'csharp', 
        name: 'C#', 
        icon: <SiCsharp/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'php', 
        name: 'PHP', 
        icon: <DiPhp/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'mysql', 
        name: 'MySQL', 
        icon: <DiMysql/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'react', 
        name: 'React', 
        icon: <DiReact/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'vue', 
        name: 'VueJs', 
        icon: <SiVuedotjs/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'dotnet', 
        name: '.NET', 
        icon: <DiDotnet/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
    {   id: 'jquery', 
        name: 'JQuery', 
        icon: <DiJqueryLogo/>, 
        details: 'Quisque ultrices, nunc in malesuada malesuada, arcu arcu ornare leo, a pharetra nisl magna feugiat quam.'},
]

const Technologies = () => {
  return (
    <section className="technologies-container">
        <h2>Technologies</h2>
        <div className="technologies-grid">
            {
                technologies.map(tech => (
                    <div key={tech.id} id={tech.id} className="technology-card">
                        <div className="tech">
                            {tech.icon}
                            
                            <h3>{tech.name}</h3>
                        </div>
                        <p className="details">
                            {tech.details}
                        </p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Technologies
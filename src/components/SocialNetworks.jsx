import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/luigi-ferreira-bertelli-6a8514199'},
    {name: 'github', icon: <FaGithub/>, url: 'https://github.com/LuigiBertelli'},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {
            socialNetworks.map(network => (
                <a key={network.name} href={network.url} className="social-btn">
                    {network.icon}
                </a>
            ))
        }
    </section>
  )
}

export default SocialNetworks
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import personalDataObj from '../configs/personalData.json';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, url: personalDataObj.linkedin},
    {name: 'github', icon: <FaGithub/>, url: personalDataObj.github},
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
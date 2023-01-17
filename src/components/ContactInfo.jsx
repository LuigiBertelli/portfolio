import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import langObj from '../languages/components/contactinfo.json';
import personalDataObj from '../configs/personalData.json';

import '../styles/components/contactinfo.sass';

const contactinfo = [
    {
        id: 'phone',
        icon: <AiFillPhone id="phone-icon"/>, 
        value: personalDataObj.phone},
    {
        id: 'mail',
        icon: <AiOutlineMail id="mail-icon"/>, 
        value: personalDataObj.mail},
    {
        id: 'pin',
        icon: <AiFillEnvironment id="pin-icon"/>, 
        value: personalDataObj.pin}
];

const ContactInfo = ({lang}) => {
  return (
    <section id="contact-info">
        {
            contactinfo.map(contact => (
                <div key={contact.id} className="info-card">
                    {contact.icon}
                    <div>
                        <h3>{langObj.languages[lang][contact.id].title}</h3>
                        <p>{contact.value}</p>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default ContactInfo
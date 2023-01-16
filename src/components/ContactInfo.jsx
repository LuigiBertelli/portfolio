import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/contactinfo.sass';

const contactinfo = [
    {title: 'Phone', icon: <AiFillPhone id="phone-icon"/>, value: '+39 3311278137'},
    {title: 'E-mail', icon: <AiOutlineMail id="mail-icon"/>, value: 'berteluigi@gmail.com'},
    {title: 'Localization', icon: <AiFillEnvironment id="pin-icon"/>, value: 'Gildone - CB/ Italy'}
];

const ContactInfo = () => {
  return (
    <section id="contact-info">
        {
            contactinfo.map(contact => (
                <div key={contact.title} className="info-card">
                    {contact.icon}
                    <div>
                        <h3>{contact.title}</h3>
                        <p>{contact.value}</p>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default ContactInfo
import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
          <div className="contact-links">
            <a href="mailto:fahdbenbali1@gmail.com" className="contact-link">
              <span className="icon"><EmailIcon /></span>
              <span>fahdbenbali1@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/fahd-benbali" target="_blank" rel="noreferrer" className="contact-link">
              <span className="icon"><LinkedInIcon /></span>
              <span>LinkedIn</span>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
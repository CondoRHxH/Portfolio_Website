import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      <div>
        <a href="github.com/CondoRHxH/Portfolio_Website" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        {/* <a href="" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
      </div>
      <p>{t.footer.designedBy} <a href="https://github.com/CondoRHxH/Portfolio_Website" target="_blank" rel="noreferrer">{t.footer.moi}</a></p>
      <p>© {new Date().getFullYear()} Fahd Benbali. {t.footer.rights}</p>

    </footer>
  );
}

export default Footer;
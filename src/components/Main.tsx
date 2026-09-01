import React, { useRef } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiKaggle, SiLeetcode } from "react-icons/si";
import { useLanguage } from '../context/LanguageContext';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './HyperspeedPresets';
import DownloadIcon from '@mui/icons-material/Download'; // optional icon
import '../assets/styles/Main.scss';

const KaggleIcon = SiKaggle as React.FC;
const LeetCodeIcon = SiLeetcode as React.FC;

function Main() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    section.style.setProperty('--x', `${x}%`);
    section.style.setProperty('--y', `${y}%`);
  };

  return (
    <div className="container">
      <div className="about-section" ref={sectionRef} onMouseMove={handleMouseMove}>
        <div className="hyperspeed-bg">
          <Hyperspeed effectOptions={hyperspeedPresets.six as any} />
        </div>
        <div className="content">
          <h1>{t.hero.name}</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <p className="about-text">{t.hero.about}</p>

          <div className="link_buttons">
            <a className="btn" href="https://www.linkedin.com/in/fahd-benbali" target="_blank" rel="noreferrer">
              <LinkedInIcon /> {t.hero.linkedin}
            </a>
            <a className="btn" href="https://www.kaggle.com/condorhxh/code" target="_blank" rel="noreferrer">
              <KaggleIcon /> {t.hero.kaggle}
            </a>
            <a className="btn" href="https://leetcode.com/u/ConnoRrHxH/" target="_blank" rel="noreferrer">
              <LeetCodeIcon /> {t.hero.leetcode}
            </a>
            <a className="btn" href="/Mon_CV.pdf" download="cv_Resume.pdf">
              <DownloadIcon /> {t.hero.resume}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
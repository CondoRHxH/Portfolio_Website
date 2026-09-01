import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React", "JavaScript", "HTML5", "CSS3","Node JS"
    , "Python", "MySQL", "Postman", "Mongo DB","Laravel", "PHP"
];

const labelsSecond = [
    "Git", "GitHub Actions", "Docker", "AWS Basics", "Linux Commands",
];

const labelsThird = [
    "Groq", "Streamlit", "Pandas", "Machine Learning", "Pyhton"
];

function Expertise() {
    const { t } = useLanguage();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t.expertise.fullstack.title}</h3>
                    <p>{t.expertise.fullstack.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>{t.expertise.devops.title}</h3>
                    <p>{t.expertise.devops.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>{t.expertise.genai.title}</h3>
                    <p>{t.expertise.genai.desc}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
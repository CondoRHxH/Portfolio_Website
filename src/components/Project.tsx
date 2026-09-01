import React, { useState } from "react";
import mock10 from '../assets/images/mock10.png';
import mock08 from '../assets/images/mock08.png';
import login_screen from '../assets/images/login_screen.png';
import first_dashboard from '../assets/images/first_dashboard.png';
import second_dashboard from '../assets/images/second_dashboard.png';
import reclamation_login from '../assets/images/reclamation_login.png';
import reclamation_etudiant from '../assets/images/reclamation_etudiant.png';
import reclamation_professeur from '../assets/images/reclamation_professeur.png';
import reclamation_admin from '../assets/images/reclamation_admin.png';
import jobfit_dark from '../assets/images/jobfit_dark.png';
import jobfit_light from '../assets/images/jobfit_light.png';
import link_saver_login from '../assets/images/link_saver_login.png';
import link_saver_save from '../assets/images/link_saver_save.png';
import link_saver_icon from '../assets/images/link_saver_icon.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLanguage } from '../context/LanguageContext';
import MovingBorderButton from './MovingBorderButton';
import ecommerce_hero from '../assets/images/ecommerce_hero.png';
import ecommerce_products from '../assets/images/ecommerce_products.png';
import ecommerce_detail from '../assets/images/ecommerce_detail.png';
import Dashboard_data from '../assets/images/Dashboard_data.png';
import Image_rapport from '../assets/images/Image_rapport.png';
import KPI_Data from '../assets/images/KPI_Data.png';
import RoomsPage from '../assets/images/RoomsPage.png';
import HomePage from '../assets/images/HomePage.png';

import '../assets/styles/Project.scss';

function ProjectCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const goTo = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  };

  return (
    <div className="project-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((img, i) => <img key={i} src={img} alt="thumbnail" />)}
      </div>
      <button className="carousel-arrow left" onClick={prev} aria-label="Previous image">
        <ChevronLeftIcon />
      </button>
      <button className="carousel-arrow right" onClick={next} aria-label="Next image">
        <ChevronRightIcon />
      </button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={(e) => goTo(e, i)} />
        ))}
      </div>
    </div>
  );
}

function ViewProjectButton({ href }: { href: string }) {
  return (
    <MovingBorderButton
      duration={2500}
      className="view-project-btn"
      onClick={() => window.open(href, '_blank', 'noreferrer')}
    >
      View Project
    </MovingBorderButton>
  );
}

interface DownloadProjectButtonProps {
  href: string;
  children?: React.ReactNode;
  fileName?: string;
}

export const DownloadProjectButton: React.FC<DownloadProjectButtonProps> = ({
  href,
  children = "Télécharger le PDF",
  fileName = "Project_BI.pdf",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <MovingBorderButton
      duration={2500}
      className="view-project-btn"
      onClick={handleDownload}
    >
      {children}
    </MovingBorderButton>
  );
};

function Project() {
    const { t } = useLanguage();

    return(
    <div className="projects-container" id="projects">
        <h1>{t.projects.academic}</h1>
        <div className="projects-grid">
            <div className="project">
                <ProjectCarousel images={[reclamation_login, reclamation_etudiant, reclamation_professeur, reclamation_admin]} />
                <h2>APP RECLAMATION</h2>
                <p>Built an academic complaints/reclamations management system with Laravel, including PDF export via barryvdh/laravel-dompdf, Excel data imports, and cookie-based auto-login. Deployed to production on InfinityFree with a migrated MySQL database.</p>
                <ViewProjectButton href="https://github.com/CondoRHxH/AppR" />
                
            </div>
            <div className="project">
                <ProjectCarousel images={[jobfit_dark, jobfit_light]} />
                <h2>JobFit AI</h2>
                <p>Built an AI-powered resume analyzer with Python, Streamlit, and the Groq API (LLaMA 3.1) giving job seekers an ATS-style match score, strengths/weaknesses breakdown, and an AI chat coach for real-time resume feedback, backed by SQLite for storage.</p>
                <ViewProjectButton href="https://github.com/CondoRHxH/AI_ResumeAnalyze" />
            </div>
        </div>

        <h1>{t.projects.mine}</h1>
        <div className="projects-grid">
            <div className="project">
              <ProjectCarousel images={[ecommerce_hero, ecommerce_products, ecommerce_detail]} />
              <h2>Modern E-Commerce</h2>
              <p>Built a full-stack e-commerce platform with Next.js, React, and TypeScript featuring dynamic product pages, cart management, and Stripe payment integration, with Sanity CMS powering the product content. Deployed on Vercel.</p>
              <ViewProjectButton href="https://modern-ecommerce-ten.vercel.app/" />
          </div>
            <div className="project">
                <ProjectCarousel images={[login_screen, first_dashboard, second_dashboard]} />
                <h2>Banking App</h2>
                <p>Built a personal finance manager with secure login, an analytics dashboard with income/expense tracking and spending breakdowns, a full transaction history, and an AI-powered financial advisor.</p>
                <ViewProjectButton href="https://github.com/CondoRHxH/AI-Powered_Banking_Management_System" />
            </div>
            <div className="project">
                <ProjectCarousel images={[link_saver_icon,link_saver_login, link_saver_save]} />
                <h2>Link Saver</h2>
                <p>Built a browser extension + Node.js/Express/MongoDB backend for saving links on the fly auto-fetches page metadata via Cheerio and lets you attach a description, note, and tags. JWT-based auth with bcrypt-hashed passwords.</p>
                <ViewProjectButton href="https://github.com/CondoRHxH/link-saver" />
            </div>
            <div className="project">
              <ProjectCarousel images={[HomePage,RoomsPage]} />
              <h2>Gestion Hotel</h2>
              <p>Built a hotel management system with PHP and MySQL featuring room browsing, an online reservation flow, and payment simulation, with a dedicated backend for listing and managing bookings. Runs on a classic PHP/XAMPP stack with clean, server-rendered pages.</p>
              <ViewProjectButton href="https://github.com/CondoRHxH/GestionHotel" />
          </div>
        </div>
        <h1>{t.projects.data}</h1>
        <div className="projects-grid">
          <div className="project">
              <ProjectCarousel images={[Image_rapport,Dashboard_data,KPI_Data]} />
              <h2>{t.projects.items.powerbi.title}</h2>
                <p>{t.projects.items.powerbi.desc}</p>
                <DownloadProjectButton href="/Project_BI.pdf">
                  {t.projects.buttons.downloadPdf}
                </DownloadProjectButton>
          </div>
        </div>
    </div>
    );
}

export default Project;
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

const translations = {
  en: {
    nav: { 
      expertise: "Expertise", 
      history: "History", 
      projects: "Projects", 
      contact: "Contact" 
    },
    hero: {
      name: "Fahd Benbali",
      tagline: "Full Stack Developer",
      about: "Experienced web developer skilled in Node.js, Laravel, React, PHP, Java, JEE, and JavaScript, with hands-on experience across real-world project most of them deployed to production. Also with a background in management and marketing.",
      linkedin: "LinkedIn",
      kaggle: "Kaggle",
      leetcode: "LeetCode",
      resume: "Download CV"
    },
    expertise: {
      title: "Expertise",
      techStack: "Tech stack:",
      fullstack: {
        title: "Full Stack Web Development",
        desc: "I have built a diverse array of web applications from scratch using modern technologies such as Laravel and React."
      },
      devops: {
        title: "DevOps & Automation",
        desc: "Having decent knowledge in some DevOps concepts, CI/CD pipelines, Dockerization"
      },
      genai: {
        title: "GenAI & LLM",
        desc: "Staying relevant in the market by leveraging the latest AI models in your projects. I have experience implementing AI In some of my projects."
      }
    },
    timeline: {
      title: "Education",
      finalYear: "Final Year",
      thirdYear: "3rd Year",
      eng: "Engineering Cycle Computer Science & Management",
      engSchool: "École des Hautes Études d'Ingénierie, Oujda",
      english: "English Studies",
      englishSchool: "Université Mohammed Premier, Oujda",
      tech: "Technical Specialist, Full-Stack Web Development",
      techSchool: "Ofppt Offshoring",
      bac: "Baccalaureate, Physics & Chemistry",
      bacSchool: "Lycée Salam",
      diploma: "Diploma",
      diplomaSchool: "Institut Français"
    },
    projects: {
      academic: "Academic Projects",
      mine: "My Projects",
      data: "Data Analytics Projects",
      buttons: {
        view: "View Project",
        downloadPdf: "Download PDF"
      },
      items: {
        powerbi: {
          title: "Power BI E-Commerce Sales Analytics",
          desc: "Built an end-to-end Power BI dashboard analyzing Moroccan regional e-commerce sales. Handled ETL and data cleaning in Power Query, built custom DAX metrics, and visualized customer demographics and operational logistics bottlenecks."
        },
        appReclamation: {
          title: "APP RECLAMATION",
          desc: "Built an academic complaints/reclamations management system with Laravel along with some collegues, including PDF export via barryvdh/laravel-dompdf, Excel data imports, and cookie-based auto-login. Deployed to production on InfinityFree with a migrated MySQL database."
        },
        jobfit: {
          title: "JobFit AI",
          desc: "Built an AI-powered resume analyzer with Python with a team, using Streamlit, and the Groq API (LLaMA 3.1) giving job seekers an ATS-style match score, strengths/weaknesses breakdown, and an AI chat coach for real-time resume feedback, backed by SQLite for storage."
        },
        ecommerce: {
          title: "Modern E-Commerce",
          desc: "Built a full-stack e-commerce platform with Next.js, React, and TypeScript featuring dynamic product pages, cart management, and Stripe payment integration, with Sanity CMS powering the product content. Deployed on Vercel."
        },
        banking: {
          title: "Banking App",
          desc: "Built a personal finance manager with secure login, an analytics dashboard with income/expense tracking and spending breakdowns, a full transaction history, and an AI-powered financial advisor."
        },
        linkSaver: {
          title: "Link Saver",
          desc: "Built a browser extension + Node.js/Express/MongoDB backend for saving links on the fly auto-fetches page metadata via Cheerio and lets you attach a description, note, and tags. JWT-based auth with bcrypt-hashed passwords."
        },
        gestionHotel: {
          title: "Gestion Hotel",
          desc: "Built a hotel management system with PHP and MySQL featuring room browsing with some friends, an online reservation flow, and payment simulation, with a dedicated JAVA for backend to list and manage bookings. Runs on a classic PHP/XAMPP stack with clean, server-rendered pages."
        },
        kubernetes: {
          title: "Kubernetes API Deployment",
          desc: "Deployed a Node.js/Express API to a Kubernetes cluster with minikube, configuring health probes and service manifests for a production-style setup."
        }
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Feel free to reach out for collaborations or just a friendly hello."
    }
  },
  fr: {
    nav: { 
      expertise: "Expertise", 
      history: "Parcours", 
      projects: "Projets", 
      contact: "Contact" 
    },
    hero: {
      name: "Fahd Benbali",
      tagline: "Développeur Full Stack",
      about: "Développeur web expérimenté, maîtrisant Node.js, Laravel, React, PHP, Java, JEE et JavaScript, avec une expérience concrète sur des projets réels la plupart déployés en production. J'ai également une expérience en gestion et en marketing.",
      linkedin: "LinkedIn",
      kaggle: "Kaggle",
      leetcode: "LeetCode",
      resume: "Télécharger le CV"
    },
    expertise: {
      title: "Expertise",
      techStack: "Stack technique :",
      fullstack: {
        title: "Développement Web Full Stack",
        desc: "J'ai développé une grande variété d'applications web de A à Z avec des technologies modernes comme React et Flask. Je maîtrise solidement le cycle de vie du développement logiciel (SDLC), aussi bien côté frontend que backend."
      },
      devops: {
        title: "DevOps & Automatisation",
        desc: "Une fois l'application développée, j'aide les clients à mettre en place des tests DevOps, des pipelines CI/CD et l'automatisation du déploiement pour garantir un Go-Live réussi."
      },
      genai: {
        title: "IA Générative & LLM",
        desc: "Restez compétitif en exploitant les derniers modèles d'IA dans vos projets. J'ai une expérience professionnelle dans la création de solutions GenAI de niveau entreprise pour renforcer la prise de décision intelligente."
      }
    },
    timeline: {
      title: "Formation",
      finalYear: "Dernière Année",
      thirdYear: "3ème Année",
      eng: "Cycle d'Ingénieur Informatique et Gestion",
      engSchool: "École des Hautes Études d'Ingénierie, Oujda",
      english: "Étude Anglais",
      englishSchool: "Université Mohammed Premier, Oujda",
      tech: "Technicien Spécialisé, Développement Web Full-Stack",
      techSchool: "Ofppt Offshoring",
      bac: "Baccalauréat, Physique & Chimie",
      bacSchool: "Lycée Salam",
      diploma: "Diplôme",
      diplomaSchool: "Institut Français"
    },
    projects: {
      academic: "Projets Académiques",
      mine: "Mes Projets",
      data: "Projets d'Analyse de Données",
      buttons: {
        view: "Voir le Projet",
        downloadPdf: "Mon CV"
      },
      items: {
        powerbi: {
          title: "Analyse de Ventes E-Commerce Power BI",
          desc: "Conçu un tableau de bord Power BI interactif analysant les performances e-commerce au Maroc (+167K MAD de CA). Nettoyage des données ETL dans Power Query, modélisation de mesures DAX (CA, Profit, Panier Moyen, Taux de retour) et analyse démographique et logistique."
        },
        appReclamation: {
          title: "APP RECLAMATION",
          desc: "Développé un système de gestion des réclamations académiques avec Laravel, incluant l'export PDF via barryvdh/laravel-dompdf, l'importation de données Excel et une connexion automatique par cookies. Déployé en production sur InfinityFree avec une base de données MySQL migrée."
        },
        jobfit: {
          title: "JobFit AI",
          desc: "Développé un analyseur de CV alimenté par l'IA avec Python, Streamlit et l'API Groq (LLaMA 3.1), offrant aux candidats un score de correspondance de type ATS, une analyse des points forts/faibles, ainsi qu'un coach IA pour un retour en temps réel sur leur CV, le tout appuyé par SQLite pour le stockage."
        },
        ecommerce: {
          title: "Modern E-Commerce",
          desc: "Développé une plateforme e-commerce full-stack avec Next.js, React et TypeScript comprenant des pages produits dynamiques, la gestion du panier et l'intégration des paiements Stripe, avec Sanity CMS pour le contenu produit. Déployée sur Vercel."
        },
        banking: {
          title: "Banking App",
          desc: "Développé un gestionnaire de finances personnelles avec connexion sécurisée, un tableau de bord analytique pour le suivi des revenus/dépenses, un historique complet des transactions et un conseiller financier alimenté par l'IA."
        },
        linkSaver: {
          title: "Link Saver",
          desc: "Développé une extension de navigateur avec un backend Node.js/Express/MongoDB pour enregistrer des liens à la volée récupère automatiquement les métadonnées de la page via Cheerio et permet d'ajouter une description, une note et des tags. Authentification JWT avec mots de passe hachés via bcrypt."
        },
        gestionHotel: {
          title: "Gestion Hotel",
          desc: "Développé un système de gestion hôtelière avec PHP et MySQL incluant la consultation des chambres, un parcours de réservation en ligne et une simulation de paiement, avec un backend dédié à la gestion des réservations. Fonctionne sur une stack classique PHP/XAMPP avec des pages rendues côté serveur."
        },
        kubernetes: {
          title: "Kubernetes API Deployment",
          desc: "Déployé une API Node.js/Express sur un cluster Kubernetes avec minikube, en configurant des sondes de santé (health probes) et des manifestes de service pour une mise en place proche de la production."
        }
      }
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "N'hésitez pas à me contacter pour une collaboration ou juste pour dire bonjour."
    }
  }
};

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations["en"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { LanguageProvider } from './context/LanguageContext';
import './index.scss';
import FloatingNav from "./components/FloatingNav";
import EmailMe from "./components/EmailMe";

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <LanguageProvider>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation/>
            <FadeIn transitionDuration={700}>
                <Main/>
                {/* <FloatingNav/> */}
                <Expertise/>
                <Timeline/>
                <Project/>
                <EmailMe/>
                {/* <Contact/> */}
                <Footer/>
            </FadeIn>
            {/* <Footer /> */}
        </div>
    </LanguageProvider>
    );
}

export default App;
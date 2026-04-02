import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import { skills, skillProgress, projects, experience, contact, navLinks } from "./data/portfolioData";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [counts, setCounts] = useState({ experience: 0, projects: 0, skills: 0, cloud: 0 });

  useEffect(() => {
    const target = { experience: 7, projects: 3, skills: 20, cloud: 4 };

    const timer = setInterval(() => {
      setCounts((prev) => ({
        experience: prev.experience < target.experience ? prev.experience + 1 : prev.experience,
        projects: prev.projects < target.projects ? prev.projects + 1 : prev.projects,
        skills: prev.skills < target.skills ? prev.skills + 1 : prev.skills,
        cloud: prev.cloud < target.cloud ? prev.cloud + 1 : prev.cloud
      }));
    }, 120);

    const stopTimer = setTimeout(() => clearInterval(timer), 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(stopTimer);
    };
  }, []);

  const theme = darkMode
    ? {
        page: "bg-slate-950 text-white",
        card: "bg-white/5 border-white/10",
        soft: "bg-slate-900/70",
        text: "text-slate-300",
        muted: "text-slate-400"
      }
    : {
        page: "bg-slate-100 text-slate-900",
        card: "bg-white border-slate-200",
        soft: "bg-slate-50",
        text: "text-slate-700",
        muted: "text-slate-500"
      };

  return (
    <div id="top" className={`min-h-screen transition-colors duration-300 ${theme.page}`}>
      <Navbar
        darkMode={darkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navLinks={navLinks}
      />

      <Hero
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        theme={theme}
        contact={contact}
        counts={counts}
      />

      <About theme={theme} darkMode={darkMode} />
      <Skills skills={skills} skillProgress={skillProgress} theme={theme} darkMode={darkMode} />
      <Projects projects={projects} theme={theme} darkMode={darkMode} />
      <Experience experience={experience} theme={theme} darkMode={darkMode} />
      <Contact contact={contact} theme={theme} darkMode={darkMode} />
      <Footer darkMode={darkMode} theme={theme} contact={contact} />
    </div>
  );
}
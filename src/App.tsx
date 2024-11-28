import Header from "./components/header/Header";
import Pagination from "./components/pagination/Pagination";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState, useEffect, useRef } from "react";
import "./App.css";

export enum NavigationLink {
  home = "home",
  about = "about",
  resume = "resume",
  portfolio = "portfolio",
  contact = "contact",
}

const links = [
  NavigationLink.home,
  NavigationLink.about,
  NavigationLink.resume,
  NavigationLink.portfolio,
  NavigationLink.contact,
];

function App() {
  const [activeSection, setActiveSection] = useState<NavigationLink>(NavigationLink.home);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    resume: resumeRef,
    portfolio: portfolioRef,
    contact: contactRef,
  };

  const handleScrollTo = (section: NavigationLink) => {
    const sectionElement = sectionRefs[section]?.current;
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(section);
      window.history.replaceState(null, "", `/#${section}`);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Dynamically determine which section is in view
    for (const [section, ref] of Object.entries(sectionRefs)) {
      const element = ref.current;
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop - offsetHeight * 0.5 &&
          scrollPosition < offsetTop + offsetHeight * 0.5
        ) {
          setActiveSection(section as NavigationLink);
          window.history.replaceState(null, "", `/#${section}`);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="App">
      <Header
        onNavigate={handleScrollTo}
        activeSection={activeSection}
        links={links}
      />
      {screenSize.dynamicWidth > 768 ? (
        <Pagination
          activeSection={activeSection}
          onNavigate={handleScrollTo}
          links={links}
        />
      ) : null}
      <div ref={homeRef} id="home">
        <Home />
      </div>
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={resumeRef} id="resume">
        <Resume />
      </div>
      <div ref={portfolioRef} id="portfolio">
        <Portfolio />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

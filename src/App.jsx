import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import AboutMe from './tabs/AboutMe';
import Projects from './tabs/Projects';
import Resume from './tabs/Resume';
import SectionContainer from './components/Containers/SectionContainer';
import SectionNavigator from './components/Navigation/SectionNavigator';

function App() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(location.pathname);

  useEffect(() => {
    const sectionContainer = document.getElementById("section-container");
    if(location.pathname === "/about-me") {
      sectionContainer.classList.add("translate-x-[-100vw]");
    } else if(location.pathname === "/projects") {
      sectionContainer.classList.add("translate-x-[-200vw]");
    } else if(location.pathname === "/resume") {
      sectionContainer.classList.add("translate-x-[-300vw]");
    }
  }, []);
  
  useEffect(() => {
    navigate(tab);

    if(tab === "/") setTab("/about-me");
  }, [tab, navigate]);

  return (
    <>
      <SectionNavigator tab={tab} setTab={setTab} />
      <div id="section-container" className="flex flex-row justify-center align-middle w-max h-max mt-[5%] translate-x-[-100vw] overflow-scroll">
        <SectionContainer>
          <Resume isCopy={true} />
        </SectionContainer>
        <SectionContainer>
          <AboutMe />
        </SectionContainer>
        <SectionContainer>
          <Projects />
        </SectionContainer>
        <SectionContainer>
          <Resume />
        </SectionContainer>
        <SectionContainer>
          <AboutMe isCopy={true} />
        </SectionContainer>
      </div>
    </>
  )
}

export default App

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
  const [tab, setTab] = useState(location.hash.replace("#", "/"));

  useEffect(() => {
    const sectionContainer = document.getElementById("section-container");
    if(location.hash === "#about-me") {
      sectionContainer.classList.add("translate-x-page-1");
    } else if(location.hash === "#projects") {
      sectionContainer.classList.add("translate-x-page-2");
    } else if(location.hash === "#resume") {
      sectionContainer.classList.add("translate-x-page-3");
    }
    console.log(location.hash);
  }, []);
  
  useEffect(() => {
    navigate(tab.replace("/", "#"));
    // location.hash = tab.replace("/", "#");

    if(tab === "") setTab("/about-me");
  // }, [tab]);
  }, [tab, navigate]);

  return (
    <>
      <SectionNavigator tab={tab} setTab={setTab} />
      <div id="section-container" className="flex flex-row justify-center align-middle w-max h-max mt-[5%] overflow-scroll transition-all duration-[200ms]">
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

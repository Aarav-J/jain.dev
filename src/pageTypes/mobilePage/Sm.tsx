import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
const MobilePage = () => {
    const [show, setShow] = useState(false);
    const LandingSection = useRef<HTMLDivElement>(null);
    const AboutSection = useRef<HTMLDivElement>(null);
    const SkillSection = useRef<HTMLDivElement>(null);
    const ProjectSection = useRef<HTMLDivElement>(null);
    return (
        <div className={`w-full h-full flex flex-col`}>
            <Navbar show={show} setShow={setShow} refs={[LandingSection, AboutSection, SkillSection, ProjectSection]} />
            <LandingPage headingRef={LandingSection} aboutRef={AboutSection} />
            <ProjectsPage headingRef={ProjectSection} />
            <SkillsPage headingRef={SkillSection} />
            <AboutPage headingRef={AboutSection} />
            
        </div>
    )
}

export default MobilePage; 
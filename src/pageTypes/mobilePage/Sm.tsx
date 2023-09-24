import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import { useRef } from "react";
import Navbar from "./components/Navbar";
const MobilePage = () => {
    const LandingSection = useRef<HTMLDivElement>(null);
    const AboutSection = useRef<HTMLDivElement>(null);
    const SkillSection = useRef<HTMLDivElement>(null);
    const ProjectSection = useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col">
            <Navbar refs={[LandingSection, AboutSection, SkillSection, ProjectSection]} />
            <LandingPage headingRef={LandingSection} />
            <AboutPage headingRef={AboutSection} />
            <SkillsPage headingRef={SkillSection} />
            <ProjectsPage headingRef={ProjectSection} />
        </div>
    )
}

export default MobilePage; 
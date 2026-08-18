import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import { useMemo, useRef } from "react";
import MobileNav from "../../components/MobileNav";
import useActiveSection, { type Section } from "../../hooks/useActiveSection";

const MobilePage = () => {
    const LandingSection = useRef<HTMLDivElement>(null);
    const ProjectSection = useRef<HTMLDivElement>(null);
    const SkillSection = useRef<HTMLDivElement>(null);
    const AboutSection = useRef<HTMLDivElement>(null);

    const sections = useMemo<Section[]>(
        () => [
            { id: "home", ref: LandingSection },
            { id: "projects", ref: ProjectSection },
            { id: "skills", ref: SkillSection },
            { id: "about", ref: AboutSection },
        ],
        []
    );

    const activeSection = useActiveSection(sections);

    const navigate = (id: string) => {
        const target = sections.find((s) => s.id === id);
        target?.ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="w-full h-full flex flex-col">
            <MobileNav activeSection={activeSection} onNavigate={navigate} />
            <LandingPage headingRef={LandingSection} projectRef={ProjectSection} />
            <ProjectsPage headingRef={ProjectSection} />
            <SkillsPage headingRef={SkillSection} />
            <AboutPage headingRef={AboutSection} />
        </div>
    );
};

export default MobilePage;

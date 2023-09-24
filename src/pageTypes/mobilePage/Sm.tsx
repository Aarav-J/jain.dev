import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
const MobilePage = () => {

    return (
        <div className="flex flex-col">
            <LandingPage />
            <AboutPage />
            <SkillsPage />
            <ProjectsPage />
        </div>
    )
}

export default MobilePage; 
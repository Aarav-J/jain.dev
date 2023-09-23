import SectionProps from "../type/sectionType"
// import Projects from "../components/Projects"
// import { useState } from "react"
// import ProjectPagination from "../components/projectsPagination/ProjectPagination"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
const ProjectsPage: React.FC<SectionProps> = ({ headingRef }) => {
    // const projects = [
    //     {
    //         image: image,
    //         title: "Flicks",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    //         codeLink: "github.com",
    //         demoLink: "google.com"
    //     },
    //     {
    //         image: image,
    //         title: "personalityBook",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    //         codeLink: "github.com",
    //         demoLink: "google.com"
    //     },
    //     {
    //         image: image,
    //         title: "JAIN.DEV",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    //         codeLink: "github.com",
    //         demoLink: "google.com"
    //     },


    // ]

    // const [activeProject, setActiveProject] = useState(0)
    return (
        <div className="section w-screen h-screen bg-background-primary flex mt-8 md:mt-0 items-center justify-center ">
            <div className="heading inline-flex items-center flex-col gap-8">
                <span className="font-semibold text-devPink text-7xl " ref={headingRef}>Projects</span>
                <span className="text-devGrey font-normal text-3xl text-center w-1/3">Here is my showcase of everything memorable that I have created. I am always looking for ways to show off my skills, and create something exciting. </span>
                <div className="group flex flex-row items-center justify-center gap-4 hover:cursor-pointer ">
                    <span className="text-devPink text-3xl">Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-devPink text-3xl group-hover:translate-x-6 transition" />
                </div>
            </div>
        </div>
    )

}

export default ProjectsPage
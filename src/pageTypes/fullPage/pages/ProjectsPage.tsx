import SectionProps from "../../../type/sectionType"
// import Projects from "../components/Projects"
// import { useState } from "react"
// import ProjectPagination from "../components/projectsPagination/ProjectPagination"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
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
    const navigate = useNavigate()
    return ( 
        <motion.div 
            className="section w-screen h-screen bg-background-primary flex md:mt-0 items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading inline-flex items-center flex-col gap-8">
                <motion.span 
                    className="font-semibold text-devPink text-7xl"
                    ref={headingRef}
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.7, 
                        type: "spring",
                        stiffness: 100
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Projects
                </motion.span>
                
                <motion.span 
                    className="text-devGrey font-normal text-3xl text-center w-1/3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Here is my showcase of everything memorable that I have created. I am always looking for ways to show off my skills, and create something exciting.
                </motion.span>
                
                <motion.div 
                    className="hovered group flex flex-row items-center justify-center gap-4" 
                    onClick={() => { 
                        navigate("/projects")
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                        duration: 0.7, 
                        delay: 0.6,
                        type: "spring",
                        stiffness: 400, 
                        damping: 15
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <span className="text-devPink text-3xl">Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-devPink text-3xl group-hover:translate-x-6 transition" />
                </motion.div>
            </div>
        </motion.div>
    )

}

export default ProjectsPage
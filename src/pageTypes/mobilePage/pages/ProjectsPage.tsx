import SmSectionType from "../../../type/SmsectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"


const ProjectsPage: React.FC<SmSectionType> = ({ headingRef }) => {
    const navigate = useNavigate()
    return (
        <div className=" w-screen h-screen bg-background-primary flex items-center justify-center" ref={headingRef}>
            <div className="heading inline-flex items-center flex-col gap-8">
                <span className="font-semibold text-devPink text-7xl">Projects</span>
                <span className="text-devGrey font-normal text-3xl text-center w-11/12">Here is my showcase of everything memorable that I have created. I am always looking for ways to show off my skills, and create something exciting. </span>
                <div className="group flex flex-row items-center justify-center gap-4 hover:cursor-pointer" onClick={() => { 
                    navigate('/projects')
                }}>
                    <span className="text-devPink text-3xl">Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-devPink text-3xl group-hover:translate-x-6 transition" />
                </div>
            </div>
        </div>
    )

}

export default ProjectsPage
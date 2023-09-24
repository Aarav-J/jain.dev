
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
const ProjectsPage = () => {
    return (
        <div className="section w-screen h-screen bg-background-primary flex mt-8 md:mt-0 items-center justify-center ">
            <div className="heading inline-flex items-center flex-col gap-8">
                <span className="font-semibold text-devPink text-7xl">Projects</span>
                <span className="text-devGrey font-normal text-3xl text-center w-11/12">Here is my showcase of everything memorable that I have created. I am always looking for ways to show off my skills, and create something exciting. </span>
                <div className="group flex flex-row items-center justify-center gap-4 hover:cursor-pointer ">
                    <span className="text-devPink text-3xl">Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} className="text-devPink text-3xl group-hover:translate-x-6 transition" />
                </div>
            </div>
        </div>
    )

}

export default ProjectsPage
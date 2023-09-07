
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type ProjectProps = {
    image: string,
    title: string,
    description: string,
    codeLink: string,
    demoLink: string

}
const Projects: React.FC<ProjectProps> = ({ image, title, description, codeLink, demoLink }) => {
    return (
        <div className="border-solid border-[thick] border-white w-full lg:w-2/5 rounded-2xl p-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            <img src={image} alt="" className="h-64 lg:h-auto w-auto lg:w-72 rounded-xl mb-4 lg:mb-0" />
            <div className="flex flex-col flex-grow items-center justify-center gap-4 lg:gap-6">
                <span className="text-white font-black text-3xl lg:text-4xl text-center lg:text-left">{title}</span>
                <span className="text-devGrey font-semibold text-sm lg:text-md text-center lg:text-left">{description}</span>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-6">
                    <div className="flex flex-row gap-2 items-center">
                        <span className="text-white font-bold text-lg">Code</span>
                        <a href={codeLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-white text-lg" /></a>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <span className="text-white font-bold text-lg">Demo</span>
                        <a href={demoLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} className="text-white text-lg" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

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
        <div className="border-solid border-[thick] border-white w-2/5 h-[20rem] rounded-2xl flex flex-col lg:flex-row items-center gap-6">
            <img src={image} alt="" className="h-64 w-72 rounded-xl ml-8" />
            <div className="flex flex-col items-center justify-center gap-6">
                <span className="text-white font-black text-4xl">{title}</span>
                <span className="text-devGrey font-semibold text-md">{description}</span>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-6 items-center justify-center">
                        <span className="text-white font-bold text-2xl">Code</span>
                        <a href={codeLink}> <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" /></a>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <span className="text-white font-bold text-2xl">Demo</span>
                        <a href={demoLink}><FontAwesomeIcon icon={faUpRightFromSquare} className="text-white text-2xl" /></a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects
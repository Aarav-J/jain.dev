import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Github = () => {
    return (
        <div className="fixed bottom-8 right-8 z-10">
            <a href="https://github.com/aarav-j" target="_blank" className="hovered"><FontAwesomeIcon icon={faGithub} className="hovered text-devGrey w-20 h-20" /></a>
        </div>
    )
}

export default Github
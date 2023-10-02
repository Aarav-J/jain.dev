import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const Github = () => {
    return (
        <div className="fixed bottom-16 z-10">
            <a href="https://github.com/aarav-j"><FontAwesomeIcon icon={faGithub} className="hovered text-background-primary w-20 h-20" /></a>
        </div>
    )
}

export default Github
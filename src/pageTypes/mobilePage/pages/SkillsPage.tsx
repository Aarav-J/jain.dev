import { faJsSquare, faSass, faCss3Alt, faBootstrap, faGitAlt, faReact, faPython, faHtml5, faFigma } from "@fortawesome/free-brands-svg-icons"
import SmSectionType from "../../../type/SmsectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TypeScriptIcon from "../../../components/TypeScriptIcon"

const SkillsPage: React.FC<SmSectionType> = ({ headingRef }) => {
    return (
        <div className="w-screen h-screen bg-background-primary flex  items-center justify-center" ref={headingRef}>
            <div className=" flex items-center flex-col gap-4">
                <span className="font-semibold text-devPink text-3xl">Skills</span>
                <span className="text-devGrey font-normal text-3xl text-center w-11/12">I have been programming for 3 years of my life, and I'm always open to learning new skills </span>
                <div className="grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-4">
                    {/* <SassIcon className="fill-devGrey" /> */}
                    <FontAwesomeIcon icon={faSass} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faJsSquare} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faCss3Alt} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faBootstrap} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faGitAlt} className="text-devGrey h-20 w-20 " />
                    <FontAwesomeIcon icon={faReact} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faPython} className="text-devGrey h-20 w-20" />
                    <FontAwesomeIcon icon={faHtml5} className="text-devGrey h-20 w-20" />
                    <TypeScriptIcon />
                    <FontAwesomeIcon icon={faFigma} className="text-devGrey h-20 w-20" />

                </div>
            </div>

        </div>
    )

}

export default SkillsPage
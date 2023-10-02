import { faJsSquare, faSass, faCss3Alt, faBootstrap, faGitAlt, faReact, faPython, faHtml5, faFigma } from "@fortawesome/free-brands-svg-icons"
import SectionProps from "../../../type/sectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TypeScriptIcon from "../../../components/TypeScriptIcon"

const SkillsPage: React.FC<SectionProps> = ({ headingRef }) => {
    return (
        <div className=" section w-screen h-screen bg-background-primary flex  items-center justify-center ">
            <div className="heading flex items-center flex-col gap-4">
                <span className="font-semibold text-devPink text-3xl" ref={headingRef}>Skills</span>
                <span className="text-devGrey font-normal text-3xl text-center w-3/5">I have been programming for 3 years of my life, and I'm always open to learning new skills </span>
                <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-x-4 gap-y-4">
                    {/* <SassIcon className="fill-devGrey" /> */}
                    <a href="https://sass-lang.com/"><FontAwesomeIcon icon={faSass} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><FontAwesomeIcon icon={faJsSquare} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><FontAwesomeIcon icon={faCss3Alt} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                <a href="https://getbootstrap.com/"><FontAwesomeIcon icon={faBootstrap} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                    <a href="https://git-scm.com/"><FontAwesomeIcon icon={faGitAlt} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                        <a href="https://react.dev/"><FontAwesomeIcon icon={faReact} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                            <a href="https://www.python.org/"><FontAwesomeIcon icon={faPython} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><FontAwesomeIcon icon={faHtml5} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>
                                                    <a href="https://www.typescriptlang.org/"><TypeScriptIcon /></a>
                                                        <a href="https://www.figma.com/"><FontAwesomeIcon icon={faFigma} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " /></a>

                </div>
            </div>

        </div>
    )

}

export default SkillsPage
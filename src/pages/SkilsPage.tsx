import { faJsSquare, faSass, faCss3Alt, faBootstrap,faGitAlt, faReact, faPython, faHtml5, faFigma} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TypeScriptIcon from "../components/TypeScriptIcon"

const SkillsPage = () => { 
    return (
        <div className=" section w-screen h-screen bg-background-primary flex  items-center justify-center ">
            <div className="heading flex items-center flex-col gap-4">
                <span className="font-semibold text-devPink text-3xl ">Skills</span>
                <span className="text-devGrey font-normal text-3xl text-center w-3/5">I have been programming for 3 years of my life, and I'm always open to learning new skills </span>
                <div className="grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-x-4 gap-y-4">
                    {/* <SassIcon className="fill-devGrey" /> */}
                   <FontAwesomeIcon icon={faSass} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in "/>
                    <FontAwesomeIcon icon={faJsSquare} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                    <FontAwesomeIcon icon={faCss3Alt} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                    <FontAwesomeIcon icon={faBootstrap} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                   <FontAwesomeIcon icon={faGitAlt} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                   <FontAwesomeIcon icon={faReact} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                   <FontAwesomeIcon icon={faPython} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                    <FontAwesomeIcon icon={faHtml5} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                    <TypeScriptIcon/>
                   <FontAwesomeIcon icon={faFigma} className="text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in " />
                   
               </div>
            </div>
              
        </div>
    )

}

export default SkillsPage
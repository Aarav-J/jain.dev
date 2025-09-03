import { faJsSquare, faSass, faCss3Alt, faGitAlt, faReact, faPython, faHtml5, faFigma } from "@fortawesome/free-brands-svg-icons"
import SectionProps from "../../../type/sectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TypeScriptIcon from "../../../components/TypeScriptIcon"
import CplusPlus from "../../../components/CplusPlus"
import { motion } from "framer-motion"

const SkillsPage: React.FC<SectionProps> = ({ headingRef }) => {
    // No need for variants as we're using individual animations
    
    return (
        <motion.div 
            className="section w-screen h-screen bg-background-primary flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading flex items-center flex-col gap-4">
                <motion.span 
                    className="font-semibold text-devPink text-3xl" 
                    ref={headingRef}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Skills
                </motion.span>
                
                <motion.span 
                    className="text-devGrey font-normal text-3xl text-center w-4/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    I love learning new skills!
                </motion.span>
                
                <motion.div 
                    className="grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-x-4 gap-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.a 
                        href="https://sass-lang.com/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faSass} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faJsSquare} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faCss3Alt} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://git-scm.com/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faGitAlt} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://react.dev/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faReact} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.python.org/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faPython} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faHtml5} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.typescriptlang.org/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <TypeScriptIcon />
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.figma.com/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        <FontAwesomeIcon icon={faFigma} className="hovered text-devGrey h-20 w-20 hover:text-devPurple hover:scale-125 transition duration-150 ease-in" />
                    </motion.a>
                    
                    <motion.a 
                        href="https://isocpp.org/" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                        viewport={{ once: true }}
                    >
                        <CplusPlus />
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    )

}

export default SkillsPage
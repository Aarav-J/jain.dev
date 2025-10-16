import "../../../components/typewriter.scss"
import "../../../components/ButtonFill.css"
import useTypedWords from "../../../hooks/useTypedWords"
import { motion } from "framer-motion"
// import <FontAwesomeIcon "@fortawesome/react-fontawesome"
// import { faFile } from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
type landingProps = {
    headingRef: React.RefObject<HTMLHeadingElement>;
    learnMoreRef: React.RefObject<HTMLDivElement>;
    scroll: (section: React.RefObject<HTMLDivElement>) => void;
}




const words = ["creating", "learning", "coding", "playing"]

const LandingPage: React.FC<landingProps> = ({ headingRef, learnMoreRef, scroll }) => {

    const word = useTypedWords(words)
    return (
        <motion.div 
            className={`section w-screen h-screen bg-background-primary flex items-center justify-center`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className={`heading flex items-center w-full flex-col justify-center`}>
                <motion.span 
                    className="font-semibold text-devPink text-3xl" 
                    ref={headingRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Who Am I?
                </motion.span>
                
                <motion.span 
                    className="text-white font-black text-7xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100
                    }}
                >
                    I'm Aarav Jain
                </motion.span>
                
                <motion.span 
                    className="text-devGrey font-normal text-7xl lg:text-left text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    Someone who enjoys <span className="typewriter">{word}</span>
                </motion.span>
                <div className="flex flex-row w-full justify-center gap-6">
                    
                    <motion.button
                        className="mt-6 inline-flex items-center gap-3 px-6 h-12 rounded-2xl text-lg font-semibold text-white shadow-md bg-gradient-to-r from-devPink to-devPurple"
                        onClick={() => scroll(learnMoreRef)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.45, type: "spring", stiffness: 120 }}
                    >
                        See my Projects!
                    </motion.button>

                    {/* Secondary: Download Resume (outlined) */}
                    <motion.a
                        href="/Aarav_Jain_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Resume PDF in new tab"
                        className="mt-6 inline-flex items-center gap-3 px-4 h-12 rounded-2xl text-lg font-semibold text-white border-2 border-devPurple bg-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(148,23,222,0.08)",
                            borderColor: "var(--secondary-color, #9417DE)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.35, type: "tween" }}
                    >
                        <FontAwesomeIcon icon={faFile} />
                        <span>See my Resume!</span>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )

}

export default LandingPage
import "../../../components/typewriter.scss"
import "../../../components/ButtonFill.css"
import useTypedWords from "../../../hooks/useTypedWords"
import { motion } from "framer-motion"
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
                
                <motion.button 
                    className="hovered text-xl font-semibold px-4 h-12 rounded-2xl border-devPink border-2 border-solid text-white mt-6 transition-colors" 
                    onClick={() => {
                        scroll(learnMoreRef)
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#9417DE", // devPurple solid fill
                        color: "#FFFFFF",  // White text
                        borderColor: "#9417DE", // Match border color
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        duration: 0.6, 
                        // delay: 1.4,
                        type: "tween",
                        // stiffness: 300, 
                        // damping: 15
                    }}
                >
                    See my Projects!
                </motion.button>
            </div>
        </motion.div>
    )

}

export default LandingPage
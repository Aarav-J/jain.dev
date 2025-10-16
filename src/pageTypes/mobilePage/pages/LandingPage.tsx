
import { motion } from "framer-motion"
import useTypedWords from "../../../hooks/useTypedWords"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"
type LandingPageProps = {
    headingRef: React.RefObject<HTMLDivElement>
    projectRef: React.RefObject<HTMLDivElement>
}
const words = ["creating", "learning", "coding", "playing"]
const LandingPage: React.FC<LandingPageProps> = ({ headingRef, projectRef }) => {
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const word = useTypedWords(words)
    return (
        <div className={` w-screen h-screen bg-background-primary flex items-center justify-center`} ref={headingRef}>
            <div className={`heading flex items-center w-full flex-col justify-center gap-4`}>
                <span className="font-semibold text-devPink text-3xl">Who Am I?</span>
                <span className="text-white font-black text-7xl text-center">I'm Aarav Jain</span>
                <span className="text-devGrey font-normal text-7xl lg:text-left text-center">Someone who enjoys <span className="typewriter">{word}</span></span>
                
                    <motion.button
                        className="mt-6 inline-flex items-center gap-3 px-6 h-12 rounded-2xl text-lg font-semibold text-white shadow-md bg-gradient-to-r from-devPink to-devPurple"
                        onClick={() => scrollTo(projectRef)}
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
    )
}

export default LandingPage;
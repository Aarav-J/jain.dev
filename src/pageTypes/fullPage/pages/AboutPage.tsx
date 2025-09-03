import SectionProps from "../../../type/sectionType"
import "../../../components/typewriter.scss"
import useTypedWords from "../../../hooks/useTypedWords"
import { motion } from "framer-motion"
const words = ["Developer", "Engineer", "Student", "Problem Solver"]

const AboutPage: React.FC<SectionProps> = ({ headingRef }) => {

    const word = useTypedWords(words)
    return (
        <motion.div 
            className={`section w-screen h-screen bg-background-primary flex items-center justify-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="heading inline-flex items-center flex-col gap-4">
                <motion.span 
                    className="font-semibold text-devPink text-3xl"
                    ref={headingRef}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    About
                </motion.span>
                
                <motion.span 
                    className="text-white font-black text-7xl typewriter"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    {word}
                </motion.span>
                
                <motion.span 
                    className="text-devGrey font-normal text-3xl text-center w-1/3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.8,
                        type: "spring",
                        stiffness: 50,
                        damping: 15
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    I am Aarav, a Computer Engineering student at Purdue University. I am passionate about software development and solving technical challenges. I enjoy building web applications, coding in multiple languages, and working on innovative projects.
                </motion.span>
            </div>
        </motion.div>
    )

}

export default AboutPage
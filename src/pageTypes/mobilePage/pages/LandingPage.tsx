import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { person, hero } from "../../../data/content"

type LandingPageProps = {
    headingRef: React.RefObject<HTMLDivElement>
    projectRef: React.RefObject<HTMLDivElement>
}

const LandingPage: React.FC<LandingPageProps> = ({ headingRef, projectRef }) => {
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="w-screen min-h-[100dvh] bg-background-primary flex items-center px-6 pt-20" ref={headingRef}>
            <div className="flex flex-col gap-6 w-full">

                <motion.span
                    className="font-mono text-[10px] text-devGrey tracking-[0.22em] uppercase"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {hero.eyebrow}
                </motion.span>

                <motion.h1
                    className="font-display font-black text-[4.5rem] leading-[0.9] tracking-tighter text-white"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {person.displayName.split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                </motion.h1>

                {/* <motion.p
                    className="text-devGrey text-base font-display font-light leading-relaxed max-w-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    {hero.pitch}
                </motion.p> */}

                <motion.div
                    className="flex flex-col gap-3 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <button
                        onClick={() => scrollTo(projectRef)}
                        className="w-full py-3 bg-devPink text-white font-display font-semibold text-sm rounded-md"
                    >
                        View Projects
                    </button>
                    <a
                        href={person.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-white/20 text-devGrey font-display font-semibold text-sm rounded-md flex items-center justify-center gap-2"
                    >
                        Resume
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    </a>
                </motion.div>

            </div>
        </div>
    )
}

export default LandingPage

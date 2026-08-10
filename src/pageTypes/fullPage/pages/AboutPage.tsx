import { motion } from "framer-motion"
import SectionProps from "../../../type/sectionType"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { person, about } from "../../../data/content"

const AboutPage: React.FC<SectionProps> = ({ headingRef }) => {
    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-row w-full px-20 gap-24 items-center">

                {/* Left — copy */}
                <div className="flex flex-col gap-6 w-3/5">
                    <div className="flex flex-col gap-2">
                        <motion.span
                            className="font-mono text-xs text-devPink tracking-[0.2em] uppercase"
                            ref={headingRef}
                            initial={{ opacity: 0, y: -8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            About
                        </motion.span>
                        <motion.h2
                            className="font-display font-black text-5xl text-white tracking-tight"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Who I Am
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-devGrey text-xl font-display font-light leading-relaxed max-w-lg"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {about.bio}
                    </motion.p>

                    <motion.div
                        className="flex flex-row gap-5 mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        viewport={{ once: true }}
                    >
                        <a href={person.github} target="_blank" rel="noopener noreferrer"
                            className="hovered flex items-center gap-2 text-devGrey/60 hover:text-devPink transition-colors duration-200 text-sm font-mono">
                            <FontAwesomeIcon icon={faGithub} className="text-base" />
                            GitHub
                        </a>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                            className="hovered flex items-center gap-2 text-devGrey/60 hover:text-devPink transition-colors duration-200 text-sm font-mono">
                            <FontAwesomeIcon icon={faLinkedin} className="text-base" />
                            LinkedIn
                        </a>
                        <a href={`mailto:${person.email}`}
                            className="hovered flex items-center gap-2 text-devGrey/60 hover:text-devPink transition-colors duration-200 text-sm font-mono">
                            <FontAwesomeIcon icon={faEnvelope} className="text-base" />
                            Email
                        </a>
                    </motion.div>
                </div>

                {/* Right — metadata */}
                <div className="flex flex-col gap-8">
                    {about.meta.map(({ label, value, sub }, i) => (
                        <motion.div
                            key={label}
                            className="flex flex-col gap-1"
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-[10px] text-devGrey/40 tracking-[0.18em] uppercase">
                                {label}
                            </span>
                            <span className="font-display font-semibold text-white text-base">{value}</span>
                            <span className="font-mono text-xs text-devGrey/60">{sub}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </motion.div>
    )
}

export default AboutPage

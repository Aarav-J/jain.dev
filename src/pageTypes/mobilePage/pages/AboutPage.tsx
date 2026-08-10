import { motion } from "framer-motion"
import SmSectionType from "../../../type/SmsectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { person, about } from "../../../data/content"

const AboutPage: React.FC<SmSectionType> = ({ headingRef }) => {
    return (
        <div className="w-screen min-h-[100dvh] bg-background-primary px-5 py-16" ref={headingRef}>
            <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">About</span>
                    <h2 className="font-display font-black text-3xl text-white tracking-tight">Who I Am</h2>
                </div>

                <p className="text-devGrey text-base font-display font-light leading-relaxed">
                    {about.bio}
                </p>

                <div className="flex flex-col gap-5 mt-2 border-t border-white/8 pt-5">
                    {about.meta.map(({ label, value, sub }) => (
                        <div key={label} className="flex flex-col gap-0.5">
                            <span className="font-mono text-[9px] text-devGrey/40 tracking-[0.18em] uppercase">{label}</span>
                            <span className="font-display font-semibold text-white text-sm">{value}</span>
                            <span className="font-mono text-xs text-devGrey/60">{sub}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row gap-5 mt-1">
                    <a href={person.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-devGrey/60 text-xs font-mono">
                        <FontAwesomeIcon icon={faGithub} className="text-sm" />GitHub
                    </a>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-devGrey/60 text-xs font-mono">
                        <FontAwesomeIcon icon={faLinkedin} className="text-sm" />LinkedIn
                    </a>
                    <a href={`mailto:${person.email}`}
                        className="flex items-center gap-1.5 text-devGrey/60 text-xs font-mono">
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />Email
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutPage

import { motion } from "framer-motion"
import SmSectionType from "../../../type/SmsectionType"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { person, about, experience } from "../../../data/content"

type ExpType = 'internship' | 'research' | 'club'

const pillColor: Record<ExpType, string> = {
    internship: 'text-blue-300 bg-blue-500/10 border-blue-500/25',
    research:   'text-purple-300 bg-purple-500/10 border-purple-500/25',
    club:       'text-orange-300 bg-orange-500/10 border-orange-500/25',
}

const AboutPage: React.FC<SmSectionType> = ({ headingRef }) => {
    return (
        <div className="w-screen bg-background-primary px-5 py-16" ref={headingRef}>
            <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >

                {/* ── About ───────────────────────────────────────────── */}
                <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">About</span>
                    <h2 className="font-display font-black text-3xl text-white tracking-tight">Who I Am</h2>
                </div>

                <p className="text-devGrey text-sm font-display font-light leading-relaxed">
                    {about.bio}
                </p>

                {/* Meta 2×2 */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/8 pt-6">
                    {about.meta.map(({ label, value, sub }) => (
                        <div key={label} className="flex flex-col gap-0.5">
                            <span className="font-mono text-[9px] text-devGrey/40 tracking-[0.18em] uppercase">{label}</span>
                            <span className="font-display font-semibold text-white text-sm">{value}</span>
                            {label === 'Education' && (
                                <span className="font-mono text-[9px] text-devGrey leading-snug break-words">{sub}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-row gap-5">
                    <a href={person.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-devGrey/55 text-xs font-mono">
                        <FontAwesomeIcon icon={faGithub} className="text-sm" /> GitHub
                    </a>
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-devGrey/55 text-xs font-mono">
                        <FontAwesomeIcon icon={faLinkedin} className="text-sm" /> LinkedIn
                    </a>
                    <a href={`mailto:${person.email}`}
                        className="flex items-center gap-1.5 text-devGrey/55 text-xs font-mono">
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" /> Email
                    </a>
                </div>

                {/* ── Experience ──────────────────────────────────────── */}
                <div className="border-t border-white/8 pt-8 flex flex-col gap-6">
                    <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">Background</span>

                    <div className="flex flex-col">
                        {experience.map((entry, i) => {
                            const isPresent = entry.period.includes('Present')
                            const t = entry.type as ExpType
                            return (
                                <motion.div
                                    key={entry.company}
                                    className="flex flex-col gap-2.5 py-6 border-t border-white/8 first:border-t-0 first:pt-0"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: i * 0.06 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-2">
                                        {isPresent && (
                                            <span className="relative flex h-1.5 w-1.5 shrink-0">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devPink opacity-60" />
                                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-devPink" />
                                            </span>
                                        )}
                                        <span className="font-mono text-[10px] text-devPink uppercase tracking-[0.06em]">
                                            {entry.period}
                                        </span>
                                    </div>

                                    <h3 className="font-display font-bold text-base tracking-tight leading-snug">
                                        <span className="text-white">{entry.role}</span>
                                        <span className="text-devPink mx-1.5">·</span>
                                        <span className="text-devPink">{entry.company}</span>
                                    </h3>

                                    <div className="flex flex-col gap-1.5">
                                        {entry.bullets.map((bullet, j) => (
                                            <p key={j} className="text-devGrey/75 text-xs font-display leading-relaxed">
                                                {bullet}
                                            </p>
                                        ))}
                                    </div>

                                    {'tech' in entry && Array.isArray(entry.tech) && entry.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
                                            {(entry.tech as string[]).map(tech => (
                                                <span
                                                    key={tech}
                                                    className={`text-[10px] font-mono rounded-full px-2.5 py-0.5 border ${pillColor[t]}`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default AboutPage

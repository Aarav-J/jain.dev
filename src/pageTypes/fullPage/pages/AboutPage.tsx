import { motion } from "framer-motion"
import SectionProps from "../../../type/sectionType"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { person, about, experience } from "../../../data/content"

type ExpType = 'internship' | 'research' | 'club'

const pillColor: Record<ExpType, string> = {
    internship: 'text-blue-300 bg-blue-500/10 border-blue-500/25',
    research:   'text-purple-300 bg-purple-500/10 border-purple-500/25',
    club:       'text-orange-300 bg-orange-500/10 border-orange-500/25',
}

const AboutPage: React.FC<SectionProps> = ({ headingRef }) => {
    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="flex flex-row w-full px-20 gap-16 items-center py-20">

                {/* ── Left: Who I Am ────────────────────────────────────── */}
                <div className="flex flex-col gap-7 w-[40%] shrink-0">

                    {/* Heading */}
                    <div className="flex flex-col gap-1">
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
                            className="font-display font-black text-5xl text-white tracking-tight leading-none"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.08 }}
                            viewport={{ once: true }}
                        >
                            Who I Am
                        </motion.h2>
                    </div>

                    {/* Bio */}
                    <motion.p
                        className="text-devGrey text-base font-display font-light leading-relaxed"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16 }}
                        viewport={{ once: true }}
                    >
                        {about.bio}
                    </motion.p>

                    {/* 2×2 meta grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-x-8 gap-y-6 pt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.24 }}
                        viewport={{ once: true }}
                    >
                        {about.meta.map(({ label, value, sub }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <span className="font-mono text-[10px] text-devGrey/40 tracking-[0.18em] uppercase">
                                    {label}
                                </span>
                                <span className="font-display font-semibold text-white text-sm leading-snug">
                                    {value}
                                </span>
                                {label === 'Education' && (
                                    <span className="font-mono text-[9px] text-devGrey leading-snug break-words">
                                        {sub}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        className="flex flex-row gap-6 justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.32 }}
                        viewport={{ once: true }}
                    >
                        <a href={person.github} target="_blank" rel="noopener noreferrer"
                            className="hovered text-devGrey/50 hover:text-devPink transition-colors text-2xl">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                            className="hovered text-devGrey/50 hover:text-devPink transition-colors text-2xl">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={`mailto:${person.email}`}
                            className="hovered text-devGrey/50 hover:text-devPink transition-colors text-2xl">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </motion.div>

                </div>

                {/* ── Right: Experience ──────────────────────────────────── */}
                <div className="flex-1 flex flex-col gap-5 pt-16">

                    <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase">
                        Background
                    </span>

                    <div className="flex flex-col">
                        {experience.map((entry, i) => {
                            const t = entry.type as ExpType

                            return (
                                <motion.div
                                    key={entry.company}
                                    className="flex flex-row gap-8 py-6 border-t border-white/10 first:border-t-0 first:pt-0"
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    {/* Period */}
                                    <div className="w-28 shrink-0 flex flex-col gap-0.5 pt-[3px]">
                                        {(() => {
                                            const [start, end] = entry.period.split(' — ')
                                            return (
                                                <>
                                                    <span className="font-mono text-[10px] text-white/70 tracking-[0.06em] uppercase">
                                                        {start}
                                                    </span>
                                                    <span className={`font-mono text-[10px] tracking-[0.06em] uppercase flex items-center gap-1.5 ${end === 'Present' ? 'text-devPink' : 'text-white/70'}`}>
                                                        {end === 'Present' && (
                                                            <span className="relative flex h-1.5 w-1.5 shrink-0">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devPink opacity-60" />
                                                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-devPink" />
                                                            </span>
                                                        )}
                                                        {end}
                                                    </span>
                                                </>
                                            )
                                        })()}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-2.5">

                                        {/* Role · Company */}
                                        <div className="flex items-start gap-2">
                                            <h3 className="font-display font-bold text-base text-white tracking-tight leading-snug">
                                                <span className="text-white">{entry.role}</span>
                                                <span className="text-devPink mx-1.5">·</span>
                                                <span className="text-devPink">{entry.company}</span>
                                            </h3>
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                                className="text-devPink/35 text-xs mt-[4px] shrink-0"
                                            />
                                        </div>

                                        {/* Description */}
                                        <div className="flex flex-col gap-1.5">
                                            {entry.bullets.map((bullet, j) => (
                                                <p key={j} className="text-devGrey/80 text-xs font-display leading-relaxed">
                                                    {bullet}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Tech pills */}
                                        {'tech' in entry && Array.isArray(entry.tech) && entry.tech.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 pt-0.5">
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

                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default AboutPage

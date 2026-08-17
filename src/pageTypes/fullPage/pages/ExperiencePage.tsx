import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import SectionProps from '../../../type/sectionType'
import { experience } from '../../../data/content'

type ExpType = 'internship' | 'research' | 'club'

const pillColor: Record<ExpType, string> = {
    internship: 'text-blue-300 bg-blue-500/10 border-blue-500/25',
    research:   'text-purple-300 bg-purple-500/10 border-purple-500/25',
    club:       'text-orange-300 bg-orange-500/10 border-orange-500/25',
}

const ExperiencePage: React.FC<SectionProps> = ({ headingRef }) => {
    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="w-full max-w-7xl mx-auto px-20 flex flex-col gap-10 py-20">

                {/* Section heading */}
                <div>
                    <span
                        className="font-mono text-xs text-devPink tracking-[0.2em] uppercase"
                        ref={headingRef}
                    >
                        Background
                    </span>
                    <h2 className="font-display font-black text-5xl text-white tracking-tight leading-none mt-1">
                        Experience
                    </h2>
                </div>

                {/* Entry list */}
                <div className="flex flex-col">
                    {experience.map((entry, i) => {
                        const isPresent = entry.period.includes('Present')
                        const t = entry.type as ExpType

                        return (
                            <motion.div
                                key={entry.company}
                                className="flex flex-row gap-16 py-10 border-t border-white/10 first:border-t-0 first:pt-0"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                                viewport={{ once: true, amount: 0.25 }}
                            >
                                {/* Left — period */}
                                <div className="w-40 shrink-0 pt-[5px] flex flex-col gap-2">
                                    {/* Pulsing dot for active roles */}
                                    {isPresent && (
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devPink opacity-60" />
                                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-devPink" />
                                        </span>
                                    )}
                                    <span className="font-mono text-[11px] text-devPink tracking-[0.08em] uppercase leading-relaxed">
                                        {entry.period}
                                    </span>
                                </div>

                                {/* Right — content */}
                                <div className="flex-1 flex flex-col gap-4">

                                    {/* Role · Company ↗ */}
                                    <div className="flex items-start gap-2.5">
                                        <h3 className="font-display font-bold text-[1.35rem] tracking-tight leading-snug">
                                            <span className="text-white">{entry.role}</span>
                                            <span className="text-devPink mx-2">·</span>
                                            <span className="text-devPink">{entry.company}</span>
                                        </h3>
                                        <FontAwesomeIcon
                                            icon={faArrowUpRightFromSquare}
                                            className="text-devPink/70 text-sm mt-[4px] shrink-0 hover:text-devPink transition-colors hovered"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col gap-2.5">
                                        {entry.bullets.map((bullet, j) => (
                                            <p
                                                key={j}
                                                className="text-devGrey text-sm font-display leading-relaxed"
                                            >
                                                {bullet}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Tech pills — type-colored */}
                                    {'tech' in entry && Array.isArray(entry.tech) && entry.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-1">
                                            {(entry.tech as string[]).map(tech => (
                                                <span
                                                    key={tech}
                                                    className={`text-xs font-mono rounded-full px-3 py-1 border ${pillColor[t]}`}
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
        </motion.div>
    )
}

export default ExperiencePage

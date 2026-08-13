import { motion } from 'framer-motion'
import SmSectionType from '../../../type/SmsectionType'
import { experience } from '../../../data/content'

type ExpType = 'internship' | 'research' | 'club'

const pillColor: Record<ExpType, string> = {
    internship: 'text-blue-300 bg-blue-500/10 border-blue-500/25',
    research:   'text-purple-300 bg-purple-500/10 border-purple-500/25',
    club:       'text-orange-300 bg-orange-500/10 border-orange-500/25',
}

const ExperiencePage: React.FC<SmSectionType> = ({ headingRef }) => {
    return (
        <div className="w-screen bg-background-primary px-5 py-16" ref={headingRef}>

            <div className="mb-10">
                <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase block mb-1">
                    Background
                </span>
                <h2 className="font-display font-black text-3xl text-white tracking-tight">
                    Experience
                </h2>
            </div>

            <div className="flex flex-col">
                {experience.map((entry, i) => {
                    const isPresent = entry.period.includes('Present')
                    const t = entry.type as ExpType

                    return (
                        <motion.div
                            key={entry.company}
                            className="flex flex-col gap-3 py-8 border-t border-white/10 first:border-t-0 first:pt-0"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            viewport={{ once: true }}
                        >
                            {/* Period + dot */}
                            <div className="flex items-center gap-2">
                                {isPresent && (
                                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-devPink opacity-60" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-devPink" />
                                    </span>
                                )}
                                <span className="font-mono text-[10px] text-devPink tracking-[0.08em] uppercase">
                                    {entry.period}
                                </span>
                            </div>

                            {/* Role · Company */}
                            <h3 className="font-display font-bold text-lg tracking-tight leading-snug">
                                <span className="text-white">{entry.role}</span>
                                <span className="text-devPink mx-1.5">·</span>
                                <span className="text-devPink">{entry.company}</span>
                            </h3>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                {entry.bullets.map((bullet, j) => (
                                    <p key={j} className="text-devGrey text-xs font-display leading-relaxed">
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
                        </motion.div>
                    )
                })}
            </div>

        </div>
    )
}

export default ExperiencePage

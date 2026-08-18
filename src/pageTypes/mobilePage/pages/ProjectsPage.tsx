import SmSectionType from "../../../type/SmsectionType"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faMobileAlt, faFlask, faLaptopCode, faMicrochip } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { projects } from "../../../data/projects"
import { typeColor, typeLabel, techLabel } from "../../../data/projectUtils"

type FilterType = 'all' | 'web' | 'mobile' | 'research' | 'systems'

const typeIcon: Record<string, React.ReactNode> = {
    web:      <FontAwesomeIcon icon={faLaptopCode} />,
    mobile:   <FontAwesomeIcon icon={faMobileAlt} />,
    research: <FontAwesomeIcon icon={faFlask} />,
    systems:  <FontAwesomeIcon icon={faMicrochip} />,
}

const FILTERS: { type: FilterType; label: string }[] = [
    { type: 'all',      label: 'All'      },
    { type: 'web',      label: 'Web'      },
    { type: 'systems',  label: 'Systems'  },
    { type: 'mobile',   label: 'Mobile'   },
    { type: 'research', label: 'Research' },
]

const ProjectsPage: React.FC<SmSectionType> = ({ headingRef }) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.type === activeFilter)

    return (
        <div className="w-screen min-h-[100dvh] bg-background-primary px-5 py-16" ref={headingRef}>

            {/* Header */}
            <div className="flex flex-row justify-between items-end mb-6">
                <div>
                    <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase block mb-1">
                        Selected Work
                    </span>
                    <h2 className="font-display font-black text-3xl text-white tracking-tight">Projects</h2>
                </div>
                <span className="font-mono text-[10px] text-devGrey/40 tracking-widest pb-1">
                    {filtered.length} projects
                </span>
            </div>

            {/* Filter pills */}
            <div className="themed-scroll mb-5 flex flex-row gap-2 overflow-x-auto pb-1">
                {FILTERS.map(({ type, label }) => (
                    <motion.button
                        key={type}
                        onClick={() => setActiveFilter(type)}
                        className={`flex-shrink-0 px-3.5 py-1.5 rounded-md font-mono text-[10px] tracking-[0.08em] transition-colors ${
                            activeFilter === type
                                ? 'bg-devPink text-white'
                                : 'bg-transparent text-devGrey border border-white/10'
                        }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        {label}
                    </motion.button>
                ))}
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                    {filtered.map((p, i) => (
                        <motion.div
                            layout
                            key={p.name}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                            className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-36 overflow-hidden bg-white/[0.03] flex-shrink-0">
                                <img
                                    src={`/${p.images[0]}`}
                                    alt={p.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-primary/90" />
                                <span className={`absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 ${typeColor[p.type]}`}>
                                    {typeIcon[p.type]}
                                    {typeLabel[p.type]}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-3 p-4">
                                <h3 className="font-display font-bold text-lg text-white tracking-tight leading-tight">
                                    {p.name}
                                </h3>
                                <p className="text-devGrey text-xs font-display leading-relaxed line-clamp-3">
                                    {p.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.technologies.map(t => (
                                        <span
                                            key={t}
                                            className="text-[10px] font-mono text-devGrey/70 px-2 py-0.5 bg-white/5 rounded border border-white/8"
                                        >
                                            {techLabel[t] ?? t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-2 border-t border-white/6">
                                    {p.github && (
                                        <a
                                            href={`https://${p.github}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-devGrey/60 text-xs font-mono"
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> Code
                                        </a>
                                    )}
                                    {p.website && (
                                        <a
                                            href={`https://${p.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-devGrey/60 text-xs font-mono"
                                        >
                                            <FontAwesomeIcon icon={faGlobe} /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProjectsPage

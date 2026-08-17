import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faFlask, faLaptopCode, faMicrochip, faXmark, faArrowUpRightFromSquare, faArrowRight, faChevronLeft, faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { projects, ProjectData } from "../../../data/projects"
import { typeColor, typeLabel, techLabel } from "../../../data/projectUtils"
import SectionProps from "../../../type/sectionType"

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

// Text-accent per project type (safelisted in tailwind.config.js)
const typeText: Record<string, string> = {
    web:      'text-blue-300',
    mobile:   'text-green-300',
    research: 'text-purple-300',
    systems:  'text-orange-300',
}

// ── Left list item ─────────────────────────────────────────────────────────────

interface ListItemProps {
    project: ProjectData
    selected: boolean
    onSelect: (p: ProjectData) => void
}

const ListItem: React.FC<ListItemProps> = ({ project: p, selected, onSelect }) => (
    <motion.button
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={() => onSelect(p)}
        className="group relative flex items-center gap-4 px-3 py-3 text-left hovered"
    >
        {/* Shared-layout highlight — glides to the active row */}
        {selected && (
            <motion.div
                layoutId="activeProject"
                className="absolute inset-0 rounded-xl bg-white/[0.045] ring-1 ring-inset ring-white/10"
                transition={{ type: 'spring', stiffness: 520, damping: 42 }}
            />
        )}

        {/* Thumbnail — muted greyscale until active/hovered */}
        <div className={`relative z-10 w-[68px] h-11 rounded-md overflow-hidden shrink-0 ring-1 transition-all duration-300 ${selected ? 'ring-white/20' : 'ring-white/[0.08]'}`}>
            <img
                src={`/${p.images[0]}`}
                alt={p.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    selected
                        ? 'opacity-90 grayscale-0 scale-100'
                        : 'opacity-40 grayscale scale-105 group-hover:opacity-70 group-hover:grayscale-0'
                }`}
            />
        </div>

        {/* Name + type */}
        <div className="relative z-10 flex flex-col gap-0.5 min-w-0">
            <h3 className={`font-display text-[15px] tracking-tight truncate transition-colors duration-200 ${
                selected ? 'text-white font-semibold' : 'text-white/50 font-medium group-hover:text-white/85'
            }`}>
                {p.name}
            </h3>
            <span className={`text-[10px] font-mono uppercase tracking-[0.16em] transition-opacity duration-200 ${typeText[p.type]} ${selected ? 'opacity-90' : 'opacity-45 group-hover:opacity-70'}`}>
                {typeLabel[p.type]}
            </span>
        </div>

        {/* Active marker */}
        <FontAwesomeIcon
            icon={faArrowRight}
            className={`relative z-10 ml-auto pl-2 text-[11px] text-devPink transition-all duration-200 ${selected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1.5'}`}
        />
    </motion.button>
)

// ── Right detail panel ──────────────────────────────────────────────────────────

const DetailPanel: React.FC<{ project: ProjectData }> = ({ project: p }) => {
    const [imgIdx, setImgIdx] = useState(0)
    const [videoExpanded, setVideoExpanded] = useState(false)

    useEffect(() => {
        if (!videoExpanded) return
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoExpanded(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [videoExpanded])

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-full w-full rounded-2xl border border-white/10 bg-[#090f16] overflow-hidden flex flex-col shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            >
                {/* Media — video (if available) or image carousel */}
                <div className="relative w-full aspect-[16/10] max-h-[clamp(220px,34vh,340px)] shrink-0 bg-[#05080f] flex flex-col overflow-hidden">
                    {p.video ? (
                        <div className="relative flex-1 overflow-hidden">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={`/${p.images[0]}`}
                                className="absolute inset-0 w-full h-full object-contain"
                            >
                                <source src={`/${p.video}`} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090f16]/60 pointer-events-none" />
                            <span className={`absolute top-5 left-5 text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 ${typeColor[p.type]}`}>
                                {typeIcon[p.type]}
                                {typeLabel[p.type]}
                            </span>
                            <button
                                onClick={() => setVideoExpanded(true)}
                                className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 hover:border-white/40 flex items-center justify-center transition-all hovered"
                            >
                                <FontAwesomeIcon icon={faExpand} className="text-white/70 text-[10px]" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="relative flex-1 overflow-hidden flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={p.images[imgIdx]}
                                        src={`/${p.images[imgIdx]}`}
                                        alt={`${p.name} ${imgIdx + 1}`}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        initial={{ opacity: 0, x: 16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -16 }}
                                        transition={{ duration: 0.22 }}
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090f16]/60 pointer-events-none" />
                                <span className={`absolute top-5 left-5 text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 ${typeColor[p.type]}`}>
                                    {typeIcon[p.type]}
                                    {typeLabel[p.type]}
                                </span>
                                {p.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setImgIdx(i => (i - 1 + p.images.length) % p.images.length)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 border border-white/15 flex items-center justify-center hover:bg-black/80 hover:border-white/40 transition-all hovered"
                                        >
                                            <FontAwesomeIcon icon={faChevronLeft} className="text-white text-[10px]" />
                                        </button>
                                        <button
                                            onClick={() => setImgIdx(i => (i + 1) % p.images.length)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 border border-white/15 flex items-center justify-center hover:bg-black/80 hover:border-white/40 transition-all hovered"
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} className="text-white text-[10px]" />
                                        </button>
                                    </>
                                )}
                            </div>
                            {p.images.length > 1 && (
                                <div className="flex justify-center gap-2 py-3 bg-[#05080f]">
                                    {p.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setImgIdx(i)}
                                            className={`rounded-full transition-all duration-200 hovered ${i === imgIdx ? 'w-5 h-1.5 bg-devPink' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="themed-scroll flex-1 flex flex-col px-8 py-7 gap-5 overflow-y-auto min-h-0">
                    <h2 className="font-display font-bold text-[2rem] text-white tracking-tight leading-tight">
                        {p.name}
                    </h2>

                    <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">About</span>
                        <p className="text-devGrey text-sm font-display leading-relaxed">
                            {p.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">Technologies</span>
                        <div className="flex flex-wrap gap-2">
                            {p.technologies.map(t => (
                                <span key={t} className="text-xs font-mono text-devGrey/80 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                                    {techLabel[t] ?? t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/8">
                        {p.github && (
                            <a
                                href={`https://${p.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border border-white/15 rounded-lg text-sm font-mono text-devGrey hover:text-white hover:border-white/30 transition-colors hovered"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                View Code
                            </a>
                        )}
                        {p.website && (
                            <a
                                href={`https://${p.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-devPink text-white rounded-lg text-sm font-mono hover:bg-devPurple transition-colors hovered"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                {p.type === 'research' ? 'Research Paper' : 'Live Demo'}
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Fullscreen video modal */}
            <AnimatePresence>
                {videoExpanded && p.video && (
                    <>
                        <motion.div
                            key="video-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="fixed inset-0 bg-black/88 z-50"
                            onClick={() => setVideoExpanded(false)}
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-10">
                            <motion.div
                                key="video-modal"
                                initial={{ scale: 0.92, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.92, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                                className="relative rounded-xl overflow-hidden pointer-events-auto shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                                style={{ maxWidth: '88vw', maxHeight: '88vh' }}
                            >
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={`/${p.images[0]}`}
                                    className="block w-full h-full object-contain rounded-xl"
                                    style={{ maxHeight: '88vh' }}
                                >
                                    <source src={`/${p.video}`} type="video/mp4" />
                                </video>
                                <button
                                    onClick={() => setVideoExpanded(false)}
                                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 flex items-center justify-center transition-colors hovered"
                                >
                                    <FontAwesomeIcon icon={faXmark} className="text-white/80 text-sm" />
                                </button>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

// ── Section ──────────────────────────────────────────────────────────────────

const ProjectsPage: React.FC<SectionProps> = ({ headingRef }) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')
    const [selected, setSelected] = useState<ProjectData>(projects[0])

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.type === activeFilter)

    // Keep a valid selection when the filter narrows the list
    useEffect(() => {
        if (!filtered.find(p => p.name === selected.name) && filtered[0]) {
            setSelected(filtered[0])
        }
    }, [activeFilter])

    return (
        <motion.div
            className="section w-screen h-[100dvh] bg-background-primary flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-20 py-16 h-full max-h-[960px] min-h-0">

                {/* Header + filters */}
                <div className="flex flex-row items-end justify-between shrink-0">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase" ref={headingRef}>
                            Selected Work
                        </span>
                        <h2 className="font-display font-black text-5xl text-white tracking-tight">
                            Projects
                        </h2>
                    </div>
                    <div className="flex flex-row items-center gap-3 pb-1">
                        {FILTERS.map(({ type, label }) => (
                            <motion.button
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`px-4 py-1.5 rounded-md font-mono text-xs tracking-[0.08em] transition-colors hovered ${
                                    activeFilter === type
                                        ? 'bg-devPink text-white'
                                        : 'bg-transparent text-devGrey border border-white/10 hover:border-white/30'
                                }`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                {label}
                                {type !== 'all' && (
                                    <span className="ml-1.5 opacity-50">
                                        {projects.filter(p => p.type === type).length}
                                    </span>
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Split: scrollable list (left) + detail (right) */}
                <div className="flex flex-row gap-8 flex-1 min-h-0">

                    {/* Left — scrollable project list */}
                    <div className="projects-list w-[36%] shrink-0 overflow-y-auto overscroll-contain pr-2 flex flex-col gap-0.5">
                        <AnimatePresence mode="popLayout">
                            {filtered.map(p => (
                                <ListItem
                                    key={p.name}
                                    project={p}
                                    selected={selected.name === p.name}
                                    onSelect={setSelected}
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Right — detail */}
                    <div className="flex-1 min-h-0 flex items-center">
                        <AnimatePresence mode="wait">
                            <DetailPanel key={selected.name} project={selected} />
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default ProjectsPage

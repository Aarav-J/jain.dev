import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faFlask, faLaptopCode, faMicrochip, faXmark, faArrowUpRightFromSquare, faChevronLeft, faChevronRight, faExpand } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../../components/Navbar';
import Cursor from '../../../components/Cursor';
import { projects, ProjectData } from '../../../data/projects';
import { typeColor, typeLabel, techLabel } from '../../../data/projectUtils';

type FilterType = 'all' | 'web' | 'mobile' | 'research' | 'systems';

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

// ── Card ─────────────────────────────────────────────────────────────────────

interface CardProps {
    project: ProjectData;
    index: number;
    onExpand: (project: ProjectData, e: React.MouseEvent<HTMLDivElement>) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project: p, index: i, onExpand }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, delay: i * 0.03 }}
        onClick={(e) => onExpand(p, e)}
        className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] flex flex-col hovered"
        whileHover={{ y: -3, borderColor: 'rgba(197,23,241,0.28)' }}
    >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-white/[0.03] flex-shrink-0">
            <img
                src={`/${p.images[0]}`}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-62 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-primary/90" />
            <span className={`absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 ${typeColor[p.type]}`}>
                {typeIcon[p.type]}
                {typeLabel[p.type]}
            </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
            <h3 className="font-display font-bold text-xl text-white tracking-tight leading-tight">
                {p.name}
            </h3>
            <p className="text-devGrey text-sm font-display leading-relaxed line-clamp-2 flex-1">
                {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 4).map(t => (
                    <span key={t} className="text-[10px] font-mono text-devGrey/60 px-2 py-0.5 bg-white/5 rounded border border-white/8">
                        {techLabel[t] ?? t}
                    </span>
                ))}
                {p.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-devGrey/40 px-2 py-0.5">
                        +{p.technologies.length - 4}
                    </span>
                )}
            </div>
        </div>
    </motion.div>
)

// ── Expanded overlay ──────────────────────────────────────────────────────────

interface ExpandedProps {
    project: ProjectData;
    origin: { x: number; y: number };
    onClose: () => void;
}

const ExpandedOverlay: React.FC<ExpandedProps> = ({ project: p, origin, onClose }) => {
    const [imgIdx, setImgIdx] = useState(0);
    const [videoExpanded, setVideoExpanded] = useState(false);
    useEffect(() => { setImgIdx(0); setVideoExpanded(false); }, [p.name]);
    useEffect(() => {
        if (!videoExpanded) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setVideoExpanded(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [videoExpanded]);
    return (
    <>
        {/* Backdrop */}
        <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-background-primary/70 backdrop-blur-[3px] z-20"
            onClick={onClose}
        />

        {/* Centered container — pointer-events-none so backdrop click-through works */}
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none px-12">
            <motion.div
                key={p.name}
                initial={{ scale: 0.18, x: origin.x, y: origin.y, opacity: 0 }}
                animate={{ scale: 1,    x: 0,        y: 0,        opacity: 1 }}
                exit={{    scale: 0.18, x: origin.x, y: origin.y, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                className="w-full max-w-4xl bg-[#090f16] rounded-2xl border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-row pointer-events-auto"
                style={{ maxHeight: '78vh' }}
            >
                {/* Left — video (if available) or image carousel */}
                <div className="relative w-[42%] flex-shrink-0 bg-[#05080f] flex flex-col overflow-hidden">
                    {p.video ? (
                        /* Video — mounts here, unmounts when overlay closes */
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
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#090f16]/60 pointer-events-none" />
                            <span className={`absolute top-5 left-5 text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1.5 ${typeColor[p.type]}`}>
                                {typeIcon[p.type]}
                                {typeLabel[p.type]}
                            </span>
                            {/* Expand to fullscreen */}
                            <button
                                onClick={() => setVideoExpanded(true)}
                                className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 hover:border-white/40 flex items-center justify-center transition-all hovered"
                            >
                                <FontAwesomeIcon icon={faExpand} className="text-white/70 text-[10px]" />
                            </button>
                        </div>
                    ) : (
                        /* Image carousel — unchanged */
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
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#090f16]/60 pointer-events-none" />
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

                {/* Right — content */}
                <div className="flex-1 flex flex-col px-8 py-7 gap-5 overflow-y-auto min-h-0 relative">

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-7 h-7 rounded-full bg-white/8 hover:bg-white/16 border border-white/10 flex items-center justify-center transition-colors hovered"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-white/60 text-[11px]" />
                    </button>

                    {/* Name */}
                    <h2 className="font-display font-bold text-[2rem] text-white tracking-tight leading-tight pr-10">
                        {p.name}
                    </h2>

                    {/* Description */}
                    <div className="flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">About</span>
                        <p className="text-devGrey text-sm font-display leading-relaxed">
                            {p.description}
                        </p>
                    </div>

                    {/* Tech */}
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

                    {/* Links — always at bottom */}
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
                                Live Demo
                            </a>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
        {/* Fullscreen video modal — z-50, above the overlay */}
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
    );
}

// ── Page ─────────────────────────────────────────────────────────────────────

const SpecificProjects = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all')
    const [expanded, setExpanded]         = useState<ProjectData | null>(null)
    const [origin, setOrigin]             = useState({ x: 0, y: 0 })

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.type === activeFilter)

    // ESC to close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpanded(null) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    // Close if filtered project disappears
    useEffect(() => {
        if (expanded && !filtered.find(p => p.name === expanded.name)) setExpanded(null)
    }, [activeFilter])

    const handleExpand = (project: ProjectData, e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setOrigin({
            x: (rect.left + rect.width  / 2) - window.innerWidth  / 2,
            y: (rect.top  + rect.height / 2) - window.innerHeight / 2,
        })
        setExpanded(project)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-screen min-h-screen bg-background-primary flex flex-col"
        >
            <Navbar />

            <div className="pt-24 pb-16 px-16 flex flex-col gap-8 max-w-7xl w-full mx-auto">

                {/* Header */}
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase">All Work</span>
                        <h1 className="font-display font-black text-5xl text-white tracking-tight">Projects</h1>
                    </div>
                    <span className="font-mono text-xs text-devGrey/40 tracking-widest">
                        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {/* Filter bar */}
                <div className="flex flex-row gap-2">
                    {FILTERS.map(({ type, label }) => (
                        <motion.button
                            key={type}
                            onClick={() => setActiveFilter(type)}
                            className={`px-4 py-1.5 rounded-md font-mono text-xs tracking-[0.08em] transition-colors ${
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

                {/* Grid */}
                <motion.div layout className="grid grid-cols-3 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <ProjectCard
                                key={p.name}
                                project={p}
                                index={i}
                                onExpand={handleExpand}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* Zoom overlay */}
            <AnimatePresence>
                {expanded && (
                    <ExpandedOverlay
                        key={expanded.name}
                        project={expanded}
                        origin={origin}
                        onClose={() => setExpanded(null)}
                    />
                )}
            </AnimatePresence>

            <Cursor />
        </motion.div>
    )
}

export default SpecificProjects;

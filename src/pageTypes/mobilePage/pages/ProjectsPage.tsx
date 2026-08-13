import SmSectionType from "../../../type/SmsectionType"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { projects } from "../../../data/projects"
import { typeColor, typeLabel } from "../../../data/projectUtils"

// FinalThird (web+ML), AaRTOS (systems), Truth Decay (research) — type diversity
const featured = [projects[3], projects[0], projects[2]]

const ProjectsPage: React.FC<SmSectionType> = ({ headingRef }) => {
    const navigate = useNavigate()

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
                <motion.button
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-1.5 text-devGrey font-mono text-[10px] tracking-[0.1em] uppercase border border-white/10 rounded px-3 py-1.5"
                    whileTap={{ scale: 0.95 }}
                >
                    All <FontAwesomeIcon icon={faArrowRight} className="text-[9px]" />
                </motion.button>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3">
                {featured.map((project, i) => (
                    <motion.div
                        key={project.name}
                        className="relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] flex flex-col"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/projects')}
                    >
                        {/* Slim image strip */}
                        <div className="relative h-24 overflow-hidden bg-white/[0.03]">
                            <img
                                src={`/${project.images[0]}`}
                                alt={project.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-primary/80" />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-display font-bold text-base text-white">{project.name}</h3>
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${typeColor[project.type]}`}>
                                    {typeLabel[project.type]}
                                </span>
                            </div>
                            <p className="text-devGrey text-xs font-display leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex gap-3 mt-0.5">
                                {project.github && (
                                    <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}>
                                        <FontAwesomeIcon icon={faGithub} className="text-devGrey/60 text-sm" />
                                    </a>
                                )}
                                {project.website && (
                                    <a href={`https://${project.website}`} target="_blank" rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}>
                                        <FontAwesomeIcon icon={faGlobe} className="text-devGrey/60 text-sm" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage

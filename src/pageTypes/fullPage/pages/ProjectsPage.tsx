import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { projects, ProjectData } from "../../../data/projects"
import { typeColor, typeLabel } from "../../../data/projectUtils"
import SectionProps from "../../../type/sectionType"

interface FeaturedEntry {
    project: ProjectData
    hook: string
}

// Each entry is curated — stat pulled from the project description, hook is a tight 1-liner
const featured: FeaturedEntry[] = [
    {
        project: projects[3],
        hook: "3,000+ matches · 10M+ events · 5 leagues · BiLSTM + Gradient Boosting",
    },
    {
        project: projects[0],
        hook: "Preemptive RTOS kernel · bare-metal STM32F4 · C + ARM Assembly",
    },
    {
        project: projects[4],
        hook: "Published · NAACL 2025 Student Research Workshop",
    },
]

const ProjectsPage: React.FC<SectionProps> = ({ headingRef }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto px-20">

                {/* Header — no CTA here, it lives below the grid */}
                <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase" ref={headingRef}>
                        Selected Work
                    </span>
                    <h2 className="font-display font-black text-5xl text-white tracking-tight">
                        Projects
                    </h2>
                </div>

                {/* Bento: 1 large (left 2 cols × 2 rows) + 2 small (right col) */}
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[440px]">

                    {/* Large editorial card */}
                    <motion.div
                        className="col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] flex flex-col justify-end group hovered"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ borderColor: "rgba(197,23,241,0.3)" }}
                        onClick={() => navigate('/projects')}
                    >
                        <img
                            src={`/${featured[0].project.images[0]}`}
                            alt={featured[0].project.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-38 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/60 to-transparent" />

                        <div className="relative z-10 p-6 flex flex-col gap-3">
                            <span className={`self-start text-[10px] font-mono px-2 py-0.5 rounded border ${typeColor[featured[0].project.type]}`}>
                                {typeLabel[featured[0].project.type]}
                            </span>


                            <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                                {featured[0].project.name}
                            </h3>
                            <p className="text-devGrey/60 text-[11px] font-mono leading-relaxed">
                                {featured[0].hook}
                            </p>
                        </div>
                    </motion.div>

                    {/* Small minimal cards */}
                    {featured.slice(1).map((entry, i) => (
                        <motion.div
                            key={entry.project.name}
                            className="col-span-1 row-span-1 relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] flex flex-col justify-end group hovered"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ borderColor: "rgba(197,23,241,0.3)" }}
                            onClick={() => navigate('/projects')}
                        >
                            <img
                                src={`/${entry.project.images[0]}`}
                                alt={entry.project.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-28 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/75 to-transparent" />

                            <div className="relative z-10 p-4 flex flex-col gap-1.5">
                                <span className={`self-start text-[10px] font-mono px-1.5 py-0.5 rounded border ${typeColor[entry.project.type]}`}>
                                    {typeLabel[entry.project.type]}
                                </span>


                                <h3 className="font-display font-bold text-base text-white tracking-tight leading-tight">
                                    {entry.project.name}
                                </h3>
                                <p className="text-devGrey/60 text-[9px] font-mono leading-relaxed line-clamp-2">
                                    {entry.hook}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* CTA — below the grid, centered */}
                <motion.button
                    onClick={() => navigate('/projects')}
                    className="self-center flex items-center gap-2 text-devGrey font-mono text-xs tracking-[0.15em] uppercase border border-white/10 rounded-md px-6 py-2.5 hovered"
                    whileHover={{ borderColor: "rgba(255,255,255,0.25)", color: "#EEDAEA" }}
                    transition={{ duration: 0.18 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    View all {projects.length} projects
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </motion.button>

            </div>
        </motion.div>
    )
}

export default ProjectsPage

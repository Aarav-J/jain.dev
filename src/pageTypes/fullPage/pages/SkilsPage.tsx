import { motion } from "framer-motion"
import SectionProps from "../../../type/sectionType"
import { skills } from "../../../data/content"

const groups = [
    {
        label: "Languages",
        items: skills.languages,
        accent: "text-fuchsia-300/80 bg-fuchsia-500/[0.06] border-fuchsia-500/20 hover:border-fuchsia-500/50 hover:text-fuchsia-300",
    },
    {
        label: "Frameworks & Libraries",
        items: skills.frameworks,
        accent: "text-blue-300/80 bg-blue-500/[0.06] border-blue-500/20 hover:border-blue-500/50 hover:text-blue-300",
    },
    {
        label: "Tools & Platforms",
        items: skills.tools,
        accent: "text-orange-300/80 bg-orange-500/[0.06] border-orange-500/20 hover:border-orange-500/50 hover:text-orange-300",
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
}

const rowVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const pillVariants = {
    hidden:  { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.22 } },
}

const SkilsPage: React.FC<SectionProps> = ({ headingRef }) => {
    const total = groups.reduce((sum, g) => sum + g.items.length, 0)

    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-row w-full max-w-7xl mx-auto px-20 gap-20 items-start">

                {/* Left — heading */}
                <div className="flex flex-col gap-3 w-64 shrink-0 pt-10">
                    <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase" ref={headingRef}>
                        Stack
                    </span>
                    <h2 className="font-display font-black text-5xl text-white tracking-tight leading-none">
                        Skills
                    </h2>
                    <p className="text-devGrey text-sm font-display font-light leading-relaxed mt-1">
                        Things I know well enough to be dangerous with.
                    </p>
                    <span className="font-mono text-[10px] text-devGrey/30 tracking-widest mt-2">
                        {total} technologies
                    </span>
                </div>

                {/* Right — grouped pills */}
                <motion.div
                    className="flex flex-col flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {groups.map((group, gi) => (
                        <motion.div
                            key={group.label}
                            className={`flex flex-col gap-4 py-8 ${gi !== 0 ? "border-t border-white/[0.06]" : ""}`}
                            variants={rowVariants}
                        >
                            <span className="font-mono text-[10px] text-devGrey/40 tracking-[0.2em] uppercase">
                                {group.label}
                            </span>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={containerVariants}
                            >
                                {group.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={pillVariants}
                                        className={`px-3 py-1.5 border rounded-md font-mono text-sm transition-colors duration-200 ${group.accent}`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    )
}

export default SkilsPage

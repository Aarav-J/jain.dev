import { motion } from "framer-motion"
import SectionProps from "../../../type/sectionType"
import { skills } from "../../../data/content"

const groups = [
    { label: "Languages",            items: skills.languages },
    { label: "Frameworks & Libraries", items: skills.frameworks },
    { label: "Tools & Platforms",    items: skills.tools },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const rowVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const SkilsPage: React.FC<SectionProps> = ({ headingRef }) => {
    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-row w-full px-20 gap-20 items-start">

                {/* Left — heading */}
                <div className="flex flex-col gap-3 w-64 shrink-0 pt-1">
                    <span className="font-mono text-xs text-devPink tracking-[0.2em] uppercase" ref={headingRef}>
                        Stack
                    </span>
                    <h2 className="font-display font-black text-5xl text-white tracking-tight leading-none">
                        Skills
                    </h2>
                    <p className="text-devGrey text-sm font-display font-light leading-relaxed mt-1">
                        Things I know well enough to be dangerous with.
                    </p>
                </div>

                {/* Right — grouped pills */}
                <motion.div
                    className="flex flex-col gap-10 flex-1"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {groups.map((group) => (
                        <motion.div key={group.label} className="flex flex-col gap-3" variants={rowVariants}>
                            <span className="font-mono text-[10px] text-devGrey/50 tracking-[0.2em] uppercase">
                                {group.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-md text-devGrey font-mono text-sm hover:border-devPink/40 hover:text-white transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    )
}

export default SkilsPage

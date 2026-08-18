import { motion } from "framer-motion"
import SmSectionType from "../../../type/SmsectionType"
import { skills } from "../../../data/content"

const groups = [
    { label: "Languages",  items: skills.languages },
    { label: "Frameworks", items: skills.frameworks },
    { label: "Tools",      items: skills.tools },
]

const SkillsPage: React.FC<SmSectionType> = ({ headingRef }) => {
    return (
        <div className="w-screen min-h-[100dvh] bg-background-primary px-5 py-16" ref={headingRef}>
            <div className="flex flex-col gap-2 mb-8">
                <span className="font-mono text-[10px] text-devPink tracking-[0.2em] uppercase">Stack</span>
                <h2 className="font-display font-black text-3xl text-white tracking-tight">Skills</h2>
                <p className="text-devGrey text-sm font-display font-light mt-1">
                    Skills I've acquired through the years
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {groups.map((group, gi) => (
                    <motion.div
                        key={group.label}
                        className="flex flex-col gap-2.5"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: gi * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-mono text-[9px] text-devGrey/50 tracking-[0.18em] uppercase">
                            {group.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-md text-devGrey font-mono text-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPage

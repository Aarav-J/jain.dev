import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { person, hero } from "../../../data/content"
import AsciiObject from "../../../components/AsciiObject"

type LandingPageProps = {
    headingRef: React.RefObject<HTMLDivElement>
    projectRef: React.RefObject<HTMLDivElement>
}

const LandingPage: React.FC<LandingPageProps> = ({ headingRef, projectRef }) => {
    const scrollTo = (section: React.RefObject<HTMLDivElement>) => {
        section.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative w-screen min-h-[100dvh] bg-background-primary flex flex-col justify-end overflow-hidden px-6 pt-24 pb-16" ref={headingRef}>

            {/* Decorative ASCII sunflower — auto-rotates, non-interactive so it never blocks page scroll */}
            <div className="pointer-events-none absolute inset-x-0 top-12 flex justify-center">
                <div className="w-[118%] max-w-[540px] aspect-square opacity-95">
                    <AsciiObject
                        src="/sunflower/scene.gltf"
                        colored={false}
                        color="#C517F1"
                        highlight="#C517F1"
                        background=""
                        cellSize={4}
                        charset="@%#*+=-:·. "
                        edgeContrast={4}
                        contrast={1.8}
                        autoRotate
                        autoRotateSpeed={1.0}
                        orbit={false}
                        minAzimuthAngle={-Math.PI * 0.3}
                        maxAzimuthAngle={Math.PI * 0.3}
                        zoom={false}
                        floatIntensity={1.2}
                        rotationIntensity={0.6}
                        scale={8}
                        cameraDistance={10}
                        initialPolarAngle={1.34083}
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="relative z-10 flex flex-col gap-6 w-full">

                <motion.span
                    className="font-mono text-[10px] text-devGrey tracking-[0.22em] uppercase"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {hero.eyebrow}
                </motion.span>

                <motion.h1
                    className="font-display font-black text-[4.5rem] leading-[0.9] tracking-tighter text-white"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {person.displayName.split('\n').map((line, i, arr) => (
                        <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                </motion.h1>

                {/* <motion.p
                    className="text-devGrey text-base font-display font-light leading-relaxed max-w-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    {hero.pitch}
                </motion.p> */}

                <motion.div
                    className="flex flex-col gap-3 mt-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <button
                        onClick={() => scrollTo(projectRef)}
                        className="w-full py-3 bg-devPink text-white font-display font-semibold text-sm rounded-md"
                    >
                        View Projects
                    </button>
                    <a
                        href={person.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-white/20 text-devGrey font-display font-semibold text-sm rounded-md flex items-center justify-center gap-2"
                    >
                        Resume
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                    </a>
                </motion.div>

            </div>
        </div>
    )
}

export default LandingPage

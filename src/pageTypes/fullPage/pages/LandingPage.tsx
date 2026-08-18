import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { person, hero } from "../../../data/content"
import AsciiObject from "../../../components/AsciiObject"

type LandingProps = {
    headingRef: React.RefObject<HTMLHeadingElement>;
    learnMoreRef: React.RefObject<HTMLDivElement>;
    scroll: (section: React.RefObject<HTMLDivElement>) => void;
}

const LandingPage: React.FC<LandingProps> = ({ headingRef, learnMoreRef, scroll }) => {
    return (
        <motion.div
            className="section w-screen min-h-[100dvh] bg-background-primary flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex flex-row w-full items-stretch justify-between px-20">

                {/* Left — content */}
                <div className="flex flex-col gap-6 shrink-0">
                    <motion.span
                        className="font-mono text-xs text-devGrey tracking-[0.22em] uppercase"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {hero.eyebrow}
                    </motion.span>

                    <motion.h1
                        ref={headingRef}
                        className="font-display font-black text-[10rem] leading-[0.88] tracking-tighter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {person.displayName.split('\n').map((line, i) => (
                            <span key={i}>{line}{i < person.displayName.split('\n').length - 1 && <br />}</span>
                        ))}
                    </motion.h1>

                    {/* <motion.p
                        className="text-devGrey text-lg font-display font-light max-w-xs leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        {hero.pitch}
                    </motion.p> */}

                    <motion.div
                        className="flex flex-row gap-3 mt-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <motion.button
                            onClick={() => scroll(learnMoreRef)}
                            className="px-6 py-2.5 bg-devPink text-white font-display font-semibold text-sm rounded-md hovered"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            View Projects
                        </motion.button>

                        <motion.a
                            href={person.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 border border-white/20 text-devGrey font-display font-semibold text-sm rounded-md hovered flex items-center gap-2"
                            whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            Resume
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right — ASCII goat */}
                <motion.div
                    className="w-[780px] shrink-0 -mr-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
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
                        autoRotateSpeed={1.2}
                        minAzimuthAngle={-Math.PI * 0.3}
                        maxAzimuthAngle={Math.PI * 0.3}
                        orbit
                        zoom={false}
                        floatIntensity={1.2}
                        rotationIntensity={0.6}
                        scale={9}
                        xOffset={0}
                        cameraDistance={8.50}
                        initialAzimuthAngle={0.0508}
                        initialPolarAngle={1.34083}
                        className="w-full h-full"
                    />
                </motion.div>

            </div>
        </motion.div>
    )
}

export default LandingPage

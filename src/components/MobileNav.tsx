import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { person } from "../data/content";

type NavLink = { id: string; label: string };

const links: NavLink[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
];

const labelById: Record<string, string> = {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
};

interface MobileNavProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeSection, onNavigate }) => {
    const [open, setOpen] = useState(false);

    // lock body scroll while the drawer is open
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = open ? "hidden" : prev;
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const go = (id: string) => {
        setOpen(false);
        onNavigate(id);
    };

    const line = "block h-0.5 w-6 rounded-full bg-white transition-transform duration-300 ease";

    return (
        <>
            {/* Top bar */}
            <div
                className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between
                    border-b border-white/10 bg-background-primary/80 px-5 backdrop-blur-md"
            >
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-devPink" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-devGrey">
                        {labelById[activeSection] ?? "Home"}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
                >
                    <span className={`${line} ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`${line} ${open ? "opacity-0" : "opacity-100"}`} />
                    <span className={`${line} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {/* Drawer + backdrop */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.aside
                            className="fixed top-0 right-0 z-50 flex h-[100dvh] w-[80%] max-w-sm flex-col
                                justify-between border-l border-white/10 bg-background-primary/95 backdrop-blur-xl px-7 pt-24 pb-10"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 320, damping: 34 }}
                        >
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                                className="absolute top-4 right-6 flex h-10 w-10 items-center justify-center
                                    text-devGrey transition-colors hover:text-white"
                            >
                                <FontAwesomeIcon icon={faXmark} className="text-2xl" />
                            </button>

                            <nav className="flex flex-col gap-6">
                                {links.map((link, i) => {
                                    const active = activeSection === link.id;
                                    return (
                                        <motion.button
                                            key={link.id}
                                            type="button"
                                            onClick={() => go(link.id)}
                                            aria-current={active ? "true" : undefined}
                                            className="group flex items-baseline gap-3 text-left"
                                            initial={{ opacity: 0, x: 24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.12 + i * 0.06 }}
                                        >
                                            <span className="font-mono text-[11px] text-devGrey/40">
                                                0{i + 1}
                                            </span>
                                            <span
                                                className={`font-display text-4xl font-black tracking-tight transition-colors
                                                    ${active ? "text-devPink" : "text-white"}`}
                                            >
                                                {link.label}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            <div className="flex flex-col gap-5">
                                <a
                                    href={person.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-md border border-white/15
                                        py-3 font-display text-sm font-semibold text-devGrey"
                                >
                                    Resume
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                                </a>
                                <div className="flex items-center gap-6 text-devGrey">
                                    <a href={person.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                                    </a>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                                    </a>
                                    <a href={`mailto:${person.email}`} aria-label="Email">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileNav;

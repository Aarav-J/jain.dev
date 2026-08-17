import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLayerGroup, faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NavItem = { id: string; icon: IconDefinition; label: string };

const items: NavItem[] = [
    { id: "home", icon: faHome, label: "Home" },
    { id: "projects", icon: faLayerGroup, label: "Projects" },
    { id: "skills", icon: faCode, label: "Skills" },
    { id: "about", icon: faUser, label: "About" },
];

interface BottomNavProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
    return (
        <motion.nav
            aria-label="Section navigation"
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10
                bg-background-primary/85 backdrop-blur-md"
            style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 26 }}
        >
            <div className="flex items-stretch justify-around px-2 pt-2">
                {items.map((item) => {
                    const active = activeSection === item.id;
                    return (
                        <motion.button
                            key={item.id}
                            type="button"
                            onClick={() => onNavigate(item.id)}
                            aria-label={item.label}
                            aria-current={active ? "true" : undefined}
                            className={`relative flex flex-1 flex-col items-center gap-1 rounded-lg py-2
                                transition-colors duration-200
                                ${active ? "text-devPink" : "text-devGrey"}`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {active && (
                                <motion.span
                                    layoutId="bottomNavActive"
                                    className="absolute top-0 h-0.5 w-7 rounded-full bg-devPink"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <FontAwesomeIcon icon={item.icon} className="text-lg" />
                            <span className="font-mono text-[10px] tracking-wide">{item.label}</span>
                        </motion.button>
                    );
                })}
            </div>
        </motion.nav>
    );
};

export default BottomNav;

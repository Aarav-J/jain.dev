import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faCog, faUser } from "@fortawesome/free-solid-svg-icons";

interface BottomNavProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
    const items = [
        { id: "home", icon: faHome, label: "Home" },
        { id: "projects", icon: faCode, label: "Projects" },
        { id: "skills", icon: faCog, label: "Skills" },
        { id: "about", icon: faUser, label: "About" },
    ];

    return (
        <motion.div 
            className="fixed bottom-0 left-0 right-0 z-40 bg-background-primary/90 backdrop-blur-md
                border-t border-devGrey/20 px-4 py-2 pb-safe"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
            <div className="flex justify-around items-center">
                {items.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition
                            ${activeSection === item.id ? 'text-devPink' : 'text-devGrey'}`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-xl" />
                        <span className="text-xs font-mono">{item.label}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default BottomNav;
